// Read-only similarity report. Nothing here fails a build or changes output.
//
// Method (a) "whole page": body text of <main>, minus nav/footer and elements
// marked data-shared — the same text the uniqueness gate measures.
//
// Method (b) "city-specific": only the sections written for that city
// (coverage/neighbourhoods, market context, AI search, who it's for, why
// Infused, FAQ). Sections that are template copy for every city — the services
// grid, pricing, testimonials, nearby cities and the related/explore block —
// are excluded, as is any element marked data-shared.
//
// Similarity is 5-word shingle Jaccard in both cases. The shared-copy
// percentage is the share of a page's visible body characters that sit inside
// those template sections.
//
// Usage: node astro/scripts/report-uniqueness.mjs (after a build)

import fs from "node:fs";
import path from "node:path";

const DIST = "astro/dist";
const SEP = path.sep;
const SHINGLE = 5;

const walk = (dir, acc = []) => {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, acc);
    else if (entry.name === "index.html") acc.push(full);
  }
  return acc;
};

const toUrl = (file) => {
  const parts = path.relative(DIST, file).split(SEP);
  if (parts[parts.length - 1] === "index.html") parts.pop();
  return "/" + parts.join("/");
};

const SHARED_HEADING = /services|pricing|testimonial|nearby|related|explore|questions/i;

const textOf = (html) =>
  html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+data-shared[^>]*>[\s\S]*?<\/[a-z]+>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z#0-9]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();

const tokens = (text) => text.match(/[a-z0-9']+/g) ?? [];

const shingles = (words) => {
  const set = new Set();
  for (let i = 0; i + SHINGLE <= words.length; i += 1) set.add(words.slice(i, i + SHINGLE).join(" "));
  return set;
};

const jaccard = (a, b) => {
  let intersection = 0;
  for (const value of a) if (b.has(value)) intersection += 1;
  return intersection / (a.size + b.size - intersection);
};

const sections = (html) => {
  const main = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i)?.[1] ?? "";
  const blocks = [];
  for (const match of main.matchAll(/<section\b[^>]*>[\s\S]*?<\/section>/gi)) {
    blocks.push(match[0]);
  }
  return { main, blocks };
};

const isShared = (block) => {
  if (/data-shared/.test(block)) return true;
  const heading = textOf(block.slice(0, 2000));
  return SHARED_HEADING.test(heading.slice(0, 160));
};

const records = [];

for (const file of walk(DIST)) {
  const url = toUrl(file);
  const parts = url.split("/").filter(Boolean);
  if (parts.length !== 4) continue;
  if (parts[0] !== "seo-for-therapists" && parts[0] !== "ai-search-optimization") continue;

  const html = fs.readFileSync(file, "utf8");
  const { main, blocks } = sections(html);

  const wholeText = textOf(main);
  const cityBlocks = blocks.filter((block) => !isShared(block));
  const sharedBlocks = blocks.filter((block) => isShared(block));

  const wholeChars = wholeText.length;
  const sharedChars = sharedBlocks.reduce((sum, block) => sum + textOf(block).length, 0);

  records.push({
    url,
    service: parts[0],
    whole: shingles(tokens(wholeText)),
    city: shingles(tokens(cityBlocks.map(textOf).join(" "))),
    sharedPct: wholeChars ? Math.round((sharedChars / wholeChars) * 100) : 0,
  });
}

const topPairs = (key) => {
  const out = [];
  for (const service of ["seo-for-therapists", "ai-search-optimization"]) {
    const pages = records.filter((record) => record.service === service);
    for (let i = 0; i < pages.length; i += 1) {
      for (let j = i + 1; j < pages.length; j += 1) {
        out.push({
          service,
          a: pages[i].url,
          b: pages[j].url,
          score: jaccard(pages[i][key], pages[j][key]),
        });
      }
    }
  }
  return out.sort((one, two) => two.score - one.score).slice(0, 10);
};

console.log(`city pages: ${records.length}`);
for (const service of ["seo-for-therapists", "ai-search-optimization"]) {
  console.log(`  ${service}: ${records.filter((record) => record.service === service).length}`);
}

console.log("\n(a) whole-page body similarity — top 10");
for (const pair of topPairs("whole")) {
  console.log(`  ${pair.score.toFixed(3)}  ${pair.a}  <>  ${pair.b}`);
}

console.log("\n(b) city-specific sections only — top 10");
for (const pair of topPairs("city")) {
  console.log(`  ${pair.score.toFixed(3)}  ${pair.a}  <>  ${pair.b}`);
}

console.log("\nshared template copy, share of body text");
for (const record of [...records].sort((one, two) => two.sharedPct - one.sharedPct)) {
  console.log(`  ${String(record.sharedPct).padStart(3)}%  ${record.url}`);
}
