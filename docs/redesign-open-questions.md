# Redesign — open questions

Facts that could not be verified from the live site or supplied data during Phase
R0. Per the redesign spec, we proceed with documented assumptions rather than
blocking, and record each gap here. **None of these fields may be invented in
UI** — components must hide them when null (see spec rule 3).

## Reviews / ratings

- **Google reviews count & rating** — unknown. `data/site/site-facts.json`
  `googleReviews` is `{ count: null, rating: null, url: null }`. The reviews
  badge stays hidden until real values are supplied. The site's own FAQ already
  states we do **not** guarantee rankings, and the spec forbids unverified
  numeric review claims (e.g. "40+ five-star reviews") — that claim is **not**
  used anywhere.
- Confirm the canonical Google review/profile URL to use for the badge link.

## Business facts

- **`yearsInBusiness`** — the live homepage text is inconsistent: "over 10
  years", "since 2013", and "over the last 12 years" all appear. Exact number
  unconfirmed → left `null`.
- **`teamSize`** — unknown → `null`.
- **`responseTime`** — unknown → `null`.
- **`pricingModel` / `contractTerms` / `guarantees`** — unknown → `null`.
  (The site only claims month-to-month with no long-term contracts in some
  places; not confirmed as a policy → not stated.)

## Brand

- **Exact logo hex** — the accent is derived from the CSS brand tokens
  (`#2b9ae1` / `#363795`), not sampled from the logo image (could not be read in
  this environment). If the logo uses a different blue/indigo, confirm the exact
  hex so the new accent matches.
- **Instagram handle mismatch** — the footer links
  `https://www.instagram.com/infusedweb/` while JSON-LD `sameAs` uses
  `https://instagram.com/infusedagency`. Both are kept in `site-facts.json`.
  Confirm which is current.

## Content

- **Homepage H2 wording** — the redesign may change homepage H2s (allowlisted in
  `docs/redesign-allowlist.json`). All other pages must keep H1/H2/title/meta/
  canonical/robots/JSON-LD unchanged.
- **`/industries` page** — new page (allowlisted). Needs a final list of
  industries and whether it should appear in the main nav/mega menu now or later.
- **Client logos** — `clientLogosAllowed` lists logos currently shown on the live
  site plus affiliate/award badges. Confirm all are still permitted to display.
