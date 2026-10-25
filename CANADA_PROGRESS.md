# CANADA NICHE PAGES — PROGRESS (do not commit)

> **Historical document.** This tracks the original Next.js implementation of
> the Canada niche pages, which has been retired. Astro is the repository's
> only application; the surviving data model lives in `src/lib/canadaNicheSeo.js`,
> `src/content/canada-niche/` and the Astro templates under `astro/src/templates/`.
> See `docs/astro-rebuild/LEGACY_NEXTJS_REMOVAL_REPORT.md`.

Niche: Concrete Contractors (slug `concrete-contractors`, display "Concrete Contractors")
Branch: `canada-concrete-pages` (from master af11a16)
URLs: `/seo/for-concrete-contractors` (hub) + `/seo/for-concrete-contractors/<city>` (30 city pages) = 31 pages

## Structure

- `src/lib/canadaNicheSeo.js` — provinces, cities (slug/province/nearby), niche registry, prop + schema helpers
- `src/content/canada-niche/concrete-contractors/hub.js` — hub copy
- `src/content/canada-niche/concrete-contractors/cities/<slug>.js` — one file per city copy
- `components/canadaNiche/CanadaNicheHubPage.js`, `CanadaNicheCityPage.js` — shared components
- `src/pages/seo/for-concrete-contractors/index.js`, `[city].js` — thin route shells
- `scripts/check-canada-niche.js` — inbound-link >=2, forbidden words, shingle overlap

## Stages / batches

- [ ] Stage 1 — data, routing, hub, checker (commit: "Add concrete contractors Canada hub, data and routing")
- [ ] Batch 1 — toronto, mississauga, ottawa, hamilton, kitchener
- [ ] Batch 2 — london-on, windsor-on, kingston-on, montreal, quebec-city
- [ ] Batch 3 — laval, gatineau, vancouver, surrey, burnaby
- [ ] Batch 4 — victoria-bc, richmond-bc, calgary, edmonton, red-deer
- [ ] Batch 5 — lethbridge, winnipeg, brandon, regina, saskatoon
- [ ] Batch 6 — moncton, fredericton, halifax, st-johns, charlottetown
- [ ] Step 5 — link edits: Niagara concrete page -> hub; /industries -> hub (only if obvious spot)
- [ ] Final verification report

## Status key

- [ ] not started
- [~] in progress
- [x] done, committed, pushed

## Notes / review list

(Facts I am not 100% sure about go here and into the final report.)

- Cross-province "nearby" picks for regina/saskatoon (winnipeg, brandon) and st-johns
  (halifax, moncton, charlottetown) are regional, not adjacent — flag for review.
- /industries has no province grouping; hub reuses its Section + card grid, grouped by
  province headings (verticalSeo ProvinceCard is the only true province-grouped layout).
