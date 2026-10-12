import React from "react";
import ServicePage from "../../../components/services/ServicePage";

const ContentWriting = ({ page }) => <ServicePage page={page} />;

export default ContentWriting;

export async function getStaticProps() {
  const services = require("../../lib/services");
  return services.servicePagePropsFor("content-writing");
}