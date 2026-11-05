// Post-build gate over the rendered city pages.
//
// Similarity: 5-word shingle Jaccard on the body text of <main>, which excludes
// the nav and footer. Elements marked data-shared (pricing, testimonials,
// nearby-city lists, chip directories) are removed first so shared components
// do not count as duplicated copy.
//
// Thresholds (documented in REDIRECTS.md and the build output):
//   - maximum pairwise Jaccard similarity within a service: 0.45
//   - minimum unique words on a live city page: 400

import fs from "node:fs";
import path from "node:path";
import { ASTRO_ROOT, SERVICES, MAX_SIMILARITY, MIN_UNIQUE_WORDS, liveCities, cityPath } from "../src/lib/locations.mjs";

const DIST = path.join(ASTRO_ROOT, "dist");
const SHINGLE = 5;

function htmlFileFor(pathname) {
  const direct = path.join(DIST, `${pathname.replace(/^\//, "")}.html`);
  const index = path.join(DIST, pathname.replace(/^\//, ""), "index.html");
  if (fs.existsSync(direct)) return direct;
  if (fs.existsSync(index)) return index;
  return null;
}

function textOf(html) {
  const main = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i)?.[1] ?? "";
  const stripped = main
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+data-shared[^>]*>[\s\S]*?<\/[a-z]+>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z#0-9]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
  return stripped.toLowerCase();
}

function tokens(text) {
  return text.match(/[a-z0-9']+/g) ?? [];
}

function shingles(words) {
  const set = new Set();
  for (let i = 0; i + SHINGLE <= words.length; i += 1) {
    set.add(words.slice(i, i + SHINGLE).join(" "));
  }
  return set;
}

function jaccard(a, b) {
  let intersection = 0;
  for (const value of a) if (b.has(value)) intersection += 1;
  return intersection / (a.size + b.size - intersection);
}

const errors = [];

for (const config of SERVICES) {
  const pages = [];

  for (const record of liveCities(config.slug)) {
    const pathname = cityPath(config.slug, record.country, record.region, record.city);
    const file = htmlFileFor(pathname);
    if (!file) {
      errors.push(`${pathname}: built HTML not found.`);
      continue;
    }
    const text = textOf(fs.readFileSync(file, "utf8"));
    const words = tokens(text);
    const unique = new Set(words.filter((word) => word.length > 2));
    if (unique.size < MIN_UNIQUE_WORDS) {
      errors.push(`${pathname}: ${unique.size} unique words (minimum ${MIN_UNIQUE_WORDS}).`);
    }
    pages.push({ pathname, shingles: shingles(words), unique: unique.size });
  }

  const pairs = [];
  for (let i = 0; i < pages.length; i += 1) {
    for (let j = i + 1; j < pages.length; j += 1) {
      pairs.push({
        a: pages[i].pathname,
        b: pages[j].pathname,
        score: jaccard(pages[i].shingles, pages[j].shingles),
      });
    }
  }
  pairs.sort((left, right) => right.score - left.score);

  console.log(`\n${config.slug}: ${pages.length} city pages`);
  for (const page of pages.sort((a, b) => a.pathname.localeCompare(b.pathname))) {
    console.log(`  ${page.pathname.padEnd(56)} ${String(page.unique).padStart(5)} unique words`);
  }
  console.log("  closest pairs (5-gram Jaccard, limit 0.45):");
  for (const pair of pairs.slice(0, 8)) {
    console.log(`   ${pair.score.toFixed(3)}  ${pair.a}  <>  ${pair.b}`);
    if (pair.score > MAX_SIMILARITY) {
      errors.push(
        `${pair.a} and ${pair.b}: similarity ${pair.score.toFixed(3)} exceeds ${MAX_SIMILARITY}.`
      );
    }
  }
}

if (errors.length > 0) {
  console.error(`\n${errors.length} location uniqueness/word-count error(s):`);
  for (const error of errors) console.error(` - ${error}`);
  process.exit(1);
}

console.log("\nLocation uniqueness check passed.");
