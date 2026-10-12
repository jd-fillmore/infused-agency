# TASK: automatic wave-based publishing of industry verticals, plus build-time optimization
 
First read `docs/vertical-seo-build-spec.md` and `docs/vertical-seo-build.md` for context on the existing vertical SEO system. Use yarn. No new dependencies. Work on the current branch, with one commit per numbered item. Do not stop to ask questions; record assumptions in `docs/vertical-seo-build.md` and keep going.
 
All vertical content stays committed in the repo. Only scheduled, released verticals get built into pages. Don't change any page content beyond item 1.
 
---
 
## 1. Terminology and card copy (only for verticals NOT in wave 1)
 
None of these are live, so slug changes need no redirects. Wave 1 slugs are frozen and must not change.
 
- Convert US usage to Canadian usage in display names, titles, slugs, data and copy: "Remodeling/Remodelers" becomes "Renovation/Renovators", "Centers" becomes "Centres", and ADU becomes a Canadian-appropriate "Secondary Suite & ADU Builders" (document your reasoning). Acronyms are uppercase in prose (ADU, HVAC).
- Fix every industry's category assignment so each makes sense (for example move Daycare out of Business & Professional Services).
- Rewrite each industry's one-line card blurb on `/industries` so it's specific to how that industry's customers actually search (for example emergency calls for locksmiths), not the repeated "Reach X searching for Y by service and location" template.
- Remove every trace of the old slugs from data, tests and sitemaps.
---
 
## 2. Launch schedule
 
Create `data/vertical-seo/launch.json` with `startDate` (default: 3 days from today, as an ISO date), `freezeAtWave` (null by default), and a `waves` array with `wave`, `offsetDays` and `verticals` (slugs). Resolve names to slugs from the data and report the resolved slugs.
 
- **Wave 1, offsetDays 0:** Therapists, Electricians, Plumbers, HVAC Contractors, Roofers & Siding Contractors, Landscape Contractors, Dentists, Accountants.
- **Wave 2, offsetDays 21:** General Contractors & Home Builders, Home Renovation Companies, Kitchen & Bathroom Renovators, Flooring Contractors, Window & Door Installation Companies, Pest Control Companies, Tree Services, Garage Door Sales & Repair, Driveway & Paving Contractors, Swimming Pool Builders.
- **Wave 3, offsetDays 42:** Basement Renovation Companies, Deck & Patio Builders, Home Additions & Extension Companies, Custom Cabinet Companies, Tile & Stone Contractors, Drywall Contractors, Design-Build Firms, Moving Companies, Locksmiths, Commercial Cleaning Services.
- **Wave 4, offsetDays 63:** every remaining vertical that is not on hold.
- **`hold` array (never auto-published):** Family Lawyers, Immigration Lawyers, Personal Injury Lawyers, Real Estate Lawyers, Med Spas, Mortgage Brokers, Financial Advisors.
---
 
## 3. Publishing logic
 
A vertical is published only if:
- its wave's date (startDate + offsetDays, compared as UTC dates) is on or before the as-of date, where the as-of date is today unless env var `LAUNCH_AS_OF` (YYYY-MM-DD) overrides it, and
- its wave number is not above `freezeAtWave` when that is set, and
- it is not in `hold`.
Unreleased, held and frozen verticals must behave exactly like scaffold: pillar, province and city URLs return 404, and they appear nowhere (sitemaps, Solutions mega menu, `/industries` grid and category chips, footer, homepage industry chips, internal links, related-links blocks, any search index). Coverage counts ("10 provinces · 30 cities") must be computed only from published pages. Legacy therapist redirects stay as they are.
 
---
 
## 4. Automatic quality guard
 
At build time, a released vertical whose pages do not all pass the quality gate is skipped (not published) instead of failing the build, and is listed with the reason. A malformed data file or a broken link on a published page must still fail the build.
 
Generate `docs/launch-status.md` on every build listing: the as-of date, published waves, published verticals with page counts, skipped verticals with reasons, held verticals, and the next wave's date.
 
---
 
## 5. Scheduled deploys
 
- Detect the hosting setup (`vercel.json`, `netlify.toml`, etc.) and the git remote.
- Add `scripts/should-deploy-today.js`: exits successfully with the output `true` only when some wave's date equals today's UTC date.
- Add `.github/workflows/scheduled-wave-deploy.yml`: runs daily at 09:00 UTC and on manual dispatch, runs that script, and when it says true, POSTs to the secret `DEPLOY_HOOK_URL` to trigger a production rebuild.
- If the repo isn't on GitHub or the host has no deploy-hook equivalent, document the closest alternative.
- In `docs/vertical-seo-build.md`, write the one-time setup steps for the detected host (how to create the deploy hook, where to add the secret, how to test with a manual run), plus how to pause (set `freezeAtWave`), how to change dates, how to move a vertical out of hold, and how to preview a future wave with `LAUNCH_AS_OF`.
---
 
## 6. Build-time optimization
 
Goal: reduce `yarn build` time without changing any output. The full-catalogue build currently takes 5 to 6 minutes.
 
1. Profile the build and report time per stage: prebuild verify, data collection, quality gate and similarity, static page generation.
2. Memoize all data loaders at module scope so each JSON file is read and parsed once per build process.
3. Compute quality-gate and similarity results once. Only compute them for verticals that are released as of the as-of date. Compute each page's shingle set once and compare only within the required sibling sets, using an inverted index or similar so the work isn't quadratic across all pages. Cache results to a generated file inside the framework's build cache directory (for example `.next/cache`), keyed on a hash of each content file plus the gate's version, so unchanged pages are skipped on later builds. Have `verify:seo` and the page builds read the same cache.
4. Make sure verification is not running twice (for example once in `prebuild` and again inside the build).
5. Don't change any URL or page content. Prove it by comparing the generated route list and a hash of the HTML of a sample of pages before and after.
6. Report build times for: wave 1 only, all waves released (`LAUNCH_AS_OF` far in the future), and a repeat build with a warm cache.
---
 
## 7. Tests and verification
 
- Add unit tests for: wave dates, the as-of override, `freezeAtWave`, hold, the gate-skip behaviour, `should-deploy-today`, and cache invalidation when a content file changes.
- Build with `LAUNCH_AS_OF` set to `startDate` and report: resolved slugs per wave, published page counts per vertical, total routes, sitemap URL count, build time.
- Prove that wave 2 and held verticals return 404 at a pillar, a province and a city URL, and appear nowhere (sitemaps, nav, `/industries`, footer, internal links).
- Rebuild with `LAUNCH_AS_OF` set 22 days after `startDate` and show wave 2 appearing, and again 64 days after to show wave 4.
- Run `yarn verify:seo`, `yarn test:seo`, `yarn lint` and `yarn build`.
 