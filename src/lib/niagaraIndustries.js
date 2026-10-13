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
    slug: "therapists",
    displayName: "Therapists",
    category: "Health & Wellness",
    benefit:
      "Show up when clients search for a therapist, counsellor or psychotherapist near them, across Canada.",
    href: "/therapist-seo",
    coverage: "Canada-wide",
  },
];

// Shape expected by the vertical nav snapshot (name + url).
const NIAGARA_INDUSTRY_NAV_LINKS = NIAGARA_INDUSTRIES.map((item) => ({
  name: `SEO for ${item.displayName}${item.slug === "therapists" ? " in Canada" : " in Niagara"}`,
  url: item.href,
}));

module.exports = { NIAGARA_INDUSTRIES, NIAGARA_INDUSTRY_NAV_LINKS };
