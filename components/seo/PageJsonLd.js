import React from "react";

// Renders a JSON-LD <script> from a prebuilt schema graph. Use the builders in
// src/lib/verticalSeoSchema (aboutPageGraph, contactPageGraph, webPageGraph,
// blogGraph, ...) to produce `graph`.
const PageJsonLd = ({ graph }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
  />
);

export default PageJsonLd;
