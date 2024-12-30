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

const Services = () => {
  return (
    <>
      <Head>
        <title>Infused Agency | Online Marketing Solutions</title>
        <meta
          name="description"
          content="Boost your business with our digital marketing, SEO and web design services today. Get a free quote!"
        />
        <link rel="canonical" href="https://infused.agency/services" />
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
            <div className="row pd-top-40">
              <div className="col-lg-6 d-flex">
                <Link href="/seo">
                  <div className="card">
                    <h2>Search Engine Optimization (SEO)</h2>
                    <p>
                      Are your customers not finding your website on Google? We
                      can help your website get found and bring you more leads.
                    </p>
                  </div>
                </Link>
              </div>

              <div className="col-lg-6 d-flex">
                <Link href="/web-design">
                  <div className="card">
                    <h2>Lead-Generating Web Design</h2>
                    <p>
                      Is your Niagara website design not bringing you customers?
                      We make lead-generating websites that turn visitors into
                      customers.
                    </p>
                  </div>
                </Link>
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
