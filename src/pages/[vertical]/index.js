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
  return { props: { page: buildPageProps(record.page, publishedSet) } };
}
