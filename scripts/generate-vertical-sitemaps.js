#!/usr/bin/env node
// Runs after `next-sitemap`. Removes vertical pages from the default sitemap,
// writes one child sitemap per live vertical (published pages only, lastmod from
// each content file's `updated` field), and rebuilds the sitemap index.
const fs = require("fs");
const path = require("path");
const seo = require("../src/lib/verticalSeo");
const services = require("../src/lib/services");

const PUBLIC = path.join(process.cwd(), "public");
const SERVICE_PREFIXES = services.loadServices().map((s) => s.url);

function locBlock(block) {
  const m = block.match(/<loc>([^<]+)<\/loc>/);
  return m ? m[1] : null;
}

function scrubDefaultSitemap(verticalPrefixes, exactUrls) {
  const file = path.join(PUBLIC, "sitemap-0.xml");
  if (!fs.existsSync(file)) return;
  const xml = fs.readFileSync(file, "utf8");
  const header = xml.slice(0, xml.indexOf("<url>"));
  const blocks = xml.match(/<url>[\s\S]*?<\/url>/g) || [];
  const exact = exactUrls.map((u) => u.replace(/\/$/, ""));
  const kept = blocks.filter((b) => {
    const loc = locBlock(b);
    if (!loc) return false;
    const rel = loc.replace(seo.SITE, "").replace(/\/$/, "");
    if (verticalPrefixes.some(
      (p) => rel === p || rel.startsWith(p + "/"))
    ) return false;
    // Service URLs move to sitemap-services.xml (exact match only, so city and
    // legacy pages under /seo and /web-design stay in the default sitemap).
    if (exact.includes(rel)) return false;
    return true;
  });
  const out = header + kept.join("") + "</urlset>\n";
  fs.writeFileSync(file, out, "utf8");
  console.log(`sitemap-0.xml: kept ${kept.length} of ${blocks.length} URLs`);
}

function writeVerticalSitemap(vertical, records) {
  const entries = records
    .filter((r) => r.page.vertical.slug === vertical.slug)
    .sort((a, b) => a.page.urlPath.localeCompare(b.page.urlPath))
    .map((r) => {
      const lastmod = (r.content && r.content.updated) || undefined;
      return (
        "<url>" +
        `<loc>${seo.SITE}${r.page.urlPath}</loc>` +
        (lastmod ? `<lastmod>${lastmod}</lastmod>` : "") +
        "<changefreq>monthly</changefreq>" +
        "<priority>0.7</priority>" +
        "</url>"
      );
    });
  if (!entries.length) return null;
  const xml =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    entries.join("\n") +
    "\n</urlset>\n";
  const name = `sitemap-vertical-${vertical.slug}.xml`;
  fs.writeFileSync(path.join(PUBLIC, name), xml, "utf8");
  console.log(`${name}: ${entries.length} URLs`);
  return name;
}

function writeIndex(childNames) {
  const all = ["sitemap-0.xml", ...childNames];
  const body = all
    .map((n) => `<sitemap><loc>${seo.SITE}/${n}</loc></sitemap>`)
    .join("\n");
  const xml =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    body +
    "\n</sitemapindex>\n";
  fs.writeFileSync(path.join(PUBLIC, "sitemap.xml"), xml, "utf8");
  console.log(`sitemap.xml: index with ${all.length} children`);
}

// A vertical that is no longer published (unreleased wave, held, or skipped by
// the quality gate) must not keep a stale child sitemap on disk: it is still
// fetchable even when the index does not link it. Remove any child sitemap that
// was not written this run.
function removeStaleVerticalSitemaps(writtenNames) {
  const written = new Set(writtenNames);
  for (const f of fs.readdirSync(PUBLIC)) {
    if (!/^sitemap-vertical-.*\.xml$/.test(f)) continue;
    if (written.has(f)) continue;
    fs.unlinkSync(path.join(PUBLIC, f));
    console.log(`removed stale ${f}`);
  }
}

function writeServiceSitemap(publishedServices) {
  const entries = publishedServices
    .slice()
    .sort((a, b) => a.service.url.localeCompare(b.service.url))
    .map((r) => {
      const lastmod = r.service.updated || undefined;
      return (
        "<url>" +
        `<loc>${seo.SITE}${r.service.url}</loc>` +
        (lastmod ? `<lastmod>${lastmod}</lastmod>` : "") +
        "<changefreq>monthly</changefreq>" +
        "<priority>0.7</priority>" +
        "</url>"
      );
    });
  if (!entries.length) return null;
  const xml =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    entries.join("\n") +
    "\n</urlset>\n";
  const name = "sitemap-services.xml";
  fs.writeFileSync(path.join(PUBLIC, name), xml, "utf8");
  console.log(`${name}: ${entries.length} URLs`);
  return name;
}

function main() {
  const { published } = seo.computePublished();
  const verticalPrefixes = seo.loadVerticals().map((v) => `/${v.urlSlug}`);
  const { published: publishedServices } = services.computePublishedServices();
  scrubDefaultSitemap(verticalPrefixes, SERVICE_PREFIXES);

  const childNames = [];
  for (const v of seo.loadVerticals()) {
    if (v.launchStatus !== "live") continue;
    const name = writeVerticalSitemap(v, published);
    if (name) childNames.push(name);
  }
  const servicesName = writeServiceSitemap(publishedServices);
  if (servicesName) childNames.push(servicesName);
  removeStaleVerticalSitemaps(childNames);
  writeIndex(childNames);
}

main();
