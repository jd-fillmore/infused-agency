import React from "react";
import ServicePage from "../../../components/services/ServicePage";

const ReputationManagement = ({ page }) => <ServicePage page={page} />;

export default ReputationManagement;

export async function getStaticProps() {
  const services = require("../../lib/services");
  return services.servicePagePropsFor("reputation-management");
}