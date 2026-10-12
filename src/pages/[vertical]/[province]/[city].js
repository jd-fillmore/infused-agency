import React from "react";
import VerticalSeoPage from "../../../../components/verticalSeo/VerticalSeoPage";

const VerticalCity = ({ page }) => <VerticalSeoPage page={page} />;

export default VerticalCity;

export function getStaticPaths() {
  const { computePublished } = require("../../../lib/verticalSeo");
  const { published } = computePublished();
  const paths = published
    .filter((r) => r.page.kind === "city")
    .map((r) => ({
      params: {
        vertical: r.page.vertical.urlSlug,
        province: r.page.province.slug,
        city: r.page.city.slug,
      },
    }));
  return { paths, fallback: false };
}

export function getStaticProps({ params }) {
  const { computePublished, buildPageProps } = require("../../../lib/verticalSeo");
  const { published } = computePublished();
  const publishedSet = new Set(published.map((r) => r.page.urlPath));
  const record = published.find(
    (r) =>
      r.page.urlPath ===
      `/${params.vertical}/${params.province}/${params.city}`
  );
  if (!record) return { notFound: true };
  return { props: { page: buildPageProps(record.page, publishedSet) } };
}
