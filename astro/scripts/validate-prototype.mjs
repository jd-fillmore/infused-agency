#!/usr/bin/env node
/**
 * Phase 3 prototype validator.
 *
 * Checks the generated static build for the things that can be verified
 * without a browser: document metadata, canonical URLs, a single H1, JSON-LD
 * parsing and node types, internal links, local assets, self-hosted scripts,
 * analytics absence, and retired-route links.
 *
 * It does not test rendering, Lighthouse, or live-host behaviour.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  RETIRED_ROUTES,
  RETIRED_ROUTE_PATHS,
  getRetiredRoute,
} from "../src/lib/retired-routes.mjs";
import {
  SERVICE_SLUGS,
  reviewCities,
  cityPath,
  PRODUCTION_BUILD,
} from "../src/lib/locations.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..", "..");
const distDir = path.resolve(repoRoot, "astro", "dist");
const manifestPath = path.resolve(repoRoot, "docs", "astro-rebuild", "route-manifest.csv");
const SITE = "https://infused.agency";
const DEFAULT_OG_IMAGE = "/img/og-infused.jpg";

const errors = [];
const warnings = [];
const info = [];

function error(file, message) {
  errors.push(`${file}: ${message}`);
}

function warn(file, message) {
  warnings.push(`${file}: ${message}`);
}

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

function readManifestUrls() {
  if (!fs.existsSync(manifestPath)) {
    throw new Error(`Missing route manifest: ${manifestPath}`);
  }
  const urls = new Set();
  const lines = fs.readFileSync(manifestPath, "utf8").trim().split(/\r?\n/).slice(1);
  for (const line of lines) {
    const match = line.match(/^(?:"([^"]*)"|([^,]*))/);
    const value = (match?.[1] ?? match?.[2] ?? "").trim();
    if (value) urls.add(value.replace(/\/+$/, "") || "/");
  }
  return urls;
}

function routeForFile(file) {
  const rel = path.relative(distDir, file).split(path.sep).join("/");
  if (rel === "index.html") return "/";
  if (rel.endsWith("/index.html")) return `/${rel.slice(0, -"/index.html".length)}`;
  return `/${rel.replace(/\.html$/, "")}`;
}

function normalizeRedirectPath(value) {
  const clean = String(value || "").trim().replace(/\/+$/, "");
  return clean || "/";
}

function builtRouteExists(route, htmlRoutes) {
  if (route === "/") return fs.existsSync(path.join(distDir, "index.html"));
  if (htmlRoutes.has(route)) return true;
  return fs.existsSync(path.join(distDir, route.slice(1), "index.html"));
}

function collectJsonLdTypes(node, acc = new Set()) {
  if (Array.isArray(node)) {
    node.forEach((item) => collectJsonLdTypes(item, acc));
    return acc;
  }
  if (node && typeof node === "object") {
    const type = node["@type"];
    if (typeof type === "string") acc.add(type);
    if (Array.isArray(type)) type.forEach((value) => acc.add(String(value)));
    if (node["@graph"]) collectJsonLdTypes(node["@graph"], acc);
    for (const [key, value] of Object.entries(node)) {
      if (key !== "@context" && key !== "@type") collectJsonLdTypes(value, acc);
    }
  }
  return acc;
}

function normalizeInternal(href) {
  try {
    if (href.startsWith("http")) {
      const url = new URL(href);
      if (url.hostname === "infused.agency" || url.hostname === "www.infused.agency") {
        return url.pathname || "/";
      }
      return null;
    }
  } catch {
    return null;
  }
  if (!href.startsWith("/")) return null;
  return href.split("#")[0].split("?")[0] || "/";
}

function expectedCanonical(route) {
  if (route === "/") return SITE;
  return `${SITE}${route}`;
}

const EXPECTED_TYPES = {
  "/": ["Organization", "WebSite", "WebPage", "FAQPage"],
  "/seo": ["CollectionPage", "BreadcrumbList", "Service"],
  "/seo/port-colborne": ["WebPage", "BreadcrumbList", "Service", "FAQPage"],
  "/blog": ["CollectionPage", "BreadcrumbList"],
  "/get-a-quote": ["ContactPage", "BreadcrumbList"],
};

// Utility files published at the build root are opaque service blobs (for
// example the Google Search Console verification file); they carry no page
// metadata and are deliberately excluded from the sitemap.
const UTILITY_FILES = new Set(["googlea476b363e2afb389.html"]);

const NOINDEX_ROUTES = new Set(["/404", "/500"]);

function run() {
  if (!fs.existsSync(distDir)) {
    throw new Error(`No Astro build found at ${distDir}. Run "yarn build:astro" first.`);
  }

  const manifestUrls = readManifestUrls();
  const htmlFiles = walk(distDir).filter(
    (file) => file.endsWith(".html") && !UTILITY_FILES.has(path.basename(file))
  );
  if (htmlFiles.length === 0) throw new Error("The build contains no HTML files.");

  if (!fs.existsSync(path.join(distDir, DEFAULT_OG_IMAGE.replace(/^\//, "")))) {
    error("dist", `missing default social image ${DEFAULT_OG_IMAGE}`);
  }

  const htmlRoutes = new Set(htmlFiles.map(routeForFile));
  const notMigrated = new Set();

  // Redirect sources defined by the built _redirects file. An internal link may
  // resolve to a real redirect instead of a built page, but linking to a legacy
  // URL should be rare and is reported below.
  const redirectSources = new Set();
  const redirectsPath = path.join(distDir, "_redirects");
  if (fs.existsSync(redirectsPath)) {
    for (const line of fs.readFileSync(redirectsPath, "utf8").split(/\r?\n/)) {
      const row = line.trim();
      if (!row || row.startsWith("#")) continue;
      const tokens = row.split(/\s+/);
      if (tokens.length < 2) continue;
      const status = /^\d{3}$/.test(tokens[tokens.length - 1]) ? tokens[tokens.length - 1] : "301";
      if (status === "410") continue;
      redirectSources.add(normalizeRedirectPath(tokens[0]));
    }
  }
  const linkedRedirects = new Set();

  // Retired routes must never be emitted as canonical, indexable pages.
  for (const entry of RETIRED_ROUTES) {
    if (builtRouteExists(entry.route, htmlRoutes)) {
      error("dist", `retired route was built as an active page: ${entry.route}`);
    }
  }

  for (const file of htmlFiles) {
    const rel = path.relative(distDir, file);
    const route = routeForFile(file);
    const html = fs.readFileSync(file, "utf8");
    const isNoindex = NOINDEX_ROUTES.has(route);

    // Document basics.
    if (!/<html[^>]*lang="en-CA"/.test(html)) error(rel, "html lang is not en-CA");
    if (!/<meta name="viewport"/.test(html)) error(rel, "missing viewport meta");
    const titles = html.match(/<title>[\s\S]*?<\/title>/g) ?? [];
    if (titles.length !== 1) error(rel, `expected one <title>, found ${titles.length}`);
    const title = titles[0]?.replace(/<\/?title>/g, "").trim() ?? "";
    if (!title) error(rel, "empty title");

    const description = html.match(/<meta name="description" content="([^"]*)"/)?.[1];
    if (!description || !description.trim()) error(rel, "missing meta description");

    const h1Count = (html.match(/<h1\b/g) ?? []).length;
    if (h1Count !== 1) error(rel, `expected one H1, found ${h1Count}`);

    // Canonical and robots. Review-status location pages build outside
    // production and are published noindex, nofollow without a canonical, so
    // even a deploy preview cannot be indexed.
    const robots = html.match(/<meta name="robots" content="([^"]*)"/)?.[1] ?? "";
    const isReviewPage = !isNoindex && robots.startsWith("noindex");
    const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
    if (isNoindex) {
      if (canonical) error(rel, "noindex error page must not emit a canonical");
    } else if (isReviewPage) {
      if (canonical) error(rel, "noindex (review) page must not emit a canonical");
      if (robots !== "noindex, nofollow") error(rel, `unexpected robots value: "${robots}"`);
    } else if (!canonical) {
      error(rel, "missing canonical");
    } else if (canonical !== expectedCanonical(route)) {
      error(rel, `canonical mismatch: ${canonical} (expected ${expectedCanonical(route)})`);
    }

    if (isNoindex && !robots.includes("noindex")) error(rel, "error page is not noindex");
    if (!isNoindex && !isReviewPage && robots !== "index, follow") {
      error(rel, `unexpected robots value: "${robots}"`);
    }

    // Open Graph.
    for (const property of ["og:title", "og:description", "og:type", "og:locale"]) {
      if (!html.includes(`property="${property}"`)) error(rel, `missing ${property}`);
    }

    const ogImage = html.match(/<meta property="og:image" content="([^"]+)"/)?.[1];
    if (!ogImage) {
      error(rel, "missing og:image");
    } else if (!ogImage.startsWith(`${SITE}/`)) {
      error(rel, `og:image is not absolute: ${ogImage}`);
    } else {
      const imagePath = new URL(ogImage).pathname.replace(/^\//, "");
      if (!fs.existsSync(path.join(distDir, imagePath))) {
        error(rel, `og:image file is missing: ${ogImage}`);
      }
    }

    if (!/<meta property="og:image:alt" content="[^"]+"/.test(html)) {
      error(rel, "missing og:image:alt");
    }
    if (!/<meta name="twitter:card" content="summary_large_image"/.test(html)) {
      error(rel, "missing summary_large_image Twitter card");
    }
    if (!/<meta name="twitter:image" content="[^"]+"/.test(html)) {
      error(rel, "missing twitter:image");
    }

    // JSON-LD.
    const ldBlocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
    if (!isNoindex && ldBlocks.length === 0) error(rel, "no JSON-LD found");
    const types = new Set();
    for (const block of ldBlocks) {
      try {
        const parsed = JSON.parse(block[1]);
        if (parsed["@context"] !== "https://schema.org") {
          error(rel, "JSON-LD is missing the schema.org context");
        }
        collectJsonLdTypes(parsed, types);
      } catch (parseError) {
        error(rel, `invalid JSON-LD: ${parseError.message}`);
      }
    }
    if (!isNoindex) {
      const expected = EXPECTED_TYPES[route] ?? (route.startsWith("/posts/") ? ["BlogPosting", "WebPage", "BreadcrumbList"] : []);
      for (const type of expected) {
        if (!types.has(type)) error(rel, `JSON-LD is missing ${type}`);
      }
    }

    // Scripts must be self-hosted; no analytics may load.
    for (const match of html.matchAll(/<script[^>]+src="([^"]+)"/g)) {
      if (!match[1].startsWith("/")) error(rel, `external script: ${match[1]}`);
    }
    const lower = html.toLowerCase();
    for (const needle of ["googletagmanager", "google-analytics", "clarity.ms", "gtag(", "datalayer"]) {
      if (lower.includes(needle)) error(rel, `analytics reference found: ${needle}`);
    }

    // Images need non-empty alt text (none of the prototype images are decorative).
    for (const img of html.matchAll(/<img\b[^>]*>/g)) {
      const tag = img[0];
      const alt = tag.match(/\balt="([^"]*)"/)?.[1];
      if (alt === undefined) error(rel, `image without alt: ${tag.slice(0, 90)}`);
      else if (!alt.trim()) error(rel, `image with empty alt: ${tag.slice(0, 90)}`);
    }

    // Internal links.
    for (const match of html.matchAll(/href="([^"]+)"/g)) {
      const href = match[1];
      if (href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) continue;

      const internal = normalizeInternal(href);
      if (!internal) {
        if (href.startsWith("/")) error(rel, `malformed internal link: ${href}`);
        continue;
      }

      // Static assets are validated separately.
      if (/\/[^/]+\.(?:[a-z0-9]{2,5}|webmanifest)$/i.test(internal)) continue;

      if (internal.length > 1 && internal.endsWith("/")) {
        error(rel, `internal link uses a trailing slash: ${href}`);
      }

      const retired = getRetiredRoute(internal);
      if (retired) {
        error(
          rel,
          `link to retired route (${retired.disposition}): ${internal}`
        );
        continue;
      }

      if (builtRouteExists(internal, htmlRoutes)) continue;

      // A legacy URL that resolves through a 301 is valid, but flag it so the
      // link can be updated to its final URL.
      if (redirectSources.has(normalizeRedirectPath(internal))) {
        linkedRedirects.add(internal);
        continue;
      }

      const manifestValue = internal.replace(/\/+$/, "") || "/";
      if (manifestUrls.has(manifestValue)) {
        notMigrated.add(internal);
      } else {
        error(rel, `link target is neither built nor in the route manifest: ${internal}`);
      }
    }

    // Local asset references.
    for (const match of html.matchAll(/\b(?:src|href)="(\/[^"]+\.(?:css|js|png|jpe?g|webp|svg|ico|woff2?|mp4|webmanifest))"/g)) {
      const asset = match[1].split("?")[0].split("#")[0];
      if (!fs.existsSync(path.join(distDir, asset.slice(1)))) {
        error(rel, `missing local asset: ${asset}`);
      }
    }

    if (!isNoindex) info.push(`${route} — ${title}`);
  }

  // Sitemap and robots.
  const sitemapFile = path.join(distDir, "sitemap.xml");
  if (!fs.existsSync(sitemapFile)) {
    error("dist", "missing sitemap.xml");
  } else {
    const sitemap = fs.readFileSync(sitemapFile, "utf8");
    if (!sitemap.startsWith('<?xml version="1.0" encoding="UTF-8"?>')) {
      error("sitemap.xml", "missing XML declaration");
    }
    if (/<\s*sitemapindex[\s>]/.test(sitemap)) {
      error("sitemap.xml", "must be a single flat urlset — no sitemap index");
    }
    // The single sitemap must stay within search-engine limits. Past this
    // point it has to be split into multiple sitemaps plus an index.
    if (sitemap.length > 45 * 1024 * 1024) {
      error(
        "sitemap.xml",
        `size limit exceeded (${(Buffer.byteLength(sitemap, "utf8") / 1024 / 1024).toFixed(1)} MB > 45 MB) — split the sitemap at this point`
      );
    }
    const readLocs = (xml) =>
      [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
    let locs = readLocs(sitemap);

    if (locs.length > 45000) {
      error(
        "sitemap.xml",
        `URL limit exceeded (${locs.length} > 45000) — split the sitemap at this point`
      );
    }
    // No child sitemap files may be published alongside the single sitemap.
    // Old child sitemaps 301 to /sitemap.xml instead (see _redirects).
    for (const name of fs.readdirSync(distDir)) {
      if (/^sitemap-.+\.xml$/.test(name)) {
        error("dist", `obsolete child sitemap published: /${name} (single /sitemap.xml only)`);
      }
    }
    if (locs.length === 0) error("sitemap.xml", "contains no URLs");
    if (new Set(locs).size !== locs.length) error("sitemap.xml", "contains duplicate URLs");

    const sitemapRoutes = new Set();
    for (const loc of locs) {
      if (!loc.startsWith(`${SITE}/`) && loc !== SITE) {
        error("sitemap.xml", `non-canonical URL: ${loc}`);
        continue;
      }
      const route = new URL(loc).pathname;
      if (route.length > 1 && route.endsWith("/")) {
        error("sitemap.xml", `trailing-slash URL: ${loc}`);
      }
      if (NOINDEX_ROUTES.has(route)) {
        error("sitemap.xml", `noindex route included: ${route}`);
      }
      if (RETIRED_ROUTE_PATHS.includes(route)) {
        error("sitemap.xml", `retired route included: ${route}`);
      }
      if (!builtRouteExists(route, htmlRoutes)) {
        error("sitemap.xml", `URL is not a built route: ${route}`);
      }
      sitemapRoutes.add(route);
    }

    for (const route of htmlRoutes) {
      if (NOINDEX_ROUTES.has(route) || sitemapRoutes.has(route)) continue;
      const coverFile = path.join(distDir, route.slice(1), "index.html");
      const coverHtml = fs.existsSync(coverFile) ? fs.readFileSync(coverFile, "utf8") : "";
      // Review pages are deliberately absent from the sitemap (noindexed).
      if (coverHtml.includes('<meta name="robots" content="noindex, nofollow"')) continue;
      error("sitemap.xml", `indexable route missing from sitemap: ${route}`);
    }
  }

  // Review-page safety gate. Review-status location pages build everywhere
  // except production, so even a deploy preview can ship them. The page route
  // emits noindex/nofollow for them, the sitemap never lists them and the
  // nearest-city/hub uses liveCities() so no internal links ever target them.
  // This gate enforces all of that, and refuses any review page in a build
  // that would actually reach the production host.
  const reviewPaths = [];
  for (const serviceSlug of SERVICE_SLUGS) {
    for (const { country, region, city } of reviewCities(serviceSlug)) {
      reviewPaths.push(cityPath(serviceSlug, country, region, city));
    }
  }
  for (const reviewPath of reviewPaths) {
    const reviewFile = path.join(distDir, reviewPath.slice(1), "index.html");
    if (!fs.existsSync(reviewFile)) continue;
    const reviewHtml = fs.readFileSync(reviewFile, "utf8");
    if (!reviewHtml.includes('content="noindex, nofollow"')) {
      error(reviewPath, "review page is missing the noindex, nofollow robots meta");
    }
    if (PRODUCTION_BUILD) {
      error(reviewPath, "review page built in a production build");
    }
  }
  if (fs.existsSync(sitemapFile)) {
    const sitemapText = fs.readFileSync(sitemapFile, "utf8");
    for (const reviewPath of reviewPaths) {
      if (sitemapText.includes(`<loc>${SITE}${reviewPath}</loc>`)) {
        error("sitemap.xml", `review page listed in the sitemap: ${reviewPath}`);
      }
    }
  }
  for (const route of htmlRoutes) {
    if (reviewPaths.includes(route)) continue;
    const linkedFile = path.join(distDir, route.slice(1), "index.html");
    if (!fs.existsSync(linkedFile)) continue;
    const html = fs.readFileSync(linkedFile, "utf8");
    for (const reviewPath of reviewPaths) {
      if (html.includes(`href="${reviewPath}"`)) {
        error(route, `single review page linked from other pages: ${reviewPath}`);
      }
    }
  }

  // Redirects: every retired route needs an explicit 301 or 410, 301 targets
  // must exist, and no rule may introduce a redirect chain.
  const redirectsFile = path.join(distDir, "_redirects");
  if (!fs.existsSync(redirectsFile)) {
    error("dist", "missing _redirects");
  } else {
    const rules = fs
      .readFileSync(redirectsFile, "utf8")
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter((line) => line && !line.startsWith("#") && !line.startsWith("/*"))
      .map((line) => {
        const tokens = line.split(/\s+/);
        if (tokens.length < 3) return null;
        const status = tokens[tokens.length - 1];
        const destination = tokens[tokens.length - 2];
        const source = tokens.slice(0, -2).join(" ");
        return { source, destination, status, raw: line };
      })
      .filter(Boolean);

    const bySource = new Map();
    for (const rule of rules) {
      const source = normalizeRedirectPath(rule.source);
      if (!bySource.has(source)) bySource.set(source, rule);
    }

    for (const entry of RETIRED_ROUTES) {
      const rule = bySource.get(entry.route);
      if (!rule) {
        error("_redirects", `missing rule for retired route: ${entry.route}`);
        continue;
      }
      const expectedStatus = entry.disposition === "redirect" ? "301" : "410";
      if (rule.status !== expectedStatus) {
        error(
          "_redirects",
          `${entry.route} uses ${rule.status}; expected ${expectedStatus}`
        );
      }
      if (entry.disposition === "redirect") {
        const target = normalizeRedirectPath(rule.destination);
        if (RETIRED_ROUTE_PATHS.includes(target)) {
          error("_redirects", `${entry.route} redirects to another retired route: ${target}`);
        } else if (!builtRouteExists(target, htmlRoutes)) {
          error("_redirects", `${entry.route} redirects to a missing page: ${target}`);
        }
        if (bySource.has(target)) {
          error("_redirects", `${entry.route} redirects into a chain via ${target}`);
        }
      } else if (normalizeRedirectPath(rule.destination) !== entry.route) {
        error("_redirects", `${entry.route} must be a self-referencing 410`);
      }
    }

    for (const rule of rules) {
      const destination = normalizeRedirectPath(rule.destination);
      const source = normalizeRedirectPath(rule.source);
      if (destination === source) continue;
      if (bySource.has(destination) && !RETIRED_ROUTE_PATHS.includes(source)) {
        warn(
          "_redirects",
          `pre-existing redirect chain: ${source} -> ${destination} -> ${bySource.get(destination).destination}`
        );
      }
    }
  }

  const robotsFile = path.join(distDir, "robots.txt");
  if (!fs.existsSync(robotsFile)) {
    error("dist", "missing robots.txt");
  } else {
    const robots = fs.readFileSync(robotsFile, "utf8");
    if (!robots.includes(`Sitemap: ${SITE}/sitemap.xml`)) {
      error("robots.txt", "missing canonical sitemap declaration");
    }
  }

  // CSS-referenced font assets.
  for (const cssFile of walk(distDir).filter((file) => file.endsWith(".css"))) {
    const css = fs.readFileSync(cssFile, "utf8");
    for (const match of css.matchAll(/url\((\/?[^)"']+\.(?:woff2?|ttf|otf))\)/g)) {
      const ref = match[1].replace(/^\.\//, "");
      const asset = ref.startsWith("/") ? ref.slice(1) : path.join("_astro", ref);
      if (!fs.existsSync(path.join(distDir, asset))) {
        error(path.relative(distDir, cssFile), `missing font asset: ${ref}`);
      }
    }
  }

  if (linkedRedirects.size > 0) {
    warn(
      "internal links",
      `${linkedRedirects.size} link(s) still point at legacy URLs that resolve only through a redirect: ${[...linkedRedirects]
        .sort()
        .join(", ")}`
    );
  }

  if (notMigrated.size > 0) {
    warn(
      "internal links",
      `${notMigrated.size} target(s) are valid production routes that are not part of this prototype build: ${[...notMigrated].sort().join(", ")}`
    );
  }

  console.log(`\nAstro prototype validation — ${htmlFiles.length} HTML files\n`);
  if (info.length) {
    console.log("Pages:");
    info.forEach((line) => console.log(`  ✓ ${line}`));
    console.log("");
  }
  if (warnings.length) {
    console.log("Warnings:");
    warnings.forEach((line) => console.log(`  ! ${line}`));
    console.log("");
  }
  if (errors.length) {
    console.log("Errors:");
    errors.forEach((line) => console.log(`  ✗ ${line}`));
    console.log(`\nFAILED with ${errors.length} error(s).\n`);
    process.exitCode = 1;
    return;
  }
  console.log(`PASSED with ${warnings.length} warning(s).\n`);
}

run();
