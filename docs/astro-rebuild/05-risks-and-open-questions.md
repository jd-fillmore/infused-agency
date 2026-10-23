# Phase 1 Risks and Open Questions

This is an audit of migration risk, not an Astro implementation plan. The site is a static marketing site with no application database or API. The main risks are URL preservation, redirect debt, disconnected content clusters, metadata gaps, and the interaction of several CSS systems.

## Risk register

| Priority | Risk | Evidence | Impact if carried forward |
| --- | --- | --- | --- |
| High | General-contractor cluster is unreachable from the homepage | 10 pages; `/general-contractor-seo` has 9 inbound links, all from its 9 provinces; no nav/footer/home link | Sitemap-only cluster with almost no internal link equity |
| High | 30 configured redirects terminate at `404` | `next.config.js`; redirect audit | Old URLs and backlinks remain broken after migration |
| High | 41 sitemap URLs return `308` | 40 legacy therapist URLs plus `/reviews` | Crawlers are given redirecting sitemap entries |
| High | 436 internal links point to two deleted city pages | `components/Footer/footer.js:9-10`; `src/pages/index.js:64-65` | Every page links to `/seo/st-catharines` or `/seo/niagara-falls`, both `301` to `/` |
| High | `/posts` is an indexable orphan duplicate of `/blog` | `/posts` returns `200`, is in sitemap, has no canonical, zero inbound | Duplicate blog entry point and conflicting page purpose |
| High | `/get-started` is orphaned and its form is commented out | Zero inbound links; `src/pages/get-started.js:25-33` | Former lead page no longer has a usable form |
| High | Analytics load without a consent mechanism | GA4 and Clarity in `src/pages/_app.js:55-77` | Privacy/compliance exposure depending on jurisdiction |
| Medium | H1 duplication and a missing H1 | 5 posts have two H1s; `/postLink` has none | Weaker page semantics and avoidable on-page SEO defects |
| Medium | 21 pages have no JSON-LD; all 219 lack `og:image` | Crawl/JSON-LD audit | Inconsistent entity/social metadata after migration |
| Medium | Metadata length and completeness issues | 31 long titles, 48 long descriptions, 2 missing titles/descriptions, 7 missing canonicals | Lower SERP quality and inconsistent canonicalisation |
| Medium | Several CSS systems compete globally | 41 CSS/SCSS imports in `src/pages/_app.js`; Bootstrap 4 plus Tailwind v4 plus `rescue.css`; `@import "tailwindcss" important` | High risk of visual regressions and specificity conflicts |
| Medium | Images are unoptimized | `next.config.js:53-55`; 351 rendered images, 1 missing alt | Performance and accessibility gaps remain unless deliberately addressed |
| Medium | Committed vertical reports are stale | `docs/launch-status.md:11,30` and `docs/vertical-seo-report.md:8,96` say 53/11; current build is 52/10 with no PEI GC source | Misleading launch or migration decisions |
| Medium | CI runs on `main`, production is `master` | `.github/workflows/ci.yml` | Changes to the production branch may not get the intended CI gate |
| Medium | `/500` is missing | No `src/pages/500.js`; `/500` returns `404` | Server/runtime errors do not have the intended error page |
| Medium | Local routing is case-insensitive but production routing is unknown | `/SEO` and `/Web-Design` return `200` locally; `/About` returns `404` | Case variants may behave differently after moving to Linux hosting |
| Medium | `treereports.ca` status is unknown | External fetch failed | A potentially dead outbound case-study link may remain |
| Low | Absolute internal links and one localhost link | 20 absolute internal links in four blog posts; one `http://localhost:3000` link | Broken or environment-dependent links after migration |
| Low | Three internal links use trailing slashes | Two post links plus one frontmatter/body pattern | Unnecessary `308` hops |
| Low | Document language and schema language differ | `<Html lang="en">`; schema uses `en-CA` | Minor accessibility/entity inconsistency |
| Low | `/dev/styleguide` and `/postLink` are exposed build artefacts | `/dev/styleguide` returns `404`; `/postLink` is a component turned page | Confusing routes and dead surface area |

## Redirect debt

The redirect set is the largest concrete migration hazard.

Current configuration: 121 redirects.

- 8 configured with `statusCode: 301`.
- 113 configured with `permanent: true` (308).
- 40 legacy therapist redirects.
- 30 rules fail to reach a `200` destination.
- 28 of the failing rules are legacy blog URLs; 2 have literal spaces in the source.
- 5 chains; 4 end at `200`, 1 ends at `404`.
- 1 duplicate source.
- 2 sources contain spaces and return `404` on the encoded request.

