import React from "react";
import ServicePage from "../../../components/services/ServicePage";

const LinkBuilding = ({ page }) => <ServicePage page={page} />;

export default LinkBuilding;

export async function getStaticProps() {
  const services = require("../../lib/services");
  return services.servicePagePropsFor("link-building");
}