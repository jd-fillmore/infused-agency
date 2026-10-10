# Legacy → new redirect map

The legacy therapist geo pages live under `/seo/for-therapists-*` (45 pages in
`src/pages/seo/`). They are **not** noindexed and **not** deleted. A 301 is wired
up only for a legacy URL whose replacement page is actually published (passes the
build gate). Every other legacy URL stays live and untouched.

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

These have no published replacement, so they are served unchanged and **not**
redirected. Each becomes a redirect candidate once the matching new page is
written, reviewed and passes the gate:

`abbotsford`, `airdrie`, `albany`, `buffalo`, `burnaby`, `calgary`,
`cape-breton`, `edmonton`, `fredericton`, `gatineau`, `halifax`, `huntington`,
`laval`, `lethbridge`, `longueuil`, `moncton`, `montreal`, `new-york`,
`quebec-city`, `red-deer`, `regina`, `richmond`, `rochester`, `saint-john`,
`saskatoon`, `st-johns`, `surrey`, `syracuse`, `vancouver`, `winnipeg`.

Many of these are US or Canadian cities outside the launch scope (e.g. US cities
are out of scope for this phase; only the `usa` country page is published).
They remain live to avoid destroying existing rankings/backlinks, and will be
migrated city-by-city as content is written and reviewed.

## Rule for adding a redirect

Only add a legacy key to `LEGACY_REDIRECT_MAP` when the new page it points at is
`launchStatus: "live"` and passes `yarn verify:seo`. `getPublishedRedirects()`
enforces this at build time, so an unreviewed draft destination silently drops
out of the redirect list rather than producing a broken redirect.
