import React from "react";
import ServicePage from "../../../components/services/ServicePage";

const TechnicalSeo = ({ page }) => <ServicePage page={page} />;

export default TechnicalSeo;

export async function getStaticProps() {
  const services = require("../../lib/services");
  return services.servicePagePropsFor("technical-seo");
}