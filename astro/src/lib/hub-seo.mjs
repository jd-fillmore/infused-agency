// Titles and meta descriptions for the country and region hubs.
//
// City pages get theirs from the templates in locations.mjs; hubs are generated
// here so every hub title stays within 60 characters and every description
// within 140-160 characters (see verify-locations / audit-location-pages).

const pages = (count) => (count === 1 ? "page" : "pages");
const regionsLabel = (count) => `${count} ${count === 1 ? "region" : "regions"}`;
const countryLabel = (name) => (name === "United States" ? "the United States" : name);

const TITLE_LIMIT = 60;
const DESC_MIN = 140;
const DESC_MAX = 160;

/** First template whose rendered title fits inside the limit, else the first. */
function fittingTitle(templates, fallback) {
  return templates.find((title) => title.length <= TITLE_LIMIT) ?? fallback;
}

/** First description variant inside 140–160 chars, else the shortest. */
function fittingDescription(variants) {
  const built = variants.map((build) => build());
  return (
    built.find((value) => value.length >= DESC_MIN && value.length <= DESC_MAX) ??
    built.reduce((shortest, value) => (value.length < shortest.length ? value : shortest))
  );
}

export function regionSeo(service, regionName, cityCount) {
  if (service === "ai-search-optimization") {
    return {
      title: `${regionName} AI Search Optimization | Infused Agency`,
      description:
        `AI search optimization for ${regionName} businesses: ${cityCount} live city ${pages(cityCount)}, ` +
        `GEO, AI SEO and Google visibility work, served remotely from the Niagara region.`,
    };
  }

  return {
    title: fittingTitle(
      [
        `SEO & AI Search Optimization for Therapists in ${regionName}`,
        `${regionName} SEO & AI Search Optimization for Therapists`,
        `SEO & AI Search for Therapists in ${regionName}`,
      ],
      `${regionName} SEO for Therapists | Infused Agency`
    ),
    description: fittingDescription([
      () =>
        `SEO & AI search optimization for therapists in ${regionName}: ${cityCount} live city ${pages(cityCount)} with local SEO, Google profile and AI-visibility work, served remotely from Niagara.`,
      () =>
        `SEO & AI search for therapists in ${regionName}: ${cityCount} live city ${pages(cityCount)} — local SEO, Google profile and AI-visibility work, served from Niagara.`,
      () =>
        `SEO & AI search optimization for therapists in ${regionName}. Local SEO, Google profiles and AI answers for therapy practices, served remotely from Niagara.`,
      () =>
        `SEO & AI search optimization for therapists in ${regionName}. Local SEO, Google profiles and AI answers for therapy practices, served from Niagara.`,
    ]),
  };
}

export function countrySeo(service, countryName, cityCount, regionCount) {
  const label = countryLabel(countryName);

  if (service === "ai-search-optimization") {
    return {
      title: `AI Search Optimization in ${label} | Infused`,
      description:
        `AI search optimization across ${label}: ${cityCount} live city pages in ${regionsLabel(regionCount)}, ` +
        `covering GEO and AI SEO, served remotely from the Niagara region in Ontario.`,
    };
  }

  return {
    title: fittingTitle(
      [
        `SEO & AI Search Optimization for Therapists in ${label}`,
        `${label} SEO & AI Search Optimization for Therapists`,
        `SEO & AI Search for Therapists in ${label}`,
      ],
      `SEO for Therapists in ${label} | Infused Agency`
    ),
    description: fittingDescription([
      () =>
        `SEO & AI search optimization for therapy practices across ${label}: ${cityCount} live city ${pages(cityCount)} in ${regionsLabel(regionCount)}, covering Google search and AI answers, served remotely from Niagara.`,
      () =>
        `SEO & AI search for therapy practices across ${label}: ${cityCount} live city ${pages(cityCount)} in ${regionsLabel(regionCount)} — Google search and AI answers, served from Niagara.`,
      () =>
        `SEO & AI search optimization for therapists across ${label} — local SEO, Google profiles and AI answers for ${cityCount} live city ${pages(cityCount)}, served remotely from Niagara.`,
      () =>
        `SEO & AI search optimization for therapists across ${label}. Local SEO, Google profiles and AI answers for ${cityCount} live city ${pages(cityCount)}, served remotely from Niagara.`,
    ]),
  };
}
