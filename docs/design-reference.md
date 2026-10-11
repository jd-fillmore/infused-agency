# Design reference — extracted facts

Extracted from https://torontoseo.com/ and https://torontoseo.com/industries/ during
Phase R0. This file records **design facts only** (tokens, type, layout, section
order). No competitor copy, text, headings, images or CSS were saved or reused.
Our design is re-derived from scratch; the reference is used for structure and
general design language only (redesign spec rule 1).

## Typography

| Role | Reference family | Licence | Our choice |
| --- | --- | --- | --- |
| Body / UI | Inter (300–800) | SIL Open Font License | Manrope (400 / 600 / 700) |
| Display / headings | Playfair Display (400–700) | SIL Open Font License | Manrope (400 / 600 / 700) |

We use a single modern sans (Manrope) for body and headings — the serif display
family was dropped after owner review. Manrope is SIL OFL, loaded through
`next/font` (built-in, self-hosted, `font-display: swap`, no render-blocking
third-party request), capped at 3 weights for the performance budget.

## Colour palette (reference, for contrast calibration only)

- Page background: `#0a0d14` (their `theme-color`).
- Dark-mode surfaces (HSL tokens): background `220 20% 5%`, card `220 20% 7%`,
  border `220 15% 15%`, text `220 10% 95%`, muted text `220 10% 60%`.
- Reference primary `221 100% 65%` (bright blue), secondary `260 100% 70%`
  (violet). **Not used** — our accent is derived from Infused's own brand.
- Glow shadows use large blur radii with a coloured, semi-transparent ring
  (`0 0 28px -2px <colour>88`) and a subtle inset ring.
- Border radius scale around `0.75rem` (12px) with a couple of larger steps.
- Atmosphere: soft radial-gradient glows behind hero areas, e.g. a coloured
  radial at a corner fading to transparent, layered over a dark linear gradient.

## Layout

- Single centered content container (roughly 1280px).
- Sticky translucent dark top bar with backdrop blur.
- Homepage section order (component types only): hero (H1 + supporting text +
  CTA + inline form) → short decision/starting-point cards → stats "by the
  numbers" strip → search/findability feature → services grid → partner CTA →
  3-step process → build-and-search feature with feature blocks → differentiators
  → industries grid → FAQ accordion → final CTA.
- Industries page: eyebrow badge + H1 + subhead → filter chips → grid of industry
  cards (each with a coverage line and a "view" link) → a "don't see your
  industry?" card. One optional "what we learned" block.

## Contrast / accessibility calibration

- On `#0a0d14`, body text at `220 10% 95%` and muted text at `220 10% 60%` were
  used as the starting point for AA on the dark theme.
- Our final tokens (see `docs/redesign-notes.md`) keep body text ≥ 7:1 and muted
  text ≥ 4.5:1 against the page background.

## Infused brand accent (our own, derived from the live site)

The reference's blue/violet is deliberately not used. Infused's own brand colours
are already defined in `src/pages/variables.scss`. After owner review of the first
dark build, the accent was changed from the brand blue to a punchier brand-adjacent
violet (updated October 2026):

- Accent violet `#8b5cf6` (links, buttons, accents); hover `#a78bfa`
- Accent deep `#5b21b6` (gradients)
- Brand navy `#100a25` / `#120b2d` (backgrounds) — kept
- Brand gold `#e2c044` (stat highlights) — kept

The logo image (`src/img/infused-logo.png`) could not be machine-read in this
environment (no image input), so the accent is taken from the CSS brand tokens
above rather than sampled from the logo pixels. This is recorded as an assumption
in `docs/redesign-notes.md` and flagged in `docs/redesign-open-questions.md`
(confirm the exact logo hex if it differs).
