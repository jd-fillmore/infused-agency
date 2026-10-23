# Phase 1 Internal Linking Map

The graph below is based on the `219` rendered `200` pages. Redirecting links were followed to their final `200` URL before graph construction. A page is "reachable" if there is a path from `/`.

## Graph summary

| Measure | Value |
| --- | ---: |
| `200` pages | 219 |
| Reachable from `/` | 198 |
| Unreachable from `/` | 21 |
| Zero-inbound pages | 11 |
| Maximum click depth | 3 |
| Depth 0 | 1 |
| Depth 1 | 49 |
| Depth 2 | 69 |
| Depth 3 | 79 |

All 198 reachable pages are within three clicks of the homepage. The problem is not excessive depth; it is disconnected clusters and redirects that pass through the homepage.

## Global navigation and footer

The global header/footer creates very high inbound counts:

- 30 URLs have exactly 217 inbound links.
- 17 more URLs have exactly 216 inbound links.
- `/get-a-quote` has 216 inbound links.
- `/blog` has 216 inbound links.
- `/therapist-seo` has 64 inbound links.
- `/therapist-seo/usa` has 1 inbound link.
- `/general-contractor-seo` has 9 inbound links but is unreachable from `/`.

The 217-inbound set includes `/seo`, `/web-design`, all 21 service pages, eight featured Niagara industry pages, and `/sitemap`. These counts reflect repeated global navigation, not editorial relevance. They should not be used as a priority score for migration.

The footer is also the source of the largest link defect: `components/Footer/footer.js:9-10` links every page to `/seo/st-catharines` and `/seo/niagara-falls`, both of which now `301` to `/`. The homepage repeats the same links at `src/pages/index.js:64-65`. That produces 436 occurrences of links to two deleted city pages.

## Main content clusters

### Services cluster

- `/services` is the hub.
- 21 service pages are linked from the global mega menu and footer.
- The service pages are reachable at depth 1 and have `216-217` inbound links.
- `/seo` and `/web-design` are the two largest service hubs by outbound links and inbound links.
- `/ai-search` is a newer service page with global navigation exposure.

This is the strongest internal-linking system on the site. The migration must preserve the service hierarchy and the existing inbound links, especially `/seo` and `/web-design`.

### Therapist vertical

- `/therapist-seo` is reachable and has 64 inbound links.
- The cluster contains 1 pillar, 10 Canadian province pages, 1 USA page, and 30 city pages.
- The pillar links down to provinces and cities; province pages link across to cities and back to the pillar.
- `/therapist-seo/usa` has only 1 inbound link, so the US branch is weakly connected.
- The six live US legacy therapist pages are reachable but are separate from the new US branch.

The therapist cluster is the better-connected of the two verticals and can serve as the reference model for the general-contractor cluster.

### General contractor vertical

- `/general-contractor-seo` has 9 inbound links, all from its own province pages.
- Each of the 9 province pages has 1 inbound link, from the pillar.
- No navigation, footer, homepage, service, or industry page links to the pillar.
- All 10 pages are unreachable from `/`, even though all 10 are in the sitemap.

The cluster is internally self-referential but externally disconnected. It is discoverable only through the sitemap, not through human navigation. This is the clearest internal-linking defect in the current site.

The current build has no Prince Edward Island general-contractor page. `docs/vertical-seo-report.md:96` and `docs/launch-status.md:11,30` still describe 53 pages and a PEI page, but the source data does not contain the PEI file. The current build's 10-page general-contractor cluster is the accurate inventory.

### Niagara industry and city cluster

- `/industries` is the hub for 54 Niagara industry pages.
- 9 city SEO pages are linked from the footer and from industry pages.
- 11 web-design city pages are linked from the web-design hub and cross-link modules.
- Eight industry pages are in the global navigation and therefore have 217 inbound links.
- The rest of the industry pages are reachable through `/industries` and cross-links at depth 2-3.

This cluster is broad but largely reachable. The main defect is the footer's use of two deleted city URLs instead of the live city pages.

### Concrete-contractor cluster

- `/seo/for-concrete-contractors` is the hub.
- 30 city pages sit under `/seo/for-concrete-contractors/<city>`.
- The hub and city pages are reachable.
- The cluster is linked from Niagara concrete content and the industry network, not from the global service menu.

This cluster is content-heavy but structurally separate from the service and vertical systems. Its city content is data-driven by `src/lib/canadaNicheSeo.js` and `src/content/canada-niche/concrete-contractors/**`.

### Blog cluster

- `/blog` has 216 inbound links from global navigation/footer.
- 15 posts are linked from the blog listing.
- `/posts` is a second blog listing with zero inbound links.
- `/posts` is in the sitemap and has no canonical, so it is an indexable orphan duplicate.
- Blog posts cross-link to each other with a mix of relative and absolute URLs.

The active blog system is `/blog` + `/posts/<slug>`. `/posts` is a legacy duplicate that should be treated as a separate decision, not merged blindly.

## Orphan and disconnected pages

### Zero-inbound pages

- `/areas-we-serve`
- `/cass-a-bella-construction`
- `/effective-web-design-steps`
- `/get-started`
- `/kd-florist`
- `/postLink`
- `/posts`
- `/process`
- `/tree-reports`
- `/website-conversion-optimization`
- `/wordpress-developer-niagara`

Most are old case studies, utility pages, or accidental pages. `/get-started` is particularly important because it is a former lead form page with no inbound links and its form is commented out.

### Unreachable pages

The 21 unreachable pages are the 11 zero-inbound pages plus the 10-page general-contractor cluster:

- `/general-contractor-seo`
- `/general-contractor-seo/alberta`
- `/general-contractor-seo/british-columbia`
- `/general-contractor-seo/manitoba`
- `/general-contractor-seo/new-brunswick`
- `/general-contractor-seo/newfoundland-and-labrador`
- `/general-contractor-seo/nova-scotia`
- `/general-contractor-seo/ontario`
- `/general-contractor-seo/quebec`
- `/general-contractor-seo/saskatchewan`

## Conversion-path observations

- `/get-a-quote` is the primary conversion page and has 216 inbound links.
- `/get-started` has zero inbound links and no active form content.
- The only active form-like conversion path found is the Calendly inline widget on `/get-a-quote` (`src/pages/get-a-quote.js:11,59`).
- CTA links point to Calendly or `/get-a-quote`; there is no native form endpoint in the rendered site.
- `/reviews` is linked in the sitemap but redirects to `/get-a-quote`; it is not a live conversion page.

## Linking implications for the rebuild

1. The general-contractor cluster needs an explicit navigation or hub link; otherwise the migration will preserve an orphaned 10-page cluster.
2. The footer must stop linking to `/seo/st-catharines` and `/seo/niagara-falls` unless those pages are restored.
3. `/posts` and `/postLink` must not be carried forward as accidental indexable pages.
4. `/get-started` needs a decision: remove it, restore a form, or redirect it.
5. The therapist cluster is the strongest vertical pattern; the general-contractor cluster should not be treated as equivalent until its link graph is fixed.
6. Global navigation creates most inbound links. The rebuild should reproduce the intended hierarchy, not the accidental 217-link repetition.
