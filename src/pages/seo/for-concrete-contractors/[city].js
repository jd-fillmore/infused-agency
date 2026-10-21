import React from "react";
import CanadaNicheCityPage from "../../../../components/canadaNiche/CanadaNicheCityPage";

const NICHE_SLUG = "concrete-contractors";

export default function ConcreteContractorsCanadaCityPage(props) {
  return <CanadaNicheCityPage {...props} />;
}

export async function getStaticPaths() {
  const { publishedCitySlugs } = require("../../../lib/canadaNicheSeo");
  const slugs = publishedCitySlugs(NICHE_SLUG);
  return {
    paths: slugs.map((city) => ({ params: { city } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { cityPageProps } = require("../../../lib/canadaNicheSeo");
  return cityPageProps(NICHE_SLUG, params.city);
}
