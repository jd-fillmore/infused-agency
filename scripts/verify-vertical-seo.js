#!/usr/bin/env node
// Quality-gate verifier for the vertical x geo SEO system.
// - Exits 0 when pages simply fail the gate (they are excluded from production).
// - Exits 1 on a malformed data file, slug-integrity error, or a broken internal
//   link on a published page (structural problems that must fail the build).
const fs = require("fs");
const path = require("path");
const seo = require("../src/lib/verticalSeo");
const services = require("../src/lib/services");

function jaccardFromText(a, b) {
  return seo.jaccard
    ? seo.jaccard(a, b)
    : 0;
}

function writeNavSnapshot() {
  const snapshot = services.buildNavSnapshot();
  const dir = path.join(process.cwd(), "src", "generated");
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  const file = path.join(dir, "services-nav.json");
  fs.writeFileSync(file, JSON.stringify(snapshot, null, 2), "utf8");
  console.log(`Wrote ${path.relative(process.cwd(), file)}`);
}

function nearestPairs(records) {
  const pairs = [];
  for (let i = 0; i < records.length; i++) {
    for (let j = i + 1; j < records.length; j++) {
      const a = records[i];
      const b = records[j];
      if (a.page.vertical.slug !== b.page.vertical.slug) continue;
      if (a.page.level !== b.page.level) continue;
      if (!a.shingles || !b.shingles) continue;
      let inter = 0;
      for (const s of a.shingles) if (b.shingles.has(s)) inter++;
      const union = a.shingles.size + b.shingles.size - inter;
      const score = union === 0 ? 0 : inter / union;
      pairs.push({ a: a.page.urlPath, b: b.page.urlPath, score });
    }
  }
  return pairs.sort((x, y) => y.score - x.score).slice(0, 10);
}

function legacyPagesWithoutEquivalent(publishedSet) {
  const pagesDir = path.join(process.cwd(), "src", "pages", "seo");
  if (!fs.existsSync(pagesDir)) return [];
  const files = fs
    .readdirSync(pagesDir)
    .filter((f) => /^for-therapists-.*\.js$/.test(f));
  const orphans = [];
  for (const f of files) {
    const url = "/seo/" + f.replace(/\.js$/, "");
    const target = seo.LEGACY_REDIRECT_MAP[url];
    if (!target || !publishedSet.has(target)) {
      orphans.push({ url, target: target || null });
    }
  }
  return orphans;
}

