# Vertical SEO progress: General Contractors (canada-general-contractors)

> **Historical document.** This tracks the original Next.js implementation of
> the vertical×geo system, which has been retired. Astro is the repository's
> only application; the system now lives in `src/lib/verticalSeo.js`, `data/vertical-seo/`
> and `astro/src/templates/VerticalGeoPage.astro`. See
> `docs/astro-rebuild/LEGACY_NEXTJS_REMOVAL_REPORT.md` and `docs/vertical-seo-build.md`.

NOT committed. One stage per commit; push after each commit.

Context: adds one vertical — General Contractors — mirroring the contractor
verticals (HVAC, plumber, roofer, electrician, landscaper) exactly:
urlSlug `general-contractor-seo`, hub `/general-contractor-seo`, province pages
`/general-contractor-seo/<province>`, city pages
`/general-contractor-seo/<province>/<city>`, all 10 provinces, 30 data-rich
cities (maxDepth "city"). Branch created from up-to-date master.

Stages:
1. [ ] Add vertical's data entry (vertical-batch-specs.js spec + verticals.json
       entry + proof.json entry), launch wave placement, hub page content.
       Build, lint, verify:seo. Commit "Add General Contractors vertical and hub".
       Push.
2. [ ] Province pages (~3 provinces per batch): build, lint, verify:seo,
       commit "Add General Contractors <provinces> pages", push, after each batch.
3. [ ] City pages (~5-10 cities per batch): same cadence, commit + push per batch.
4. [ ] One link edit: /seo/for-general-contractors-niagara -> new hub
       (IndustryNiagaraPage makes a paragraph link easy); otherwise skip and report.
5. [ ] Verify & report: build + lint, verify:seo + validate-schema, no broken
       links, no /seo/st-catharines or /seo/niagara-falls links, git diff vs
       master shows no existing-vertical changes, forbidden-word scan, overlap
       check (top 10 pairs; vs HVAC/plumber/roofer/electrician where pages exist),
       per-page URL/word count/title/meta, totals, needs-my-review list, commit
       hashes, git ls-remote confirmation.

Stage 1 DONE: commit 41a8eb3 "Add General Contractors vertical and hub", pushed to origin/canada-general-contractors (confirmed via git ls-remote: 41a8eb3265eb5a1774139e332b21ace426fe8a1a). Build, lint, verify:seo all green. 43 published pages (42 therapists + 1 GC pillar), 0 failures, 0 broken links, 0 slug errors.

Stage 2 IN PROGRESS: Province pages, batches of ~3. Batch 1 DONE (ontario, quebec, british-columbia): commit 33b24ea pushed. Batch 2 DONE (alberta, saskatchewan, manitoba + rewrote all 6 province files for distinct prose): build, lint, verify:seo green — 49 published, 0 failures, nearest GC similarity 0.248 (under 0.35 gate), all unique words 401-515 (≥400), summaries 142-155 chars. Committing batch 2 now. Batch 3 DONE (nova-scotia, new-brunswick, newfoundland-and-labrador): commit 023d1bd pushed. All 9 provinces published, 0 failures. Batch 4 = prince-edward-island (final province, writing content + vertical-geo).
