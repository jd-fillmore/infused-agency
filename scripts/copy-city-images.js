// One-off copy script for the web-design-cities branch.
// Copies the shared hero image and rotates the 10 established portfolio
// images into per-city copies. Never overwrites an existing file.
const fs = require("fs");
const path = require("path");

const IMG = path.join(process.cwd(), "src", "img");

const HERO_SRC = path.join(IMG, "web-design-niagara.webp");

const CLIENTS = [
  { key: "visca-electric", file: "niagara-web-design-visca-electric.png" },
  { key: "flat-rock-cellars", file: "niagara-website-design-flat-rock-cellars.png" },
  { key: "jerrys-insulating", file: "web-design-company-niagara-jerrys-insulating.png" },
  { key: "kd-flowers", file: "custom-website-design-niagara-kd-flowers.png" },
  { key: "cass-a-bella-construction", file: "niagara-web-design-cass-a-bella-construction.png" },
  { key: "canadian-mortgage-authority", file: "website-design-niagara-canadian-mortgage-authority.png" },
  { key: "donor-compass", file: "web-design-niagara-donor-compass.png" },
  { key: "ggs-niagara-landscaping", file: "niagara-custom-web-design-ggs-niagara-landscaping.png" },
  { key: "lincoln-medical-centre", file: "website-design-niagara-lincoln-medical-centre.png" },
  { key: "plant-no-01", file: "web-design-niagara-plant-no-01.png" },
];

const SLUGS = [
  "niagara-falls",
  "niagara-on-the-lake",
  "welland",
  "fort-erie",
  "beamsville",
  "grimsby",
  "thorold",
  "port-colborne",
  "fonthill",
  "crystal-beach",
];

const PATTERNS = [
  (slug, client) => `${slug}-web-design-${client}`,
  (slug, client) => `${slug}-website-design-${client}`,
  (slug, client) => `web-design-company-${slug}-${client}`,
  (slug, client) => `${slug}-web-design-company-${client}`,
  (slug, client) => `custom-website-design-${slug}-${client}`,
  (slug, client) => `web-design-${slug}-${client}`,
];

const manifest = {};
const errors = [];

SLUGS.forEach((slug, p) => {
  const heroTarget = `web-design-${slug}-hero.webp`;
  const heroAbs = path.join(IMG, heroTarget);
  if (fs.existsSync(heroAbs)) errors.push(`exists: ${heroTarget}`);
  else fs.copyFileSync(HERO_SRC, heroAbs);

  const entries = [];
  for (let k = 0; k < 6; k++) {
    const client = CLIENTS[(p + k) % 10];
    const base = PATTERNS[(p + k) % 6](slug, client.key);
    const filename = `${base}.png`;
    const abs = path.join(IMG, filename);
    if (fs.existsSync(abs)) {
      errors.push(`exists: ${filename}`);
      continue;
    }
    fs.copyFileSync(path.join(IMG, client.file), abs);
    entries.push({ client: client.key, filename, importName: `img${k + 1}` });
  }
  manifest[slug] = { hero: heroTarget, images: entries };
});

fs.writeFileSync(
  path.join(process.cwd(), "docs", "city-image-manifest.json"),
  JSON.stringify(manifest, null, 2)
);

if (errors.length) {
  console.error("ERRORS:\n" + errors.join("\n"));
  process.exit(1);
}
console.log("Copied heroes and portfolio images for", SLUGS.length, "cities");
