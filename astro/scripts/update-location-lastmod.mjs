// lastmod is a content signal, not a build timestamp. For every live location
// page we hash the content file plus the data record; the date only moves when
// that hash changes. Writes:
//   astro/src/generated/location-lastmod.json      (date per page)
//   astro/src/generated/indexnow-queue.json        (URLs changed this build)

import fs from "node:fs";
import path from "node:path";
import {
  ASTRO_ROOT,
  LASTMOD_FILE,
  SERVICES,
  liveCities,
  liveRegions,
  liveCountries,
  readCityContentRaw,
  readRegionContent,
  readCountryContent,
  cityPath,
  regionPath,
  countryPath,
  serviceRootPath,
  contentHash,
} from "../src/lib/locations.mjs";

const SITE = "https://infused.agency";
const today = new Date().toISOString().slice(0, 10);
const QUEUE_FILE = path.join(ASTRO_ROOT, "src/generated/indexnow-queue.json");

const previous = fs.existsSync(LASTMOD_FILE)
  ? JSON.parse(fs.readFileSync(LASTMOD_FILE, "utf8"))
  : { pages: {} };

const pages = {};
const changed = [];

function record(pathname, hash) {
  const previousEntry = previous.pages?.[pathname];
  const date = previousEntry?.hash === hash ? previousEntry.date : today;
  if (previousEntry?.hash !== hash) changed.push(`${SITE}${pathname}`);
  pages[pathname] = { hash, date };
}

for (const service of SERVICES) {
  const slug = service.slug;
  for (const recordEntry of liveCities(slug)) {
    const { country, region, city } = recordEntry;
    record(
      cityPath(slug, country, region, city),
      contentHash([
        service.slug,
        readCityContentRaw(slug, country, region, city),
        JSON.stringify(city),
        JSON.stringify(region),
        JSON.stringify(country),
        JSON.stringify(readRegionContent(slug, country, region) ?? {}),
        JSON.stringify(readCountryContent(slug, country) ?? {}),
      ])
    );
  }
  for (const { country, region } of liveRegions(slug)) {
    record(
      regionPath(slug, country, region),
      contentHash([slug, JSON.stringify(region), JSON.stringify(readRegionContent(slug, country, region) ?? {})])
    );
  }
  for (const country of liveCountries(slug)) {
    record(
      countryPath(slug, country),
      contentHash([slug, JSON.stringify(country), JSON.stringify(readCountryContent(slug, country) ?? {})])
    );
  }
  record(serviceRootPath(slug), contentHash([slug, "service-root"]));
}

fs.mkdirSync(path.dirname(LASTMOD_FILE), { recursive: true });
fs.writeFileSync(LASTMOD_FILE, `${JSON.stringify({ pages }, null, 2)}\n`);
fs.writeFileSync(QUEUE_FILE, `${JSON.stringify({ generated: today, urls: changed }, null, 2)}\n`);

console.log(`lastmod manifest: ${Object.keys(pages).length} pages, ${changed.length} changed this build.`);
