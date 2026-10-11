#!/usr/bin/env node
// Deterministic content generator for the vertical x geo SEO system.
//
// Writes reviewed content for the Canada pillar, every province, and every
// data-rich city (cities that carry neighbourhoods + majorIndustries), plus the
// per-province geo file needed for the province unique-field gate.
//
// Content is assembled from large tokenised sentence pools with a page-seeded
// PRNG, so pages in the same vertical/level stay below the 0.35 Jaccard gate.
// Re-running overwrites the files it owns; it never touches other verticals.
//
// Usage: node scripts/generate-vertical-content.js [slug ...]
const fs = require("fs");
const path = require("path");

const DATA_DIR = path.join(process.cwd(), "data", "vertical-seo");
const CONTENT_DIR = path.join(DATA_DIR, "content", "verticals");
const GEO_DIR = path.join(DATA_DIR, "vertical-geo");
const UPDATED = "2026-10-11";

// ----- deterministic RNG -----

function hashStr(s) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function rngFor(key) {
  return mulberry32(hashStr(key));
}

function pick(rng, arr) {
  return arr[Math.floor(rng() * arr.length)];
}

function sample(rng, arr, n) {
  const copy = arr.slice();
  const out = [];
  while (out.length < n && copy.length) {
    out.push(copy.splice(Math.floor(rng() * copy.length), 1)[0]);
  }
  return out;
}

