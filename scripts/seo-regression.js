#!/usr/bin/env node
// Redesign SEO regression check (Phase R0).
//
// Recomputes a fixed set of per-page SEO facts from the built HTML under
// .next/server/pages and compares them against docs/pre-redesign-baseline.json.
//
//   node scripts/seo-regression.js --write-baseline   # capture the baseline
//   node scripts/seo-regression.js                    # compare (used by verify:seo)
//
// Fails (exit 1) on any change to title, meta description, canonical, robots or
// JSON-LD types, or to the H1, for pages that are not listed in
// docs/redesign-allowlist.json. Only the homepage H2s and the new /industries
// page may be allowlisted; intentionally deleted pages go in allowRemovedPages.
// Warns (no exit) when main-content word count drops more than 15%.
//
// Skips (exit 0) when there is no build, or no baseline yet, so it is safe to
// run outside a built tree.
const fs = require("fs");
const path = require("path");

const ROOT = process.cwd();
const BUILD_DIR = path.join(ROOT, ".next", "server", "pages");
const BASELINE_FILE = path.join(ROOT, "docs", "pre-redesign-baseline.json");
const ALLOWLIST_FILE = path.join(ROOT, "docs", "redesign-allowlist.json");

// ----- build walk (same convention as scripts/validate-schema.js) -----

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

