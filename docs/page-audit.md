# Page audit — therapist vertical geo pages

Baseline for the Phase 4–8 work. Generated 2026-10-10 against a production build. Every claim on these pages is rendered from the `data/vertical-seo` tree via `src/lib/verticalSeo.js`; no regulator, advertising-rule or statistic text is hardcoded in JSX.

- **Published pages: 17** (pillar, usa country, 10 provinces, 5 Ontario cities).
- **City links** = out-links on the page matching `/therapist-seo/{province}/{city}`. **Province links** = distinct out-links to province-level pages. **Legacy links** = out-links to live `/seo/for-therapists-*` pages.
- **In-links (group)** = other published vertical pages that link here. **In-links (chrome)** = site chrome pages (`/`, `/sitemap`, `/seo`, `/services`, `/work`) that link here.

## Per-page breakdown

| Page | Kind | Sections | Unique words | Out | In (group) | In (chrome) | City links | Province links | Legacy links | FAQs |
| --- | --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| /therapist-seo | pillar | directAnswer, intro, localInsight, localChecklist, links, moreCities, proof, faq | 416 | 36 | 16 | 4 | 0 | 10 | 6 | 8 |
| /therapist-seo/alberta | province | directAnswer, intro, localInsight, localChecklist, links, moreCities, proof, faq | 337 | 26 | 2 | 1 | 0 | 0 | 5 | 5 |
| /therapist-seo/british-columbia | province | directAnswer, intro, localInsight, localChecklist, links, moreCities, proof, faq | 327 | 26 | 2 | 1 | 0 | 0 | 5 | 5 |
| /therapist-seo/manitoba | province | directAnswer, intro, localInsight, localChecklist, links, moreCities, proof, faq | 339 | 22 | 2 | 1 | 0 | 0 | 1 | 5 |
| /therapist-seo/new-brunswick | province | directAnswer, intro, localInsight, localChecklist, links, moreCities, proof, faq | 316 | 24 | 2 | 1 | 0 | 0 | 3 | 5 |
| /therapist-seo/newfoundland-and-labrador | province | directAnswer, intro, localInsight, localChecklist, links, moreCities, proof, faq | 332 | 22 | 2 | 1 | 0 | 0 | 1 | 5 |
| /therapist-seo/nova-scotia | province | directAnswer, intro, localInsight, localChecklist, links, moreCities, proof, faq | 328 | 23 | 2 | 1 | 0 | 0 | 2 | 5 |
| /therapist-seo/ontario | province | directAnswer, intro, localInsight, localChecklist, links, citiesIndex, proof, faq | 362 | 26 | 7 | 1 | 5 | 0 | 0 | 5 |
| /therapist-seo/ontario/brampton | city | directAnswer, intro, localInsight, localChecklist, links, proof, faq | 351 | 26 | 5 | 0 | 4 | 1 | 0 | 6 |
| /therapist-seo/ontario/hamilton | city | directAnswer, intro, localInsight, localChecklist, links, proof, faq | 333 | 26 | 5 | 0 | 4 | 1 | 0 | 6 |
| /therapist-seo/ontario/mississauga | city | directAnswer, intro, localInsight, localChecklist, links, proof, faq | 336 | 26 | 5 | 0 | 4 | 1 | 0 | 6 |
| /therapist-seo/ontario/ottawa | city | directAnswer, intro, localInsight, localChecklist, links, proof, faq | 347 | 26 | 5 | 0 | 4 | 1 | 0 | 6 |
| /therapist-seo/ontario/toronto | city | directAnswer, intro, localInsight, localChecklist, links, proof, faq | 368 | 26 | 5 | 0 | 4 | 1 | 0 | 6 |
| /therapist-seo/prince-edward-island | province | directAnswer, intro, localInsight, localChecklist, links, proof, faq | 318 | 21 | 2 | 1 | 0 | 0 | 0 | 5 |
| /therapist-seo/quebec | province | directAnswer, intro, localInsight, localChecklist, links, moreCities, proof, faq | 317 | 26 | 2 | 1 | 0 | 0 | 5 | 5 |
| /therapist-seo/saskatchewan | province | directAnswer, intro, localInsight, localChecklist, links, moreCities, proof, faq | 328 | 23 | 2 | 1 | 0 | 0 | 2 | 5 |
| /therapist-seo/usa | country | directAnswer, intro, localInsight, localChecklist, links, proof, faq | 383 | 31 | 0 | 2 | 0 | 10 | 0 | 6 |

## Flags

| Page | Issue |
| --- | --- |
| /therapist-seo/alberta | province page has ZERO linked city pages |
| /therapist-seo/british-columbia | province page has ZERO linked city pages |
| /therapist-seo/manitoba | province page has ZERO linked city pages |
| /therapist-seo/new-brunswick | province page has ZERO linked city pages |
| /therapist-seo/newfoundland-and-labrador | province page has ZERO linked city pages |
| /therapist-seo/nova-scotia | province page has ZERO linked city pages |
| /therapist-seo/prince-edward-island | province page has ZERO linked city pages |
| /therapist-seo/quebec | province page has ZERO linked city pages |
| /therapist-seo/saskatchewan | province page has ZERO linked city pages |
| /therapist-seo/usa | no in-links within the vertical cluster (linked only from site chrome) |

## Notes and proposed fixes (document only — nothing implemented this phase)

- **Zero city links on 9 of 10 province pages.** Only `/therapist-seo/ontario` links city pages (its 5 published cities). The fix is Phases 4-5 (publish the Quebec, BC, Alberta, Saskatchewan, Manitoba and Nova Scotia city batches). Until then those province pages render a 'coming soon' city index and lean on the intro + local checklists; this is intentional, not an omission.
- **No orphan live legacy pages (0).** The Phase 2 'More cities' block keeps the 30 live legacy city pages crawlable (24 Canadian via their province page, 6 US via the pillar).
- **USA country page has no in-links inside the vertical cluster.** `/therapist-seo/usa` is only reached from `/` and `/sitemap`. Proposal: link it from the pillar's province/country index (the pillar currently lists provinces only - the `usa` child slug is not a province, so it falls out of `provincesIndex`). This is on the Phase 8 baseline list.
- **Sibling similarity:** no published sibling pair exceeds 0.30 (gate caps at 0.35; nearest pair ≈ 0.03).
- **Claim sourcing:** regulator names, advertising-rules notes and province search notes come from `data/vertical-seo/vertical-geo/therapists/{province}.json`; city stats (population, industries, neighbourhoods) from `cities.json`. Nothing is hardcoded in templates. Human spot-check of numbers against the sources is still recommended before merge.
- **Mostly-empty sections:** none flagged. Every published page renders directAnswer, intro, localInsight, localChecklist, links, proof and ≥ 5 FAQs (city pages ≥ 6 per the gate; the province/pillar/usa pages carry 5–8).
- **Word counts are from rendered HTML** (nav + footer chrome included), so they are a conservative floor; the page-specific copy is smaller than the numbers above.
