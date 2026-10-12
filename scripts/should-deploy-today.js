#!/usr/bin/env node
// Should deploy today?
//
// Prints `true` on stdout only when some wave's UTC date equals today's UTC
// date (respecting `freezeAtWave`), otherwise `false`. Always exits 0 so CI can
// branch on the output. Diagnostic detail goes to stderr so stdout stays a
// single, greppable token:
//
//   should=$(node scripts/should-deploy-today.js)
//   if [ "$should" = "true" ]; then curl -X POST "$DEPLOY_HOOK_URL"; fi
//
// `LAUNCH_AS_OF` (YYYY-MM-DD) overrides "today" for testing the schedule.
// Wave dates compare as whole UTC days (startDate + offsetDays), matching the
// publishing logic in src/lib/verticalSeo.js.
const launch = require("../src/lib/launch");

function main() {
  const asOf = launch.asOfDate();
  const config = launch.loadLaunch();
  const releasedByDate = [];

  let hit = null;
  for (const wave of config.waves) {
    const date = launch.waveDate(wave);
    const frozen =
      config.freezeAtWave != null && Number(wave.wave) > Number(config.freezeAtWave);
    const isToday = date === asOf && !frozen;
    releasedByDate.push(`wave ${wave.wave}: ${date}${frozen ? " (frozen)" : ""}${isToday ? " <= today" : ""}`);
    if (isToday && !hit) hit = wave;
  }

  process.stderr.write(`Should deploy today (as-of ${asOf})?\n`);
  releasedByDate.forEach((line) => process.stderr.write(`  ${line}\n`));
  process.stderr.write(
    hit
      ? `Wave ${hit.wave} releases today (${hit.verticals.length} verticals).\n`
      : "No wave is scheduled for today.\n"
  );

  process.stdout.write(`${hit ? "true" : "false"}\n`);
}

main();