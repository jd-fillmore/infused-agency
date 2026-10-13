#!/usr/bin/env node
/* eslint-disable no-console */
// Reports character lengths and site-wide duplicates for the 7 new
// /seo/for-*-niagara industry pages. Read-only: simple source scan of literal
// page-level title/description strings (Head <title>, meta description, page
// `seo:` objects, and TITLE/DESCRIPTION constants).
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");

const NEW_PAGES = [
  {
    url: "/seo/for-concrete-contractors-niagara",
    title: "SEO for Concrete Contractors in Niagara | Infused Agency",
    description:
      "Local SEO for Niagara concrete contractors. Get found for driveways, patios, pool decks and foundations across Niagara. Free consultation.",
  },
  {
    url: "/seo/for-insulation-niagara",
    title: "SEO for Insulation Contractors in Niagara | Infused Agency",
    description:
      "Local SEO for Niagara insulation contractors. Get found by homeowners and builders across the region. Free consultation from a St. Catharines team.",
  },
  {
    url: "/seo/for-electricians-niagara",
    title: "SEO for Electricians in Niagara | Infused Agency",
    description:
      "Local SEO for Niagara electricians. Show up when homeowners search for an electrician in St. Catharines, Niagara Falls and Welland. Free consultation.",
  },
  {
    url: "/seo/for-law-firms-niagara",
    title: "SEO for Law Firms in Niagara | Infused Agency",
    description:
      "Local SEO for Niagara law firms. Get found when clients search for a lawyer across St. Catharines, Niagara Falls and the region. Free consultation.",
  },
  {
    url: "/seo/for-solar-companies-niagara",
    title: "SEO for Solar Companies in Niagara | Infused Agency",
    description:
      "Local SEO for Niagara solar companies. Delta Energy Solutions saw +670% local visibility after working with us. Free consultation.",
  },
  {
    url: "/seo/for-wineries-niagara",
    title: "SEO for Wineries in Niagara | Infused Agency",
    description:
      "Local SEO for Niagara wineries. Flat Rock Cellars saw +550% local visibility after working with us. Get found by visitors and wine buyers.",
  },
  {
    url: "/seo/for-deck-builders-niagara",
    title: "SEO for Deck Builders in Niagara | Infused Agency",
    description:
      "Local SEO for Niagara deck builders and outdoor living contractors: decks, pergolas, fencing and more. Free consultation.",
  },
];

const TITLE_MAX = 60;
const DESCRIPTION_MAX = 155;

function walk(dir, exts, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "node_modules" || entry.name === ".next") continue;
      walk(full, exts, acc);
    } else if (exts.includes(path.extname(entry.name))) {
      acc.push(full);
    }
  }
  return acc;
}

function collect(patterns, text, out) {
  for (const re of patterns) {
    let m;
    while ((m = re.exec(text)) !== null) {
      const value = (m[1] || "").trim();
      if (value) out.push(value);
    }
  }
}

function gather() {
  const files = [
    ...walk(path.join(ROOT, "src", "pages"), [".js", ".jsx", ".ts", ".tsx"]),
    ...walk(path.join(ROOT, "components"), [".js", ".jsx", ".ts", ".tsx"]),
    ...walk(path.join(ROOT, "data"), [".json"]),
    ...walk(path.join(ROOT, "src", "generated"), [".json"]),
  ];

  const titles = [];
  const descriptions = [];

  const titlePatterns = [
    /<title>([^<]+)<\/title>/g,
    /\bTITLE\s*=\s*["'`]([^"'`]+)["'`]/g,
    /seo:\s*\{[\s\S]*?title:\s*["'`]([^"'`]+)["'`]/g,
    /metaTitle:\s*["'`]([^"'`]+)["'`]/g,
  ];
  const descPatterns = [
    /name=["']description["'][^>]*content=["']([^"']+)["']/g,
    /content=["']([^"']+)["'][^>]*name=["']description["']/g,
    /\bDESCRIPTION\s*=\s*["'`]([^"'`]+)["'`]/g,
    /seo:\s*\{[\s\S]*?description:\s*["'`]([^"'`]+)["'`]/g,
    /metaDescription:\s*["'`]([^"'`]+)["'`]/g,
  ];

  for (const file of files) {
    let text;
    try {
      text = fs.readFileSync(file, "utf8");
    } catch (_e) {
      continue;
    }
    const rel = path.relative(ROOT, file);
    const t = [];
    collect(titlePatterns, text, t);
    t.forEach((v) => titles.push({ value: v, file: rel }));
    const d = [];
    collect(descPatterns, text, d);
    d.forEach((v) => descriptions.push({ value: v, file: rel }));
  }

  return { titles, descriptions };
}

function report(label, value, max) {
  const len = value.length;
  const flag = len > max ? `  ⚠ OVER (${len - max} over)` : "";
  console.log(`  [${String(len).padStart(3)}] ${label}${flag}`);
  console.log(`        ${value}`);
}

function duplicates(label, entries) {
  const byValue = new Map();
  for (const e of entries) {
    if (!byValue.has(e.value)) byValue.set(e.value, []);
    byValue.get(e.value).push(e.file || "(new page)");
  }
  const dups = [...byValue.entries()].filter(([, files]) => files.length > 1);
  if (!dups.length) {
    console.log(`  No ${label} duplicates found.`);
    return;
  }
  console.log(`  ${label} duplicates:`);
  for (const [value, files] of dups) {
    console.log(`   - "${value}"`);
    files.forEach((f) => console.log(`       ${f}`));
  }
}

console.log("=== New Niagara industry page meta: lengths ===");
for (const p of NEW_PAGES) {
  console.log(`\n${p.url}`);
  report("title", p.title, TITLE_MAX);
  report("description", p.description, DESCRIPTION_MAX);
}

const { titles, descriptions } = gather();

console.log(
  `\n=== Duplicate check (vs ${titles.length} title literals, ${descriptions.length} description literals found in source) ===`
);

const newTitleEntries = NEW_PAGES.map((p) => ({ value: p.title, file: p.url }));
const newDescEntries = NEW_PAGES.map((p) => ({
  value: p.description,
  file: p.url,
}));

console.log("\n-- Titles (new pages only) --");
duplicates("title", newTitleEntries);
console.log("\n-- Descriptions (new pages only) --");
duplicates("description", newDescEntries);

console.log("\n-- New titles vs existing titles --");
for (const e of newTitleEntries) {
  const hits = titles.filter((t) => t.value === e.value);
  if (hits.length) {
    console.log(`  COLLISION: "${e.value}"`);
    hits.forEach((h) => console.log(`    ${h.file}`));
  }
}
console.log("-- New descriptions vs existing descriptions --");
for (const e of newDescEntries) {
  const hits = descriptions.filter((d) => d.value === e.value);
  if (hits.length) {
    console.log(`  COLLISION: "${e.value}"`);
    hits.forEach((h) => console.log(`    ${h.file}`));
  }
}
