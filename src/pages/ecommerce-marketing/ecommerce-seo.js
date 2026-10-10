import React from "react";
import ServicePage from "../../../components/services/ServicePage";

const EcommerceSeo = ({ page }) => <ServicePage page={page} />;

export default EcommerceSeo;

export async function getStaticProps() {
  const services = require("../../lib/services");
  return services.servicePagePropsFor("ecommerce-seo");
}