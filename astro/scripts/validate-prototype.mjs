#!/usr/bin/env node
/**
 * Phase 3 prototype validator.
 *
 * Checks the generated static build for the things that can be verified
 * without a browser: document metadata, canonical URLs, a single H1, JSON-LD
 * parsing and node types, internal links, local assets, self-hosted scripts,
 * analytics absence, and the known deleted-city links.
 *
 * It does not test rendering, Lighthouse, or live-host behaviour.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

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
  "/therapist-seo": ["WebPage", "BreadcrumbList", "Service", "FAQPage"],
  "/blog": ["CollectionPage", "BreadcrumbList"],
  "/get-a-quote": ["ContactPage", "BreadcrumbList"],
};

const NOINDEX_ROUTES = new Set(["/404", "/500"]);

function run() {
  if (!fs.existsSync(distDir)) {
    throw new Error(`No Astro build found at ${distDir}. Run "yarn build:astro" first.`);
  }

  const manifestUrls = readManifestUrls();
  const htmlFiles = walk(distDir).filter((file) => file.endsWith(".html"));
  if (htmlFiles.length === 0) throw new Error("The build contains no HTML files.");

  if (!fs.existsSync(path.join(distDir, DEFAULT_OG_IMAGE.replace(/^\//, "")))) {
    error("dist", `missing default social image ${DEFAULT_OG_IMAGE}`);
  }

  const htmlRoutes = new Set(htmlFiles.map(routeForFile));
  const notMigrated = new Set();

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

    // Canonical and robots.
    const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
    if (isNoindex) {
      if (canonical) error(rel, "noindex error page must not emit a canonical");
    } else if (!canonical) {
      error(rel, "missing canonical");
    } else if (canonical !== expectedCanonical(route)) {
      error(rel, `canonical mismatch: ${canonical} (expected ${expectedCanonical(route)})`);
    }

    const robots = html.match(/<meta name="robots" content="([^"]*)"/)?.[1] ?? "";
    if (isNoindex && !robots.includes("noindex")) error(rel, "error page is not noindex");
    if (!isNoindex && robots !== "index, follow") {
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
      if (/\/[^/]+\.[a-z0-9]{2,5}$/i.test(internal)) continue;

      if (internal.length > 1 && internal.endsWith("/")) {
        error(rel, `internal link uses a trailing slash: ${href}`);
      }

      if (internal === "/seo/st-catharines" || internal === "/seo/niagara-falls") {
        error(rel, `link to a deleted city page: ${internal}`);
        continue;
      }

      if (builtRouteExists(internal, htmlRoutes)) continue;

      const manifestValue = internal.replace(/\/+$/, "") || "/";
      if (manifestUrls.has(manifestValue)) {
        notMigrated.add(internal);
      } else {
        error(rel, `link target is neither built nor in the route manifest: ${internal}`);
      }
    }

    // Local asset references.
    for (const match of html.matchAll(/\b(?:src|href)="(\/[^"]+\.(?:css|js|png|jpe?g|webp|svg|ico|woff2?|mp4))"/g)) {
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
    const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
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
      if (!builtRouteExists(route, htmlRoutes)) {
        error("sitemap.xml", `URL is not a built route: ${route}`);
      }
      sitemapRoutes.add(route);
    }

    for (const route of htmlRoutes) {
      if (!NOINDEX_ROUTES.has(route) && !sitemapRoutes.has(route)) {
        error("sitemap.xml", `indexable route missing from sitemap: ${route}`);
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
