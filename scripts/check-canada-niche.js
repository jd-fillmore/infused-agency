#!/usr/bin/env node
/* eslint-disable no-console */
// Verification for the Canada-wide niche SEO pages:
//   /seo/for-concrete-contractors (hub) + /seo/for-concrete-contractors/<city>
//
// Checks (all read-only):
//   1. Inbound internal links: every new URL needs >= 2 distinct inbound
//      sources. Model edges cover the structural links the components render
//      (hub -> cities, city -> hub, city -> nearby); prose [label](/href)
//      tokens and a literal scan of src/pages source files cover the rest.
//      The hub's count stays a warning until the Step 5 link edits land
//      (pass --strict at final verify to make it a failure).
//   2. Forbidden superlatives in copy: best/top/leading/trusted/expert/
//      guarantee*/cheapest/fastest/proven, minus the allowed
//      "number one ranking" FAQ (question + answer are stripped first).
//   3. 5-gram shingle overlap: pairwise Jaccard across city pages (threshold
//      0.38), plus worst pair vs the hub and vs the Niagara concrete page.
//   4. Per-page report: URL, body word count (900-1300 for city pages,
//      800-1100 for the hub), title and meta description lengths (<160).
//   5. Required sections/FAQ shape per city page; nearby notes present;
//      no links to /seo/st-catharines or /seo/niagara-falls.
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const {
  CITIES,
  getCity,
  hubPath,
  cityPath,
  loadNicheContent,
  publishedCitySlugs,
} = require(path.join(ROOT, "src", "lib", "canadaNicheSeo"));

const NICHE = "concrete-contractors";
const HUB_URL = hubPath(NICHE);
const OVERLAP_THRESHOLD = 0.38;
const FORBIDDEN_HOST_PAGES = ["/seo/st-catharines", "/seo/niagara-falls"];
const STRICT = process.argv.includes("--strict");

const FORBIDDEN_WORDS = [
  "best",
  "top",
  "leading",
  "trusted",
  "expert",
  "guarantee",
  "guaranteed",
  "cheapest",
  "fastest",
  "proven",
];

let failures = 0;
const fail = (msg) => {
  failures += 1;
  console.log(`  FAIL  ${msg}`);
};
const warn = (msg) => console.log(`  warn  ${msg}`);
const ok = (msg) => console.log(`  ok    ${msg}`);

// ---------- collect content ----------

const { hub } = loadNicheContent(NICHE);
const citySlugs = publishedCitySlugs(NICHE);
const cityContent = {};
for (const slug of citySlugs) cityContent[slug] = loadNicheContent(NICHE).cities[slug];

// ---------- helpers ----------

function pushAll(out, arr) {
  if (Array.isArray(arr)) for (const v of arr) if (typeof v === "string") out.push(v);
}

function cityProse(content) {
  // Body prose only: paragraphs + FAQ text. Headings, subheads, checklists and
  // nearby notes are structural/link-list text and are excluded.
  const out = [];
  for (const key of ["competition", "searches", "season", "whatWeDo", "straight"]) {
    const b = content[key];
    if (!b) continue;
    pushAll(out, b.paragraphs);
    pushAll(out, b.paragraphsAfter);
  }
  for (const f of content.faqs || []) {
    out.push(f.q);
    out.push(f.a);
  }
  return out.join(" ");
}

function hubProse() {
  const out = [];
  for (const key of ["intro", "jobs", "whatWeDo", "niagara"]) {
    const b = hub[key];
    if (!b) continue;
    pushAll(out, b.paragraphs);
    pushAll(out, b.paragraphsAfter);
  }
  pushAll(out, hub.hero && hub.hero.description ? [hub.hero.description] : []);
  for (const f of hub.faqs || []) {
    out.push(f.q);
    out.push(f.a);
  }
  return out.join(" ");
}

function bodyWordCount(text) {
  return text
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1")
    .split(/\s+/)
    .filter(Boolean).length;
}

function cityBodyWordCount(slug) {
  const c = cityContent[slug];
  const out = [];
  for (const key of ["competition", "searches", "season", "whatWeDo", "straight"]) {
    const b = c[key];
    if (!b) continue;
    pushAll(out, b.paragraphs);
    pushAll(out, b.paragraphsAfter);
    pushAll(out, [b.heading || ""]);
    pushAll(out, [b.subhead || ""]);
    pushAll(out, b.checklist || []);
  }
  pushAll(out, [c.hero && c.hero.subhead ? c.hero.subhead : ""]);
  for (const f of c.faqs || []) {
    out.push(f.q);
    out.push(f.a);
  }
  return bodyWordCount(out.join(" "));
}

