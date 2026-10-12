import React from "react";
import ServicePage from "../../../components/services/ServicePage";

const LocalSeo = ({ page }) => <ServicePage page={page} />;

export default LocalSeo;

export async function getStaticProps() {
  const services = require("../../lib/services");
  return services.servicePagePropsFor("local-seo");
}