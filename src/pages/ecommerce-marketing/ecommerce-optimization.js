import React from "react";
import ServicePage from "../../../components/services/ServicePage";

const EcommerceOptimization = ({ page }) => <ServicePage page={page} />;

export default EcommerceOptimization;

export async function getStaticProps() {
  const services = require("../../lib/services");
  return services.servicePagePropsFor("ecommerce-optimization");
}