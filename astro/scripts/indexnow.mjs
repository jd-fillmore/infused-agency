// Pings IndexNow with the URLs whose content changed in this build.
// Run after deploy:  node astro/scripts/indexnow.mjs
// Or pass explicit URLs: node astro/scripts/indexnow.mjs --urls https://infused.agency/a,https://infused.agency/b
//
// The key file lives at astro/public/<key>.txt and is deployed with the site,
// so IndexNow can verify ownership at https://infused.agency/<key>.txt.

import fs from "node:fs";
import path from "node:path";
import { ASTRO_ROOT } from "../src/lib/locations.mjs";

const HOST = "infused.agency";
const PUBLIC = path.join(ASTRO_ROOT, "public");
const QUEUE = path.join(ASTRO_ROOT, "src/generated/indexnow-queue.json");

const keyFile = fs.readdirSync(PUBLIC).find((file) => /^[a-f0-9]{32}\.txt$/.test(file));
if (!keyFile) {
  console.error("No IndexNow key file found in astro/public (expected <32 hex>.txt).");
  process.exit(1);
}
const key = keyFile.replace(/\.txt$/, "");

const urlsFlag = process.argv.indexOf("--urls");
const urlList =
  urlsFlag > -1
    ? process.argv[urlsFlag + 1].split(",").map((url) => url.trim()).filter(Boolean)
    : (JSON.parse(fs.readFileSync(QUEUE, "utf8")).urls ?? []);

if (urlList.length === 0) {
  console.log("IndexNow: no changed URLs to submit.");
  process.exit(0);
}

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: HOST,
    key,
    keyLocation: `https://${HOST}/${keyFile}`,
    urlList,
  }),
});

console.log(`IndexNow: submitted ${urlList.length} URL(s), HTTP ${response.status}.`);
if (!response.ok) process.exit(1);