function decodeEntities(str) {
  return str
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&#x27;/gi, "'")
    .replace(/&#x2F;/gi, "/")
    .replace(/&[a-z#0-9]+;/gi, " ");
}

function textOf(html) {
  return decodeEntities(html.replace(/<[^>]+>/g, " "))
    .replace(/\s+/g, " ")
    .trim();
}

function matchContent(html, re) {
  const m = html.match(re);
  return m ? textOf(m[1]) : null;
}

function extractTitle(html) {
  return matchContent(html, /<title[^>]*>([\s\S]*?)<\/title>/i);
}

function extractMeta(html, name) {
  const re = new RegExp(
    `<meta[^>]*name=["']${name}["'][^>]*content=["']([^"']*)["'][^>]*>`,
    "i"
  );
  let m = html.match(re);
  if (!m) {
    const re2 = new RegExp(
      `<meta[^>]*content=["']([^"']*)["'][^>]*name=["']${name}["'][^>]*>`,
      "i"
    );
    m = html.match(re2);
  }
  return m ? m[1] : null;
}

function extractCanonical(html) {
  const m = html.match(
    /<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["'][^>]*>/i
  );
  return m ? m[1] : null;
}

function extractHeadings(html, level) {
  const re = new RegExp(`<h${level}\\b[^>]*>([\\s\\S]*?)</h${level}>`, "gi");
  const out = [];
  let m;
  while ((m = re.exec(html)) !== null) {
    const t = textOf(m[1]);
    if (t) out.push(t);
  }
  return out;
}

function extractTypes(html) {
  const re =
    /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  const types = new Set();
  let m;
  while ((m = re.exec(html)) !== null) {
    let doc;
    try {
      doc = JSON.parse(m[1]);
    } catch (_e) {
      continue;
    }
    const nodes = Array.isArray(doc)
      ? doc
      : doc && doc["@graph"]
      ? [].concat(doc["@graph"])
      : [doc];
    for (const n of nodes) {
      if (!n || !n["@type"]) continue;
      for (const t of [].concat(n["@type"])) types.add(t);
    }
  }
  return [...types].sort();
}

function mainContentWords(html) {
  const body = html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<svg[\s\S]*?<\/svg>/gi, " ");
  const text = decodeEntities(body.replace(/<[^>]+>/g, " "));
  return text.split(/\s+/).filter(Boolean).length;
}

function normalizeHref(href) {
  if (!href) return null;
  if (!href.startsWith("/") || href.startsWith("//")) return null;
  let h = href.split("#")[0].split("?")[0];
  if (h.length > 1 && h.endsWith("/")) h = h.slice(0, -1);
  return h || "/";
}

function internalLinkCount(html) {
  const set = new Set();
  const re = /href=["']([^"']+)["']/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    const h = normalizeHref(m[1]);
    if (h) set.add(h);
  }
  return set.size;
}

function collect(html) {
  return {
    title: extractTitle(html),
    description: extractMeta(html, "description"),
    canonical: extractCanonical(html),
    robots: extractMeta(html, "robots"),
    h1: extractHeadings(html, 1),
    h2: extractHeadings(html, 2),
    wordCount: mainContentWords(html),
    jsonLdTypes: extractTypes(html),
    internalLinkCount: internalLinkCount(html),
  };
}

function crawl() {
  const files = walkHtml(BUILD_DIR, []).filter(
    (f) => !path.basename(f).startsWith("_")
  );
  const out = {};
  for (const file of files) {
    const url = urlFromFile(file);
    out[url] = collect(fs.readFileSync(file, "utf8"));
  }
  return out;
}

function sameList(a, b) {
  if (!a || !b || a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) return false;
  return true;
}

function loadAllowlist() {
  try {
    return JSON.parse(fs.readFileSync(ALLOWLIST_FILE, "utf8"));
  } catch (_e) {
    return { allowH2Changes: [], allowNewPages: [] };
  }
}

// Vertical pages are published on a launch schedule, so at any given as-of date
// some pillars/geo pages legitimately exist in the pre-redesign baseline but
// must not be in the build. Collect the urlSlug prefixes that are expected to be
// absent right now (unreleased verticals, or scaffold verticals that never
// publish) so their absence is reported as info, not a regression. Released
// live verticals are excluded, so a genuinely missing live pillar still fails.
function loadExpectedAbsentPrefixes() {
  try {
    const launch = require(path.join(ROOT, "src", "lib", "launch.js"));
    const verticals = JSON.parse(
      fs.readFileSync(
        path.join(ROOT, "data", "vertical-seo", "verticals.json"),
        "utf8"
      )
    );
    const released = launch.releasedSlugs();
    const prefixes = new Set();
    let releasedLive = 0;
    for (const v of verticals) {
      if (released.has(v.slug) && v.launchStatus === "live") {
        releasedLive++;
        continue;
      }
      if (v.urlSlug) prefixes.add(v.urlSlug);
    }
    return {
      prefixes,
      asOf: launch.asOfDate(),
      // With no released live vertical there is no industries surface, so the
      // "Industries we serve" heading is intentionally omitted on pages that
      // embed it. Compare H2s with that heading stripped in that case only.
      industriesGated: releasedLive === 0,
    };
  } catch (_e) {
    return { prefixes: new Set(), asOf: null, industriesGated: false };
  }
}

const LAUNCH_GATED_HEADINGS = new Set(["Industries we serve"]);

function stripGatedHeadings(list) {
  return (list || []).filter((h) => !LAUNCH_GATED_HEADINGS.has(h));
}

function writeBaseline() {
  if (!fs.existsSync(BUILD_DIR)) {
    console.error(`No build found at ${BUILD_DIR}. Run "yarn build" first.`);
    process.exit(1);
  }
  const data = crawl();
  fs.mkdirSync(path.dirname(BASELINE_FILE), { recursive: true });
  fs.writeFileSync(BASELINE_FILE, JSON.stringify(data, null, 2) + "\n", "utf8");
  console.log(
    `Wrote ${path.relative(ROOT, BASELINE_FILE)} (${Object.keys(data).length} pages).`
  );
}

function compare() {
  if (!fs.existsSync(BUILD_DIR)) {
    console.log("SEO regression skipped (no build found).");
    return 0;
  }
  if (!fs.existsSync(BASELINE_FILE)) {
    console.log("SEO regression skipped (no baseline yet).");
    return 0;
  }
  const baseline = JSON.parse(fs.readFileSync(BASELINE_FILE, "utf8"));
  const current = crawl();
  const allow = loadAllowlist();
  const allowH2 = new Set(allow.allowH2Changes || []);
  const allowNew = new Set(allow.allowNewPages || []);
  const allowRemoved = new Set(allow.allowRemovedPages || []);

  const failures = [];
  const warnings = [];
  const info = [];
  const launchAbsent = loadExpectedAbsentPrefixes();
  const launchHidden = [];
  const isLaunchHidden = (url) =>
    launchAbsent.prefixes.has(url.split("/")[1]);

  const fields = [
    "title",
    "description",
    "canonical",
    "robots",
    "jsonLdTypes",
  ];

  for (const url of Object.keys(baseline).sort()) {
    const b = baseline[url];
    const c = current[url];
    if (!c) {
      if (allowRemoved.has(url)) {
        info.push(`${url}: removed from build (allowlisted)`);
      } else if (isLaunchHidden(url)) {
        launchHidden.push(url);
        info.push(
          `${url}: not published yet (launch schedule, as-of ${launchAbsent.asOf})`
        );
      } else {
        failures.push(
          `${url}: page present in baseline is missing from the build`
        );
      }
      continue;
    }
    for (const f of fields) {
      const bv = b[f];
      const cv = c[f];
      const changed = Array.isArray(bv)
        ? !sameList(bv, cv)
        : bv !== cv;
      if (changed) {
        failures.push(
          `${url}: ${f} changed\n      before: ${JSON.stringify(
            bv
          )}\n      after:  ${JSON.stringify(cv)}`
        );
      }
    }
    if (!sameList(b.h1, c.h1)) {
      failures.push(
        `${url}: H1 changed\n      before: ${JSON.stringify(
          b.h1
        )}\n      after:  ${JSON.stringify(c.h1)}`
      );
    }
    if (!sameList(b.h2, c.h2)) {
      const bCmp = launchAbsent.industriesGated
        ? stripGatedHeadings(b.h2)
        : b.h2;
      const cCmp = launchAbsent.industriesGated
        ? stripGatedHeadings(c.h2)
        : c.h2;
      if (sameList(bCmp, cCmp)) {
        info.push(
          `${url}: launch-gated heading omitted (as-of ${launchAbsent.asOf})`
        );
      } else if (allowH2.has(url)) {
        info.push(`${url}: H2 changed (allowlisted)`);
      } else {
        failures.push(
          `${url}: H2 changed\n      before: ${JSON.stringify(
            b.h2
          )}\n      after:  ${JSON.stringify(c.h2)}`
        );
      }
    }
    if (b.wordCount && c.wordCount < b.wordCount * 0.85) {
      const drop = (100 * (b.wordCount - c.wordCount)) / b.wordCount;
      warnings.push(
        `${url}: main-content word count dropped ${drop.toFixed(
          1
        )}% (${b.wordCount} -> ${c.wordCount})`
      );
    }
    if (b.internalLinkCount !== c.internalLinkCount) {
      info.push(
        `${url}: internal link count changed (${b.internalLinkCount} -> ${c.internalLinkCount})`
      );
    }
  }

  for (const url of Object.keys(current).sort()) {
    if (!baseline[url]) {
      info.push(
        `${url}: new page${allowNew.has(url) ? " (allowlisted)" : ""}`
      );
    }
  }

  console.log("SEO regression");
  console.log("--------------");
  console.log(`Pages in baseline : ${Object.keys(baseline).length}`);
  console.log(`Pages in build    : ${Object.keys(current).length}`);
  console.log(`Launch-hidden     : ${launchHidden.length} (as-of ${launchAbsent.asOf})`);
  console.log(`Failures          : ${failures.length}`);
  console.log(`Warnings          : ${warnings.length}`);
  for (const f of failures) console.log(`  ! ${f}`);
  for (const w of warnings) console.log(`  ~ ${w}`);
  if (process.env.SEO_REGRESSION_VERBOSE) {
    for (const i of info) console.log(`  - ${i}`);
  }

  if (failures.length) {
    console.error("\nSEO regression failed.");
    return 1;
  }
  console.log("OK");
  return 0;
}

function main() {
  if (process.argv.includes("--write-baseline")) {
    writeBaseline();
    return;
  }
  process.exit(compare());
}

main();
