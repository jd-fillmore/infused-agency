import React from "react";
import ServicePage from "../../../components/services/ServicePage";

const EcommercePpc = ({ page }) => <ServicePage page={page} />;

export default EcommercePpc;

export async function getStaticProps() {
  const services = require("../../lib/services");
  return services.servicePagePropsFor("ecommerce-ppc");
}