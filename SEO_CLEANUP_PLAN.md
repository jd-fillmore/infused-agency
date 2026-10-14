# SEO Cleanup Plan — Niagara Industry Focus

**Status:** Phase 1 deliverable (read-only audit). **No code has been changed.** Waiting for user "go" before Phase 2.
**Branch context:** `feat/home-seo-depth` @ `3e4e6d5`, working tree clean at time of audit.
**Date:** 2026-10-12

---

## 1. Objective

Restructure the industry/geo SEO surface so the site speaks to **Niagara** first:

1. Build **seven new bespoke pages** at literal `/seo/for-<industry>-niagara`, one per industry that has **real client proof**.
2. Consolidate / redirect **off-topic legacy geo pages** (e.g. Arizona solar, Ontario dental) into their Niagara equivalents or 410.
3. **Keep every therapist SEO page** (Canada **and** USA) — explicitly requested.
4. Update the homepage, `/industries` hub, nav, footer, and sitemaps to feature the 7 new pages + Therapists (Canada).

Hard constraints:
- Homepage `<title>`, meta description and canonical **must not change**.
- Do not touch Niagara city pages except to fix links that point at removed pages.
- Do not crawl `torontoseo.com`.
- New page copy: 900–1,300 words, original, unique, similarity (word 5-gram Jaccard) ≤ 0.35 vs other drafts + existing pages (excluding the Areas block).
- Never invent stats. Use only existing proof facts.

---

## 2. Locked decisions (from Q&A)

| # | Decision | Notes |
|---|----------|-------|
| D1 | **Keep ALL therapist SEO pages** — Canadian and American | Supersedes the earlier idea to 301/410 the US therapist pages. |
| D2 | New pages use the **bespoke Niagara city-page style** | Model = `components/cities/NiagaraCityPage.js`; NOT `VerticalSeoPage.js`. |
| D3 | New routes are **literal** `/seo/for-<industry>-niagara` | Not the dynamic `[vertical]` system. |
| D4 | Update `/industries` + homepage to feature the **7 new + Therapists (Canada)** | |

---

## 3. Current inventory

### A. Bespoke Niagara city pages — **KEEP (template model)**
11 pages: `beamsville, crystal-beach, fonthill, fort-erie, grimsby, niagara-falls, niagara-on-the-lake, port-colborne, st-catharines, thorold, welland`.
- Source: `src/pages/seo/<city>.js`, each a hand-written `page` object.
- Shared renderer: `components/cities/NiagaraCityPage.js` (`NIAGARA_CITIES` array, sections: hero, intro, proof (Flat Rock), servicesBlock, localBlock, whyChoose, services, faqs).
- These are the blueprint for the 7 new pages.

### B. Legacy `/seo/*` pages — **REVIEW / partially redirect**
- Service landing pages (**KEEP**): `index, content-writing, franchise-seo, link-building, local-seo, technical-seo, white-label`.
- 11 city pages (above) — KEEP.
- **8 Arizona solar** pages — REDIRECT → new `/seo/for-solar-companies-niagara` (see §6).
- **46 `for-therapists-*`** pages — **KEEP ALL** (D1), including `usa` + US legacy cities (`albany, buffalo, huntington, new-york, rochester, syracuse`) and all Canadian provinces/cities.

### C. Vertical × geo system — **KEEP; scope question open**
- Dynamic routes `src/pages/[vertical]/…` render `components/verticalSeo/VerticalSeoPage.js`.
- Currently published: **329 pages** across 8 wave-1 verticals `{pillar:8, province:80, city:240, country:1}`.
  - accountants 41, dentists 41, electricians 41, hvac-contractors 41, landscapers 41, plumbers 41, roofers 41, therapists 42.
