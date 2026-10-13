#!/usr/bin/env node
/* eslint-disable no-console */
// Read-only 5-gram overlap check for the 7 new /seo/for-*-niagara industry
// pages. Extracts prose fields from each page's `page` object (no JSX eval)
// and reports pairwise Jaccard similarity of 5-word shingles.
const fs = require("fs");
const path = require("path");

const DIR = path.join(__dirname, "..", "src", "pages", "seo");
const THRESHOLD = 0.35;

function loadPage(file) {
  let src = fs.readFileSync(path.join(DIR, file), "utf8");
  src = src.replace(/^import .*$/gm, "");
  const idx = src.indexOf("export default");
  src = idx >= 0 ? src.slice(0, idx) : src;
  src = src.replace("const page =", "var page =");
  const fn = new Function("hero", "proofImage", `${src}\nreturn page;`);
  return fn({}, {});
}

function pushAll(out, arr) {
  if (Array.isArray(arr)) for (const v of arr) if (typeof v === "string") out.push(v);
}

function proseWithAreas(page) {
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
  if (page.services)
    for (const c of page.services.cards || []) pushAll(out, c.paragraphs);
  for (const f of page.faqs || []) out.push(f.a);
  return out.join(" ");
}

function proseWithoutAreas(page) {
  const clone = JSON.parse(JSON.stringify(page));
  delete clone.areasBlock;
  return proseWithAreas(clone);
}

function shingles(text, n = 5) {
  const words = text
    .toLowerCase()
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1")
    .replace(/[^a-z0-9\s%+]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
  const set = new Set();
  for (let i = 0; i + n <= words.length; i++)
    set.add(words.slice(i, i + n).join(" "));
  return set;
}

function jaccard(a, b) {
  let inter = 0;
  for (const s of a) if (b.has(s)) inter++;
  const union = a.size + b.size - inter;
  return union ? inter / union : 0;
}

function sectionText(page, mode) {
  const out = [];
  if (mode === "base") {
    pushAll(out, page.intro.paragraphs);
    pushAll(out, page.bodyBlock.paragraphs);
    pushAll(out, page.bodyBlock.paragraphsAfter);
  } else if (mode === "why") {
    pushAll(out, page.whyChoose.paragraphs);
    pushAll(out, page.whyChoose.closingParagraphs);
    for (const b of page.whyChoose.blocks || []) {
      pushAll(out, b.paragraphs);
      pushAll(out, b.paragraphsAfter);
    }
  } else if (mode === "services") {
    for (const c of page.services.cards || []) pushAll(out, c.paragraphs);
  }
  return out.join(" ");
}

const files = fs
  .readdirSync(DIR)
  .filter((f) => /^for-.*-niagara\.js$/.test(f))
  .sort();

function runSection(mode) {
  const sets = files.map((f) => ({ file: f, set: shingles(sectionText(loadPage(f), mode)) }));
  let worst = 0;
  let pair = "";
  for (let i = 0; i < sets.length; i++)
    for (let j = i + 1; j < sets.length; j++) {
      const s = jaccard(sets[i].set, sets[j].set);
      if (s > worst) {
        worst = s;
        pair = `${sets[i].file} <-> ${sets[j].file}`;
      }
    }
  console.log(`  [${mode}] worst ${worst.toFixed(3)}  ${pair}`);
}

console.log("\n=== Section breakdown (worst pair per section) ===");
for (const mode of ["base", "why", "services"]) runSection(mode);

function run(extractor, label) {
  console.log(`\n=== 5-gram Jaccard (${label}), threshold ${THRESHOLD} ===`);
  const sets = files.map((f) => ({ file: f, set: shingles(extractor(loadPage(f))) }));
  let worst = 0;
  for (let i = 0; i < sets.length; i++) {
    for (let j = i + 1; j < sets.length; j++) {
      const s = jaccard(sets[i].set, sets[j].set);
      if (s > worst) worst = s;
      const flag = s > THRESHOLD ? "  <-- OVER" : "";
      console.log(
        `  ${s.toFixed(3)}  ${sets[i].file.replace("for-", "").replace(/-niagara\.js/, "")}  <->  ${sets[j].file.replace("for-", "").replace(/-niagara\.js/, "")}${flag}`
      );
    }
  }
  console.log(`  worst pair: ${worst.toFixed(3)}`);
  return worst;
}

const wAll = run(proseWithAreas, "incl. Areas block");
const wNoAreas = run(proseWithoutAreas, "excl. Areas block");
console.log(
  `\nSUMMARY: worst incl=${wAll.toFixed(3)} excl=${wNoAreas.toFixed(3)} -> ${
    wAll <= THRESHOLD && wNoAreas <= THRESHOLD ? "PASS" : "FAIL"
  }`
);
