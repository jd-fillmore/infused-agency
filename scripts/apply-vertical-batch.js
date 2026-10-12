#!/usr/bin/env node
// Upserts data/vertical-seo/verticals.json and data/vertical-seo/proof.json from
// the batch-2 definitions in scripts/vertical-batch-specs.js.
//
// Idempotent: entries are matched by slug / proof id, so re-running updates in
// place rather than duplicating. Verticals already present but not in the batch
// (e.g. therapists, contractors, dentists) are left untouched.
//
// Usage: node scripts/apply-vertical-batch.js
const fs = require("fs");
const path = require("path");
const { BATCH } = require("./vertical-batch-specs");

const DATA_DIR = path.join(process.cwd(), "data", "vertical-seo");
const SITE = "https://infused.agency";
const UPDATED = "2026-10-11";

const VERTICALS_PATH = path.join(DATA_DIR, "verticals.json");
const PROOF_PATH = path.join(DATA_DIR, "proof.json");

function readJson(p) {
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

function writeJson(p, obj) {
  fs.writeFileSync(p, JSON.stringify(obj, null, 2) + "\n", "utf8");
}

function verticalFromSpec(spec) {
  return {
    slug: spec.slug,
    urlSlug: spec.urlSlug,
    singular: spec.singular,
    plural: spec.plural,
    displayName: spec.displayTitle,
    category: spec.category,
    industriesBenefit: spec.industriesBenefit,
    parentSlug: spec.parentSlug || null,
    maxDepth: "city",
    primaryKeywords: spec.primaryKeywords,
    geoScope: { provinces: spec.geoProvinces },
    launchStatus: "live",
    serviceEmphasis: spec.serviceEmphasis,
    buyerJourneyNotes: spec.buyerJourneyNotes,
    proofRefs: [spec.proofId],
    defaultFaqs: [],
    updated: UPDATED,
  };
}

function proofFromSpec(spec) {
  return {
    id: spec.proofId,
    type: "result",
    namedEntity: "Local SEO program",
    quote: spec.proofText,
    source: SITE,
    verticals: [spec.slug],
  };
}

function upsert(list, key, entry) {
  const idx = list.findIndex((x) => x[key] === entry[key]);
  if (idx >= 0) {
    list[idx] = Object.assign({}, list[idx], entry);
    return "updated";
  }
  list.push(entry);
  return "added";
}

function main() {
  const verticals = readJson(VERTICALS_PATH);
  const proofs = readJson(PROOF_PATH);
  const existingProofIds = new Set(proofs.map((p) => p.id));

  const stats = { verticalAdded: 0, verticalUpdated: 0, proofAdded: 0, proofKept: 0 };
  const slugs = new Set();

  for (const spec of BATCH) {
    if (slugs.has(spec.slug)) throw new Error(`duplicate batch slug: ${spec.slug}`);
    slugs.add(spec.slug);

    const v = verticalFromSpec(spec);
    const res = upsert(verticals, "slug", v);
    stats[res === "added" ? "verticalAdded" : "verticalUpdated"]++;

    // Reuse an existing real proof if the spec points at one; otherwise add the
    // generic "Local SEO program" review placeholder.
    if (existingProofIds.has(spec.proofId)) {
      stats.proofKept++;
    } else {
      upsert(proofs, "id", proofFromSpec(spec));
      existingProofIds.add(spec.proofId);
      stats.proofAdded++;
    }
  }

  // Keep the file ordered by slug for stable diffs.
  verticals.sort((a, b) => a.slug.localeCompare(b.slug));
  proofs.sort((a, b) => a.id.localeCompare(b.id));

  writeJson(VERTICALS_PATH, verticals);
  writeJson(PROOF_PATH, proofs);

  console.log(
    `apply-vertical-batch: verticals +${stats.verticalAdded}/~${stats.verticalUpdated}, ` +
      `proofs +${stats.proofAdded} (kept ${stats.proofKept}). ` +
      `Totals: ${verticals.length} verticals, ${proofs.length} proofs.`
  );
}

main();
