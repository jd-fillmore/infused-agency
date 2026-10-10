import React from "react";
import ServicePage from "../../../components/services/ServicePage";

const EcommerceWebDesign = ({ page }) => <ServicePage page={page} />;

export default EcommerceWebDesign;

export async function getStaticProps() {
  const services = require("../../lib/services");
  return services.servicePagePropsFor("ecommerce-web-design");
}