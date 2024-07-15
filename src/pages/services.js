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

import webImg from "../../src/img/responsive.svg";
import seoImg from "../../src/img/seoo.svg";

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
        title="Services"
        description="Online marketing services for business who strive to grow their revenue."
      />
      <InnerContent>
        <section className="services">
          <Container>
            <Row>
              <Col lg="12" className="text-center">
                <h2>How can we help?</h2>
              </Col>
            </Row>
            <div className="row">
              <div className="col-lg-4 ">
                <div className="card">
                  <Image
                    className="img-fluid"
                    src={webImg}
                    alt="web designer niagara"
                  />
                  <Link href="/web-design">
                    <h2>Lead-Generating Web Design</h2>
                  </Link>
                  <p>
                    Is your Niagara website not bringing you customers? We
                    create lead-generating websites, for the purpose of
                    converting visitors into customers.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card">
                  <Image
                    className="img-fluid"
                    src={webImg}
                    alt="website conversion optimization"
                  />
                  <Link href="/web-design">
                    <h2>Website Conversion Optimization</h2>
                  </Link>
                  <p>
                    Is your website not bringing you leads? Our team will
                    identify and fix conversion barriers, optimizing your site
                    to turn visitors into customers.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 d-flex">
                <div className="card">
                  <Image
                    className="img-fluid"
                    src={seoImg}
                    alt="best web designer niagara"
                  />
                  <Link href="/niagara-seo-company">
                    <h2>Search Engine Optimization</h2>
                  </Link>
                  <p>
                    Are your customers not finding your website in Google? Lets
                    help get your website found, and drive more leads to you.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </InnerContent>
      <CTA />
      <Footer />
    </>
  );
};

export default Services;
