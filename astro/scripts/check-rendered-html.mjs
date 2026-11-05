#!/usr/bin/env node
/**
 * Fails when a built page shows markup as text.
 *
 * Content strings occasionally carry inline HTML (`<a href=...>`), Markdown
 * link tokens (`[label](/href)`) or template placeholders that are meant to be
 * rendered. If a template escapes them instead, the browser shows the raw
 * markup. This scan reads the visible text of every built HTML file and fails
 * the build on:
 *
 *   - escaped tags (`&lt;a`, `&lt;/`, `&amp;lt;`, or a decoded tag in text)
 *   - stray Markdown (`**bold**`, `[label](/href)`)
 *   - unrendered placeholders (`{city}`, `{{`, `undefined`, `[object Object]`, `NaN`)
 *
 * Only text nodes are inspected: markup inside attributes, <script>, <style>,
 * <template>, <noscript> and <svg> is not visible copy.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..", "..");
const distDir = path.resolve(repoRoot, "astro", "dist");

const CHECKS = [
  {
    id: "escaped-tag",
    description: "escaped HTML tag shown as text",
    test: (raw, decoded) => /&lt;\/?[a-z]/i.test(raw) || /<\/?[a-z][a-z0-9-]*(\s[^<>]*)?>/i.test(decoded),
  },
  {
    id: "double-escaped",
    description: "double-escaped entity (&amp;lt;)",
    test: (raw) => /&amp;lt;/i.test(raw),
  },
  {
    id: "markdown-link",
    description: "unrendered Markdown link",
    test: (raw, decoded) => /\[[^\]\n]{1,120}\]\([^)\n]{1,300}\)/.test(decoded),
  },
  {
    id: "markdown-bold",
    description: "unrendered Markdown emphasis",
    test: (raw, decoded) => /\*\*[^*\n]{1,160}\*\*/.test(decoded),
  },
  {
    id: "placeholder",
    description: "unrendered template placeholder",
    test: (raw, decoded) =>
      /\{\{\s*[a-z]/i.test(decoded) ||
      /\{(?:city|country|region|service|slug|name|title|path)\}/i.test(decoded),
  },
  {
    id: "undefined",
    description: "literal undefined",
    test: (raw, decoded) => /\bundefined\b/.test(decoded),
  },
  {
    id: "object-object",
    description: "literal [object Object]",
    test: (raw, decoded) => /\[object Object\]/.test(decoded),
  },
  {
    id: "nan",
    description: "literal NaN",
    test: (raw, decoded) => /\bNaN\b/.test(decoded),
  },
];

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

function decodeEntities(value) {
  return value
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, '"')
    .replace(/&#0*39;/g, "'")
    .replace(/&apos;/gi, "'")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&");
}

/** Visible text of a document: tags and non-rendered blocks removed. */
function textNodes(html) {
  const withoutComments = html.replace(/<!--[\s\S]*?-->/g, "\n");
  const withoutBlocks = withoutComments.replace(
    /<(script|style|template|noscript|svg)\b[\s\S]*?<\/\1>/gi,
    "\n"
  );
  return withoutBlocks
    .split(/<[^<>]*>/)
    .map((chunk) => chunk.replace(/[ \t]+/g, " ").trim())
    .filter(Boolean);
}

function routeForFile(file) {
  const rel = path.relative(distDir, file).split(path.sep).join("/");
  if (rel === "index.html") return "/";
  if (rel.endsWith("/index.html")) return `/${rel.slice(0, -"/index.html".length)}`;
  return `/${rel.replace(/\.html$/, "")}`;
}

function run() {
  if (!fs.existsSync(distDir)) {
    console.error(`No Astro build found at ${distDir}. Run "yarn build:astro" first.`);
    process.exit(1);
  }

  const htmlFiles = walk(distDir).filter((file) => file.endsWith(".html"));
  const findings = [];

  for (const file of htmlFiles) {
    const route = routeForFile(file);
    const nodes = textNodes(fs.readFileSync(file, "utf8"));

    for (const node of nodes) {
      const raw = node;
      const decoded = decodeEntities(node);
      for (const check of CHECKS) {
        if (!check.test(raw, decoded)) continue;
        findings.push({
          route,
          check,
          snippet: decoded.replace(/\s+/g, " ").slice(0, 160),
        });
        break;
      }
    }
  }

  if (findings.length > 0) {
    console.error(`\nVisible-markup scan FAILED — ${findings.length} finding(s) in ${htmlFiles.length} HTML files.\n`);
    const byRoute = new Map();
    for (const finding of findings) {
      if (!byRoute.has(finding.route)) byRoute.set(finding.route, []);
      byRoute.get(finding.route).push(finding);
    }
    for (const [route, items] of [...byRoute].sort((a, b) => a[0].localeCompare(b[0]))) {
      console.error(`${route}`);
      for (const item of items.slice(0, 5)) {
        console.error(`  ✗ ${item.check.description}: ${item.snippet}`);
        if (items.length > 5) console.error(`  … ${items.length - 5} more on this page`);
      }
    }
    console.error("");
    process.exit(1);
  }

  console.log(`\nVisible-markup scan passed — ${htmlFiles.length} HTML files, no escaped markup, stray Markdown or placeholders.\n`);
}

run();
