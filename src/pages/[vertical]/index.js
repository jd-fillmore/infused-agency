import React from "react";
import VerticalSeoPage from "../../../components/verticalSeo/VerticalSeoPage";

const VerticalPillar = ({ page }) => <VerticalSeoPage page={page} />;

export default VerticalPillar;

export function getStaticPaths() {
  const { computePublished } = require("../../lib/verticalSeo");
  const { published } = computePublished();
  const paths = published
    .filter((r) => r.page.kind === "pillar")
    .map((r) => ({ params: { vertical: r.page.vertical.urlSlug } }));
  return { paths, fallback: false };
}

export function getStaticProps({ params }) {
  const { computePublished, buildPageProps } = require("../../lib/verticalSeo");
  const { published } = computePublished();
  const publishedSet = new Set(published.map((r) => r.page.urlPath));
  const record = published.find(
    (r) => r.page.urlPath === `/${params.vertical}`
  );
  if (!record) return { notFound: true };
  const page = buildPageProps(record.page, publishedSet);
  // Live vertical pillars link back to the relevant published services
  // (follow-up Phase 6 wiring; only pillars get this block).
  if (record.page.kind === "pillar") {
    const services = require("../../lib/services");
    const { published: publishedServices } = services.computePublishedServices();
    const publishedServiceUrls = new Set(
      publishedServices.map((r) => r.service.url)
    );
    page.serviceLinks = services.buildVerticalServiceLinks(
      record.page.vertical,
      publishedServiceUrls
    );
  }
  return { props: { page } };
}
