# Redirect map — hierarchical location URLs

Generated from `astro/src/data/locations.json` by
`astro/scripts/generate-redirects.mjs`. Every legacy location URL that is
still live today maps directly to its final URL in the
`/{service}/{country}/{region}/{city}` hierarchy. No chains, no loops, and no
redirect points at a page that is not built.

Redirects are written as 301s at the top of `astro/public/_redirects`; Netlify
resolves rules in file order, so this block must stay ahead of the legacy 410
rules it supersedes.

| From | To | Status | Service |
| --- | --- | --- | --- |
| `/ai-search` | `/ai-search-optimization` | 301 | service root |
| `/ai-search-optimization-atlanta` | `/ai-search-optimization/usa/georgia/atlanta` | 301 | ai-search-optimization |
| `/ai-search-optimization-miami` | `/ai-search-optimization/usa/florida/miami` | 301 | ai-search-optimization |
| `/ai-search-optimization-philadelphia` | `/ai-search-optimization/usa/pennsylvania/philadelphia` | 301 | ai-search-optimization |
| `/ai-search-optimization-phoenix` | `/ai-search-optimization/usa/arizona/phoenix` | 301 | ai-search-optimization |
| `/ai-search-optimization-washington-dc` | `/ai-search-optimization/usa/district-of-columbia/washington-dc` | 301 | ai-search-optimization |
| `/ai-seo-for-therapists-atlanta` | `/seo-for-therapists/usa/georgia/atlanta` | 301 | seo-for-therapists |
| `/ai-seo-for-therapists-miami` | `/seo-for-therapists/usa/florida/miami` | 301 | seo-for-therapists |
| `/ai-seo-for-therapists-philadelphia` | `/seo-for-therapists/usa/pennsylvania/philadelphia` | 301 | seo-for-therapists |
| `/ai-seo-for-therapists-phoenix` | `/seo-for-therapists/usa/arizona/phoenix` | 301 | seo-for-therapists |
| `/ai-seo-for-therapists-washington-dc` | `/seo-for-therapists/usa/district-of-columbia/washington-dc` | 301 | seo-for-therapists |
| `/ai-seo-hamilton` | `/ai-search-optimization/canada/ontario/hamilton` | 301 | ai-search-optimization |
| `/ai-seo-toronto` | `/ai-search-optimization/canada/ontario/toronto` | 301 | ai-search-optimization |
| `/seo-for-therapists-calgary` | `/seo-for-therapists/canada/alberta/calgary` | 301 | seo-for-therapists |
| `/seo-for-therapists-chicago` | `/seo-for-therapists/usa/illinois/chicago` | 301 | seo-for-therapists |
| `/seo-for-therapists-dallas` | `/seo-for-therapists/usa/texas/dallas` | 301 | seo-for-therapists |
| `/seo-for-therapists-edmonton` | `/seo-for-therapists/canada/alberta/edmonton` | 301 | seo-for-therapists |
| `/seo-for-therapists-houston` | `/seo-for-therapists/usa/texas/houston` | 301 | seo-for-therapists |
| `/seo-for-therapists-ottawa` | `/seo-for-therapists/canada/ontario/ottawa` | 301 | seo-for-therapists |
| `/seo-for-therapists-toronto` | `/seo-for-therapists/canada/ontario/toronto` | 301 | seo-for-therapists |
| `/seo-for-therapists-vancouver` | `/seo-for-therapists/canada/british-columbia/vancouver` | 301 | seo-for-therapists |
| `/seo/for-therapists` | `/seo-for-therapists` | 301 | service root |
| `/seo/for-therapists-canada` | `/seo-for-therapists/canada` | 301 | service root |
| `/seo/for-therapists-los-angeles` | `/seo-for-therapists/usa/california/los-angeles` | 301 | seo-for-therapists |
| `/seo/for-therapists-usa` | `/seo-for-therapists/usa` | 301 | service root |

## Deliberately not redirected

- `/seo/{niagara-town}`, `/web-design/{niagara-town}` and
  `/seo/for-*-niagara` are unchanged.
- `/therapist-seo/*` and the `/seo/for-therapists-{city}` routes that already
  returned 410 stay 410. They were retired before this migration and had no
  page to preserve.
- `/seo/niagara` is served directly (200) and has no rule in `_redirects`.