function hubBodyWordCount() {
  const out = [];
  for (const key of ["intro", "jobs", "whatWeDo", "niagara"]) {
    const b = hub[key];
    if (!b) continue;
    pushAll(out, b.paragraphs);
    pushAll(out, b.checklist || []);
    pushAll(out, [b.heading || ""]);
    pushAll(out, [b.subhead || ""]);
  }
  pushAll(out, [hub.hero.description]);
  for (const f of hub.faqs || []) {
    out.push(f.q);
    out.push(f.a);
  }
  return bodyWordCount(out.join(" "));
}

function shingles(text, n = 5) {
  const words = text
    .toLowerCase()
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1")
    .replace(/[^a-z0-9\s%+]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
  const set = new Set();
  for (let i = 0; i + n <= words.length; i++) set.add(words.slice(i, i + n).join(" "));
  return set;
}

function jaccard(a, b) {
  let inter = 0;
  for (const s of a) if (b.has(s)) inter++;
  const union = a.size + b.size - inter;
  return union ? inter / union : 0;
}

function collectStrings(node, out) {
  if (typeof node === "string") out.push(node);
  else if (Array.isArray(node)) for (const v of node) collectStrings(v, out);
  else if (node && typeof node === "object")
    for (const v of Object.values(node)) collectStrings(v, out);
}

// All link tokens in a content object: [label](/href)
function markdownHrefs(node) {
  const strings = [];
  collectStrings(node, strings);
  const hrefs = [];
  const re = /\[([^\]]+)\]\((\/[^)]+)\)/g;
  for (const s of strings) {
    let m;
    while ((m = re.exec(s)) !== null) hrefs.push(m[2]);
  }
  return hrefs;
}

// ---------- 1. inbound links ----------

console.log("\n=== 1. Inbound internal links (>= 2 per new URL) ===");

function buildInbound() {
  const inbound = new Map(); // target -> Set(sourceId)
  const add = (target, source) => {
    if (!inbound.has(target)) inbound.set(target, new Set());
    inbound.get(target).add(source);
  };

  // Structural edges rendered by the components.
  for (const slug of citySlugs) {
    const url = cityPath(NICHE, slug);
    add(url, `hub:province-grid`);
    add(HUB_URL, `city:${slug}:nearby-component`);
    for (const n of getCity(slug).nearby) {
      const nUrl = cityPath(NICHE, n);
      if (citySlugs.includes(n)) add(nUrl, `city:${slug}:nearby-list`);
    }
  }

  // Prose link tokens in hub + city content (a page linking to itself does
  // not count as inbound).
  for (const href of markdownHrefs(hub)) {
    if (href === HUB_URL) continue;
    if (href.startsWith(`${HUB_URL}/`)) add(href, "content:hub:prose");
  }
  for (const slug of citySlugs) {
    for (const href of markdownHrefs(cityContent[slug])) {
      const full = href.startsWith("/") ? href : null;
      if (!full) continue;
      if (full === HUB_URL) add(full, `content:${slug}:prose`);
      if (full.startsWith(`${HUB_URL}/`)) add(full, `content:${slug}:prose`);
    }
  }

  // Literal scan of page source for hardcoded links (covers Step 5 edits).
  const pagesDir = path.join(ROOT, "src", "pages");
  const files = [];
  (function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (entry.name.endsWith(".js")) files.push(full);
    }
  })(pagesDir);

  const targets = [HUB_URL, ...citySlugs.map((s) => cityPath(NICHE, s))];
  for (const file of files) {
    if (file.includes(path.join("pages", "seo", "for-concrete-contractors"))) continue;
    const rel = path.relative(ROOT, file).replace(/\\/g, "/");
    let text;
    try {
      text = fs.readFileSync(file, "utf8");
    } catch (_e) {
      continue;
    }
    for (const target of targets) {
      const escaped = target.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const re = new RegExp(`${escaped}(?![a-z0-9-])`, "i");
      if (re.test(text)) add(target, `file:${rel}`);
    }
  }
  return inbound;
}

