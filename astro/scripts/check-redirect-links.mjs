#!/usr/bin/env node
/**
 * Fails the build when a built page links internally to a URL that _redirects
 * intercepts. A link to a redirect source costs an extra hop (and a link to a
 * 410 costs the reader the page entirely), so internal links must point at the
 * final destination instead.
 *
 * Reads `astro/dist/_redirects` (the copy Netlify serves) and every built HTML
 * file. Sources are matched exactly, after stripping query strings, fragments
 * and a trailing slash. Redirect chains are followed to name the real
 * destination in the report.
 *
 * Exits non-zero on any violation.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..", "..");
const distDir = path.resolve(repoRoot, "astro", "dist");

// Opaque service blobs published at the build root (Search Console
// verification); they carry no page links.
const UTILITY_FILES = new Set(["googlea476b363e2afb389.html"]);

function walk(dir) {
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .flatMap((entry) =>
      entry.isDirectory() ? walk(path.join(dir, entry.name)) : [path.join(dir, entry.name)]
    );
}

function routeForFile(file) {
  const rel = path.relative(distDir, file).split(path.sep).join("/");
  if (rel === "index.html") return "/";
  if (rel.endsWith("/index.html")) return `/${rel.slice(0, -"/index.html".length)}`;
  return `/${rel.replace(/\.html$/, "")}`;
}

function normalizePath(value) {
  const clean = String(value || "").trim().split("#")[0].split("?")[0].replace(/\/+$/, "");
  return clean || "/";
}

function normalizeInternal(href) {
  if (href.startsWith("http")) {
    try {
      const url = new URL(href);
      if (url.hostname === "infused.agency" || url.hostname === "www.infused.agency") {
        return normalizePath(url.pathname || "/");
      }
    } catch {
      return null;
    }
    return null;
  }
  if (!href.startsWith("/") || href.startsWith("//")) return null;
  return normalizePath(href);
}

function readRules() {
  const file = path.join(distDir, "_redirects");
  if (!fs.existsSync(file)) {
    throw new Error(`Missing ${file}. Run "yarn build:astro" first.`);
  }
  const rules = [];
  for (const line of fs.readFileSync(file, "utf8").split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const tokens = trimmed.split(/\s+/);
    if (tokens.length < 3) continue;
    // Netlify's last two tokens are the destination and the status code; any
    // earlier tokens belong to a source path that itself contains spaces.
    const status = tokens[tokens.length - 1];
    const destination = normalizePath(tokens[tokens.length - 2]);
    const source = normalizePath(tokens.slice(0, -2).join(" "));
    rules.push({ source, destination, status });
  }
  return rules;
}

/** First rule wins, matching Netlify's evaluation order. */
function buildSourceMap(rules) {
  const bySource = new Map();
  for (const rule of rules) {
    if (!bySource.has(rule.source)) bySource.set(rule.source, rule);
  }
  return bySource;
}

/** Walk the chain so the report can name the page the reader should reach. */
function resolveFinal(source, bySource) {
  const seen = new Set([source]);
  let current = source;
  let status = bySource.get(source)?.status ?? "";
  for (let hops = 0; hops < 10; hops += 1) {
    const rule = bySource.get(current);
    if (!rule) return { destination: current, status, loop: false };
    if (rule.status !== "301" && rule.status !== "302") {
      return { destination: current, status: rule.status, loop: false };
    }
    if (rule.destination === current) return { destination: current, status: rule.status, loop: false };
    if (seen.has(rule.destination)) return { destination: rule.destination, status: rule.status, loop: true };
    seen.add(rule.destination);
    current = rule.destination;
    status = rule.status;
  }
  return { destination: current, status, loop: true };
}

function run() {
  if (!fs.existsSync(distDir)) {
    throw new Error(`No Astro build found at ${distDir}. Run "yarn build:astro" first.`);
  }

  const bySource = buildSourceMap(readRules());
  const htmlFiles = walk(distDir).filter(
    (file) => file.endsWith(".html") && !UTILITY_FILES.has(path.basename(file))
  );
  if (htmlFiles.length === 0) throw new Error("The build contains no HTML files.");

  const violations = [];
  const sourcesLinked = new Set();

  for (const file of htmlFiles) {
    const route = routeForFile(file);
    const html = fs.readFileSync(file, "utf8");
    for (const match of html.matchAll(/href="([^"]+)"/g)) {
      const href = match[1];
      if (href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) continue;
      const internal = normalizeInternal(href);
      if (!internal || !bySource.has(internal)) continue;
      const { destination, status } = resolveFinal(internal, bySource);
      violations.push({ route, href: internal, status, destination });
      sourcesLinked.add(internal);
    }
  }

  if (violations.length === 0) {
    console.log(
      `\nRedirect link check: ${htmlFiles.length} HTML files, 0 links to ${bySource.size} redirect sources.\n`
    );
    return;
  }

  console.log(
    `\nRedirect link check: ${htmlFiles.length} HTML files, ${violations.length} link(s) to ${sourcesLinked.size} redirect source(s)\n`
  );
  for (const v of violations) {
    const arrow = v.status === "410" ? "410 Gone" : `${v.status} → ${v.destination}`;
    console.log(`  ✗ ${v.route}: ${v.href} (${arrow})`);
  }
  console.log("");
  process.exitCode = 1;
}

run();