- Enumerated (incl. unpublished): **2,956 across 51 verticals**.
- Pillar URLs: `/accountant-seo, /dentist-seo, /electrician-seo, /hvac-contractor-seo, /landscaper-seo, /plumber-seo, /roofer-seo, /therapist-seo`.
- **Open decision O1:** the other 7 industries (accountants, dentists, electricians, hvac, landscapers, plumbers, roofers) are generic "SEO for X in Canada[/province/city]" pages — the single largest source of Niagara-off-topic dilution (~281 live). User has not ruled on these. Options in §11.
- `therapists` vertical KEEP (D1).

### D. Other top-level thin/geo pages — **REVIEW**
`alberta-arborist-tree-removal-websites`, `british-columbia-arborist-tree-removal-websites`, `seo-dental-in-ontario`, `caledonia-web-design`, `niagara-web-design`, `wordpress-developer-niagara`, `tree-reports`, `cass-a-bella-construction`, `kd-florist`, `effective-web-design-steps`.
- Some are real local pages (niagara-web-design, wordpress-developer-niagara, cass-a-bella, kd-florist) — likely KEEP.
- Off-topic/geo (arborist AB/BC, seo-dental-in-ontario) — candidates for 410 or consolidation. **Confirm each.**

### E. Broken footer links — **FIX**
`components/Footer/industries-modal.js` links ~45 `/seo-keywords-for-*` URLs. **No page files exist** for these in the current branch (0 files in `src/pages`). → 404s. Fix by repointing to the new/remaining industry pages or removing the modal.

### F. Stale tracked build artifact — **FINDING**
- `out/` is **committed to git (234 files)** — a stale `next export` of an *older* site (`/seo-keywords-for-*`, `/beamsville-seo-company`, `/digital-marketing-niagara`, `/how-we-work`, etc.).
- Not referenced by current source; safe candidate for removal, but it is 234 tracked files → treat as a **separate cleanup**, confirm before deleting.

---

## 4. The 7 new pages (one per industry, region-wide, no sub-city pages)

Proposed title/meta are drafts (<60 / <155 chars); **the original brief specified exact strings that could not be recovered from the repo — confirm before shipping** (see O2).

| # | Route | Industry | Client proof available | Proposed title | Proposed meta (draft) |
|---|-------|----------|------------------------|----------------|-----------------------|
| 1 | `/seo/for-concrete-contractors-niagara` | Concrete contractors | Fred's Concrete (Lucas Folino); Niagara North Contractors (niagaranorthcontracting.ca) | Concrete Contractor SEO in Niagara \| Infused Agency | SEO for Niagara concrete contractors. Driveways, patios, foundations, stamped concrete & retaining walls. Real local results from Infused Agency. |
| 2 | `/seo/for-insulation-niagara` | Insulation | Jerry's Insulating | Insulation Company SEO in Niagara \| Infused Agency | SEO for Niagara insulation companies. Rank for spray foam, batt & attic insulation searches and win more local jobs. Request a free audit. |
| 3 | `/seo/for-electricians-niagara` | Electricians | VISCA Electric (Sandro Visca) | Electrician SEO in Niagara \| Infused Agency | SEO for Niagara electricians. Rank for panel upgrades, EV chargers, wiring & emergency calls. Local results from Infused Agency. |
| 4 | `/seo/for-law-firms-niagara` | Law firms | Suk Law | Law Firm SEO in Niagara \| Infused Agency | SEO for Niagara law firms. Rank for local practice-area searches and turn them into qualified consultations. Request a free audit. |
| 5 | `/seo/for-solar-companies-niagara` | Solar / energy | Delta Energy Solutions (+670%) | Solar Company SEO in Niagara \| Infused Agency | SEO for Niagara solar companies. Rank for solar installation searches across Niagara. Real results: +670% for Delta Energy Solutions. |
| 6 | `/seo/for-wineries-niagara` | Wineries | Flat Rock Cellars (+550%) | Winery SEO in Niagara \| Infused Agency | SEO for Niagara wineries. Rank for tastings, tours, weddings & online wine sales. Real results: +550% for Flat Rock Cellars. |
| 7 | `/seo/for-deck-builders-niagara` | Deck builders | Timberwolf Carpentry (timberwolfcr.ca) — placeholder | Deck Builder SEO in Niagara \| Infused Agency | SEO for Niagara deck builders. Rank for decks, railings, pergolas & outdoor living searches and win more local projects. |

