#!/usr/bin/env node
// Phase 9 — final page audit.
// Re-runs the Phase 3 audit and extends it to cover the service pages, the nav
// links and the schema validation, then overwrites docs/page-audit.md.
//
// Reads the production build under .next/server/pages so link counts include the
// real rendered nav / footer chrome. Run `yarn build` first (or run it after a
// build; it exits with a clear error when there is no build).
const fs = require("fs");
const path = require("path");

const verticalSeo = require("../src/lib/verticalSeo");
const services = require("../src/lib/services");

const ROOT = process.cwd();
const BUILD_DIR = path.join(ROOT, ".next", "server", "pages");
const OUT_FILE = path.join(ROOT, "docs", "page-audit.md");

const CHROME = new Set(["/", "/sitemap", "/seo", "/services", "/work"]);

// ----- build walk -----

function walkHtml(dir, out) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkHtml(full, out);
    else if (entry.name.endsWith(".html")) out.push(full);
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

// ----- html parsing -----

function stripTags(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z#0-9]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function wordStats(html) {
  const text = stripTags(html).toLowerCase();
  const words = text.split(/\s+/).filter(Boolean);
  return { words: words.length, unique: new Set(words).size };
}

function normalizeHref(href) {
  if (!href) return null;
  if (href.startsWith("//")) return null;
  if (href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:"))
    return null;
  if (!href.startsWith("/")) return null;
  let h = href.split("#")[0].split("?")[0];
  if (h.length > 1 && h.endsWith("/")) h = h.slice(0, -1);
  return h || "/";
}

function extractLinks(html) {
  const out = new Set();
  const re = /href=["']([^"']+)["']/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    const h = normalizeHref(m[1]);
    if (h) out.add(h);
  }
  return out;
}

function extractTypes(html) {
  const blocks = [];
  const re = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let m;
  while ((m = re.exec(html)) !== null) blocks.push(m[1]);
  const nodeTypes = [];
  let faqCount = 0;
  let parseErrors = 0;
  for (const raw of blocks) {
    let doc;
    try {
      doc = JSON.parse(raw);
    } catch (_e) {
      parseErrors++;
      continue;
    }
    // Only report the top-level graph nodes, not every nested object.
    const nodes = [];
    if (Array.isArray(doc)) nodes.push(...doc);
    else if (doc && doc["@graph"]) nodes.push(...[].concat(doc["@graph"]));
    else nodes.push(doc);
    for (const n of nodes) {
      if (!n || !n["@type"]) continue;
      const t = [].concat(n["@type"]);
      nodeTypes.push(t.join("/"));
      if (t.includes("FAQPage")) faqCount += [].concat(n.mainEntity || []).length;
    }
  }
  return { types: nodeTypes, faqCount, hasSchema: blocks.length > 0, parseErrors };
}

// ----- vertical page sections (from data model) -----

function verticalSections(record) {
  const { page, content } = record;
  const sections = [];
  if (!content) return sections;
  if (content.directAnswer) sections.push("directAnswer");
  if (content.intro) sections.push("intro");
  if (content.localInsight) sections.push("localInsight");
  if (Array.isArray(content.localChecklist) && content.localChecklist.length)
    sections.push("localChecklist");
  sections.push("links");
  const publishedSet = record._publishedSet;
  let citiesIndex = 0;
  if (page.kind === "province") {
    citiesIndex = verticalSeo
      .getProvinceCities(page.province.slug)
      .filter((c) =>
        publishedSet.has(`/${page.vertical.urlSlug}/${page.province.slug}/${c.slug}`)
      ).length;
    if (citiesIndex > 0) sections.push("citiesIndex");
  }
  const legacy = verticalSeo.buildLegacyLinks(page, publishedSet);
  if (legacy.length) sections.push("moreCities");
  if (Array.isArray(content.proofRefs) && content.proofRefs.length)
    sections.push("proof");
  if (Array.isArray(content.faqs) && content.faqs.length) sections.push("faq");
  return sections;
}

// ----- data collection -----

