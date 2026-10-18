#!/usr/bin/env node
// Count prose words in a /seo/for-*-niagara.js page object, mirroring the
// overlap script's extraction so word counts are comparable across pages.
const fs = require("fs");
const path = require("path");

const file = process.argv[2];
if (!file) {
  console.error("Usage: node scripts/count-page-words.js <file>");
  process.exit(1);
}

let src = fs.readFileSync(file, "utf8");
src = src.replace(/^import .*$/gm, "");
const idx = src.indexOf("export default");
src = idx >= 0 ? src.slice(0, idx) : src;
src = src.replace("const page =", "var page =");
const page = new Function("hero", `${src}\nreturn page;`)({});

function pushAll(out, arr) {
  if (Array.isArray(arr)) for (const v of arr) if (typeof v === "string") out.push(v);
}

function wordsOf(text) {
  return text
    .toLowerCase()
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1")
    .replace(/[^a-z0-9\s%+]/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;
}

const out = [];
if (page.hero) out.push(page.hero.description);
if (page.intro) pushAll(out, page.intro.paragraphs);
if (page.proof) {
  if (page.proof.subhead) out.push(page.proof.subhead);
  if (page.proof.note) out.push(page.proof.note);
  if (page.proof.items) pushAll(out, page.proof.items);
}
for (const key of ["bodyBlock", "areasBlock"]) {
  const b = page[key];
  if (!b) continue;
  if (b.subhead) out.push(b.subhead);
  pushAll(out, b.paragraphs);
  pushAll(out, b.checklist);
  pushAll(out, b.paragraphsAfter);
}
if (page.whyChoose) {
  pushAll(out, page.whyChoose.paragraphs);
  pushAll(out, page.whyChoose.closingParagraphs);
  for (const blk of page.whyChoose.blocks || []) {
    pushAll(out, blk.paragraphs);
    pushAll(out, blk.checklist);
    pushAll(out, blk.paragraphsAfter);
  }
  if (page.whyChoose.closingHeading) out.push(page.whyChoose.closingHeading);
}
if (page.services) {
  if (page.services.subhead) out.push(page.services.subhead);
  for (const c of page.services.cards || []) {
    out.push(c.title);
    pushAll(out, c.paragraphs);
    pushAll(out, c.checklist);
    pushAll(out, c.paragraphsAfter);
  }
}
for (const f of page.faqs || []) {
  out.push(f.q, f.a);
}

const total = out.reduce((sum, t) => sum + wordsOf(t), 0);
console.log(`${file}: ${total} words (${out.length} text blocks)`);
