#!/usr/bin/env node
// Launch-surface proof. After a build, asserts that only released verticals are
// reachable and present anywhere:
//   * every released pillar/province/city route is prerendered (so it is served)
//   * no unreleased / held / frozen vertical has ANY prerendered route
//     (fallback:false => those URLs 404)
//   * no unreleased vertical appears in any sitemap, the services nav snapshot,
//     the /industries page, or the homepage (footer / industry chips)
//
// Usage: node scripts/verify-launch-surface.js [YYYY-MM-DD]
//   (date defaults to LAUNCH_AS_OF, else today)
const fs = require("fs");
const path = require("path");
const launch = require("../src/lib/launch");
const seo = require("../src/lib/verticalSeo");

const ROOT = path.join(__dirname, "..");
const SITE = seo.SITE;
const asOf = process.argv[2] || process.env.LAUNCH_AS_OF || launch.asOfDate();

const verticals = JSON.parse(
  fs.readFileSync(path.join(ROOT, "data", "vertical-seo", "verticals.json"), "utf8")
);
const bySlug = new Map(verticals.map((v) => [v.slug, v]));
const released = launch.releasedSlugs(asOf);
const held = new Set(launch.loadLaunch().hold || []);
const absent = verticals.map((v) => v.slug).filter((s) => !released.has(s));

function readIfExists(p) {
  return fs.existsSync(p) ? fs.readFileSync(p, "utf8") : "";
}
function escapeRe(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function mentions(text, token) {
  return new RegExp(`(^|[^a-z0-9-])${escapeRe(token)}([^a-z0-9-]|$)`, "i").test(text);
}

// 1. Prerendered routes.
const prerender = JSON.parse(
  readIfExists(path.join(ROOT, ".next", "prerender-manifest.json")) || "{}"
);
const routes = Object.keys(prerender.routes || {});
if (!routes.length) {
  console.error("No .next/prerender-manifest.json found — run `yarn build` first.");
  process.exit(2);
}

// 2. Sitemaps (index + children).
const publicDir = path.join(ROOT, "public");
const sitemapFiles = fs
  .readdirSync(publicDir)
  .filter((f) => /^sitemap.*\.xml$/.test(f))
  .map((f) => path.join(publicDir, f));
const sitemapLocs = [];
for (const file of sitemapFiles) {
  const xml = readIfExists(file);
  for (const m of xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)) sitemapLocs.push(m[1]);
}
const pageLocs = sitemapLocs.filter((l) => l.startsWith(SITE + "/"));

// 3. Surfaces.
const navText = readIfExists(path.join(ROOT, "src", "generated", "services-nav.json"));
const industriesHtml = readIfExists(
  path.join(ROOT, ".next", "server", "pages", "industries.html")
);
const indexHtml = readIfExists(path.join(ROOT, ".next", "server", "pages", "index.html"));

const failures = [];
const urlSlugs = new Set(verticals.map((v) => v.urlSlug));
const verticalRoutes = routes.filter((r) => urlSlugs.has(r.split("/")[1]));

function assertNowhere(v, label) {
  const prefix = `/${v.urlSlug}`;
  const badRoutes = routes.filter((r) => r === prefix || r.startsWith(prefix + "/"));
  if (badRoutes.length) failures.push(`${v.slug}${label}: prerendered (${badRoutes.slice(0, 3).join(", ")})`);
  const badLocs = pageLocs.filter((l) => l === SITE + prefix || l.startsWith(SITE + prefix + "/"));
  if (badLocs.length) failures.push(`${v.slug}${label}: in sitemap (${badLocs.slice(0, 3).join(", ")})`);
  if (mentions(navText, v.urlSlug)) failures.push(`${v.slug}${label}: in services nav`);
  if (mentions(industriesHtml, v.urlSlug)) failures.push(`${v.slug}${label}: in /industries`);
  if (mentions(indexHtml, v.urlSlug)) failures.push(`${v.slug}${label}: in homepage`);
}

const liveReleased = [];
// Released live pillar routes must be prerendered. Scaffold verticals are
// released on schedule but intentionally never build pages.
for (const slug of released) {
  const v = bySlug.get(slug);
  if (!v || v.launchStatus !== "live") continue;
  liveReleased.push(slug);
  const pillar = `/${v.urlSlug}`;
  if (!routes.includes(pillar)) failures.push(`released pillar missing route: ${pillar}`);
}

// Unreleased verticals (any status) and scaffold verticals (any wave) must be
// nowhere.
for (const slug of absent) {
  const v = bySlug.get(slug);
  if (v) assertNowhere(v, "");
}
for (const v of verticals) {
  if (v.launchStatus === "live") continue;
  assertNowhere(v, " (scaffold)");
}

const config = launch.loadLaunch();
const perWave = config.waves.map((w) => {
  const active = w.verticals.filter((s) => released.has(s)).length;
  return `  wave ${w.wave} (${launch.waveDate(w)}): ${active}/${w.verticals.length} released`;
});

// Concrete pillar/province/city spot-check (must 404) for the report, using the
// next unreleased wave (first still-unreleased vertical) and a held vertical.
const spotSlugs = [];
const nextWave = config.waves.find((w) =>
  (w.verticals || []).some((s) => !released.has(s))
);
if (nextWave) {
  spotSlugs.push([
    nextWave.verticals.find((s) => !released.has(s)),
    `wave ${nextWave.wave}`,
  ]);
}
if ((config.hold || [])[0]) spotSlugs.push([config.hold[0], "on hold"]);
const spotLines = [];
for (const [slug, label] of spotSlugs) {
  const v = bySlug.get(slug);
  if (!v || released.has(slug)) continue;
  for (const u of [`/${v.urlSlug}`, `/${v.urlSlug}/ontario`, `/${v.urlSlug}/ontario/toronto`]) {
    const present = routes.includes(u);
    spotLines.push(`  ${present ? "FOUND" : "404"}   ${label} — ${u}`);
    if (present) failures.push(`spot-check ${slug} present: ${u}`);
  }
}

console.log(`Launch surface check — as-of ${asOf}`);
console.log(`  released: ${released.size} / ${verticals.length} verticals (${liveReleased.length} live)`);
console.log(`  held: ${held.size}`);
perWave.forEach((l) => console.log(l));
console.log(`  prerendered routes: ${routes.length}`);
console.log(`  sitemap page URLs: ${pageLocs.length} across ${sitemapFiles.length} file(s)`);
console.log(`  vertical prerender routes: ${verticalRoutes.length}`);
if (spotLines.length) {
  console.log(`  spot-check (pillar / province / city, must 404):`);
  spotLines.forEach((l) => console.log(l));
}

if (failures.length) {
  console.error(`\nFAIL (${failures.length}):`);
  for (const f of failures) console.error("  ! " + f);
  process.exitCode = 1;
} else {
  console.log(`\nOK — no unreleased vertical is reachable or referenced anywhere.`);
}
