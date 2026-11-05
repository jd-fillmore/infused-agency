// Post-build gate over every built location page: city pages, region hubs,
// country hubs and the two service roots.
//
// Checks, per page: self-referencing canonical, title <= 60 characters,
// description 140-160 characters, no duplicate titles or descriptions, valid
// JSON-LD with a Service/ProfessionalService, BreadcrumbList and (on city
// pages) FAQPage, no link into a hierarchy page that was not built, and the
// remote-from-Niagara statement.
//
// Lengths are measured on decoded text so HTML entities do not inflate them.
// Exits non-zero when anything fails.

import fs from "node:fs";
import path from "node:path";

const DIST = "astro/dist";
const SEP = path.sep;

const walk = (dir, acc = []) => {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, acc);
    else if (entry.name === "index.html") acc.push(full);
  }
  return acc;
};

const exists = (url) =>
  fs.existsSync(path.join(DIST, url.slice(1) + ".html")) ||
  fs.existsSync(path.join(DIST, url.slice(1), "index.html"));

const toUrl = (file) => {
  const parts = path.relative(DIST, file).split(SEP);
  if (parts[parts.length - 1] === "index.html") parts.pop();
  return "/" + parts.join("/");
};

const decode = (value) =>
  value
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&#(\d+);/g, (_match, code) => String.fromCharCode(Number(code)));

const pages = walk(DIST).filter((file) => {
  const parts = path.relative(DIST, file).split(SEP);
  return parts[0] === "seo-for-therapists" || parts[0] === "ai-search-optimization";
});

const errors = [];
const titles = new Map();
const descs = new Map();

for (const file of pages) {
  const html = fs.readFileSync(file, "utf8");
  const url = toUrl(file);

  const canon = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1] ?? "";
  if (!canon.endsWith(url)) errors.push(`${url}: canonical is ${canon}`);

  const title = decode(html.match(/<title>([^<]*)<\/title>/)?.[1] ?? "");
  if (title.length > 60) errors.push(`${url}: title ${title.length} chars`);
  if (titles.has(title)) errors.push(`${url}: duplicate title with ${titles.get(title)}`);
  titles.set(title, url);

  const desc = decode(html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? "");
  if (desc.length > 160 || desc.length < 140)
    errors.push(`${url}: description ${desc.length} chars`);
  if (descs.has(desc)) errors.push(`${url}: duplicate description with ${descs.get(desc)}`);
  descs.set(desc, url);

  const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  const types = [];
  for (const [, body] of blocks) {
    try {
      const parsed = JSON.parse(body);
      for (const node of parsed["@graph"] ?? [parsed]) types.push(node["@type"]);
    } catch (error) {
      errors.push(`${url}: invalid JSON-LD (${error.message})`);
    }
  }
  if (!types.includes("BreadcrumbList")) errors.push(`${url}: no BreadcrumbList`);
  if (!types.some((type) => type === "Service" || type === "ProfessionalService"))
    errors.push(`${url}: no Service/ProfessionalService`);
  if (url.split("/").length >= 6 && !types.includes("FAQPage"))
    errors.push(`${url}: no FAQPage`);

  for (const [, href] of html.matchAll(
    /href="(\/(?:seo-for-therapists|ai-search-optimization)\/[^"#?]*)"/g
  )) {
    if (!exists(href)) errors.push(`${url}: dead hierarchy link ${href}`);
  }

  if (!/remotely/i.test(html) || !/Niagara/.test(html))
    errors.push(`${url}: missing remote-from-Niagara statement`);
}

console.log(`audited ${pages.length} location pages (city + hub + service roots)`);
if (errors.length) {
  console.log(`${errors.length} issue(s):\n - ${errors.slice(0, 25).join("\n - ")}`);
  process.exitCode = 1;
} else {
  console.log("no structural issues");
}
