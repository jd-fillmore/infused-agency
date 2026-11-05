#!/usr/bin/env node
/**
 * Verifies the host-level redirects against the built site.
 *
 * Netlify serves a static deploy in this order: an existing file (or directory
 * index) first, then `_redirects` rules in file order, then 404.html. Astro's
 * `preview` server does not implement `_redirects` at all, so previewing the
 * build always shows a 404 for a legacy URL. This script runs a small server
 * with Netlify's ordering so the rules can be tested before a deploy.
 *
 * It fails when:
 *   - a redirect in REDIRECTS.md is not a single 301 to a 200 page
 *   - a rule in `_redirects` is malformed, duplicated, or chains
 *   - a retired 410 rule no longer returns 410
 *   - /seo/niagara does not return 200
 */

import fs from "node:fs";
import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..", "..");
const distDir = path.resolve(repoRoot, "astro", "dist");
const redirectsFile = path.join(distDir, "_redirects");
const redirectMapFile = path.join(repoRoot, "REDIRECTS.md");

const NORMALIZE = (value) => {
  const clean = String(value || "").trim();
  if (!clean) return "/";
  return clean.length > 1 ? clean.replace(/\/+$/, "") : clean;
};

function readRules() {
  if (!fs.existsSync(redirectsFile)) {
    throw new Error(`Missing ${redirectsFile}. Run "yarn build:astro" first.`);
  }

  const rules = [];
  const problems = [];
  const seen = new Set();

  fs.readFileSync(redirectsFile, "utf8")
    .split(/\r?\n/)
    .forEach((line, index) => {
      const row = line.trim();
      const lineNumber = index + 1;
      if (!row || row.startsWith("#")) return;

      const tokens = row.split(/\s+/);
      if (tokens.length < 2) {
        problems.push(`_redirects:${lineNumber}: not a redirect rule: ${row}`);
        return;
      }

      let status = "301";
      if (/^\d{3}$/.test(tokens[tokens.length - 1])) {
        status = tokens.pop();
      }
      if (tokens.length !== 2) {
        problems.push(
          `_redirects:${lineNumber}: source or destination contains whitespace: ${row}`
        );
        return;
      }

      const [from, to] = tokens;
      if (!from.startsWith("/")) {
        problems.push(`_redirects:${lineNumber}: source must start with "/": ${from}`);
      }
      if (/\s/.test(from) || /\s/.test(to)) {
        problems.push(`_redirects:${lineNumber}: whitespace in rule: ${row}`);
      }
      if (!["301", "302", "303", "307", "308", "410"].includes(status)) {
        problems.push(`_redirects:${lineNumber}: unsupported status ${status}`);
      }
      if (seen.has(from)) {
        problems.push(`_redirects:${lineNumber}: duplicate source ${from}`);
      }
      seen.add(from);
      rules.push({ from, to, status, lineNumber });
    });

  const sources = new Map(rules.map((rule) => [rule.from, rule]));
  for (const rule of rules) {
    if (rule.status === "410") continue;
    if (rule.from === rule.to) {
      problems.push(`_redirects:${rule.lineNumber}: redirect loop: ${rule.from}`);
    }
    if (sources.has(rule.to)) {
      problems.push(
        `_redirects:${rule.lineNumber}: chain: ${rule.from} -> ${rule.to}, which redirects again`
      );
    }
  }

  return { rules, problems };
}

function readRedirectMap() {
  if (!fs.existsSync(redirectMapFile)) {
    throw new Error(`Missing redirect map: ${redirectMapFile}`);
  }
  const rows = [];
  for (const line of fs.readFileSync(redirectMapFile, "utf8").split(/\r?\n/)) {
    const match = line.match(/^\|\s*`([^`]+)`\s*\|\s*`([^`]+)`\s*\|\s*(\d{3})\s*\|/);
    if (match) rows.push({ from: match[1], to: match[2], status: match[3] });
  }
  if (rows.length === 0) throw new Error("REDIRECTS.md contains no redirect rows.");
  return rows;
}

function resolveStaticFile(pathname) {
  let decoded;
  try {
    decoded = decodeURIComponent(pathname);
  } catch {
    return null;
  }

  const relative = decoded.replace(/^\/+/, "");
  const candidates = [];
  if (relative === "") {
    candidates.push("index.html");
  } else if (relative.endsWith("/")) {
    candidates.push(`${relative}index.html`);
  } else {
    candidates.push(relative, `${relative}/index.html`, `${relative}.html`);
  }

  for (const candidate of candidates) {
    const full = path.resolve(distDir, candidate);
    const insideDist = !path.relative(distDir, full).startsWith("..");
    if (!insideDist) continue;
    if (fs.existsSync(full) && fs.statSync(full).isFile()) return full;
  }
  return null;
}

