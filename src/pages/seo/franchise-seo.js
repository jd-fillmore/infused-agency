import React from "react";
import ServicePage from "../../../components/services/ServicePage";

const FranchiseSeo = ({ page }) => <ServicePage page={page} />;

export default FranchiseSeo;

export async function getStaticProps() {
  const services = require("../../lib/services");
  return services.servicePagePropsFor("franchise-seo");
}