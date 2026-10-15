#!/usr/bin/env node
// Validates the JSON-LD emitted into the built HTML.
// - Parses every <script type="application/ld+json"> block in every generated
//   page under .next/server/pages.
// - Fails on: invalid JSON, duplicate @id nodes, unresolved @id references,
//   Review/AggregateRating markup, missing required properties, and missing
//   required types on the pages that must have them.
//
// Usage:
//   node scripts/validate-schema.js            # skip (exit 0) if no build yet
//   node scripts/validate-schema.js --require  # fail if no build (postbuild)
const fs = require("fs");
const path = require("path");

const REQUIRE = process.argv.includes("--require");

const BUILD_DIR = path.join(process.cwd(), ".next", "server", "pages");

const CITY_SLUGS = new Set([
  "beamsville",
  "crystal-beach",
  "fonthill",
  "fort-erie",
  "grimsby",
  "niagara-on-the-lake",
  "port-colborne",
  "thorold",
  "welland",
]);

const REQUIRED_PROPS = {
  Organization: ["name", "url"],
  WebSite: ["url", "name"],
  WebPage: ["name", "url"],
  AboutPage: ["name", "url"],
  ContactPage: ["name", "url"],
  CollectionPage: ["name", "url"],
  BlogPosting: ["headline", "datePublished", "author"],
  BreadcrumbList: ["itemListElement"],
  Service: ["name", "provider"],
  FAQPage: ["mainEntity"],
};

function walkHtml(dir, out) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkHtml(full, out);
    } else if (entry.name.endsWith(".html")) {
      out.push(full);
    }
  }
  return out;
}

function urlFromFile(file) {
  let rel = path.relative(BUILD_DIR, file).replace(/\\/g, "/");
  rel = rel.replace(/\.html$/, "");
  if (rel === "index") return "/";
  if (rel.endsWith("/index")) rel = rel.slice(0, -"/index".length);
  return "/" + rel;
}

function extractBlocks(html) {
  const re = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  const blocks = [];
  let m;
  while ((m = re.exec(html)) !== null) blocks.push(m[1]);
  return blocks;
}

function asArray(v) {
  return Array.isArray(v) ? v : [v];
}

function typeList(node) {
  const t = node && node["@type"];
  return t ? asArray(t) : [];
}

function hasType(typed, type) {
  return typed.some((n) => typeList(n).includes(type));
}

// Collect every object with @type and every object with @id.
function collect(parsedDocs) {
  const typed = [];
  const idObjs = [];
  const visit = (obj) => {
    if (Array.isArray(obj)) {
      obj.forEach(visit);
      return;
    }
    if (obj && typeof obj === "object") {
      if (obj["@type"]) typed.push(obj);
      if (obj["@id"]) idObjs.push(obj);
      for (const v of Object.values(obj)) visit(v);
    }
  };
  for (const doc of parsedDocs) visit(doc);
  return { typed, idObjs };
}

function expectedTypesFor(url) {
  if (url === "/") return ["Organization", "WebSite"];
  if (url === "/about") return ["AboutPage"];
  if (url === "/get-a-quote") return ["ContactPage"];
  if (/^\/posts\/[^/]+$/.test(url)) return ["BlogPosting"];
  const m = url.match(/^\/seo\/([^/]+)$/);
  if (m && CITY_SLUGS.has(m[1])) {
    return ["Service", "BreadcrumbList", "FAQPage"];
  }
  return null;
}

