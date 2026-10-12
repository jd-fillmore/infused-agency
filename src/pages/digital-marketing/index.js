import React from "react";
import ServicePage from "../../../components/services/ServicePage";

const DigitalMarketing = ({ page }) => <ServicePage page={page} />;

export default DigitalMarketing;

export async function getStaticProps() {
  const services = require("../../lib/services");
  return services.servicePagePropsFor("digital-marketing");
}