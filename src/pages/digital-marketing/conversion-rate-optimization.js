import React from "react";
import ServicePage from "../../../components/services/ServicePage";

const ConversionRateOptimization = ({ page }) => <ServicePage page={page} />;

export default ConversionRateOptimization;

export async function getStaticProps() {
  const services = require("../../lib/services");
  return services.servicePagePropsFor("conversion-rate-optimization");
}