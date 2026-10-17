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
    slug: "basement-finishing",
    displayName: "Basement Finishing",
    category: "Home & Trade Services",
    benefit:
      "Win more basement finishing, family-room and in-law suite projects from homeowners searching across Niagara.",
    href: "/seo/for-basement-finishing-niagara",
    coverage: "Niagara region",
  },
  {
    slug: "kitchen-and-bathroom-renovators",
    displayName: "Kitchen and Bathroom Renovators",
    category: "Home & Trade Services",
    benefit:
      "Show up for kitchen and bathroom remodel searches across Niagara, from design to install.",
    href: "/seo/for-kitchen-and-bathroom-renovators-niagara",
    coverage: "Niagara region",
  },
  {
    slug: "general-contractors",
    displayName: "General Contractors",
    category: "Home & Trade Services",
    benefit:
      "Win whole-home renovation and project-management searches from homeowners across Niagara.",
    href: "/seo/for-general-contractors-niagara",
    coverage: "Niagara region",
  },
  {
    slug: "interlock-installers",
    displayName: "Interlock Installers",
    category: "Home & Trade Services",
    benefit:
      "Get found for interlock driveways, patios, walkways and retaining walls across Niagara.",
    href: "/seo/for-interlock-installers-niagara",
    coverage: "Niagara region",
  },
  {
    slug: "asphalt-paving",
    displayName: "Asphalt Paving",
    category: "Home & Trade Services",
    benefit:
      "Win new driveway, resurfacing and sealcoating jobs from searches across Niagara.",
    href: "/seo/for-asphalt-paving-niagara",
    coverage: "Niagara region",
  },
  {
    slug: "fence-installers",
    displayName: "Fence Installers",
    category: "Home & Trade Services",
    benefit:
      "Show up for wood, vinyl, chain link and privacy fence searches across Niagara.",
    href: "/seo/for-fence-installers-niagara",
    coverage: "Niagara region",
  },
  {
    slug: "pool-builders",
    displayName: "Pool Builders",
    category: "Home & Trade Services",
    benefit:
      "Win inground and above-ground pool installation searches across Niagara.",
    href: "/seo/for-pool-builders-niagara",
    coverage: "Niagara region",
  },
  {
    slug: "pool-and-hot-tub-service",
    displayName: "Pool and Hot Tub Service",
    category: "Home & Trade Services",
    benefit:
      "Be found for pool openings, closings, maintenance and hot tub repair across Niagara.",
    href: "/seo/for-pool-and-hot-tub-service-niagara",
    coverage: "Niagara region",
  },
  {
    slug: "mortgage-brokers",
    displayName: "Mortgage Brokers",
    category: "Business & Professional Services",
    benefit:
      "Show up for first-time buyer, renewal, refinancing and self-employed mortgage searches across St. Catharines, Niagara Falls and the region.",
    href: "/seo/for-mortgage-brokers-niagara",
    coverage: "Niagara region",
  },
  {
    slug: "financial-advisors",
    displayName: "Financial Advisors",
    category: "Business & Professional Services",
    benefit:
      "Get found for retirement planning, investment planning and estate planning searches from Niagara residents and business owners.",
    href: "/seo/for-financial-advisors-niagara",
    coverage: "Niagara region",
  },
  {
    slug: "accountants",
    displayName: "Accountants",
    category: "Business & Professional Services",
    benefit:
      "Show up for personal and small-business tax filing, bookkeeping, payroll and incorporation searches across Niagara.",
    href: "/seo/for-accountants-niagara",
    coverage: "Niagara region",
  },
  {
    slug: "insurance-brokers",
    displayName: "Insurance Brokers",
    category: "Business & Professional Services",
    benefit:
      "Get found for home, auto, commercial and business insurance searches across Niagara.",
    href: "/seo/for-insurance-brokers-niagara",
    coverage: "Niagara region",
  },
  {
    slug: "architects",
    displayName: "Architects",
    category: "Business & Professional Services",
    benefit:
      "Reach homeowners and businesses searching for residential design, additions, renovations and permit drawings across Niagara.",
    href: "/seo/for-architects-niagara",
    coverage: "Niagara region",
  },
  {
    slug: "med-spas",
    displayName: "Med Spas",
    category: "Health & Wellness",
    benefit:
      "Show up for facial and skin treatments, laser hair removal, skin rejuvenation and body contouring searches across Niagara.",
    href: "/seo/for-med-spas-niagara",
    coverage: "Niagara region",
  },
  {
    slug: "chiropractors",
    displayName: "Chiropractors",
    category: "Health & Wellness",
    benefit:
      "Show up for back and neck concerns, sports injuries and ongoing chiropractic care searches across Niagara.",
    href: "/seo/for-chiropractors-niagara",
    coverage: "Niagara region",
  },
  {
    slug: "physiotherapists",
    displayName: "Physiotherapists",
    category: "Health & Wellness",
    benefit:
      "Get found for injury rehabilitation, sports injuries and post-surgery rehab searches across Niagara.",
    href: "/seo/for-physiotherapists-niagara",
    coverage: "Niagara region",
  },
  {
    slug: "veterinarians",
    displayName: "Veterinarians",
    category: "Health & Wellness",
    benefit:
      "Show up for wellness exams, vaccinations, dental care and urgent veterinary searches from Niagara pet owners.",
    href: "/seo/for-veterinarians-niagara",
    coverage: "Niagara region",
  },
  {
    slug: "optometrists",
    displayName: "Optometrists",
    category: "Health & Wellness",
    benefit:
      "Get found for eye exams, glasses, contact lenses and children's eye exam searches across Niagara.",
    href: "/seo/for-optometrists-niagara",
    coverage: "Niagara region",
  },
  {
    slug: "home-builders",
    displayName: "Home Builders",
    category: "Home & Trade Services",
    benefit:
      "Win custom home build, infill lot and new construction searches from homeowners across Niagara.",
    href: "/seo/for-home-builders-niagara",
    coverage: "Niagara region",
  },
  {
    slug: "design-build-firms",
    displayName: "Design-Build Firms",
    category: "Home & Trade Services",
    benefit:
      "Win design-build searches from homeowners who want one team responsible for design and construction across Niagara.",
    href: "/seo/for-design-build-firms-niagara",
    coverage: "Niagara region",
  },
  {
    slug: "home-additions",
    displayName: "Home Additions",
    category: "Home & Trade Services",
    benefit:
      "Win second-storey addition, rear addition and garage conversion searches from Niagara homeowners.",
    href: "/seo/for-home-additions-niagara",
    coverage: "Niagara region",
  },
  {
    slug: "interior-designers",
    displayName: "Interior Designers",
    category: "Home & Trade Services",
    benefit:
      "Show up for residential interior design, space planning and renovation design searches across Niagara.",
    href: "/seo/for-interior-designers-niagara",
    coverage: "Niagara region",
  },
  {
    slug: "cabinet-makers",
    displayName: "Cabinet Makers",
    category: "Home & Trade Services",
    benefit:
      "Win custom kitchen and vanity cabinetry, built-ins and refacing searches across Niagara.",
    href: "/seo/for-cabinet-makers-niagara",
    coverage: "Niagara region",
  },
  {
    slug: "countertop-fabricators",
    displayName: "Countertop Fabricators",
    category: "Home & Trade Services",
    benefit:
      "Show up for quartz, granite and stone countertop searches from Niagara homeowners and renovators.",
    href: "/seo/for-countertop-fabricators-niagara",
    coverage: "Niagara region",
  },
  {
    slug: "flooring-installers",
    displayName: "Flooring Installers",
    category: "Home & Trade Services",
    benefit:
      "Win hardwood, laminate, vinyl and refinishing searches from Niagara homeowners and builders.",
    href: "/seo/for-flooring-installers-niagara",
    coverage: "Niagara region",
  },
  {
    slug: "tile-installers",
    displayName: "Tile Installers",
    category: "Home & Trade Services",
    benefit:
      "Get found for bathroom tile, backsplash, heated floor and shower tile searches across Niagara.",
    href: "/seo/for-tile-installers-niagara",
    coverage: "Niagara region",
  },
  {
    slug: "masonry-contractors",
    displayName: "Masonry Contractors",
    category: "Home & Trade Services",
    benefit:
      "Win brick repair, repointing, stone veneer and parging searches from Niagara homeowners.",
    href: "/seo/for-masonry-contractors-niagara",
    coverage: "Niagara region",
  },
  {
    slug: "fireplace-and-chimney-services",
    displayName: "Fireplace and Chimney Services",
    category: "Home & Trade Services",
    benefit:
      "Show up for fireplace installation, chimney cleaning and inspection searches across Niagara.",
    href: "/seo/for-fireplace-and-chimney-services-niagara",
    coverage: "Niagara region",
  },
  {
    slug: "tree-services",
    displayName: "Tree Services",
    category: "Home & Trade Services",
    benefit:
      "Win tree removal, trimming, stump grinding and storm damage searches across Niagara.",
    href: "/seo/for-tree-services-niagara",
    coverage: "Niagara region",
  },
  {
    slug: "painters",
    displayName: "Painters",
    category: "Home & Trade Services",
    benefit:
      "Win interior and exterior painting, cabinet refinishing and deck staining searches across Niagara.",
    href: "/seo/for-painters-niagara",
    coverage: "Niagara region",
  },
  {
    slug: "home-automation-installers",
    displayName: "Home Automation Installers",
    category: "Home & Trade Services",
    benefit:
      "Get found for smart home setup, security cameras, alarms and home automation searches across Niagara.",
    href: "/seo/for-home-automation-installers-niagara",
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