const inbound = buildInbound();
{
  const hubCount = (inbound.get(HUB_URL) || new Set()).size;
  if (hubCount >= 2) ok(`hub ${HUB_URL}: ${hubCount} inbound`);
  else if (STRICT) fail(`hub ${HUB_URL}: only ${hubCount} inbound (need >= 2)`);
  else warn(`hub ${HUB_URL}: ${hubCount} inbound (warning until Step 5 link edits)`);

  for (const slug of citySlugs) {
    const url = cityPath(NICHE, slug);
    const count = (inbound.get(url) || new Set()).size;
    if (count >= 2) ok(`${url}: ${count} inbound`);
    else if (STRICT) fail(`${url}: only ${count} inbound (need >= 2)`);
    else warn(`${url}: ${count} inbound so far (neighbours may be in a later batch)`);
  }
}

// ---------- 2. forbidden words ----------

console.log("\n=== 2. Forbidden superlatives in copy ===");
{
  // The "number one ranking" FAQ is the one allowed place for guarantee*
  // language; strip it before scanning.
  const allowedFaq = (faqs) =>
    (faqs || []).filter((f) => !/number one ranking/i.test(`${f.q} ${f.a}`));

  const scanTargets = [];
  const hubClone = JSON.parse(JSON.stringify(hub));
  hubClone.faqs = allowedFaq(hub.faqs);
  collectStrings(hubClone, scanTargets);
  for (const slug of citySlugs) {
    const c = JSON.parse(JSON.stringify(cityContent[slug]));
    c.faqs = allowedFaq(cityContent[slug].faqs);
    collectStrings(c, scanTargets);
  }
  const corpus = scanTargets.join(" ");
  let clean = true;
  for (const word of FORBIDDEN_WORDS) {
    const re = new RegExp(`\\b${word}(s|ed|ing)?\\b`, "i");
    const hits = corpus.match(re);
    if (hits) {
      clean = false;
      fail(`forbidden word "${hits[0]}" found in copy`);
    }
  }
  if (clean) ok("no forbidden superlatives outside the allowed FAQ");

  // Forbidden link targets anywhere in new copy.
  const allStrings = [];
  collectStrings(hub, allStrings);
  for (const slug of citySlugs) collectStrings(cityContent[slug], allStrings);
  const joined = allStrings.join(" ");
  for (const bad of FORBIDDEN_HOST_PAGES) {
    if (joined.includes(bad)) fail(`copy links to forbidden page ${bad}`);
  }
  ok("no links to /seo/st-catharines or /seo/niagara-falls");
}

// ---------- 3. shingle overlap ----------

console.log("\n=== 3. 5-gram shingle overlap ===");
{
  // Niagara concrete page prose (same extractor as check-niagara-industry-overlap).
  let niagaraSet = null;
  try {
    const file = path.join(ROOT, "src", "pages", "seo", "for-concrete-contractors-niagara.js");
    let src = fs.readFileSync(file, "utf8");
    src = src.replace(/^import .*$/gm, "");
    const idx = src.indexOf("export default");
    if (idx >= 0) src = src.slice(0, idx);
    src = src.replace("const page =", "var page =");
    const page = new Function("hero", "proofImage", `${src}\nreturn page;`)({}, {});
    const out = [];
    if (page.intro) pushAll(out, page.intro.paragraphs);
    for (const key of ["bodyBlock", "areasBlock"]) {
      const b = page[key];
      if (!b) continue;
      pushAll(out, b.paragraphs);
      pushAll(out, b.paragraphsAfter);
    }
    if (page.whyChoose) {
      pushAll(out, page.whyChoose.paragraphs);
      pushAll(out, page.whyChoose.closingParagraphs);
      for (const blk of page.whyChoose.blocks || []) {
        pushAll(out, blk.paragraphs);
        pushAll(out, blk.paragraphsAfter);
      }
    }
    if (page.services) for (const c of page.services.cards || []) pushAll(out, c.paragraphs);
    for (const f of page.faqs || []) out.push(f.a);
    niagaraSet = shingles(out.join(" "));
  } catch (_e) {
    warn("could not load Niagara concrete page for overlap check");
  }

  const sets = citySlugs.map((slug) => ({
    slug,
    set: shingles(cityProse(cityContent[slug])),
  }));
  const pairs = [];
  for (let i = 0; i < sets.length; i++)
    for (let j = i + 1; j < sets.length; j++)
      pairs.push({ a: sets[i].slug, b: sets[j].slug, s: jaccard(sets[i].set, sets[j].set) });
  pairs.sort((x, y) => y.s - x.s);
  console.log(`  top city-pair overlaps (threshold ${OVERLAP_THRESHOLD}):`);
  for (const p of pairs.slice(0, 10))
    console.log(`    ${p.s.toFixed(3)}  ${p.a} <-> ${p.b}${p.s > OVERLAP_THRESHOLD ? "  <-- OVER" : ""}`);
  for (const p of pairs) {
    if (p.s > OVERLAP_THRESHOLD)
      fail(`${p.a} <-> ${p.b} overlap ${p.s.toFixed(3)} > ${OVERLAP_THRESHOLD} (rewrite from scratch)`);
  }

  const hubSet = shingles(hubProse());
  let worstHub = { slug: null, s: 0 };
  for (const set of sets) {
    const s = jaccard(hubSet, set.set);
    if (s > worstHub.s) worstHub = { slug: set.slug, s };
  }
  console.log(`  hub vs cities: worst ${worstHub.s.toFixed(3)} (${worstHub.slug || "n/a"})`);

  if (niagaraSet) {
    let worstN = { slug: null, s: 0 };
    for (const set of sets) {
      const s = jaccard(niagaraSet, set.set);
      if (s > worstN.s) worstN = { slug: set.slug, s };
    }
    console.log(`  Niagara concrete page vs cities: worst ${worstN.s.toFixed(3)} (${worstN.slug || "n/a"})`);
    const hubNiagara = jaccard(hubSet, niagaraSet);
    console.log(`  hub vs Niagara concrete page: ${hubNiagara.toFixed(3)}`);
    if (worstN.s > OVERLAP_THRESHOLD)
      fail(`city ${worstN.slug} overlaps Niagara concrete page at ${worstN.s.toFixed(3)}`);
    if (hubNiagara > OVERLAP_THRESHOLD)
      fail(`hub overlaps Niagara concrete page at ${hubNiagara.toFixed(3)}`);
  }
  ok("overlap scan complete");
}

