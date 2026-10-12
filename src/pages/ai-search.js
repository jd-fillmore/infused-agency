import React from "react";
import ServicePage from "../../components/services/ServicePage";

const AiSearch = ({ page }) => <ServicePage page={page} />;

export default AiSearch;

export async function getStaticProps() {
  const services = require("../lib/services");
  return services.servicePagePropsFor("ai-search");
}