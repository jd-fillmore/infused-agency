# Light design reference — design facts only

Extracted from https://mangomedia.ca/ (HTML + linked CSS) on 2026-10-12 for the
L1/L2/L3 light re-skin. This file records **facts** about typography, layout,
spacing and interaction behaviour only. It contains **no competitor copy,
headings, statistics, markup or code excerpts**, and none of it may be reused as
content. Their palette is listed in §7 purely so we can deliberately stay away
from it.

## 1. Fonts

- **One family throughout: Poppins**, used for both display/headings and body
  (`--font-sans` and `--font-display` are the same stack). No second family is
  loaded.
- **Open licence:** Poppins is on Google Fonts under the SIL Open Font License
  (OFL), so the spec §L0.3 rule ("if their fonts are open-licence, use the same
  families") applies — the same family may be adopted, loaded our own way (never
  their font files).
- **Weights in use:** 400 (normal), 500 (medium), 600 (semibold), 700 (bold).
  Headings sit at 600–700; body at 400–500; labels/eyebrows at 500–600.
- **Delivery:** woff2, `font-display: swap`, Latin subset.

## 2. Type scale and heading character

- **Stepped scale** (rem-based, Tailwind-default steps): 0.875 / 1 / 1.125 /
  1.25 / 1.5 / 1.875 / 2.25 / 3 / 3.75 rem (14→60px). Large headings compress
  their line-height: display sizes run `line-height: 1` to `1.05`; the 1.875rem
  step uses 1.2; body uses 1.5–1.7.
- **Heading character:** geometric/rounded sans, semibold-to-bold, with normal
  to slightly tight tracking on large sizes. Headings are the dominant visual
  weight; body is regular.
- **Eyebrow labels:** uppercase small text with wide tracking — measured
  `letter-spacing` values of 0.18em and 0.22em (range across the page 0.03–0.22em),
  paired with medium/semibold weight.
- Long-form body copy is set at 1.125rem with loose (1.6–1.7) leading.

## 3. Ambient palette variables (for steer-away only)

The reference is a warm/serious pairing we must **not** reuse (spec §1.2 forbids
"their teal/pine and coral colour pairing"):

- `--color-ink` (deep pine/teal) `#004545`; `--color-ink-soft` `#1a5454`
- `--color-accent` (coral/orange) `#fa783b`; `--color-accent-ink` `#003b3b`
- `--color-mango` (gold) `#ffb200`; `--color-mango-soft` `#f4d182`
- `--color-cream` `#ede5d9`; `--color-sand` `#ddd3c3`; `--color-muted` `#4a6868`

**Decision:** none of these values are used. Our palette is Infused's own
blue/indigo (see `docs/light-reskin-notes.md`).

## 4. Spacing, container, radius, borders

- **Container:** content confined to a centred max-width column (roughly
  72–80rem / 1152–1280px) with responsive horizontal padding.
- **Section rhythm:** generous vertical padding (approx. 4–6rem per band),
  alternating light bands to separate sections.
- **Radius:** small 6px, medium 8px, large 16px (measured `--radius-md` 0.375rem,
  `--radius-lg` 0.5rem, `--radius-2xl` 1rem); pills/avatar/chip fully rounded.
- **Borders:** 1px hairline, low-contrast; accent-tinted `ring`/halo on focus and
  featured cards (`0 0 0 3px` at ~10% accent alpha).
- **Shadows:** soft, multi-layer, brand-tinted rather than pure black. Observed
  shapes: `0 10px 22px rgba(ink,~12%)`, `0 12px 28px rgba(ink,~6%)`,
  `0 14px 36px rgba(ink,~10%)`, and a card hover `0 24px 60px rgba(ink,~14%)`.
  The first layer is tight and the second is a wide, faint ambient blur.

## 5. Hover and motion behaviour

- **Easing curves** (measured `cubic-bezier` declarations): the dominant smooth
  ease-out is `cubic-bezier(.2,.75,.25,1)`; also `cubic-bezier(.2,.7,.2,1)` and
  `cubic-bezier(.2,.8,.2,1)`. Tailwind defaults (`cubic-bezier(.4,0,.2,1)`) are
  used for simple colour swaps.
- **Micro-interactions** (colour/border/opacity on buttons, links, inputs):
  **~150ms**. Slightly heavier control motion (chips, small buttons) 180–250ms.
- **Cards / media / nav panels:** 180–350ms; the slowest measured (large
  background/reveal transitions) run 0.9–1s with the smooth ease-out curve.
- **Properties animated:** `transform` (`translateY`, `translateX`, small
  `scale`), `opacity`, `box-shadow`, `border-color`, `background-color`, `color`,
  and `filter`. Layout-affecting properties are not animated on hover.
- **Direction of motion:** elements **rise** on hover (small upward translate)
  while their shadow deepens; images scale up subtly inside clipped containers;
  arrow icons/nav gaps slide a few px (`hover:gap-3` observed) and arrows nudge
  in the reading direction.
- **Micro-detail:** transitions list transform first with the shortest duration
  and shadow with a longer one, so the shadow catches up after the lift.
- **Reveal:** larger text/media blocks fade+rise on entry (long 0.9–1s curve),
  i.e. a scroll/entry reveal rather than a snap. Content is present in the HTML.
- **Reduced motion:** honoured via `prefers-reduced-motion`.
- **Nav/menus:** dropdown/overlay panels fade with a short transition (not an
  instant snap) and carry a soft large shadow. Nav links use hover underline /
  colour and a subtle background chip.

## 6. Homepage structural patterns (component types only)

Recorded so we can decide which *of our own real sections* get the same polish.
None of these are to be added unless the data already exists in
`data/site/site-facts.json` (spec §L3):

- top announcement/utility strip
- hero with a primary + secondary action
- trust-stat row with icons
- client logo strip
- service cards (image-backed), some with a hover arrow
- case-study cards carrying one large headline metric
- testimonials with star rows
- FAQ accordion
- contact/quote form block
- affiliation/partner strip
- newsletter signup strip
- large multi-column footer with grouped links + contact block

## 7. Out-of-scope note

Everything above is a style/behaviour observation. No text, numbers, names,
images, icons or markup were taken from the reference, and no font or asset file
was downloaded.