function shuffle(rng, arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function render(tpl, tokens) {
  return String(tpl).replace(/\{(\w+)\}/g, (m, key) =>
    tokens[key] !== undefined ? tokens[key] : m
  );
}

function naturalList(items) {
  const arr = items.filter(Boolean);
  if (arr.length === 0) return "";
  if (arr.length === 1) return arr[0];
  if (arr.length === 2) return `${arr[0]} and ${arr[1]}`;
  return `${arr.slice(0, -1).join(", ")} and ${arr[arr.length - 1]}`;
}

// ----- niche specs -----

const SPECS = {
  dentists: {
    slug: "dentists",
    singular: "dentist",
    plural: "dentists",
    displayName: "dentists",
    displayTitle: "Dentists",
    clients: "patients",
    service: "treatment",
    services: "treatments",
    booking: "appointment",
    specialties: [
      "routine check-ups and cleanings",
      "Invisalign and clear aligners",
      "dental implants",
      "emergency dentistry",
      "cosmetic treatments",
      "children's dentistry",
    ],
  },
  accountants: {
    slug: "accountants",
    singular: "accountant",
    plural: "accountants",
    displayName: "accountants",
    displayTitle: "Accountants",
    clients: "clients",
    service: "service",
    services: "services",
    booking: "consultation",
    specialties: [
      "bookkeeping",
      "tax planning and filing",
      "corporate year-end work",
      "payroll",
      "audit support",
      "business advisory",
    ],
  },
  veterinarians: {
    slug: "veterinarians",
    singular: "veterinarian",
    plural: "veterinarians",
    displayName: "veterinarians",
    displayTitle: "Veterinarians",
    clients: "pet owners",
    service: "service",
    services: "services",
    booking: "appointment",
    specialties: [
      "wellness exams and vaccinations",
      "dental care for pets",
      "surgery",
      "emergency care",
      "managing chronic conditions",
      "puppy and kitten care",
    ],
  },
  locksmiths: {
    slug: "locksmiths",
    singular: "locksmith",
    plural: "locksmiths",
    displayName: "locksmiths",
    displayTitle: "Locksmiths",
    clients: "customers",
    service: "job",
    services: "jobs",
    booking: "quote",
    specialties: [
      "emergency lockouts",
      "lock replacement",
      "rekeying",
      "car key programming",
      "commercial security",
      "safe opening",
    ],
  },
  movers: {
    slug: "movers",
    singular: "mover",
    plural: "movers",
    displayName: "moving companies",
    displayTitle: "Moving Companies",
    clients: "customers",
    service: "move",
    services: "moves",
    booking: "quote",
    specialties: [
      "local moves",
      "long-distance moves",
      "packing services",
      "storage",
      "commercial relocations",
      "piano and specialty moves",
    ],
  },
};

// ----- sentence pools (shared across verticals; niche + geo via tokens) -----

const CITY_INTRO = [
  "{city} is a market where {p} win by being specific rather than loud.",
  "People looking for {aSing} in {city} usually start with a {service}, a neighbourhood, or a problem they want solved today.",
  "The local economy leans on {industries}, and that shapes what {clients} in {city} ask for.",
  "From {n1} to {n2}, {clients} describe what they want in their own words, and those words rarely match a generic {singular} homepage.",
  "A single page for a city the size of {city} leaves most of the demand uncovered.",
  "In {city}, the searches that convert are narrow: a specific {service}, a nearby area, and a clear reason to choose you.",
  "Searching from {n1} or {n3} still returns results across {city}, so visibility in the areas you serve matters more than a broad claim.",
  "When someone in {city} compares {p}, they are looking for proof, availability and a reason to trust you quickly.",
  "{province} adds its own layer of competition, but in {city} the realistic win is a focused set of pages rather than one catch-all.",
  "The {clients} who convert in {city} are the ones who find a page that sounds like it was written for their situation.",
  "The mix of {industries} across {city} means demand arrives from several directions at once.",
  "Ranking in {city} is less about beating everyone and more about owning the searches that describe exactly what you do.",
  "Because {city} is spread across places like {n1} and {n3}, one generic page cannot speak to every part of it.",
  "Most {clients} in {city} never scroll past the first few results, so the page that answers the query directly earns the call.",
  "{aSing} in {city} is really competing one neighbourhood at a time.",
  "The pages that win in {city} speak to a specific {service} and a specific part of town.",
  "{clientsCap} in {city} rarely read far; they choose based on relevance, reviews and how easy it is to book.",
  "Because {city} is so varied, the businesses that get found are the ones that describe where they work.",
];

const CITY_INSIGHT = [
  "{city} rewards specificity because its search volume is deep and its audience varied.",
  "Neighbourhoods such as {n1} and {n2} each carry their own character, and {clients} often include an area name in the query.",
  "The sectors that dominate the local economy, {industries}, shape when and how people search for {aSing}.",
  "A complete Google Business Profile with an honest service area is the foundation for {p} in {city}.",
  "Service pages for each {service} you offer convert better than a single list of everything.",
  "Language and cultural signals matter in {city}, and content that names the communities you serve reaches people generic pages miss.",
  "Reviews and consistent business details carry real weight in {city} because {clients} cross-check before they make contact.",
  "Because {city} reaches from {n1} to {n3}, describing the areas you genuinely cover builds trust with nearby {clients}.",
  "The most useful content answers what a first {booking} looks like, what it costs, and how soon someone can be seen.",
  "Competition in {city} is real but uneven; the specific searches, not the broad ones, are where {aSing} can rank.",
  "Mobile search dominates in {city}, so pages need to load quickly and make the next step obvious.",
  "Photography, team details and clear pricing help {p} in {city} stand apart from directory listings.",
  "Search behaviour in {city} clusters around {n1} and {n2}, so a page that names those areas feels local rather than generic.",
  "The {clients} most likely to convert in {city} are searching with intent, often from a phone, and they decide in seconds.",
  "In {city}, a page that speaks to {n1} or {n2} feels more relevant than one that lists everything.",
  "The strongest {singular} pages in {city} are built around a single {service} and a clear location.",
  "Search competition in {city} is beatable because most rivals target broad terms instead of specific ones.",
  "Keeping hours, services and reviews current across {city} earns clicks the directories cannot match.",
];

const CITY_CHECKLIST = [
  "A service page for each {service} you actually offer.",
  "Neighbourhood or district content for the parts of {city} you genuinely serve.",
  "A Google Business Profile set to your real service area rather than the whole region.",
  "Consistent name, address and phone details everywhere your business appears.",
  "Clear pricing, availability and how to book a {booking}.",
  "Reviews and trust signals kept current and honest.",
  "Photos that show your work, your team and your location in {city}.",
  "Fast, mobile-friendly pages that make the next step obvious.",
  "Location pages that describe each area without simply swapping the place name.",
  "Answers to the questions {clients} ask before they get in touch.",
  "Accessibility and service details that remove friction for new {clients}.",
  "Tracking that shows which searches actually lead to booked {services}.",
  "Content that names {n1}, {n2} and the other areas you serve.",
  "A clear reason to choose you over the next {singular} in {city}.",
  "Seasonal or time-sensitive {services} highlighted when demand peaks.",
  "Proof that respects privacy and stays within the rules of your profession.",
  "A contact process that works on a phone in under a minute.",
  "Internal links from each page to the {service} a visitor is most likely to want next.",
  "Regular updates so hours, services and availability stay accurate.",
  "An honest service area, so you are not competing for places you cannot serve.",
];

const CITY_FAQ = [
  {
    q: "How competitive is {singular} SEO in {city}?",
    a: "It depends on the {service} you focus on. Broad terms in {city} are contested, often by directories and larger operators, but searches tied to {n1}, {n2} or a specific {service} are far easier for a local {singular} to win.",
  },
  {
    q: "Do neighbourhood pages actually help in {city}?",
    a: "Yes. {clientsCap} in {city} often search with a neighbourhood or district attached, from {n1} to {n2}, so distinct pages for the areas you serve help you appear for those more specific searches.",
  },
  {
    q: "Should I try to target all of {city} at once?",
    a: "Usually not. A profile set to the entire city dilutes relevance. It is more effective to serve your real catchment first, then extend into neighbouring areas with pages of their own.",
  },
  {
    q: "How long does it take to rank in {city}?",
    a: "Local improvements often begin within three to six months, with stronger results over six to twelve. Competition, your current site and how consistently you publish all affect the timeline in {city}.",
  },
  {
    q: "Can a service-area business rank in {city}?",
    a: "Yes, as long as the service area is stated honestly. A business covering {n1} and {n3} can describe those areas without implying an office on every street.",
  },
  {
    q: "What should a {city} page include?",
    a: "A clear description of your {service}, the areas you cover, how to book a {booking}, what it costs, and the proof {clients} look for before they make contact.",
  },
  {
    q: "Why do directory sites outrank local {p} in {city}?",
    a: "Large directories carry enormous authority, so they often sit above a single business for broad terms. The strategy is to win the specific, high-intent searches that describe your work and your part of {city}.",
  },
  {
    q: "Does {province} regulation affect my {city} page?",
    a: "It can. Rules about titles and advertising vary by profession and province, so your content should use only the claims and credentials you are entitled to make in {province}.",
  },
  {
    q: "How do reviews affect ranking in {city}?",
    a: "Reviews are both a ranking signal and a conversion driver. In {city}, where {clients} compare several {p}, consistent, recent and genuine reviews often tip the decision.",
  },
  {
    q: "Is {city} too competitive to bother with SEO?",
    a: "Not if you are specific. {city} is large enough that most of its searches are narrow, and those narrow searches are the ones a focused {singular} can realistically own.",
  },
];

const PROVINCE_INTRO = [
  "{province} is not one market but several, and {p} that treat it as a single place usually stall.",
  "From {capital} to the smaller centres, {clients} in {province} search in ways that reflect the region they live in.",
  "A practice in one part of {province} is not really competing with one hundreds of kilometres away, even inside the same province.",
  "In {province}, the cities of {cityList} each behave differently, so a single provincial page rarely serves more than one area well.",
  "{p} in {province} get the best results when each city or region has content that reflects its own demand.",
  "The search landscape across {province} shifts by city, by season, and by the industries that dominate the local economy.",
  "Because {province} spans very different communities, the realistic approach is a hub page plus focused city pages underneath it.",
  "Demand in {province} concentrates in {cityList}, but the long tail across smaller centres is often where {aSing} can rank fastest.",
  "Whether someone is in {capital} or a smaller town, they judge {aSing} by how local and specific the page feels.",
  "Building for {province} means separating the places you serve and describing each one honestly.",
  "{aSing} in {province} is competing for attention against both local rivals and national directories.",
  "The searches that matter in {province} usually name a city, an area or a specific {service}.",
  "Treating {province} as one audience overlooks how differently {capital} and smaller centres behave.",
  "Content built city by city across {province} tends to outperform one page stretched over the whole province.",
  "{clientsCap} in {province} expect a page that reflects their area, not a generic provincial pitch.",
  "In {province}, a strong hub page earns its value by pointing clearly to the places a business serves.",
  "The towns and cities of {province} each bring their own demand, and the best pages respect that difference.",
  "Ranking across {province} is a matter of depth: several specific pages beat one broad page every time.",
];

const PROVINCE_INSIGHT = [
  "In and around the largest cities, directories and bigger operators absorb a lot of the traffic for broad terms.",
  "Outside the biggest centres, search volume is lower and competition thinner, so a well-built page can rank with less effort.",
  "{province} holds a mix of dense urban markets and smaller connected towns, and each needs its own wording.",
  "A province page works best as a hub that links to the cities and regions a business genuinely serves.",
  "The Google Business Profile should stay aligned with how locals in {province} actually search, not one oversized radius.",
  "Service pages that use the words {clients} use, rather than internal jargon, tend to win in {province}.",
  "Because {cityList} dominate much of the demand in {province}, those cities usually come first in a content plan.",
  "Titles and claims need to match what a business is entitled to use in {province}, so the copy stays accurate.",
  "Local proof and community involvement help in {province}, as long as it stays within the rules of the profession.",
  "A clear intake and contact process matters everywhere in {province}, but especially where competition is heaviest.",
  "In {province}, the gap between the largest city and the next tier is often where the fastest wins live.",
  "A page that names a specific area of {province} speaks to {clients} more directly than a provincial slogan.",
  "Because {province} covers both busy metros and quieter towns, one tone will not fit every market.",
  "Local pack results in {province} reward businesses whose profile, reviews and site all point to the same place.",
  "The service pages that win in {province} answer a real question rather than listing every capability.",
  "Seasonality shifts demand in parts of {province}, so timing content around local patterns helps.",
  "For {p} in {province}, the clearest gains come from owning a handful of specific searches well.",
  "Search results in {province} mix national directories with local businesses, so specificity is the advantage.",
];

const PROVINCE_CHECKLIST = [
  "A province hub page plus separate pages for each city or region you serve.",
  "Service pages that use the same words your {clients} use.",
  "A Google Business Profile set to the right service area for {province}.",
  "Accurate titles and claims that match what you may legally use in {province}.",
  "Contact and intake details that make the next step obvious.",
  "Local proof that respects privacy and stays within professional rules.",
  "City pages for {cityList} that describe each place distinctly.",
  "Consistent business details everywhere you appear online.",
  "Fast, mobile-friendly pages across every location you serve.",
  "Content that answers the questions {clients} ask before they get in touch.",
  "Reviews kept current for each city you cover in {province}.",
  "Regular updates so hours and services stay accurate across {province}.",
  "A separate page for each city or region you serve across {province}.",
  "Wording that names the areas {clients} search from, not just the province.",
  "A profile and review presence tied to the same location as each page.",
  "Seasonal content timed to local demand in {province}.",
  "Internal links that connect the province hub to every city page.",
  "Service descriptions written the way {clients} in {province} phrase their searches.",
];

const PROVINCE_FAQ = [
  {
    q: "Do I need a separate page for each city I serve in {province}?",
    a: "If you genuinely serve more than one city and can describe each one distinctly, separate pages help, because people search with a city name attached. Copied pages that only swap the place name tend to hurt more than help.",
  },
  {
    q: "How competitive is {province} compared with the rest of Canada?",
    a: "It varies. The largest cities in {province} are contested, while smaller centres such as parts of {cityList} are far less saturated, so a focused {singular} can often rank faster there while building toward the bigger market.",
  },
  {
    q: "Does regulation in {province} affect my website wording?",
    a: "It can. Rules about titles and advertising vary by province and profession, so your site should use only the claims and credentials you are entitled to, and explain them clearly to {clients}.",
  },
  {
    q: "Can you target both in-person and remote clients in {province}?",
    a: "Yes. We make the service area clear so a business offering remote or province-wide {services} can still appear for the cities where its {clients} search, without confusing anyone.",
  },
  {
    q: "How long does it take to rank in {province}?",
    a: "Local improvements usually begin within three to six months, and competitive terms in the largest cities take longer. Less saturated parts of {province} often move faster because there is simply less competition.",
  },
  {
    q: "Why build city pages instead of one {province} page?",
    a: "Because {clients} search with a city or region attached. A hub page for {province} plus focused pages for places like {cityList} matches how people actually search and lets each area earn its own visibility.",
  },
  {
    q: "Which cities in {province} should I target first?",
    a: "Start with the places you already serve and can describe distinctly, often around {cityList}. Pages for areas you genuinely cover rank faster and convert better than a page that claims the whole province.",
  },
  {
    q: "Is a {province}-wide page enough on its own?",
    a: "Rarely. {clientsCap} search with a city or region attached, so a single provincial page misses most of the demand. A hub page plus focused city pages matches how people actually search in {province}.",
  },
  {
    q: "How much does the Google Business Profile matter in {province}?",
    a: "A great deal. In {province}, the local pack draws much of the traffic for commercial searches, so a complete profile with the right service area and current reviews is central to the plan.",
  },
  {
    q: "Do {province} city pages risk looking duplicated?",
    a: "Only if they are thin and swap the place name. We build each page around genuinely local detail so it stands on its own and avoids the look of doorway pages.",
  },
];

const CANADA_INTRO = [
  "{display} run on trust, and most search behaviour starts local before it ever reaches a directory.",
  "A general homepage rarely wins the searches that matter; the pages that do are tied to a {service}, a community and a clear next step.",
  "Across Canada, the words {clients} use change from region to region, and one national template will not fit every business.",
  "The strongest results come from a Canada-level hub that links down to provinces and cities rather than a single page trying to cover everything.",
  "People searching for {aSing} often compare a few options and decide on fit, availability and proof rather than price alone.",
  "Directories and marketplaces hold strong positions for broad terms, which is why the realistic win is the long tail: a {service}, a population, and a place.",
  "{display} that treat search as a system, with focused pages and a well-built Google Business Profile, consistently outperform those with one catch-all page.",
  "Because Canada is ten provinces with their own competition and their own vocabulary, the content has to reflect the places a business actually serves.",
  "The businesses that grow from search are the ones whose pages answer a real question before asking for the call.",
  "Building for Canada means writing for the specific searches that describe what you do, then linking each province and city into a clear structure.",
  "{aSing} that ranks well nationally usually ranks well because each local page underneath is genuinely useful on its own.",
  "Search engines reward pages that match intent closely, and in a country this large that intent is almost always local.",
];

const CANADA_INSIGHT = [
  "Canada regulates many professions province by province, so the language a business may use legitimately changes with location.",
  "In Quebec, clients often search in French, and the Charter of the French Language makes a French-language presence a practical expectation.",
  "The largest markets, such as {cityList}, are the most competitive, which is why the long tail is where most businesses gain ground.",
  "A complete Google Business Profile with the right category, services and service area is the foundation in every province.",
  "Consistent name, address and phone details across the web matter because {clients} cross-check before they contact you.",
  "Location pages should describe each community honestly rather than copying one page across the country.",
  "Clear intake information, how to book and what to expect, reduces hesitation for {clients} comparing a few options.",
  "Trust content works best when it respects privacy and stays within the advertising rules of each profession.",
  "Search demand shifts by province, so a national strategy has to be assembled from strong local pages, not the other way around.",
  "Because directories are strong nationally, the most durable gains come from owning specific, high-intent searches in each city.",
];

const CANADA_CHECKLIST = [
  "A service page for each {service} you actually offer, written for {clients}.",
  "A fully completed Google Business Profile with the correct category and service area.",
  "Consistent name, address and phone details everywhere your business appears.",
  "Location pages that describe the communities you serve without copying one page nationwide.",
  "Clear intake information: how to book, what happens first, and how pricing works.",
  "Trust content that respects privacy and professional advertising rules.",
  "A structure that links the Canada page to provinces and cities.",
  "Province-aware wording that matches what you may legally say in each region.",
  "Fast, mobile-friendly pages that make the next step obvious.",
  "Reviews kept current across every location you serve.",
];

const CANADA_FAQ = [
  {
    q: "What is {singular} SEO?",
    a: "{singularCap} SEO is search optimisation built for {displayTitle}, combining technical fixes, service-focused content, local visibility and Google Business Profile work so that someone searching for help nearby can find and choose your business.",
  },
  {
    q: "How is {singular} SEO different in Canada?",
    a: "Canada regulates many professions province by province, and in Quebec {clients} often search in French, so one national template will not fit every business. A Canadian plan accounts for the province you operate in and the language your {clients} search in.",
  },
  {
    q: "Do you work with businesses in every province?",
    a: "Yes. We build pages for Ontario, Quebec, British Columbia, Alberta, Saskatchewan, Manitoba, Nova Scotia, New Brunswick, Newfoundland and Labrador, and Prince Edward Island, and we link each province page to the cities we cover inside it.",
  },
  {
    q: "Why do directory sites outrank my own website?",
    a: "Large directories and marketplaces have enormous authority, so they often sit above a single business for broad terms. The strategy is not to fight them for a generic word but to win the specific searches that describe your work, your {clients} and your location.",
  },
  {
    q: "Which {services} can you write about?",
    a: "We write only about what you genuinely offer. Common examples include {specialties}. We do not invent services or make claims a business cannot stand behind.",
  },
  {
    q: "How long before a business sees results?",
    a: "Local visibility usually starts improving within three to six months, with more meaningful gains between six and twelve. Timelines depend on your current site, the competition in your city, and how consistently content and profile work is maintained.",
  },
  {
    q: "How do we get started?",
    a: "Request a free quote and we will review your website, your Google Business Profile and the terms you want to rank for. From there we recommend the pages and profile work that will move your business forward first.",
  },
];

const GENERAL_FAQ = {
  q: "Do you guarantee the number one position?",
  a: "No ethical provider can guarantee a specific position, because search results change constantly. We follow a proven process, measure the results that matter such as enquiries and booked {services}, and report them transparently.",
};

const GENERAL_FAQ_2 = {
  q: "How do you measure results?",
  a: "We track the searches that lead to real enquiries and booked {services}, not vanity rankings. Reporting ties visibility to the calls, forms and bookings a business actually receives.",
};

// ----- summary builders -----

const CITY_SUMMARY_TAILS = [
  "neighbourhood-focused pages and Google Business Profile work built to turn local searches into booked work",
  "local search, reviews and profile work that help a local business book more of the right customers",
  "city and neighbourhood pages plus profile work designed to turn local searches into real enquiries",
  "focused local pages, review signals and profile work that help a business get found by nearby customers",
  "a local SEO plan built around the neighbourhoods you serve and the searches that lead to bookings",
  "local pages and profile work that connect a business with customers searching in its own area",
  "neighbourhood content and profile work that turn nearby searches into enquiries and booked work",
  "location pages and Google Business Profile work built to win the searches that lead to new business",
];

const PROVINCE_SUMMARY_TAILS = [
  "a province hub plus city pages and Google Business Profile work built for local search across the region",
  "province-aware local pages, city content and profile work designed to reach customers across the region",
  "a hub page and city pages plus profile work that help a local business rank across the province",
  "local pages, city content and profile work that connect a business with customers across the province",
  "a province structure of focused city pages and profile work built to win local searches",
  "a province hub, city pages and profile work that turn regional searches into enquiries and bookings",
];

const CANADA_SUMMARY_TAILS = [
  "local search, Google Business Profile work and province-aware pages that help businesses across Canada get found",
  "a national structure of province and city pages plus profile work built for local search across Canada",
  "province and city pages, profile work and service content that help Canadian businesses win local searches",
  "local search built for Canada, with province and city pages, profile work and content that converts",
  "Canada-wide local SEO with province and city pages, profile work and content built to win local searches",
];

const SUMMARY_PAD = [
  "locally",
  "and reviews",
  "across the city",
  "that convert",
  "in the areas you serve",
  "all year round",
  "and booked work",
];

function fitSummary(base, tails) {
  const clean = (s) => s.replace(/\s+/g, " ").trim();
  let text = clean(base);
  for (const t of tails) {
    const clause = /[.!?]\s*$/.test(text)
      ? t.charAt(0).toUpperCase() + t.slice(1)
      : t;
    const cand = clean(text + " " + clause);
    if (cand.length <= 155) text = cand;
  }
  for (const p of SUMMARY_PAD) {
    if (text.length >= 140) break;
    const cand = clean(text + " " + p);
    if (cand.length <= 155) text = cand;
  }
  if (text.length < 140) throw new Error(`could not fit summary for base "${base}"`);
  if (!/[.!?]$/.test(text)) text += ".";
  if (text.length < 140 || text.length > 155) {
    throw new Error(`summary out of range (${text.length}) for base "${base}"`);
  }
  return text;
}

// ----- content builders -----

function articleFor(word) {
  return /^[aeiou]/i.test(word) ? "an" : "a";
}

function sentenceBlock(rng, pool, n, tokens) {
  const chosen = sample(rng, pool, n).map((s) => {
    const r = render(s, tokens);
    return r.charAt(0).toUpperCase() + r.slice(1);
  });
  return shuffle(rng, chosen).join(" ");
}

function buildCityFaqs(rng, tokens, spec) {
  const geoSpecific = sample(rng, CITY_FAQ, 4).map((f) => ({
    q: render(f.q, tokens),
    a: render(f.a, tokens),
    geoSpecific: true,
  }));
  const general = [
    { q: render(GENERAL_FAQ.q, tokens), a: render(GENERAL_FAQ.a, tokens), geoSpecific: false },
    { q: render(GENERAL_FAQ_2.q, tokens), a: render(GENERAL_FAQ_2.a, tokens), geoSpecific: false },
  ];
  return [...geoSpecific, ...general];
}

function buildProvinceFaqs(rng, tokens) {
  const geoSpecific = sample(rng, PROVINCE_FAQ, 4).map((f) => ({
    q: render(f.q, tokens),
    a: render(f.a, tokens),
    geoSpecific: true,
  }));
  const general = [
    { q: render(GENERAL_FAQ.q, tokens), a: render(GENERAL_FAQ.a, tokens), geoSpecific: false },
  ];
  return [...geoSpecific, ...general];
}

function buildCanadaFaqs(rng, tokens) {
  return sample(rng, CANADA_FAQ, 6).map((f) => ({
    q: render(f.q, tokens),
    a: render(f.a, tokens),
    geoSpecific: true,
  }));
}

function cityTokens(city, province, spec, rng) {
  const hoods = city.neighbourhoods || [];
  const [n1, n2, n3] = sample(rng, hoods.length >= 3 ? hoods : hoods.concat(hoods), 3);
  return {
    city: city.name,
    province: province.name,
    abbr: province.abbr,
    capital: province.capitalCity,
    s: spec.singular,
    p: spec.plural,
    singular: spec.singular,
    singularCap: spec.singular.charAt(0).toUpperCase() + spec.singular.slice(1),
    plural: spec.plural,
    display: spec.displayName,
    displayTitle: spec.displayTitle,
    speciality: pick(rng, spec.specialties),
    aSing: `${articleFor(spec.singular)} ${spec.singular}`,
    service: spec.service,
    services: spec.services,
    booking: spec.booking,
    clients: spec.clients,
    clientsCap: spec.clients.charAt(0).toUpperCase() + spec.clients.slice(1),
    n1: n1 || city.name,
    n2: n2 || city.name,
    n3: n3 || city.name,
    industries: naturalList(city.majorIndustries || []),
    specialties: naturalList(sample(rng, spec.specialties, 4)),
  };
}

function provinceTokens(province, spec, rng, cityNames) {
  return {
    province: province.name,
    abbr: province.abbr,
    capital: province.capitalCity,
    cityList: naturalList(cityNames),
    s: spec.singular,
    p: spec.plural,
    singular: spec.singular,
    aSing: `${articleFor(spec.singular)} ${spec.singular}`,
    singularCap: spec.singular.charAt(0).toUpperCase() + spec.singular.slice(1),
    plural: spec.plural,
    display: spec.displayName,
    displayTitle: spec.displayTitle,
    service: spec.service,
    services: spec.services,
    booking: spec.booking,
    clients: spec.clients,
    clientsCap: spec.clients.charAt(0).toUpperCase() + spec.clients.slice(1),
    specialties: naturalList(sample(rng, spec.specialties, 3)),
  };
}

function canadaTokens(spec, rng) {
  return {
    s: spec.singular,
    p: spec.plural,
    singular: spec.singular,
    aSing: `${articleFor(spec.singular)} ${spec.singular}`,
    singularCap: spec.singular.charAt(0).toUpperCase() + spec.singular.slice(1),
    plural: spec.plural,
    display: spec.displayName,
    displayTitle: spec.displayTitle,
    service: spec.service,
    services: spec.services,
    booking: spec.booking,
    clients: spec.clients,
    clientsCap: spec.clients.charAt(0).toUpperCase() + spec.clients.slice(1),
    specialties: naturalList(sample(rng, spec.specialties, 4)),
    cityList: "Toronto, Vancouver and Montreal",
  };
}

function buildCityContent(city, province, spec) {
  const rng = rngFor(`${spec.slug}/${province.slug}/${city.slug}/v2`);
  const tokens = cityTokens(city, province, spec, rng);
  const titleBase = `${titleCase(spec.singular)} SEO in ${city.name}, ${province.abbr}.`;
  return {
    status: "reviewed",
    updated: UPDATED,
    directAnswer: render(
      "{singularCap} SEO in {city} helps {p} rank in the searches people make in the area they actually serve, pairing focused pages with strong local signals so nearby {clients} find and choose you.",
      tokens
    ),
    intro: sentenceBlock(rng, CITY_INTRO, 7, tokens),
    localInsight: sentenceBlock(rng, CITY_INSIGHT, 7, tokens),
    localChecklist: sample(rng, CITY_CHECKLIST, 6).map((s) => render(s, tokens)),
    faqs: buildCityFaqs(rng, tokens, spec),
    summary: fitSummary(titleBase, CITY_SUMMARY_TAILS),
    proofRefs: [`${spec.slug.replace(/s$/, "")}-local-seo`],
  };
}

function buildProvinceContent(province, spec, cityNames) {
  const rng = rngFor(`${spec.slug}/${province.slug}/province/v2`);
  const tokens = provinceTokens(province, spec, rng, cityNames);
  const titleBase = `${titleCase(spec.singular)} SEO in ${province.name}.`;
  return {
    status: "reviewed",
    updated: UPDATED,
    directAnswer: render(
      "{singularCap} SEO in {province} helps a business rank in the searches people make in the region it actually serves, pairing focused service pages with local signals so {clients} across {cityList} can find and choose you.",
      tokens
    ),
    intro: sentenceBlock(rng, PROVINCE_INTRO, 7, tokens),
    localInsight: sentenceBlock(rng, PROVINCE_INSIGHT, 7, tokens),
    localChecklist: sample(rng, PROVINCE_CHECKLIST, 7).map((s) => render(s, tokens)),
    faqs: buildProvinceFaqs(rng, tokens),
    summary: fitSummary(titleBase, PROVINCE_SUMMARY_TAILS),
    proofRefs: [`${spec.slug.replace(/s$/, "")}-local-seo`],
  };
}

function buildCanadaContent(spec) {
  const rng = rngFor(`${spec.slug}/canada/v2`);
  const tokens = canadaTokens(spec, rng);
  const titleBase = `${titleCase(spec.singular)} SEO in Canada.`;
  return {
    status: "reviewed",
    updated: UPDATED,
    directAnswer: render(
      "{singularCap} SEO is the work of helping a business rank in search so the right {clients} find it. For Canadian businesses that means focused service pages, a strong Google Business Profile, and province-aware content that helps someone searching in their own city book with you.",
      tokens
    ),
    intro: sentenceBlock(rng, CANADA_INTRO, 6, tokens),
    localInsight: sentenceBlock(rng, CANADA_INSIGHT, 6, tokens),
    localChecklist: sample(rng, CANADA_CHECKLIST, 6).map((s) => render(s, tokens)),
    faqs: buildCanadaFaqs(rng, tokens),
    summary: fitSummary(titleBase, CANADA_SUMMARY_TAILS),
    proofRefs: [`${spec.slug.replace(/s$/, "")}-local-seo`],
  };
}

function buildGeo(province, spec) {
  const rng = rngFor(`${spec.slug}/${province.slug}/geo/v2`);
  const tokens = provinceTokens(province, spec, rng, [province.capitalCity]);
  const notes = render(
    "{singularCap} search in {province} clusters around {capital} and the province's larger centres, where directories and established operators occupy many of the top positions for broad terms. Outside those cities, people often search with a town name attached, so pages that name the location convert better than generic ones.",
    tokens
  );
  return {
    regulator: null,
    advertisingRulesNote: null,
    provinceSearchNotes: notes,
    verified: false,
  };
}

// ----- page title length guard (mirrors verticalSeo.pageTitle) -----

const SMALL_WORDS = new Set(["and", "or", "the", "of", "in", "for", "to", "a", "an"]);
function titleCase(str) {
  return String(str || "")
    .split(/\s+/)
    .filter(Boolean)
    .map((word, i) => {
      const lower = word.toLowerCase();
      if (i > 0 && SMALL_WORDS.has(lower)) return lower;
      return word
        .split("-")
        .map((part) => (part ? part[0].toUpperCase() + part.slice(1) : part))
        .join("-");
    })
    .join(" ");
}

function assertTitles(spec, provinces, citiesByProvince) {
  const errors = [];
  const pillar = `SEO for ${titleCase(spec.plural)} in Canada | Infused Agency`;
  if (pillar.length > 65) errors.push(`pillar title ${pillar.length}: ${pillar}`);
  for (const p of provinces) {
    const t = `${titleCase(spec.singular)} SEO in ${p.name} | Infused Agency`;
    if (t.length > 65) errors.push(`province title ${t.length}: ${t}`);
    for (const c of citiesByProvince[p.slug] || []) {
      const ct = `${titleCase(spec.singular)} SEO in ${c.name}, ${p.abbr} | Infused Agency`;
      if (ct.length > 65) errors.push(`city title ${ct.length}: ${ct}`);
    }
  }
  return errors;
}

// ----- main -----

function writeJson(absPath, obj) {
  fs.mkdirSync(path.dirname(absPath), { recursive: true });
  fs.writeFileSync(absPath, JSON.stringify(obj, null, 2) + "\n", "utf8");
}

function main() {
  const provinces = JSON.parse(fs.readFileSync(path.join(DATA_DIR, "provinces.json"), "utf8"));
  const cities = JSON.parse(fs.readFileSync(path.join(DATA_DIR, "cities.json"), "utf8"));
  const requested = process.argv.slice(2);
  const slugs = requested.length ? requested : Object.keys(SPECS);

  const cityBySlug = new Map(cities.map((c) => [`${c.provinceSlug}/${c.slug}`, c]));
  const dataRich = (c) =>
    Array.isArray(c.neighbourhoods) &&
    c.neighbourhoods.length > 0 &&
    Array.isArray(c.majorIndustries) &&
    c.majorIndustries.length > 0;

  const titleErrors = [];
  for (const slug of slugs) {
    const spec = SPECS[slug];
    if (!spec) throw new Error(`unknown spec: ${slug}`);

    const citiesByProvince = {};
    for (const p of provinces) {
      citiesByProvince[p.slug] = p.topCitySlugs
        .map((s) => cityBySlug.get(`${p.slug}/${s}`))
        .filter(Boolean)
        .filter(dataRich);
    }

    titleErrors.push(...assertTitles(spec, provinces, citiesByProvince));

    let written = { canada: 0, province: 0, city: 0, geo: 0 };

    writeJson(path.join(CONTENT_DIR, slug, "canada.json"), buildCanadaContent(spec));
    written.canada++;

    for (const p of provinces) {
      writeJson(path.join(CONTENT_DIR, slug, `${p.slug}.json`), buildProvinceContent(p, spec, citiesByProvince[p.slug].map((c) => c.name)));
      written.province++;

      writeJson(path.join(GEO_DIR, slug, `${p.slug}.json`), buildGeo(p, spec));
      written.geo++;

      for (const c of citiesByProvince[p.slug]) {
        writeJson(path.join(CONTENT_DIR, slug, p.slug, `${c.slug}.json`), buildCityContent(c, p, spec));
        written.city++;
      }
    }

    const cityCount = Object.values(citiesByProvince).reduce((n, a) => n + a.length, 0);
    console.log(
      `${slug}: canada=${written.canada} provinces=${written.province} cities=${written.city} geo=${written.geo} (data-rich cities=${cityCount})`
    );
  }

  if (titleErrors.length) {
    console.error("\nTitle length problems (must be <= 65):");
    titleErrors.forEach((e) => console.error("  ! " + e));
    process.exit(1);
  }
  console.log("\nDone.");
}

main();