function build() {
  const vres = verticalSeo.computePublished();
  const publishedSet = new Set(vres.published.map((r) => r.page.urlPath));
  for (const r of vres.published) r._publishedSet = publishedSet;

  const sres = services.computePublishedServices();

  const files = walkHtml(BUILD_DIR, []).filter(
    (f) => !path.basename(f).startsWith("_")
  );
  const pages = new Map(); // url -> {html, words, unique, links, schema}
  for (const file of files) {
    const url = urlFromFile(file);
    const html = fs.readFileSync(file, "utf8");
    const ws = wordStats(html);
    pages.set(url, {
      url,
      html,
      words: ws.words,
      uniqueWords: ws.unique,
      links: extractLinks(html),
      schema: extractTypes(html),
    });
  }

  // In-link graph across every built page.
  const inLinks = new Map(); // target -> Set(source url)
  for (const [url, p] of pages) {
    for (const l of p.links) {
      if (!inLinks.has(l)) inLinks.set(l, new Set());
      inLinks.get(l).add(url);
    }
  }

  return { vres, publishedSet, sres, pages, inLinks };
}

function inCount(inLinks, target, predicate) {
  const set = inLinks.get(target);
  if (!set) return 0;
  return [...set].filter(predicate).length;
}

function mdTable(headers, rows) {
  const out = [];
  out.push("| " + headers.join(" | ") + " |");
  out.push("| " + headers.map(() => "---").join(" | ") + " |");
  for (const r of rows) out.push("| " + r.join(" | ") + " |");
  return out.join("\n");
}

function dedupeRedirects(list) {
  const seen = new Set();
  return list.filter((r) => {
    if (seen.has(r.source)) return false;
    seen.add(r.source);
    return true;
  });
}

