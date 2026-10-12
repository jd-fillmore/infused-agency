import React from "react";
import ServicePage from "../../../components/services/ServicePage";

const EcommerceMarketing = ({ page }) => <ServicePage page={page} />;

export default EcommerceMarketing;

export async function getStaticProps() {
  const services = require("../../lib/services");
  return services.servicePagePropsFor("ecommerce-marketing");
}