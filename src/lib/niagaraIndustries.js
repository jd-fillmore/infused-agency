// Curated Niagara industry landing pages featured on the homepage and the
// /industries hub. These are bespoke /seo/for-*-niagara pages (plus the
// therapist SEO programme), not part of the vertical x geo system.
//
// CommonJS so the pages-router getStaticProps() can require() it while the
// components import it with a normal ESM import (webpack interop).

const NIAGARA_INDUSTRIES = [
  {
    slug: "concrete-contractors",
    displayName: "Concrete Contractors",
    category: "Home & Trade Services",
    benefit:
      "Win more driveway, patio, foundation and stamped-concrete jobs from homeowners searching across Niagara.",
    href: "/seo/for-concrete-contractors-niagara",
    coverage: "Niagara region",
  },
  {
    slug: "insulation-contractors",
    displayName: "Insulation Contractors",
    category: "Home & Trade Services",
    benefit:
      "Get found by homeowners and builders searching for spray foam, batt and attic insulation across Niagara.",
    href: "/seo/for-insulation-niagara",
    coverage: "Niagara region",
  },
  {
    slug: "electricians",
    displayName: "Electricians",
    category: "Home & Trade Services",
    benefit:
      "Show up for panel upgrades, EV chargers, wiring and emergency calls in St. Catharines, Niagara Falls, Welland and beyond.",
    href: "/seo/for-electricians-niagara",
    coverage: "Niagara region",
  },
  {
    slug: "law-firms",
    displayName: "Law Firms",
    category: "Business & Professional Services",
    benefit:
      "Reach clients searching for a lawyer across St. Catharines, Niagara Falls and the wider region.",
    href: "/seo/for-law-firms-niagara",
    coverage: "Niagara region",
  },
  {
    slug: "solar-companies",
    displayName: "Solar Companies",
    category: "Energy",
    benefit:
      "Rank for solar installation searches across Niagara. Delta Energy Solutions saw +670% local visibility with us.",
    href: "/seo/for-solar-companies-niagara",
    coverage: "Niagara region",
  },
  {
    slug: "wineries",
    displayName: "Wineries",
    category: "Tourism & Hospitality",
    benefit:
      "Attract tastings, tours, weddings and online wine sales. Flat Rock Cellars saw +550% local visibility with us.",
    href: "/seo/for-wineries-niagara",
    coverage: "Niagara region",
  },
  {
    slug: "deck-builders",
    displayName: "Deck Builders",
    category: "Home & Trade Services",
    benefit:
      "Win more deck, pergola, railing and outdoor-living projects from searches across Niagara.",
    href: "/seo/for-deck-builders-niagara",
    coverage: "Niagara region",
  },
  {
    slug: "plumbers",
    displayName: "Plumbers",
    category: "Home & Trade Services",
    benefit:
      "Get found for drain cleaning, water heaters, sump pumps and emergency plumbing across Niagara.",
    href: "/seo/for-plumbers-niagara",
    coverage: "Niagara region",
  },
  {
    slug: "roofers",
    displayName: "Roofers",
    category: "Home & Trade Services",
    benefit:
      "Win more shingle, flat and metal roofing, repair and storm-damage jobs from searches across Niagara.",
    href: "/seo/for-roofers-niagara",
    coverage: "Niagara region",
  },
  {
    slug: "dentists",
    displayName: "Dentists",
    category: "Health & Wellness",
    benefit:
      "Show up when patients search for a dentist, cleaning, emergency care or implants across Niagara.",
    href: "/seo/for-dentists-niagara",
    coverage: "Niagara region",
  },
  {
    slug: "landscapers",
    displayName: "Landscapers",
    category: "Home & Trade Services",
    benefit:
      "Win more lawn care, interlock, retaining-wall and garden projects from searches across Niagara.",
    href: "/seo/for-landscapers-niagara",
    coverage: "Niagara region",
  },
  {
    slug: "hvac-contractors",
    displayName: "HVAC Contractors",
    category: "Home & Trade Services",
    benefit:
      "Get found for furnace, air conditioning and heat pump work across Niagara.",
    href: "/seo/for-hvac-contractors-niagara",
    coverage: "Niagara region",
  },
  {
    slug: "foundation-waterproofing",
    displayName: "Foundation Waterproofing",
    category: "Home & Trade Services",
    benefit:
      "Get found for wet basements, weeping tile, crack repair and sump pumps across Niagara.",
    href: "/seo/for-foundation-waterproofing-niagara",
    coverage: "Niagara region",
  },
  {
    slug: "restoration-companies",
    displayName: "Restoration Companies",
    category: "Home & Trade Services",
    benefit:
      "Be the first call for water, flood and fire damage cleanup and mould remediation across Niagara.",
    href: "/seo/for-restoration-companies-niagara",
    coverage: "Niagara region",
  },
  {
    slug: "garage-door-companies",
    displayName: "Garage Door Companies",
    category: "Home & Trade Services",
    benefit:
      "Show up for broken springs, opener repair and new door installation in Niagara.",
    href: "/seo/for-garage-door-companies-niagara",
    coverage: "Niagara region",
  },
  {
    slug: "pest-control",
    displayName: "Pest Control",
    category: "Home & Trade Services",
    benefit:
      "Win ant, wasp, rodent and bed bug calls from homes and businesses across Niagara.",
    href: "/seo/for-pest-control-niagara",
    coverage: "Niagara region",
  },
  {
    slug: "siding-contractors",
    displayName: "Siding Contractors",
    category: "Home & Trade Services",
    benefit:
      "Get found for vinyl, fibre cement and steel siding, soffit, fascia and storm repairs across Niagara.",
    href: "/seo/for-siding-contractors-niagara",
    coverage: "Niagara region",
  },
  {
    slug: "eavestrough-contractors",
    displayName: "Eavestrough Contractors",
    category: "Home & Trade Services",
    benefit:
      "Rank for eavestrough installs, leaf guards, downspouts and cleaning across Niagara.",
    href: "/seo/for-eavestrough-contractors-niagara",
    coverage: "Niagara region",
  },
  {
    slug: "septic-services",
    displayName: "Septic Services",
    category: "Home & Trade Services",
    benefit:
      "Be found for septic pumping, inspections, repairs and installation across rural Niagara.",
    href: "/seo/for-septic-services-niagara",
    coverage: "Niagara region",
  },
  {
    slug: "auto-body-shops",
    displayName: "Auto Body Shops",
    category: "Automotive",
    benefit:
      "Show up for collision repair, dent and bumper repair and paint matching across Niagara.",
    href: "/seo/for-auto-body-shops-niagara",
    coverage: "Niagara region",
  },
  {
    slug: "window-and-door-installers",
    displayName: "Window and Door Installers",
    category: "Home & Trade Services",
    benefit:
      "Get found for replacement windows, entry and patio doors and energy-efficiency upgrades across Niagara.",
    href: "/seo/for-window-and-door-installers-niagara",
    coverage: "Niagara region",
  },
  {
    slug: "towing-companies",
    displayName: "Towing Companies",
    category: "Automotive",
    benefit:
      "Be the first number drivers find for towing, roadside help and accident recovery in Niagara.",
    href: "/seo/for-towing-companies-niagara",
    coverage: "Niagara region",
  },
  {
    slug: "appliance-repair",
    displayName: "Appliance Repair",
    category: "Home & Trade Services",
    benefit:
      "Win washer, dryer, fridge and oven repair calls from homeowners across Niagara.",
    href: "/seo/for-appliance-repair-niagara",
    coverage: "Niagara region",
  },
  {
    slug: "therapists",
    displayName: "Therapists",
    category: "Health & Wellness",
    benefit:
      "Show up when clients search for a therapist, counsellor or psychotherapist near them, across Canada.",
    href: "/therapist-seo",
    coverage: "Canada-wide",
  },
];

