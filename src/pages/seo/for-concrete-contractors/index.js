import React from "react";
import CanadaNicheHubPage from "../../../../components/canadaNiche/CanadaNicheHubPage";

const NICHE_SLUG = "concrete-contractors";

export default function ConcreteContractorsCanadaHubPage(props) {
  return <CanadaNicheHubPage {...props} />;
}

export async function getStaticProps() {
  const { hubPageProps } = require("../../../lib/canadaNicheSeo");
  return hubPageProps(NICHE_SLUG);
}
