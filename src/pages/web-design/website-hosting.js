import React from "react";
import ServicePage from "../../../components/services/ServicePage";

const WebsiteHosting = ({ page }) => <ServicePage page={page} />;

export default WebsiteHosting;

export async function getStaticProps() {
  const services = require("../../lib/services");
  return services.servicePagePropsFor("website-hosting");
}