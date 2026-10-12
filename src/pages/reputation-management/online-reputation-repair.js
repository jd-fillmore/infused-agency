import React from "react";
import ServicePage from "../../../components/services/ServicePage";

const OnlineReputationRepair = ({ page }) => <ServicePage page={page} />;

export default OnlineReputationRepair;

export async function getStaticProps() {
  const services = require("../../lib/services");
  return services.servicePagePropsFor("online-reputation-repair");
}