> Concrete (#1) and Deck builders (#7) cover their listed services as **internal sections**, not separate pages.
> Placeholder tokens to keep as-is where data is missing: `<TIMBERWOLF_RESULTS or blank>`, `<NIAGARA_NORTH_RESULTS or blank>`.

---

## 5. Content / template spec

- **Component:** new `components/seo/IndustryNiagaraPage.js` (or extend `NiagaraCityPage.js`) mirroring the city-page section structure.
- **Data:** one content object per page in `src/pages/seo/for-*-niagara.js` (same pattern as `src/pages/seo/<city>.js`).
- **Sections:** hero → body (900–1,300 words) → **ONE** "Areas we serve" block → proof → services → 4–5 FAQs → **"Other industries we serve in Niagara"** block.
- **Areas block:** 12 Niagara municipalities (Fort Erie, Grimsby, Lincoln, Niagara Falls, Niagara-on-the-Lake, Pelham, Port Colborne, St. Catharines, Thorold, Wainfleet, Welland, West Lincoln) + named communities (Beamsville, Crystal Beach, Fonthill, Jordan, Vineland, Smithville, Port Robinson…). Link the 11 existing city pages; plain text otherwise.
- **Internal links required:** `/seo`, `/seo/local-seo`, homepage (once). Do NOT link to pages that will be removed.
- **Schema:** reuse `src/lib/verticalSeoSchema.js` helpers so `scripts/validate-schema.js --require` passes. New pages are NOT covered by `verify-vertical-seo.js` (that gate only understands the `[vertical]` system).
- **Uniqueness:** draft with Ollama + hand-edit; measure 5-gram Jaccard ≤ 0.35 vs sibling drafts and existing page copy.

---

## 6. Removal & redirect map (confirm before execution — O3)

| Source (current) | Action | Target |
|------------------|--------|--------|
| `/seo/for-solar-companies-{arizona,chandler,gilbert,glendale,mesa,phoenix,scottsdale,tucson}` (8) | **301** | `/seo/for-solar-companies-niagara` |
| `*-arborist-tree-removal-websites` (AB, BC) | 410 / consolidate | confirm |
| `/seo/dental-in-ontario` (`seo-dental-in-ontario`) | 410 or consolidate | confirm |
| Other top-level thin pages | keep/410 per page | confirm |
| All therapist pages (Canada + USA) | **KEEP — no change** | — |
| Vertical pillars/provinces/cities (8 industries) | **KEEP** (pending O1) | — |

Rules: each redirect points **directly** to its final URL (no chains); **301/308 only** (never meta/JS); 410 via middleware/route handler. Redirects added to `next.config.js`. The new target pages must exist before the old ones are removed (no window of 404s).

---

## 7. Hub / homepage / nav / footer wiring

- **Homepage** `src/pages/index.js`: replace Industries section items (~992–1041, fed by `buildIndustriesProps().items`) with the **7 new + Therapists (Canada)**; update the therapist sentence (~900–921). **Do not touch `<title>`/meta/canonical.**
- **`/industries` hub** `src/pages/industries.js`: same list source update.
- **Nav** `components/Nav/nav.js` → `/industries`; `components/Nav/megaMenu.js` renders `INDUSTRIES` from `src/generated/services-nav.json`, which is generated by `buildNavSnapshot()` (`src/lib/services.js:492`) and currently emits the 8 archived verticals as `"SEO for <Plural> in Canada"`. To feature the 7, either add bespoke entries here or maintain a curated list — **decide in §11 (O4)** because `services-nav.json` is a **generated/prebuild** file.
- **Footer** `components/Footer/footer.js`: CITY list (11 Niagara cities) — keep. `components/Footer/industries-modal.js`: fix ~45 broken `/seo-keywords-for-*` links (§3E).
- **HTML sitemap** `src/pages/sitemap.js`: currently hard-codes 8 Arizona solar links + 12 therapist vertical URLs. Remove Arizona (redirected) and add the 7 new pages.

---

## 8. Files that will change (Phase 2 estimate)

**Create:** 7 × `src/pages/seo/for-<industry>-niagara.js`; `components/seo/IndustryNiagaraPage.js` (+ SCSS if needed).
**Edit:** `src/pages/index.js`, `src/pages/industries.js`, `src/pages/sitemap.js`, `next.config.js`, `components/Nav/nav.js` + `navData.js`, `components/Footer/industries-modal.js` (+ possibly `footer.js`), `src/lib/services.js` (`buildNavSnapshot`, if O4 = add), `docs/redesign-allowlist.json` (new/removed pages).
**Delete:** 8 Arizona solar page files; selected off-topic top-level pages (§6).
**Generated:** `src/generated/services-nav.json`, `public/sitemap-0.xml`, `public/sitemap-vertical-*.xml` (regenerated at build).
**Possible separate cleanup:** tracked `out/` (234 files) — confirm.

---

## 9. Build gates / sitemaps / schema

- `prebuild` → `scripts/verify-vertical-seo.js`: fails only on structural errors; **writes `src/generated/services-nav.json` + docs reports** (mutates tree — avoid running during Phase 1).
- `postbuild` → `next-sitemap && generate-vertical-sitemaps.js && validate-schema.js --require`.
- `next-sitemap.config.js`: `siteUrl https://infused.agency`, `outDir ./public`. New `/seo/for-*-niagara` pages auto-appear in `public/sitemap-0.xml`.
- `generate-vertical-sitemaps.js` scrubs vertical prefixes from `sitemap-0.xml`; legacy `/seo/for-*` and `/seo/<city>` stay there.
- Removed pages must be gone from sitemaps (next-sitemap handles it post-delete) and return 301/410.
- `verify:seo` = verify-vertical-seo + validate-schema + seo-regression.

---

## 10. Phase 2 verification & report

1. `yarn build` (or `yarn lint` + build) passes; `validate-schema` passes for all 7.
2. Crawl from homepage: report broken links, redirect chains, orphans, missing/duplicate title/H1/meta.
3. Confirm every removed URL returns its intended 301/410.
4. Report: files changed; new URLs + word counts; similarity scores; skipped items.

---

## 11. Open questions — NEED INPUT

- **O1 (biggest):** fate of the **other 7 live vertical industries** (accountants, dentists, electricians, hvac, landscapers, plumbers, roofers; ~281 pages)? Options: (a) keep as-is; (b) keep pillars + province only, 410 city pages; (c) consolidate into Niagara. Note: `electricians` etc. overlap the *new* bespoke pages — decide whether the vertical `electrician-seo` pillar stays alongside `/seo/for-electricians-niagara`.
- **O2:** The original brief's **exact title/meta/H1 strings** were not recoverable from the repo. Provide them or approve the drafts in §4.
- **O3:** Confirm each row of the §6 redirect map (esp. arborist AB/BC, seo-dental-in-ontario, and the ~10 top-level thin pages).
- **O4:** Should the **nav industries column** (generated `services-nav.json`) include the 7 bespoke pages, or stay vertical-only?
- **O5:** Remove the tracked stale `out/` export (234 files)?

---

## 12. Appendix — exact lists

**Arizona solar (8):** `for-solar-companies-{arizona, chandler, gilbert, glendale, mesa, phoenix, scottsdale, tucson}`.

**Niagara cities (11):** `beamsville, crystal-beach, fonthill, fort-erie, grimsby, niagara-falls, niagara-on-the-lake, port-colborne, st-catharines, thorold, welland`.

**Published verticals (8):** accountants, dentists, electricians, hvac-contractors, landscapers, plumbers, roofers, therapists.

**US legacy therapist cities:** albany, buffalo, huntington, new-york, rochester, syracuse.