// ---------- 4. per-page report ----------

console.log("\n=== 4. Per-page report ===");
{
  const seenTitles = new Map();
  const seenDescs = new Map();

  const reportPage = (url, words, min, max, seo) => {
    const dLen = (seo.description || "").length;
    const tLen = (seo.title || "").length;
    const inRange = words >= min && words <= max;
    console.log(
      `  ${url}  words=${words}${inRange ? "" : ` (OUT OF ${min}-${max})`}  title=${tLen}  desc=${dLen}`
    );
    if (!inRange) fail(`${url}: word count ${words} outside ${min}-${max}`);
    if (dLen >= 160) fail(`${url}: meta description ${dLen} chars (keep under 160)`);
    if (seenTitles.has(seo.title)) fail(`${url}: duplicate title vs ${seenTitles.get(seo.title)}`);
    if (seenDescs.has(seo.description)) fail(`${url}: duplicate description vs ${seenDescs.get(seo.description)}`);
    seenTitles.set(seo.title, url);
    seenDescs.set(seo.description, url);
  };

  reportPage(HUB_URL, hubBodyWordCount(), 800, 1100, hub.seo);
  for (const slug of citySlugs) {
    const url = cityPath(NICHE, slug);
    const c = cityContent[slug];
    if (!c.seo || !c.seo.title || !c.seo.description) fail(`${url}: missing seo title/description`);
    else reportPage(url, cityBodyWordCount(slug), 900, 1300, c.seo);
  }
}

// ---------- 5. required shape per city page ----------

console.log("\n=== 5. City page shape ===");
{
  const required = ["competition", "searches", "season", "whatWeDo", "straight"];
  for (const slug of citySlugs) {
    const c = cityContent[slug];
    for (const key of required) {
      if (!c[key] || !Array.isArray(c[key].paragraphs) || c[key].paragraphs.length < 2)
        fail(`${slug}: missing or thin section "${key}"`);
    }
    if (!c.faqs || c.faqs.length !== 4) fail(`${slug}: needs exactly 4 FAQs (has ${(c.faqs || []).length})`);
    if (!c.nearby || !c.nearby.notes) fail(`${slug}: missing nearby.notes`);
    else {
      for (const n of getCity(slug).nearby) {
        if (!c.nearby.notes[n]) fail(`${slug}: missing nearby note for ${n}`);
      }
    }
    if (!c.whatWeDo || !c.whatWeDo.checklist || c.whatWeDo.checklist.length < 4)
      fail(`${slug}: whatWeDo.checklist needs >= 4 items`);
  }
  ok("shape scan complete");
}

// ---------- summary ----------

console.log(
  `\nSUMMARY: ${citySlugs.length} city pages + hub -> ${failures === 0 ? "PASS" : `FAIL (${failures})`}`
);
if (failures > 0) process.exit(1);