// The industries the homepage features: every Niagara programme. The
// Canada-wide therapist programme is surfaced separately, so it is excluded
// from the homepage industries grid.
const HOMEPAGE_INDUSTRY_SLUGS = [
  "concrete-contractors",
  "insulation-contractors",
  "electricians",
  "law-firms",
  "solar-companies",
  "wineries",
  "deck-builders",
  "plumbers",
  "roofers",
  "dentists",
  "landscapers",
  "hvac-contractors",
  "foundation-waterproofing",
  "restoration-companies",
  "garage-door-companies",
  "pest-control",
  "siding-contractors",
  "eavestrough-contractors",
  "septic-services",
  "auto-body-shops",
  "window-and-door-installers",
  "towing-companies",
  "appliance-repair",
];

const HOMEPAGE_INDUSTRIES = NIAGARA_INDUSTRIES.filter((item) =>
  HOMEPAGE_INDUSTRY_SLUGS.includes(item.slug)
);

// Shape expected by the vertical nav snapshot (name + url).
const NIAGARA_INDUSTRY_NAV_LINKS = NIAGARA_INDUSTRIES.map((item) => ({
  name: `SEO for ${item.displayName}${item.slug === "therapists" ? " in Canada" : " in Niagara"}`,
  url: item.href,
}));

module.exports = {
  NIAGARA_INDUSTRIES,
  HOMEPAGE_INDUSTRIES,
  NIAGARA_INDUSTRY_NAV_LINKS,
};
