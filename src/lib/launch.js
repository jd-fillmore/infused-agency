// Publishing gate for the vertical x geo SEO system. Every vertical in
// data/vertical-seo/verticals.json publishes on the next deploy; the `hold`
// list in data/vertical-seo/launch.json is the only thing that keeps a
// vertical out of the built catalogue. There is no date or wave scheduling.
// CommonJS so the Astro build and the standalone Node scripts can require it
// without a build step.
const fs = require("fs");
const path = require("path");

const DATA_DIR = path.join(process.cwd(), "data", "vertical-seo");

const _cache = {};

function readJson(absPath) {
  return JSON.parse(fs.readFileSync(absPath, "utf8"));
}

function loadLaunch() {
  if (!_cache.launch) {
    const p = path.join(DATA_DIR, "launch.json");
    if (!fs.existsSync(p)) {
      throw new Error(
        `Publishing config missing at ${p}. Create it with a "hold" array (see docs/vertical-seo-build.md).`
      );
    }
    _cache.launch = readJson(p);
  }
  return _cache.launch;
}

function loadVerticals() {
  if (!_cache.verticals) {
    _cache.verticals = readJson(path.join(DATA_DIR, "verticals.json"));
  }
  return _cache.verticals;
}

function isHeld(slug) {
  return (loadLaunch().hold || []).includes(slug);
}

// Every catalogue slug that is not on hold. Publishing is immediate: no date
// gate, no waves. `launchStatus` is applied separately by computePublished().
function releasedSlugs() {
  return new Set(
    loadVerticals()
      .map((vertical) => vertical.slug)
      .filter((slug) => !isHeld(slug))
  );
}

module.exports = {
  DATA_DIR,
  loadLaunch,
  releasedSlugs,
  isHeld,
};