function validate(url, html) {
  const errors = [];
  const blocks = extractBlocks(html);
  if (!blocks.length) {
    const expected = expectedTypesFor(url);
    if (expected) {
      errors.push(`no JSON-LD found but expected: ${expected.join(", ")}`);
    }
    return errors;
  }

  const parsedDocs = [];
  blocks.forEach((raw, i) => {
    try {
      parsedDocs.push(JSON.parse(raw));
    } catch (e) {
      errors.push(`block ${i + 1}: invalid JSON (${e.message})`);
    }
  });
  if (errors.length) return errors;

  const { typed, idObjs } = collect(parsedDocs);

  // Forbidden markup.
  for (const n of typed) {
    const types = typeList(n);
    if (types.includes("Review") || types.includes("AggregateRating")) {
      errors.push(`forbidden ${types.join("/")} markup`);
    }
  }

  // Define / reference resolution.
  const defCounts = {};
  const refs = [];
  for (const o of idObjs) {
    const keys = Object.keys(o);
    const isRef = !o["@type"] && keys.length === 1 && keys[0] === "@id";
    if (isRef) refs.push(o["@id"]);
    else defCounts[o["@id"]] = (defCounts[o["@id"]] || 0) + 1;
  }
  for (const [id, n] of Object.entries(defCounts)) {
    if (n > 1) errors.push(`duplicate @id defined ${n} times: ${id}`);
  }
  for (const id of refs) {
    if (!defCounts[id]) errors.push(`unresolved @id reference: ${id}`);
  }

  // Required properties per type.
  for (const n of typed) {
    for (const t of typeList(n)) {
      const props = REQUIRED_PROPS[t];
      if (!props) continue;
      for (const p of props) {
        const v = n[p];
        const empty =
          v === undefined ||
          v === null ||
          v === "" ||
          (Array.isArray(v) && v.length === 0);
        if (empty) errors.push(`${t} missing required property "${p}"`);
      }
    }
    if (typeList(n).includes("FAQPage")) {
      const main = asArray(n.mainEntity || []);
      main.forEach((q, i) => {
        if (!q || !q.name)
          errors.push(`FAQPage question ${i + 1} missing name`);
        const ans = q && q.acceptedAnswer;
        if (!ans || !ans.text) {
          errors.push(`FAQPage question ${i + 1} missing acceptedAnswer.text`);
        }
      });
    }
  }

  // Required types per URL.
  const expected = expectedTypesFor(url);
  if (expected) {
    for (const t of expected) {
      if (!hasType(typed, t)) errors.push(`missing required type: ${t}`);
    }
  }

  // Generic rules.
  const hasOrg = hasType(typed, "Organization");
  if (hasType(typed, "Service") && !hasOrg) {
    errors.push("Service present but no Organization node defined");
  }
  if (hasType(typed, "Service") && !hasType(typed, "BreadcrumbList")) {
    errors.push("Service present but no BreadcrumbList");
  }
  if (hasType(typed, "WebSite") && !hasOrg) {
    errors.push("WebSite present but no Organization node defined");
  }
  const webPageTypes = [
    "WebPage",
    "AboutPage",
    "ContactPage",
    "CollectionPage",
    "BlogPosting",
  ];
  if (typed.some((n) => typeList(n).some((t) => webPageTypes.includes(t)))) {
    if (!hasOrg)
      errors.push("page-type node present but no Organization defined");
  }

  return errors;
}

function main() {
  if (!fs.existsSync(BUILD_DIR)) {
    if (REQUIRE) {
      console.error(`FATAL: build directory not found: ${BUILD_DIR}`);
      process.exit(1);
    }
    console.log("Schema validation skipped (no build found).");
    return;
  }

  const files = walkHtml(BUILD_DIR, []).filter((f) => {
    const base = path.basename(f);
    return !base.startsWith("_");
  });

  if (!files.length) {
    if (REQUIRE) {
      console.error("FATAL: no HTML pages found in build.");
      process.exit(1);
    }
    console.log("Schema validation skipped (no HTML pages).");
    return;
  }

  let checked = 0;
  let withSchema = 0;
  const failures = [];

  for (const file of files) {
    const url = urlFromFile(file);
    const html = fs.readFileSync(file, "utf8");
    const errors = validate(url, html);
    checked++;
    if (extractBlocks(html).length) withSchema++;
    if (errors.length) failures.push({ url, errors });
  }

  console.log("Schema validation");
  console.log("-----------------");
  console.log(`Pages checked    : ${checked}`);
  console.log(`Pages with JSON-LD: ${withSchema}`);
  console.log(`Failures         : ${failures.length}`);
  for (const f of failures) {
    console.log(`  ! ${f.url}`);
    for (const e of f.errors) console.log(`      - ${e}`);
  }

  if (failures.length) {
    console.error("\nSchema validation failed.");
    process.exit(1);
  }
  console.log("OK");
}

main();
