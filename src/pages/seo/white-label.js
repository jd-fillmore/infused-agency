import React from "react";
import ServicePage from "../../../components/services/ServicePage";

const WhiteLabel = ({ page }) => <ServicePage page={page} />;

export default WhiteLabel;

export async function getStaticProps() {
  const services = require("../../lib/services");
  return services.servicePagePropsFor("white-label");
}