function main() {
  let result;
  let slugErrors = [];
  let servicesResult;
  let serviceSlugErrors = [];
  try {
    slugErrors = seo.verifySlugIntegrity();
    result = seo.computePublished();
    serviceSlugErrors = services.verifyServiceIntegrity();
    servicesResult = services.computePublishedServices();
  } catch (err) {
    console.error("FATAL: " + err.message);
    process.exit(1);
  }

  const { all, evaluated, published, failed, drafts } = result;
  const publishedSet = new Set(published.map((r) => r.page.urlPath));
  const {
    published: publishedServices,
    failed: failedServices,
    drafts: draftServices,
    verticalsPublished,
  } = servicesResult;
  const publishedServiceUrls = new Set(
    publishedServices.map((r) => r.service.url)
  );

  // Broken-link assertion for published pages (structural -> fail build).
  const brokenLinks = [];
  for (const r of published) {
    const links = seo.buildLinks(r.page, publishedSet);
    for (const l of links) {
      if (
        l.internal &&
        l.href.startsWith("/") &&
        seo.isVerticalHref(l.href) &&
        !publishedSet.has(l.href)
      ) {
        brokenLinks.push(`${r.page.urlPath} -> ${l.href}`);
      }
    }
  }
  // Pillar -> service links (structural assertion for published pillars).
  const verticalServiceLinks = [];
  for (const r of published) {
    if (r.page.kind !== "pillar") continue;
    for (const l of services.buildVerticalServiceLinks(r.page.vertical, publishedServiceUrls)) {
      if (!publishedServiceUrls.has(l.href)) {
        verticalServiceLinks.push(`${r.page.urlPath} -> ${l.href}`);
      }
    }
  }
  // Service page link/config integrity (structural -> fail build).
  const serviceStructural = [];
  for (const r of publishedServices) {
    const broken = services.checkServiceLinks(
      r.service,
      publishedServiceUrls,
      verticalsPublished
    );
    if (broken.length)
      serviceStructural.push(`${r.service.url}: ${broken.join(", ")}`);
  }

  const pairs = nearestPairs(
    evaluated.filter((r) => r.shingles)
  );
  const orphans = legacyPagesWithoutEquivalent(publishedSet);
  const liveLegacyOrphans = seo.findOrphanLiveLegacyPages(published, publishedSet);

  // ----- console summary -----
  console.log("Vertical SEO verification");
  console.log("-------------------------");
  console.log(`Enumerated pages : ${all.length}`);
  console.log(`Published        : ${published.length}`);
  console.log(`Draft-excluded   : ${drafts.length}`);
  console.log(`Gate-failed      : ${failed.length}`);
  console.log(`Slug errors      : ${slugErrors.length}`);
  console.log(`Broken links     : ${brokenLinks.length}`);
  console.log(`Live legacy orphans: ${liveLegacyOrphans.length}`);
  console.log(`-- services --`);
  console.log(`Services         : ${servicesResult.services.length}`);
  console.log(`Service published: ${publishedServices.length}`);
  console.log(`Service drafts   : ${draftServices.length}`);
  console.log(`Service fail     : ${failedServices.length}`);
  console.log(`Service slug errs: ${serviceSlugErrors.length}`);
  if (slugErrors.length) slugErrors.forEach((e) => console.log("  ! " + e));
  if (serviceSlugErrors.length) serviceSlugErrors.forEach((e) => console.log("  ! service: " + e));
  if (brokenLinks.length) brokenLinks.forEach((e) => console.log("  ! " + e));
  if (verticalServiceLinks.length) verticalServiceLinks.forEach((e) => console.log("  ! pillar svc link: " + e));
  if (serviceStructural.length) serviceStructural.forEach((e) => console.log("  ! service config: " + e));
  if (liveLegacyOrphans.length)
    liveLegacyOrphans.forEach((e) => console.log("  ! orphan: " + e));

  writeNavSnapshot();

  // ----- markdown report -----
  const lines = [];
  lines.push("# Vertical SEO report (generated)");
  lines.push("");
  lines.push(
    "Generated by `scripts/verify-vertical-seo.js`. Do not edit by hand."
  );
  lines.push("");
  lines.push("## Counts");
  lines.push("");
  lines.push(`- Enumerated pages: ${all.length}`);
  lines.push(`- Published: ${published.length}`);
  lines.push(`- Draft-excluded: ${drafts.length}`);
  lines.push(`- Gate-failed: ${failed.length}`);
  lines.push("");
  lines.push("### By status");
  lines.push("");
  const byStatus = {};
  for (const r of evaluated) {
    const s = r.content ? r.content.status || "none" : "missing";
    byStatus[s] = (byStatus[s] || 0) + 1;
  }
  for (const [s, n] of Object.entries(byStatus)) lines.push(`- ${s}: ${n}`);
  lines.push("");
  lines.push("## Published pages");
  lines.push("");
  lines.push("| URL | Title | Unique words | Unique fields |");
  lines.push("| --- | --- | --- | --- |");
  for (const r of published.sort((a, b) =>
    a.page.urlPath.localeCompare(b.page.urlPath)
  )) {
    lines.push(
      `| ${r.page.urlPath} | ${seo.pageTitle(r.page)} | ${r.uniqueWords} | ${r.uniqueFields} |`
    );
  }
  lines.push("");
  lines.push("## Failed pages");
  lines.push("");
  if (!failed.length) {
    lines.push("_None._");
  } else {
    lines.push("| URL | Failing rules |");
    lines.push("| --- | --- |");
    for (const r of failed.sort((a, b) =>
      a.page.urlPath.localeCompare(b.page.urlPath)
    )) {
      lines.push(`| ${r.page.urlPath} | ${r.failures.join(", ")} |`);
    }
  }
  lines.push("");
  lines.push("## Nearest duplicate pairs (same vertical and level)");
  lines.push("");
  lines.push("| Page A | Page B | Jaccard |");
  lines.push("| --- | --- | --- |");
  for (const p of pairs) {
    lines.push(`| ${p.a} | ${p.b} | ${p.score.toFixed(3)} |`);
  }
  lines.push("");
  lines.push("## Legacy therapist pages with no published equivalent");
  lines.push("");
  if (!orphans.length) {
    lines.push("_None._");
  } else {
    lines.push("| Legacy URL | New equivalent |");
    lines.push("| --- | --- |");
    for (const o of orphans.sort((a, b) => a.url.localeCompare(b.url))) {
      lines.push(`| ${o.url} | ${o.target || "— (stays live)"} |`);
    }
  }
  lines.push("");
  lines.push("## Live legacy pages with no crawlable internal link (must be empty)");
  lines.push("");
  if (!liveLegacyOrphans.length) {
    lines.push("_None._");
  } else {
    for (const url of liveLegacyOrphans.sort()) lines.push(`- ${url}`);
  }
  lines.push("");

  lines.push("## Service pages");
  lines.push("");
  lines.push(`- Services: ${servicesResult.services.length}`);
  lines.push(`- Published: ${publishedServices.length}`);
  lines.push(`- Draft-excluded: ${draftServices.length}`);
  lines.push(`- Gate-failed: ${failedServices.length}`);
  lines.push("");
  lines.push("### Published service pages");
  lines.push("");
  lines.push("| URL | Title | Unique words | Direct answer | FAQs |");
  lines.push("| --- | --- | --- | --- | --- |");
  for (const r of publishedServices
    .slice()
    .sort((a, b) => a.service.url.localeCompare(b.service.url))) {
    const c = r.content || {};
    lines.push(
      `| ${r.service.url} | ${services.serviceTitle(r.service)} | ${r.uniqueWords} | ${(c.directAnswer || "").split(/\s+/).filter(Boolean).length} | ${(c.faqs || []).length} |`
    );
  }
  lines.push("");
  lines.push("### Failed service pages");
  lines.push("");
  if (!failedServices.length) {
    lines.push("_None._");
  } else {
    lines.push("| URL | Failing rules |");
    lines.push("| --- | --- |");
    for (const r of failedServices
      .slice()
      .sort((a, b) => a.service.url.localeCompare(b.service.url))) {
      lines.push(`| ${r.service.url} | ${r.failures.join(", ")} |`);
    }
  }
  lines.push("");

  const outPath = path.join(process.cwd(), "docs", "vertical-seo-report.md");
  fs.writeFileSync(outPath, lines.join("\n"), "utf8");
  console.log(`\nWrote ${path.relative(process.cwd(), outPath)}`);

  if (
    slugErrors.length ||
    brokenLinks.length ||
    verticalServiceLinks.length ||
    serviceStructural.length ||
    serviceSlugErrors.length ||
    liveLegacyOrphans.length
  ) {
    console.error("\nStructural errors detected. Failing build.");
    process.exit(1);
  }
}

main();
