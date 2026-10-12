#!/usr/bin/env node
// Quality-gate verifier for the vertical x geo SEO system.
// - Exits 0 when pages simply fail the gate (they are excluded from production).
// - Exits 1 on a malformed data file, slug-integrity error, or a broken internal
//   link on a published page (structural problems that must fail the build).
const fs = require("fs");
const path = require("path");
const seo = require("../src/lib/verticalSeo");
const services = require("../src/lib/services");
const launch = require("../src/lib/launch");

function writeNavSnapshot() {
  const snapshot = services.buildNavSnapshot();
  const dir = path.join(process.cwd(), "src", "generated");
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  const file = path.join(dir, "services-nav.json");
  fs.writeFileSync(file, JSON.stringify(snapshot, null, 2), "utf8");
  console.log(`Wrote ${path.relative(process.cwd(), file)}`);
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

  const { all, evaluated, published, failed, drafts, skipped, launchSkips, released } = result;
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

  const pairs = Array.isArray(result.scoringPairs)
    ? result.scoringPairs
    : seo.nearestDuplicatePairs(evaluated.filter((r) => r.shingles));
  const orphans = legacyPagesWithoutEquivalent(publishedSet);
  const liveLegacyOrphans = seo.findOrphanLiveLegacyPages(published, publishedSet);

  // ----- console summary -----
  console.log("Vertical SEO verification");
  console.log("-------------------------");
  console.log(`Enumerated pages : ${all.length}`);
  console.log(`Published        : ${published.length}`);
  console.log(`Draft-excluded   : ${drafts.length}`);
  console.log(`Gate-failed      : ${failed.length}`);
  console.log(`Skipped verticals: ${skipped.length}`);
  console.log(`Released verticals: ${released.length}`);
  console.log(`------ launch schedule (as-of ${launch.asOfDate()}) ------`);
  const summary = launch.scheduleSummary();
  for (const wave of launch.loadLaunch().waves) {
    console.log(
      `Wave ${wave.wave}: ${wave.verticals.length} verticals, date ${launch.waveDate(wave)}`
    );
  }
  console.log(`Hold             : ${launch.loadLaunch().hold.length} verticals`);
  if (launchSkips.length)
    launchSkips.forEach((s) => console.log(`  ! skip ${s.slug}: ${s.reasons.join("; ")}`));
  console.log(`Slug errors      : ${slugErrors.length}`);
  console.log(`Broken links     : ${brokenLinks.length}`);
  console.log(`Live legacy orphans: ${liveLegacyOrphans.length}`);
  const t = result.timings || {};
  console.log(`-- pipeline profile --`);
  console.log(
    `computePublished : source=${t.source}, data ${t.dataMs}ms, gate ${t.gateMs}ms, similarity ${t.similarityMs}ms, links ${t.linksMs}ms, total ${t.totalMs}ms`
  );
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
  lines.push(`- Skipped verticals: ${skipped.length}`);
  lines.push("");
  lines.push("## Build profile");
  lines.push("");
  lines.push(`- computePublished source: ${t.source}`);
  lines.push(`- data collection (enumerate + read/parse): ${t.dataMs} ms`);
  lines.push(`- content gate: ${t.gateMs} ms`);
  lines.push(`- similarity scoring: ${t.similarityMs} ms`);
  lines.push(`- link pass: ${t.linksMs} ms`);
  lines.push(`- total: ${t.totalMs} ms`);
  lines.push("");
  lines.push("## Launch schedule");
  lines.push("");
  lines.push(
    `- Evaluated as-of (UTC): ${launch.asOfDate()}${process.env.LAUNCH_AS_OF ? " (LAUNCH_AS_OF override)" : ""}`
  );
  lines.push(`- startDate: ${launch.loadLaunch().startDate}`);
  lines.push(`- freezeAtWave: ${launch.loadLaunch().freezeAtWave}`);
  lines.push(`- Released verticals: ${released.length}`);
  for (const [slug, st] of Object.entries(summary.verticals).sort()) {
    lines.push(`- ${slug}: ${st.status}${st.wave != null ? ` (wave ${st.wave}, ${st.date})` : ""}`);
  }
  lines.push("");
  lines.push("### Skipped released verticals (reasons)");
  lines.push("");
  if (!launchSkips.length) {
    lines.push("_None._");
  } else {
    for (const s of launchSkips) lines.push(`- ${s.slug}: ${s.reasons.join("; ")}`);
  }
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

  // ----- launch status (docs/launch-status.md) -----
  const publishedBySlug = {};
  for (const r of published) {
    const slug = r.page.vertical.slug;
    publishedBySlug[slug] = (publishedBySlug[slug] || 0) + 1;
  }
  const launchLines = [];
  launchLines.push("# Vertical SEO launch status (generated)");
  launchLines.push("");
  launchLines.push("Generated by `scripts/verify-vertical-seo.js`. Do not edit by hand.");
  launchLines.push("");
  launchLines.push("## Evaluation");
  launchLines.push("");
  launchLines.push(
    `- As-of date (UTC): ${summary.asOf}${process.env.LAUNCH_AS_OF ? " (LAUNCH_AS_OF override)" : ""}`
  );
  launchLines.push(`- startDate: ${summary.startDate}`);
  launchLines.push(`- freezeAtWave: ${summary.freezeAtWave}`);
  launchLines.push(
    `- Released verticals: ${
      Object.values(summary.verticals).filter((s) => s.status === "released").length
    }`
  );
  launchLines.push(`- Published pages: ${published.length}`);
  launchLines.push(`- Skipped released verticals: ${launchSkips.length}`);
  const launchConfig = launch.loadLaunch();
  const isFrozen = (w) =>
    launchConfig.freezeAtWave != null && Number(w.wave) > Number(launchConfig.freezeAtWave);
  const publishedWaves = launchConfig.waves
    .filter((w) => !isFrozen(w) && launch.waveDate(w) <= summary.asOf)
    .map((w) => w.wave);
  const nextWave = launchConfig.waves.find(
    (w) => !isFrozen(w) && launch.waveDate(w) > summary.asOf
  );
  launchLines.push(
    `- Published waves: ${publishedWaves.length ? publishedWaves.join(", ") : "none"}`
  );
  launchLines.push(
    `- Next wave: ${
      nextWave ? `wave ${nextWave.wave} on ${launch.waveDate(nextWave)}` : "none (all waves released)"
    }`
  );
  launchLines.push("");
  launchLines.push("## Waves");
  launchLines.push("");
  launchLines.push("| Wave | Releasing | Date | Verticals |");
  launchLines.push("| --- | --- | --- | --- |");
  for (const wave of launch.loadLaunch().waves) {
    launchLines.push(
      `| ${wave.wave} | ${wave.verticals.length} | ${launch.waveDate(wave)} | ${wave.verticals.join(", ")} |`
    );
  }
  const held = launch.loadLaunch().hold || [];
  if (held.length) {
    launchLines.push(`| hold | ${held.length} | never | ${held.join(", ")} |`);
  }
  launchLines.push("");
  launchLines.push("## Released verticals");
  launchLines.push("");
  launchLines.push("| Slug | Wave | Published pages | Status |");
  launchLines.push("| --- | --- | --- | --- |");
  for (const [slug, st] of Object.entries(summary.verticals).sort()) {
    if (st.status !== "released") continue;
    launchLines.push(`| ${slug} | ${st.wave} | ${publishedBySlug[slug] || 0} | released ${st.date} |`);
  }
  launchLines.push("");
  launchLines.push("## Not yet released");
  launchLines.push("");
  for (const [slug, st] of Object.entries(summary.verticals).sort()) {
    if (st.status === "released") continue;
    const due = st.date ? ` (wave ${st.wave}, due ${st.date})` : " (on hold)";
    launchLines.push(`- ${slug}${due}`);
  }
  launchLines.push("");
  launchLines.push("## Skipped released verticals (reasons)");
  launchLines.push("");
  if (!launchSkips.length) {
    launchLines.push("_None._");
  } else {
    for (const s of launchSkips) launchLines.push(`- ${s.slug}: ${s.reasons.join("; ")}`);
  }
  launchLines.push("");
  const launchPath = path.join(process.cwd(), "docs", "launch-status.md");
  fs.writeFileSync(launchPath, launchLines.join("\n"), "utf8");
  console.log(`Wrote ${path.relative(process.cwd(), launchPath)}`);

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
