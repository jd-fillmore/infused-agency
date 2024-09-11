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
        <title>Services | Infused Agency</title>
        <meta
          name="description"
          content="Boost your business with our digital marketing, SEO and web design services today. Get a free quote!"
        />
      </Head>
      <Nav />
      <InnerHero
        title="Solutions That Drive Growth"
        description="Online marketing services for business who strive to grow their revenue."
      />
      <InnerContent>
        <Container>
          <section className="services">
            <div className="row">
              <div className="col-lg-4 d-flex">
                <Link href="/web-design">
                  <div className="card">
                    <h2>Web Design</h2>
                    <p>
                      Is your Niagara website design not bringing you customers?
                      We make responsive design websites that turn visitors into
                      customers.
                    </p>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 d-flex">
                <Link href="/digital-marketing-agency-niagara">
                  <div className="card">
                    <h2>Digital Marketing</h2>
                    <p>
                      Is your Niagara web design not driving sales? We design
                      and build effective digital marketing campaigns.
                    </p>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 d-flex">
                <Link href="/niagara-seo-company">
                  <div className="card">
                    <h2>Search Engine Optimization</h2>
                    <p>
                      Are your customers not finding your website on Google? We
                      can help your website get found and bring you more leads.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 d-flex">
                <Link href="/website-conversion-optimization">
                  <div className="card">
                    <h2>Conversion Optimization</h2>
                    <p>
                      Is your website not getting you new customers? Our team
                      will fix the problems and make your website better at
                      turning visitors into customers.
                    </p>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 d-flex">
                <Link href="/wordpress-developer-niagara">
                  <div className="card">
                    <h2>WordPress Development</h2>
                    <p>
                      Is your WordPress site outdated or not good enough? We
                      create custom WordPress sites just for your business
                      needs.
                    </p>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 d-flex">
                <Link href="/niagara-seo-company">
                  <div className="card">
                    <h2>Local SEO</h2>
                    <p>
                      Are local customers not finding your services? We optimize
                      your site for local searches to get you more visibility.
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
