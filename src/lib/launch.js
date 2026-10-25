// Launch-schedule data + helpers for the vertical x geo SEO system.
// CommonJS so the Astro build and the standalone Node scripts can require it
// without a build step.
const fs = require("fs");
const path = require("path");

const DATA_DIR = path.join(process.cwd(), "data", "vertical-seo");
const MS_PER_DAY = 86400000;

const _cache = {};

function readJson(absPath) {
  return JSON.parse(fs.readFileSync(absPath, "utf8"));
}

function loadLaunch() {
  if (!_cache.launch) {
    const p = path.join(DATA_DIR, "launch.json");
    if (!fs.existsSync(p)) {
      throw new Error(
        `Launch schedule missing at ${p}. Create it (see docs/vertical-seo-build.md).`
      );
    }
    _cache.launch = readJson(p);
  }
  return _cache.launch;
}

function normalizeDate(raw) {
  const d = String(raw).trim();
  if (/^\d{4}-\d{2}-\d{2}$/.test(d)) return d;
  throw new Error(`Dates must be YYYY-MM-DD, got "${raw}"`);
}

// UTC "today" in YYYY-MM-DD. Overridable per-process via LAUNCH_AS_OF so a
// build (or the verify script) can be simulated as if run on a later date.
function asOfDate() {
  if (_cache.asOf === undefined) {
    const env = process.env.LAUNCH_AS_OF;
    _cache.asOf = env ? normalizeDate(env) : new Date().toISOString().slice(0, 10);
  }
  return _cache.asOf;
}

// startDate + offsetDays for the wave, normalized to UTC YYYY-MM-DD.
// `config` defaults to the loaded schedule but can be passed explicitly so the
// schedule maths is unit-testable without touching launch.json.
function waveDate(wave, config) {
  const launch = config || loadLaunch();
  const offset = Number(wave && wave.offsetDays) || 0;
  const ms = Date.parse(`${launch.startDate}T00:00:00Z`) + offset * MS_PER_DAY;
  return new Date(ms).toISOString().slice(0, 10);
}

// Slugs released for an explicit schedule + date. Extracted so tests can pass a
// synthetic schedule (e.g. a frozen one) without editing launch.json.
function releasedSlugsAt(config, date) {
  const held = new Set(config.hold || []);
  const freezeAt = config.freezeAtWave;
  const slugs = new Set();
  for (const wave of config.waves || []) {
    if (freezeAt != null && Number(wave.wave) > Number(freezeAt)) continue;
    if (waveDate(wave, config) <= date) {
      for (const slug of wave.verticals || []) slugs.add(slug);
    }
  }
  for (const slug of held) slugs.delete(slug);
  return slugs;
}

// Slugs that are scheduled to be live on the given date. A vertical is
// released the day its wave date is reached (>= startDate + offsetDays).
// Held verticals are never released. With freezeAtWave set, only waves up to
// that number count, so later waves stay hidden no matter the date.
function releasedSlugs(asOf) {
  const date = asOf || asOfDate();
  return releasedSlugsAt(loadLaunch(), date);
}

function isReleased(slug, asOf) {
  return releasedSlugs(asOf).has(slug);
}

function isHeld(slug) {
  return (loadLaunch().hold || []).includes(slug);
}

function waveFor(slug) {
  const launch = loadLaunch();
  for (const wave of launch.waves || []) {
    if ((wave.verticals || []).includes(slug)) return Number(wave.wave);
  }
  return null;
}

// Full classified schedule for reporting (see docs/launch-status.md).
function scheduleSummary(asOf) {
  const launch = loadLaunch();
  const date = asOf || asOfDate();
  const released = releasedSlugs(date);
  const held = new Set(launch.hold || []);
  const verticals = {};
  for (const wave of launch.waves || []) {
    for (const slug of wave.verticals || []) {
      verticals[slug] = {
        wave: Number(wave.wave),
        date: waveDate(wave),
        status: held.has(slug) ? "on-hold" : released.has(slug) ? "released" : "scheduled",
      };
    }
  }
  for (const slug of held) {
    if (!verticals[slug]) {
      verticals[slug] = { wave: null, date: null, status: "on-hold" };
    }
  }
  return {
    asOf: date,
    startDate: launch.startDate,
    freezeAtWave: launch.freezeAtWave,
    verticals,
  };
}

module.exports = {
  DATA_DIR,
  loadLaunch,
  asOfDate,
  waveDate,
  releasedSlugs,
  releasedSlugsAt,
  isReleased,
  isHeld,
  waveFor,
  scheduleSummary,
};