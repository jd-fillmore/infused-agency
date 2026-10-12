#!/usr/bin/env node
// CI deploy gate for the vertical x geo SEO launch schedule.
//
// Decision:
//   deployable  -- a release wave is active or pending; CI may deploy.
//   embargo     -- before `startDate` (or zero released verticals); deploying
//                  would publish an empty vertical surface. Blocked.
//   frozen      -- `freezeAtWave` reached; nothing further may ever release.
//                  Deployments are blocked so nothing new can appear after the
//                  freeze date. Not reached while `freezeAtWave` is null.
//
// Exit codes (gate mode, default):
//   0  deployable
//   1  embargo / frozen (blocks the CI deploy job)
//
// Report mode (`--report`): writes .next/vertical-seo-deploy.json with the full
// decision and always exits 0, so `prebuild` can record the answer without
// failing local builds on embargo days.
//
// Dates are compared as UTC calendar days (YYYY-MM-DD, the same clock the
// schedule uses). Near-miss days (within +/- 1 of startDate) print a timezone
// warning so a CI platform running in UTC can't silently flip the embargo.
const fs = require("fs");
const path = require("path");
const launch = require("../src/lib/launch");

function daysBetween(aIso, bIso) {
  return (Date.parse(`${bIso}T00:00:00Z`) - Date.parse(`${aIso}T00:00:00Z`)) / 86400000;
}

function main() {
  const report = process.argv.includes("--report");
  const asOf = launch.asOfDate();
  const launchConfig = launch.loadLaunch();
  const { startDate, freezeAtWave } = launchConfig;
  const freezeWave = launchConfig.waves.find(
    (w) => Number(w.wave) === Number(freezeAtWave)
  );
  const frozenAt =
    freezeAtWave != null && freezeWave ? launch.waveDate(freezeWave) : null;

  const released = launch.releasedSlugs(asOf);

  let status;
  const reasons = [];
  if (asOf < startDate) {
    status = "embargo";
    reasons.push(`before startDate ${startDate} (as-of ${asOf})`);
  } else if (frozenAt != null && asOf >= frozenAt) {
    status = "frozen";
    reasons.push(`freezeAtWave ${freezeAtWave} reached on ${frozenAt}`);
  } else if (released.size === 0) {
    status = "embargo";
    reasons.push("no vertical is released on or before the as-of date — deploying would publish an empty vertical surface");
  } else {
    status = "deployable";
    reasons.push(`${released.size} vertical(s) released on or before ${asOf}`);
  }

  const near = daysBetween(startDate, asOf);
  const decision = {
    asOf,
    deployable: status === "deployable",
    status,
    startDate,
    freezeAtWave: freezeAtWave == null ? null : frozenAt,
    releasedVerticals: released.size,
    reasons,
  };

  if (report) {
    const outDir = path.join(process.cwd(), ".next");
    fs.mkdirSync(outDir, { recursive: true });
    const outPath = path.join(outDir, "vertical-seo-deploy.json");
    fs.writeFileSync(outPath, JSON.stringify(decision, null, 2), "utf8");
    console.log(`Deploy decision: ${status} (deployable=${decision.deployable})`);
    console.log(`Wrote ${path.relative(process.cwd(), outPath)}`);
  } else {
    console.log(`Should deploy today (as-of ${asOf})? ${decision.deployable ? "YES" : "NO"} [${status}]`);
    reasons.forEach((r) => console.log(`  - ${r}`));
  }

  if (near >= -1 && near <= 1) {
    console.warn(
      `Timezone note: as-of is ${near >= 0 ? near : -near} day(s) from startDate. ` +
        "The schedule compares whole UTC days; a deploy platform running in UTC " +
        "keeps this exactly. Set LAUNCH_AS_OF to simulate an exact production clock."
    );
  }

  if (!report && !decision.deployable) {
    process.exit(1);
  }
}

main();