function contentType(file) {
  if (file.endsWith(".html")) return "text/html; charset=utf-8";
  if (file.endsWith(".xml")) return "application/xml";
  if (file.endsWith(".txt")) return "text/plain; charset=utf-8";
  return "application/octet-stream";
}

function createServer(rules) {
  const bySource = new Map();
  for (const rule of rules) if (!bySource.has(rule.from)) bySource.set(rule.from, rule);

  return http.createServer((request, response) => {
    const url = new URL(request.url, "http://127.0.0.1");
    let pathname = url.pathname;

    // Netlify serves a real asset before considering a redirect rule.
    const asset = resolveStaticFile(pathname);
    if (asset) {
      response.writeHead(200, { "Content-Type": contentType(asset) });
      fs.createReadStream(asset).pipe(response);
      return;
    }

    const rule = bySource.get(pathname);
    if (rule) {
      if (rule.status === "410") {
        response.writeHead(410, { "Content-Type": "text/plain; charset=utf-8" });
        response.end("410 Gone");
        return;
      }
      response.writeHead(Number(rule.status), {
        Location: rule.to,
        "Content-Type": "text/plain; charset=utf-8",
      });
      response.end(`Redirecting to ${rule.to}`);
      return;
    }

    const notFound = path.join(distDir, "404.html");
    response.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    if (fs.existsSync(notFound)) fs.createReadStream(notFound).pipe(response);
    else response.end("404 Not Found");
  });
}

async function main() {
  const { rules, problems } = readRules();
  const map = readRedirectMap();
  const server = createServer(rules);

  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  const { port } = server.address();
  const base = `http://127.0.0.1:${port}`;

  const failures = [...problems];
  const table = [];

  for (const entry of map) {
    const expected = NORMALIZE(entry.to);
    let first;
    try {
      first = await fetch(base + entry.from, { redirect: "manual" });
    } catch (error) {
      failures.push(`${entry.from}: request failed (${error.message})`);
      table.push({ from: entry.from, status: "ERR", location: "", final: "", finalStatus: "ERR" });
      continue;
    }

    const location = first.headers.get("location") || "";
    let finalStatus = "-";
    let finalUrl = "";

    if (first.status === Number(entry.status) && NORMALIZE(location) === expected) {
      const target = new URL(location, base);
      const second = await fetch(target, { redirect: "manual" });
      finalStatus = String(second.status);
      finalUrl = target.pathname;
      if (second.status !== 200) {
        failures.push(`${entry.from}: ${entry.status} -> ${entry.to} returns ${second.status}`);
      }
    } else {
      failures.push(
        `${entry.from}: expected ${entry.status} to ${entry.to}, got ${first.status} to ${
          location || "(none)"
        }`
      );
      const target = new URL(location || entry.to, base);
      const second = await fetch(target, { redirect: "manual" });
      finalStatus = String(second.status);
      finalUrl = target.pathname;
    }

    table.push({
      from: entry.from,
      status: String(first.status),
      location: location || "(none)",
      final: finalUrl,
      finalStatus,
    });
  }

  const niagara = await fetch(`${base}/seo/niagara`, { redirect: "manual" });
  if (niagara.status !== 200) {
    failures.push(`/seo/niagara: expected 200, got ${niagara.status}`);
  }

  const goneRules = rules.filter((rule) => rule.status === "410");
  for (const rule of goneRules) {
    const response = await fetch(base + rule.from, { redirect: "manual" });
    if (response.status !== 410) {
      failures.push(`${rule.from}: expected 410, got ${response.status}`);
    }
  }

  server.close();

  console.log(`\nRedirect verification — ${rules.length} rules in dist/_redirects, ${map.length} in REDIRECTS.md\n`);
  const width = Math.max(...table.map((row) => row.from.length), 8);
  const finalWidth = Math.max(...table.map((row) => row.final.length), 9);
  console.log(
    `${"OLD URL".padEnd(width)}  STATUS  ${"LOCATION".padEnd(60)}  ${"FINAL URL".padEnd(finalWidth)}  FINAL STATUS`
  );
  console.log("-".repeat(width + 2 + 6 + 2 + 60 + 2 + finalWidth + 2 + 12));
  for (const row of table) {
    console.log(
      `${row.from.padEnd(width)}  ${row.status.padEnd(6)}  ${row.location.padEnd(60)}  ${row.final.padEnd(finalWidth)}  ${row.finalStatus}`
    );
  }
  console.log(`\n/seo/niagara -> ${niagara.status}`);
  console.log(`410 rules checked -> ${goneRules.length}`);

  if (failures.length > 0) {
    console.error(`\nFAILED with ${failures.length} problem(s):`);
    for (const failure of failures) console.error(`  ✗ ${failure}`);
    console.error("");
    process.exit(1);
  }

  console.log(`\nPASSED — every redirect is a single 301 to a 200 page.\n`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
