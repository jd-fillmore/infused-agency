import React from "react";

// Homepage-style hero atmosphere: faint grid, an "aurora burst" of brand
// radials and three drifting colour orbs. Rendered as absolutely-positioned
// decoration inside a `relative overflow-hidden` hero section, so it is purely
// presentational and safe to drop into any modern hero.
export default function HeroAtmosphere() {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid opacity-60"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[620px] aurora-burst opacity-90"
      />
      <span
        aria-hidden="true"
        className="orb -left-10 top-10 h-56 w-56 bg-accent/40"
      />
      <span
        aria-hidden="true"
        className="orb right-[-3rem] top-0 h-72 w-72 bg-[#363795]/40"
      />
      <span
        aria-hidden="true"
        className="orb bottom-0 right-1/4 h-52 w-52 bg-gold-bright/40"
      />
    </>
  );
}