The safest approach is to treat the redirect map as data to be reviewed URL by URL, not as a file to copy wholesale. In particular:

- Do not migrate redirects whose destinations do not exist.
- Normalize or replace the two space-containing sources.
- Remove the duplicate source.
- Decide whether the 40 legacy therapist redirects should remain indexed.
- Remove `/reviews` from the sitemap or remove the redirect.

## URL and content decisions

The current site has several URL pairs that need an explicit owner decision:

| URL | Current state | Decision needed |
| --- | --- | --- |
| `/blog` | Live paginated listing, canonical always `/blog` | Keep as canonical blog hub? |
| `/posts` | Live legacy listing, no canonical, zero inbound | Redirect, remove, or keep? |
| `/posts/<slug>` | Live post template | Keep the path pattern? |
| `/seo/st-catharines` | `301` to `/` but linked from every footer | Restore page or remove links? |
| `/seo/niagara-falls` | `301` to `/` but linked from every footer | Restore page or remove links? |
| `/reviews` | `308` to `/get-a-quote` but in sitemap | Remove route/sitemap entry or keep redirect? |
| `/get-started` | Orphan; form commented out | Remove, redirect, or restore a form? |
| `/postLink` | Accidental component page with no metadata | Remove? |
| `/dev/styleguide` | Builds but returns `404` in production | Remove from build? |
| `/general-contractor-seo/prince-edward-island` | Listed in committed reports but no source file | Intended page or stale report? |

## Open questions

1. Which URL is the canonical blog index: `/blog` or `/posts`?
2. Should the deleted St. Catharines and Niagara Falls SEO pages be restored, or should all footer/home links be removed?
3. Is a Prince Edward Island general-contractor page supposed to exist? The current source builds 10 GC pages, not 11.
4. Should `/get-started` remain a lead route, and if so, what form endpoint should it use?
5. What consent standard applies to GA4 and Microsoft Clarity?
6. Where will the Astro site be hosted, and who owns the deploy hook currently referenced by `.github/workflows/scheduled-wave-deploy.yml`?
7. Should the 40 legacy therapist URLs remain redirects, or should some be restored as live pages?
8. Are the 11 orphan pages (case studies, `/areas-we-serve`, `/process`, `/website-conversion-optimization`, etc.) still wanted, or should they redirect to relevant hubs?
9. Is `/seo/wainfleet` supposed to exist? It is linked from `/areas-we-serve:53` but returns `404`.
10. Is `/niagara-seo-company` supposed to exist? It is linked from `/process:43` and `/wordpress-developer-niagara:115` but returns `404`.
11. Is `treereports.ca` still live? The automated fetch failed.
12. Should production route matching be case-sensitive? Local Windows routing currently accepts `/SEO` and `/Web-Design`; Linux hosting may not.
13. Are the current long titles/descriptions intentional, or should they be rewritten during the rebuild?
14. Should the current 121 redirects be preserved exactly, or may obsolete ones be retired?

## Unknowns and evidence limits

- The audit was run against a local production build, not the live production host. Host-specific redirects, CDN rules, headers, and edge behaviour were not observed.
- No Google Search Console, analytics, backlink, or crawl-hit data was available, so redirect and content priorities are based on the built site and source code.
- `treereports.ca` could not be fetched; its status is unknown.
- No Lighthouse/Core Web Vitals field or lab run was included. Performance observations are limited to build payload, CSS volume, and unoptimized images.
- The ownership and business intent of legacy case studies and old blog URLs are not known.
- The `DEPLOY_HOOK_URL` value was not read or printed. Only the workflow structure was inspected.
- The current committed launch reports disagree with the current build; the build was treated as authoritative, but the reason for the missing PEI source file is not documented in the repository.

## Migration guardrails

The following must be treated as preserved behaviour, not optional cleanup:

- All working `200` URLs and their canonical paths.
- The 260-URL sitemap structure, after removing redirecting entries.
- The service and vertical publishing gates.
- The JSON-LD graph and its entity IDs.
- The intended redirect map, after removing 404 destinations.
- The global navigation and footer hierarchy, after fixing deleted-city links.
- The `/blog` and `/posts/<slug>` content paths, unless a deliberate redirect decision is made.
- The existing `200` external profile links and Calendly conversion path.
- The metadata for service and vertical pages, including Open Graph where present.
