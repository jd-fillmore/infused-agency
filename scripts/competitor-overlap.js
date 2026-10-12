#!/usr/bin/env node
// Phase 9 — competitor-overlap check.
// Compares each mapped service page's unique prose against its fetched competitor
// counterpart using 5-word-shingle Jaccard similarity. Competitor text is held in
// memory only and never written to disk. Rewrite any page scoring above 0.15.
//
// Run: node scripts/competitor-overlap.js
const https = require("https");
const services = require("../src/lib/services");

const THRESHOLD = 0.15;

// our page -> the counterpart fetched during Phase 6 (see docs/competitor-outline.md)
const MAP = [
  {
    our: "/seo/local-seo",
    url: "https://smartlinks.ca/digital-marketing-services/local-seo/",
  },
  {
    our: "/seo/white-label",
    url: "https://smartlinks.ca/digital-marketing-services/white-label-services/",
  },
  {
    our: "/ecommerce-marketing",
    url: "https://smartlinks.ca/digital-marketing-services/ecommerce-marketing/",
  },
  {
    our: "/seo",
    url: "https://smartlinks.ca/digital-marketing-services/search-engine-optimization-seo/",
  },
  {
    our: "/services",
    url: "https://smartlinks.ca/digital-marketing-services/",
  },
];

function fetchText(url, redirects = 0) {
  return new Promise((resolve, reject) => {
    const req = https.get(
      url,
      { timeout: 20000, headers: { "User-Agent": "Mozilla/5.0" } },
      (res) => {
        if (
          res.statusCode >= 300 &&
          res.statusCode < 400 &&
          res.headers.location &&
          redirects < 5
        ) {
          res.resume();
          const next = new URL(res.headers.location, url).toString();
          return fetchText(next, redirects + 1).then(resolve, reject);
        }
        if (res.statusCode !== 200) {
          res.resume();
          return reject(new Error(`HTTP ${res.statusCode}`));
        }
        const chunks = [];
        res.on("data", (d) => chunks.push(d));
        res.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
      }
    );
    req.on("timeout", () => {
      req.destroy(new Error("timeout"));
    });
    req.on("error", reject);
  });
}

function visibleText(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&#?\w+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function ourProseFor(url) {
  const service = services.getServiceByUrl(url);
  if (!service) return null;
  const content = services.loadServiceContent(service.slug);
  if (!content) return null;
  return services.uniqueProseText(content);
}

async function main() {
  const rows = [];
  for (const m of MAP) {
    const ours = ourProseFor(m.our);
    if (!ours) {
      rows.push({ our: m.our, score: null, note: "existing page — no content file" });
      continue;
    }
    try {
      const html = await fetchText(m.url);
      const theirText = visibleText(html);
      const score = services.jaccard(
        services.shingleSet(ours),
        services.shingleSet(theirText)
      );
      rows.push({ our: m.our, score, note: "" });
      // theirText goes out of scope here and is never persisted.
    } catch (e) {
      rows.push({ our: m.our, score: null, note: `fetch failed (${e.message})` });
    }
  }

  console.log("Competitor-overlap check (5-word shingles, in-memory only)");
  console.log("-----------------------------------------------------------");
  let over = 0;
  for (const r of rows) {
    const score = r.score === null ? "n/a" : r.score.toFixed(3);
    const flag = r.score !== null && r.score > THRESHOLD ? "  > REWRITE" : "";
    if (flag) over++;
    console.log(`${r.our.padEnd(28)} ${String(score).padStart(6)}${flag}${r.note ? "  (" + r.note + ")" : ""}`);
  }
  console.log(`\nThreshold: ${THRESHOLD}. Pages over threshold: ${over}.`);
  if (over) process.exitCode = 1;
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
