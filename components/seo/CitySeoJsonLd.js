import React from "react";
import { localCityGraph } from "../../src/lib/verticalSeoSchema";

// Emits Organization + BreadcrumbList + Service for a Niagara city page.
// Each city page keeps its own FAQPage block; this adds the service/city
// entities and the breadcrumb trail.
const CitySeoJsonLd = ({ city, region, url, serviceName }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(
        localCityGraph({ city, region, url, serviceName })
      ),
    }}
  />
);

export default CitySeoJsonLd;
