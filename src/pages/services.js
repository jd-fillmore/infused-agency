import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";
import Head from "next/head";
import Image from "next/image";
import Nav from "../../components/Nav/nav";
import InnerHero from "../../components/innerHero/innerHero";
import InnerContent from "../../components/innerContent/innerContent";
import CTA from "../../components/CTA/cta";
import Footer from "../../components/Footer/footer";

import leadGenImg from "../../src/img/lead-generating-web-design-niagara.png";
import webConvImg from "../../src/img/website-conversion-optimization-niagara.png";
import seoImg from "../../src/img/search-engine-optimization-niagara.png";
import PageJsonLd from "../../components/seo/PageJsonLd";
import { webPageGraph } from "../lib/verticalSeoSchema";

const GROUP_TITLES = [
  { title: "SEO", groups: ["seo"] },
  { title: "Web Design", groups: ["web-design"] },
  { title: "eCommerce Marketing", groups: ["ecommerce-marketing"] },
  {
    title: "Digital Marketing and Reputation",
    groups: ["digital-marketing", "reputation"],
  },
];

const Services = ({ groups = [] }) => {
  return (
    <>
      <Head>
        <title>Infused Agency | Online Marketing Solutions</title>
        <meta
          name="description"
          content="Boost your business with our digital marketing, SEO and web design services today. Get a free quote!"
        />
        <link rel="canonical" href="https://infused.agency/services" />
        <PageJsonLd
          graph={webPageGraph({
            url: "/services",
            name: "Infused Agency | Online Marketing Solutions",
            pageType: "CollectionPage",
            description:
              "Boost your business with our digital marketing, SEO and web design services today. Get a free quote!",
            breadcrumbs: [
              { name: "Home", href: "/" },
              { name: "Services", href: "/services" },
            ],
          })}
        />
      </Head>
      <Nav />
      <InnerHero
        title="Our Services"
        description="Online marketing services for business that want to add credibility and grow their revenue."
      />
      <InnerContent>
        <Container>
          <section className="services">
            <Row>
              <Col lg="12">
                <p>
                  At Infused Agency, we help businesses in Niagara grow by
                  improving their online presence. Whether you need your website
                  to show up on Google or want a design that brings in more
                  customers, we’re here to help. Our services include{" "}
                  <Link href="/">Niagara SEO</Link> to boost your rankings, and
                  Lead-Generating Web Design that turns visitors into customers.
                </p>
              </Col>
            </Row>
            {groups.map((g) =>
              g.services.length ? (
                <div className="row pd-top-40" key={g.title}>
                  <div className="col-lg-12">
                    <h3>{g.title}</h3>
                  </div>
                  {g.services.map((s) => (
                    <div className="col-lg-6 d-flex" key={s.url}>
                      <Link href={s.url}>
                        <div className="card">
                          <h4>{s.name}</h4>
                          <p>{s.summary}</p>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              ) : null
            )}
            <div className="row pd-top-40">
              <div className="col-lg-12">
                <h2>SEO by industry</h2>
                <ul>
                  <li>
                    <Link href="/therapist-seo">
                      SEO for Therapists in Canada
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </Container>
      </InnerContent>
      <CTA />
      <Footer />
    </>
  );
};

export default Services;

export async function getStaticProps() {
  const services = require("../lib/services");
  const { published } = services.computePublishedServices();
  const publishedServices = published.map((r) => r.service);
  const groups = GROUP_TITLES.map((g) => ({
    title: g.title,
    services: publishedServices
      .filter((s) => g.groups.includes(s.group))
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((s) => ({ name: s.name, url: s.url, summary: s.summary })),
  }));
  return { props: { groups } };
}
