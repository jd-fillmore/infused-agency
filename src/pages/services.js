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
        <title>
          Niagara Digital Marketing Services | St. Catharines Marketing Company
        </title>
        <meta
          name="description"
          content="Boost your business with Niagara digital marketing services. St. Catharines' top marketing company for SEO, web design, and more. Drive results today!"
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
                      Is your website not bringing you customers? We create
                      lead-generating websites, for the purpose of converting
                      visitors into customers.
                    </p>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 d-flex">
                <Link href="/website-conversion-optimization">
                  <div className="card">
                    <h2>Conversion Optimization</h2>
                    <p>
                      Is your website not bringing you leads? Our team will fix
                      conversion barriers, optimizing your website to convert
                      more.
                    </p>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 d-flex">
                <Link href="/niagara-seo-company">
                  <div className="card">
                    <h2>Search Engine Optimization</h2>
                    <p>
                      Are your customers not finding your website in Google?
                      Lets help get your website found, and drive more leads to
                      you.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 d-flex">
                <Link href="/web-design">
                  <div className="card">
                    <h2>Website Development</h2>
                    <p>
                      Is your website outdated or lacking functionality? We
                      specialize in building modern, fast, and responsive
                      websites.
                    </p>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 d-flex">
                <Link href="/wordpress-developer-niagara">
                  <div className="card">
                    <h2>WordPress Development</h2>
                    <p>
                      Struggling with a generic or outdated WordPress site? We
                      craft custom WordPress solutions tailored to your business
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
                      Are local customers missing out on your services? We focus
                      on optimizing your site for local search, getting you more
                      visibility.
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
