# Phase 2.1 Validation Report — Retrospective

**Status:** Retrospective reconstruction from Phase 2 conversation artefacts. **Not** a live re-run of any validation check.

**Date of audit this report summarises:** 2026-10-22 (local) / 2026-10-23 (UTC), against commit `0d2c44b` (`master`).

## Purpose

The Phase 3 task brief requires reading `docs/astro-rebuild/PHASE_2_1_VALIDATION_REPORT.md`. The file did not exist in the repository. This document is created as a **concise retrospective report** synthesising only information that was verifiable in the Phase 2 conversation:

- the Phase 2 audit documents (`01`–`05`),
- the Phase 2 implementation plan (`06-implementation-plan.md`),
- the generated CSV registers,
- the Phase 2 design/redesign working documents.

Nothing here claims that any check was re-executed, re-verified, or re-run against the current working tree.

## What could be verified from repository artefacts

- Route register (`docs/astro-rebuild/route-manifest.csv`): **263 data rows** including the header row (264 lines total). Matches the required count. Families: Home (1), Service pages (21), Vertical SEO (52), Niagara industry SEO (54), Concrete niche (31), Legacy therapist (6 live / 40 redirects), City SEO (9), Web-design city (11), Blog (17), Static (15), hubs (3), error (2), dev (1).
- Redirect register (`docs/astro-rebuild/redirect-register.csv`): **121 data rows** including the header row (122 lines total). Matches the required count. Status summary at audit time: 8 configured `301`, 113 configured `permanent: true` (308); first-hop reality was 4×301, 115×308, 2×404 (trailing-slash normalisation effects).
- Redirect failures: **30 rules** that ended at `404`.
- Redirect chains: **5** (4 resolved to 200, 1 ended at 404).
- Redirect loops: **0**.
- Duplicate redirect source: **1** (`/posts/how-can-i-generate-website-traffic-with-0-marketing-budget`).
- Sitemap URLs: **260** total; 219 returning `200`, 41 returning `308` (40 legacy therapist + `/reviews`).
- Blog: `/blog` canonical, `/posts` orphan duplicate, 5 posts with duplicate H1s, `/postLink` missing H1/canonical.
- Metadata gaps: 2 missing titles/descriptions, 7 missing canonicals, 6 H1 issues, 31 long titles, 48 long descriptions, 219 pages missing `og:image`.

## What could not be independently reverified here

- Nothing was re-run, re-parsed, or re-crawled during Phase 3. All counts above come from the Phase 2 audit artefacts and conversation, not from new executions.
- The live production host behaviour (host-edge redirects, CDN headers) was never observed in Phase 2.
- Google Search Console, analytics, backlink, and crawl-hit data were unavailable.
- The `DEPLOY_HOOK_URL` value was never read or printed.

## Phase 2 owner decisions recorded (implementation-plan §14)

| ID | Decision | Default |
|---|---|---|
| D1 | Canonical blog index | `/blog`; `/posts` → `/blog` |
| D2 | Deleted St. Catharines / Niagara Falls SEO pages | Remove footer links; 301 → `/seo` |
| D3 | `/get-started` | 301 → `/get-a-quote` unless real endpoint supplied |
| D4 | `/postLink` | Exclude from build |
| D5 | `/reviews` | Keep 301; remove from sitemap |
| D6 | 25 missing legacy blog destinations | Topic-level 301s; `/blog` fallback |
| D7 | Space-containing legacy sources | Lower-case hyphenated rules |
| D8 | Six live US legacy therapist pages | Preserve for now; review content fit |
| D9 | General-contractor cluster placement | Link from `/industries` and footer |
| D10 | Analytics consent | No analytics until consent mechanism chosen |
| D11 | Host / deploy-hook owner | Confirm Netlify or equivalent; owner owns secret |
| D12 | Unverified claims / client logos | Confirm or remove; do not invent |
| D13 | Long titles/descriptions | Defer to approved content pass |
| D14 | Case-sensitive legacy variants | Add only known variants after host log review |
| D15 | Missing `/seo/wainfleet`, `/niagara-seo-company` | Link to `/seo` or create real pages |
| D16 | Prince Edward Island GC page | Current 10-page build authoritative; create only with content approval |
| D17 | Orphan case studies / utility pages | Preserve and link, or redirect with approval |
| D18 | `/sitemap` indexability | Keep indexable with self-canonical |
| D19 | Real lead form | No backend today; keep Calendly unless endpoint supplied |
| D20 | Redirect status convention | 301 for content moves; avoid host-generated 308 chains |

## Phase 3 hand-off implication

Phase 3 (this phase) establishes the Astro foundation and design prototype. It must not migrate all 263 routes. Final redirect, sitemap, and metadata decisions remain gated on the Phase 2 owner decisions above and on Phase 4 hardening work.

---

*Created 2026-10-22 during the Phase 3 preflight. Retrospective in nature; see `06-implementation-plan.md` for authoritative planning content.*
