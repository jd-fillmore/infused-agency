import React from "react";
import ServicePage from "../../../components/services/ServicePage";

const ShopifyWebDesign = ({ page }) => <ServicePage page={page} />;

export default ShopifyWebDesign;

export async function getStaticProps() {
  const services = require("../../lib/services");
  return services.servicePagePropsFor("shopify-web-design");
}