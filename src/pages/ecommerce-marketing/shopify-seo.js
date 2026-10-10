import React from "react";
import ServicePage from "../../../components/services/ServicePage";

const ShopifySeo = ({ page }) => <ServicePage page={page} />;

export default ShopifySeo;

export async function getStaticProps() {
  const services = require("../../lib/services");
  return services.servicePagePropsFor("shopify-seo");
}