# Legacy → new redirect map

The legacy therapist geo pages live under `/seo/for-therapists-*` (46 pages in
`src/pages/seo/`). They are **not** noindexed and **not** deleted. A 301 is wired
up only for a legacy URL whose replacement page is actually published (passes the
build gate). Every other legacy URL stays live and untouched.

**Reconciliation.** The count of 46 is the true number of
`src/pages/seo/for-therapists-*.js` files (`Get-ChildItem` confirms it). After
Phase 5 it splits into **39 pages with an active redirect** to a published
replacement (canada, usa, the 10 provinces, the 5 Ontario cities, the 15
Phase-4 cities and the 9 Phase-5 cities) plus **6 pages that stay live** (the
6 US city pages). 39 + 6 = 46. An earlier draft of this doc said 45, which was
an undercount of the live set by one.

The map is defined once in `src/lib/verticalSeo.js` (`LEGACY_REDIRECT_MAP`) and
emitted through `getPublishedRedirects()`, which filters out any destination that
is not in the published set. Because of that filter a redirect can never point at
a 404 and can never chain: the destinations are always live pages, and none of
the destinations are themselves redirect sources.

## Active redirects (destination published)

| Legacy URL | New URL |
| --- | --- |
| `/seo/for-therapists-canada` | `/therapist-seo` |
| `/seo/for-therapists-usa` | `/therapist-seo/usa` |
| `/seo/for-therapists-ontario` | `/therapist-seo/ontario` |
| `/seo/for-therapists-quebec` | `/therapist-seo/quebec` |
| `/seo/for-therapists-british-columbia` | `/therapist-seo/british-columbia` |
| `/seo/for-therapists-alberta` | `/therapist-seo/alberta` |
| `/seo/for-therapists-saskatchewan` | `/therapist-seo/saskatchewan` |
| `/seo/for-therapists-manitoba` | `/therapist-seo/manitoba` |
| `/seo/for-therapists-nova-scotia` | `/therapist-seo/nova-scotia` |
| `/seo/for-therapists-new-brunswick` | `/therapist-seo/new-brunswick` |
| `/seo/for-therapists-newfoundland-labrador` | `/therapist-seo/newfoundland-and-labrador` |
| `/seo/for-therapists-toronto` | `/therapist-seo/ontario/toronto` |
| `/seo/for-therapists-ottawa` | `/therapist-seo/ontario/ottawa` |
| `/seo/for-therapists-mississauga` | `/therapist-seo/ontario/mississauga` |
| `/seo/for-therapists-brampton` | `/therapist-seo/ontario/brampton` |
| `/seo/for-therapists-hamilton` | `/therapist-seo/ontario/hamilton` |
| `/seo/for-therapists-montreal` | `/therapist-seo/quebec/montreal` |
| `/seo/for-therapists-quebec-city` | `/therapist-seo/quebec/quebec-city` |
| `/seo/for-therapists-laval` | `/therapist-seo/quebec/laval` |
| `/seo/for-therapists-gatineau` | `/therapist-seo/quebec/gatineau` |
| `/seo/for-therapists-longueuil` | `/therapist-seo/quebec/longueuil` |
| `/seo/for-therapists-vancouver` | `/therapist-seo/british-columbia/vancouver` |
| `/seo/for-therapists-surrey` | `/therapist-seo/british-columbia/surrey` |
| `/seo/for-therapists-burnaby` | `/therapist-seo/british-columbia/burnaby` |
| `/seo/for-therapists-richmond` | `/therapist-seo/british-columbia/richmond` |
| `/seo/for-therapists-abbotsford` | `/therapist-seo/british-columbia/abbotsford` |
| `/seo/for-therapists-calgary` | `/therapist-seo/alberta/calgary` |
| `/seo/for-therapists-edmonton` | `/therapist-seo/alberta/edmonton` |
| `/seo/for-therapists-red-deer` | `/therapist-seo/alberta/red-deer` |
| `/seo/for-therapists-lethbridge` | `/therapist-seo/alberta/lethbridge` |
| `/seo/for-therapists-airdrie` | `/therapist-seo/alberta/airdrie` |
| `/seo/for-therapists-saskatoon` | `/therapist-seo/saskatchewan/saskatoon` |
| `/seo/for-therapists-regina` | `/therapist-seo/saskatchewan/regina` |
| `/seo/for-therapists-winnipeg` | `/therapist-seo/manitoba/winnipeg` |
| `/seo/for-therapists-halifax` | `/therapist-seo/nova-scotia/halifax` |
| `/seo/for-therapists-cape-breton` | `/therapist-seo/nova-scotia/cape-breton` |
| `/seo/for-therapists-moncton` | `/therapist-seo/new-brunswick/moncton` |
| `/seo/for-therapists-saint-john` | `/therapist-seo/new-brunswick/saint-john` |
| `/seo/for-therapists-fredericton` | `/therapist-seo/new-brunswick/fredericton` |
| `/seo/for-therapists-st-johns` | `/therapist-seo/newfoundland-and-labrador/st-johns` |

Notes:

- **Prince Edward Island** has no legacy page (there is no
  `for-therapists-prince-edward-island.js`), so the new
  `/therapist-seo/prince-edward-island` page simply has no source to redirect
  from.
- The new Newfoundland/Labrador slug uses the full word (`newfoundland-and-labrador`)
  while the legacy slug used the abbreviation (`newfoundland-labrador`); the
  redirect bridges the two.
- Redirects are **308** (permanent, method-preserving) as emitted by
  `next.config.js`. Sources never appear in any sitemap.

## Legacy pages left live (no published equivalent yet)

Only the **6 US city pages** stay live: `albany`, `buffalo`, `huntington`,
`new-york`, `rochester`, `syracuse`. They have no published replacement and are
out of scope for this launch, so they stay live (and linked from the pillar's
"More cities" block) to avoid destroying existing rankings/backlinks. Every
legacy Canadian page now redirects to its published replacement.

(Phase 4 redirected Montreal, Quebec City, Laval, Gatineau, Longueuil,
Vancouver, Surrey, Burnaby, Richmond, Abbotsford, Calgary, Edmonton, Red Deer,
Lethbridge and Airdrie; Phase 5 redirected Saskatoon, Regina, Winnipeg,
Halifax, Cape Breton, Moncton, Saint John, Fredericton and St. John's.)

## Rule for adding a redirect

Only add a legacy key to `LEGACY_REDIRECT_MAP` when the new page it points at is
`launchStatus: "live"` and passes `yarn verify:seo`. `getPublishedRedirects()`
enforces this at build time, so an unreviewed draft destination silently drops
out of the redirect list rather than producing a broken redirect.