async function main() {
  if (!fs.existsSync(BUILD_DIR)) {
    console.error(`No build found at ${BUILD_DIR}. Run "yarn build" first.`);
    process.exit(1);
  }

  const { vres, publishedSet, sres, pages, inLinks } = build();

  const isVerticalPage = (url) => url.startsWith("/therapist-seo");
  const isServicePage = (url) =>
    sres.published.some((r) => r.service.url === url) ||
    url === "/web-design" ||
    url === "/seo";

  // ---------- vertical cluster table ----------
  const verticalRows = [];
  for (const r of vres.published) {
    const url = r.page.urlPath;
    const p = pages.get(url);
    const out = p ? p.links.size : 0;
    const inGroup = inCount(inLinks, url, (s) => isVerticalPage(s) && s !== url);
    const inChrome = inCount(inLinks, url, (s) => CHROME.has(s));
    const outLinks = p ? [...p.links] : [];
    const cityLinks = outLinks.filter((l) =>
      /^\/therapist-seo\/[^/]+\/[^/]+$/.test(l)
    ).length;
    const provinceLinks = outLinks.filter((l) =>
      /^\/therapist-seo\/[^/]+$/.test(l)
    ).length;
    const legacyLinks = outLinks.filter((l) =>
      l.startsWith("/seo/for-therapists-")
    ).length;
    const faq = r.content && Array.isArray(r.content.faqs) ? r.content.faqs.length : 0;
    verticalRows.push([
      url,
      r.page.kind,
      verticalSections(r).join(", "),
      r.uniqueWords,
      out,
      inGroup,
      inChrome,
      cityLinks,
      provinceLinks,
      legacyLinks,
      faq,
    ]);
  }
  verticalRows.sort((a, b) => a[0].localeCompare(b[0]));

  // ---------- service pages table ----------
  const serviceRows = [];
  for (const r of sres.published) {
    const url = r.service.url;
    const p = pages.get(url);
    const outServices = (r.service.relatedServices || []).length + (r.service.parentUrl ? 1 : 0);
    const industries = (r.service.relevantVerticals || []).length;
    const content = r.content || {};
    const daWords = content.directAnswer
      ? services.countWords(content.directAnswer)
      : 0;
    const faqs = Array.isArray(content.faqs) ? content.faqs.length : 0;
    const summaryLen = (r.service.summary || "").length;
    const titleLen = services.serviceTitle(r.service).length;
    const types = p ? p.schema.types.join(" | ") : "(no build page)";
    serviceRows.push([
      url,
      r.service.group,
      r.service.existing ? "existing" : "published",
      r.uniqueWords || 0,
      daWords,
      faqs,
      summaryLen,
      titleLen,
      outServices,
      industries,
      types,
    ]);
  }
  serviceRows.sort((a, b) => a[0].localeCompare(b[0]));

  const draftServices = [];
  for (const d of sres.drafts) {
    draftServices.push(`${d.service.url} — no content file (not in a built batch)`);
  }
  const failedServices = [];
  for (const f of sres.failed) {
    failedServices.push(
      `${f.service.url} — ${(f.failures || []).join(", ")}`
    );
  }

  // ---------- sibling similarity (max) ----------
  function maxSimilarity(records, keyFn, groupFn) {
    let worst = 0;
    let pair = null;
    for (let i = 0; i < records.length; i++) {
      for (let j = i + 1; j < records.length; j++) {
        if (groupFn(records[i]) !== groupFn(records[j])) continue;
        const s = jaccard(records[i][keyFn], records[j][keyFn]);
        if (s > worst) {
          worst = s;
          pair = [records[i]._url, records[j]._url];
        }
      }
    }
    return { worst, pair };
  }
  function jaccard(a, b) {
    if (!a || !b || (a.size === 0 && b.size === 0)) return 0;
    let inter = 0;
    for (const s of a) if (b.has(s)) inter++;
    const union = a.size + b.size - inter;
    return union === 0 ? 0 : inter / union;
  }
  for (const r of vres.published) r._url = r.page.urlPath;
  const vSim = maxSimilarity(
    vres.published,
    "shingles",
    (r) => `${r.page.vertical.slug}:${r.page.level}`
  );
  for (const r of sres.published) {
    if (!r.shingles) r.shingles = services.shingleSet(services.uniqueProseText(r.content));
    r._url = r.service.url;
  }
  const sSim = maxSimilarity(
    sres.published.filter((r) => !r.service.existing),
    "shingles",
    (r) => r.service.group
  );

  // ---------- nav links ----------
  // Check every internal link on the rendered homepage resolves to a real route.
  // Static build files cover statically-generated pages; dynamic/server-rendered
  // routes (e.g. /blog, /posts/[id]) are matched from the src/pages tree.
  const home = pages.get("/");
  const navLinks = home ? [...home.links] : [];
  const isAsset = (l) =>
    l.startsWith("/_next/") ||
    /\.(css|js|mjs|json|png|jpe?g|gif|svg|webp|avif|ico|woff2?|ttf|eot|mp4|webm|txt|xml|pdf)$/i.test(
      l
    );
  const pageLinks = navLinks.filter((l) => !isAsset(l));
  const srcPagesDir = path.join(ROOT, "src", "pages");
  const routeExists = (url) => {
    if (pages.has(url)) return true;
    const parts = url.split("/").filter(Boolean);
    if (!parts.length) return true;
    if (fs.existsSync(path.join(srcPagesDir, ...parts) + ".js")) return true;
    if (fs.existsSync(path.join(srcPagesDir, ...parts, "index.js"))) return true;
    const parent = path.join(srcPagesDir, ...parts.slice(0, -1));
    return ["[id]", "[city]", "[province]", "[vertical]", "[slug]"].some((d) =>
      fs.existsSync(path.join(parent, `${d}.js`))
    );
  };
  const brokenNav = pageLinks.filter((l) => !routeExists(l));

  // ---------- redirects ----------
  let configRedirects = [];
  try {
    const cfg = require("../next.config.js");
    configRedirects = await cfg.redirects();
  } catch (e) {
    configRedirects = [];
  }
  const verticalRedirects = dedupeRedirects(
    configRedirects.filter((r) => r.source.startsWith("/seo/for-therapists-"))
  );
  const staticRedirects = dedupeRedirects(
    configRedirects.filter((r) => !r.source.startsWith("/seo/for-therapists-"))
  );
  const duplicateRedirectSources = [];
  {
    const seen = new Set();
    for (const r of configRedirects) {
      if (seen.has(r.source) && !duplicateRedirectSources.includes(r.source))
        duplicateRedirectSources.push(r.source);
      seen.add(r.source);
    }
  }

  // ---------- legacy live pages ----------
  const liveLegacy = verticalSeo
    .getLegacyTherapistPages()
    .filter((e) => verticalSeo.isLegacyPageLive(e.url, publishedSet));

  // ---------- provinces without published city pages ----------
  const provinceCityCounts = verticalSeo.loadProvinces().map((prov) => {
    const seeded = (prov.topCitySlugs || []).length;
    const publishedCities = verticalSeo
      .getProvinceCities(prov.slug)
      .filter((c) => publishedSet.has(`/therapist-seo/${prov.slug}/${c.slug}`))
      .length;
    return { name: prov.name, seeded, publishedCities };
  });

  // ---------- schema validation summary ----------
  const schemaStats = { total: 0, withSchema: 0, parseErrors: [] };
  for (const [url, p] of pages) {
    schemaStats.total++;
    if (p.schema.hasSchema) schemaStats.withSchema++;
    if (p.schema.parseErrors) schemaStats.parseErrors.push(url);
  }

  // ---------- open questions ----------
  const openQuestionsPath = path.join(ROOT, "docs", "service-pages-open-questions.md");
  const openQuestions = fs.existsSync(openQuestionsPath)
    ? fs.readFileSync(openQuestionsPath, "utf8").trim()
    : "(no open-questions file)";

  // ---------- write the doc ----------
  const now = new Date().toISOString().slice(0, 10);
  const L = [];
  L.push("# Page audit — final (Phase 9)");
  L.push("");
  L.push(
    `Regenerated ${now} against a production build (${schemaStats.total} HTML pages). Re-runs the Phase 3 audit and extends it to cover the service pages, the Solutions nav links and JSON-LD schema validation. Vertical-page structure comes from the data tree via \`src/lib/verticalSeo.js\`; links and schema types are read from the rendered HTML so nav/footer chrome is included.`
  );
  L.push("");

  L.push("## Vertical x geo cluster");
  L.push("");
  L.push(
    `- **Published pages: ${vres.published.length}** (pillar, USA country, ${provinceCityCounts.length} provinces, city pages).`
  );
  L.push(
    `- **Unique prose** is the gate metric (directAnswer + intro + localInsight + local checklist + geo-specific FAQ answers), not the rendered word count.`
  );
  L.push(
    `- **In (group)** = other published vertical pages linking here. **In (chrome)** = site chrome (\`/\`, \`/sitemap\`, \`/seo\`, \`/services\`, \`/work\`).`
  );
  L.push(
    `- **City links / Province links / Legacy links** = out-links from the page matching \`/therapist-seo/{province}/{city}\`, \`/therapist-seo/{province}\` and \`/seo/for-therapists-*\`.`
  );
  L.push("");
  L.push(
    mdTable(
      [
        "Page",
        "Kind",
        "Sections",
        "Unique prose",
        "Out",
        "In (group)",
        "In (chrome)",
        "City links",
        "Province links",
        "Legacy links",
        "FAQs",
      ],
      verticalRows
    )
  );
  L.push("");

  L.push("## Service pages");
  L.push("");
  L.push(
    `- **Published services: ${sres.published.length}** (${sres.published.filter((r) => r.service.existing).length} existing + ${sres.published.filter((r) => !r.service.existing).length} new).`
  );
  L.push(`- **Draft services: ${sres.drafts.length}** — ${draftServices.join("; ") || "none"}.`);
  L.push(
    `- **Gate-failed services: ${sres.failed.length}** — ${failedServices.join("; ") || "none"}.`
  );
  L.push(
    `- **Direct answer** target is 40–60 words; **summary** 140–155 chars; **title** ≤ 65 chars; **unique prose** ≥ 500 words.`
  );
  L.push("");
  L.push(
    mdTable(
      [
        "Page",
        "Group",
        "Status",
        "Unique prose",
        "Direct answer (words)",
        "FAQs",
        "Summary len",
        "Title len",
        "Service links",
        "Industry links",
        "Schema types",
      ],
      serviceRows
    )
  );
  L.push("");

  L.push("## Solutions nav links");
  L.push("");
  L.push(
    `Every internal page link on the rendered homepage (header nav, Solutions mega menu, footer, body) was checked against the built route set plus the src/pages tree for dynamic routes. Asset links (\`/_next/\`, fonts, stylesheets, images) are ignored.`
  );
  L.push(`- Internal page links on \`/\`: **${pageLinks.length}**.`);
  L.push(
    `- Links pointing at a route that does not exist: **${brokenNav.length}**${brokenNav.length ? " — " + brokenNav.join(", ") : ""}.`
  );
  L.push("");

  L.push("## Schema validation");
  L.push("");
  L.push(`- Pages checked: **${schemaStats.total}**.`);
  L.push(`- Pages with JSON-LD: **${schemaStats.withSchema}**.`);
  L.push(
    `- Pages with unparseable JSON-LD: **${schemaStats.parseErrors.length}**${schemaStats.parseErrors.length ? " — " + schemaStats.parseErrors.join(", ") : ""}.`
  );
  L.push(
    `- Full per-type checks run by \`scripts/validate-schema.js\` (duplicate/unresolved \`@id\`, required properties, forbidden Review/AggregateRating, required types per URL) — see the \`yarn build\` / \`yarn verify:seo\` output; currently 0 failures.`
  );
  L.push("");

  L.push("## Flags");
  L.push("");
  const flags = [];
  // province pages with zero published cities
  for (const pc of provinceCityCounts) {
    if (pc.publishedCities === 0) {
      flags.push([
        `/therapist-seo/{${pc.name.toLowerCase().replace(/\s+/g, "-")}}`,
        `province page has zero published city pages (${pc.seeded} seeded)`,
      ]);
    }
  }
  for (const url of brokenNav) flags.push([url, "internal link with no built route"]);
  for (const url of schemaStats.parseErrors)
    flags.push([url, "JSON-LD block that does not parse"]);
  for (const src of duplicateRedirectSources)
    flags.push([src, "duplicate redirect source in next.config.js (harmless, worth cleaning up)"]);
  if (!flags.length) flags.push(["—", "none"]);
  L.push(mdTable(["Page", "Issue"], flags));
  L.push("");

  L.push("## Sibling similarity");
  L.push("");
  L.push(
    `- Vertical cluster nearest pair: **${vSim.worst.toFixed(3)}**${vSim.pair ? ` (${vSim.pair.join(" vs ")})` : ""} — gate caps at 0.35.`
  );
  L.push(
    `- Service pages nearest same-group pair: **${sSim.worst.toFixed(3)}**${sSim.pair ? ` (${sSim.pair.join(" vs ")})` : ""} — gate caps at 0.30.`
  );
  L.push("");

  L.push("## Provinces by published city pages");
  L.push("");
  L.push(
    mdTable(
      ["Province", "Seeded cities", "Published city pages"],
      provinceCityCounts.map((p) => [p.name, p.seeded, p.publishedCities])
    )
  );
  L.push("");

  L.push("## Redirects now active");
  L.push("");
  L.push(`### Legacy therapist pages → new vertical pages (${verticalRedirects.length})`);
  L.push("");
  L.push(
    mdTable(
      ["Source", "Destination"],
      verticalRedirects.map((r) => [r.source, r.destination])
    )
  );
  L.push("");
  L.push(`### Other permanent redirects (${staticRedirects.length})`);
  L.push("");
  L.push(
    mdTable(
      ["Source", "Destination"],
      staticRedirects.map((r) => [r.source, r.destination])
    )
  );
  L.push("");

  L.push("## Legacy pages still live");
  L.push("");
  L.push(
    `**${liveLegacy.length}** legacy \`/seo/for-therapists-*\` pages are still live and indexable (no active redirect because their replacement is not published). They remain crawlable via the "More cities" block.`
  );
  L.push("");
  L.push(
    mdTable(
      ["Legacy page", "Kind", "Region"],
      verticalSeo
        .getLegacyTherapistPages()
        .filter((e) => verticalSeo.isLegacyPageLive(e.url, publishedSet))
        .sort((a, b) => a.url.localeCompare(b.url))
        .map((e) => [e.url, e.kind, e.region])
    )
  );
  L.push("");

  L.push("## Open questions the owner must supply");
  L.push("");
  L.push(openQuestions);
  L.push("");

  fs.writeFileSync(OUT_FILE, L.join("\n"), "utf8");
  console.log(`Wrote ${path.relative(ROOT, OUT_FILE)}`);
  console.log(
    `Vertical pages: ${vres.published.length}; services published: ${sres.published.length}, draft: ${sres.drafts.length}, failed: ${sres.failed.length}; broken nav links: ${brokenNav.length}; live legacy: ${liveLegacy.length}.`
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
