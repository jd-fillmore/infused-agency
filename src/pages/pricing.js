import React from "react";
import { Container, Row, Col } from "reactstrap";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Nav from "../../components/Nav/nav";
import InnerHero from "../../components/innerHero/innerHero";
import InnerContent from "../../components/innerContent/innerContent";
import CTA from "../../components/CTA/cta";
import Footer from "../../components/Footer/footer";
import about from "../img/about.jpeg";

const Pricing = () => {
  return (
    <>
      <Head>
        <title>Pricing - Infused</title>
        <meta
          name="description"
          content="Check out the premium pricing for Infused Ageny's web design, SEO and digital marketing services."
        />
      </Head>
      <Nav />
      <InnerHero title="Pricing" description="Our Website & SEO Pricing" />
      <InnerContent>
        <section className="pricing">
          <Container>
            <Row>
              <Col lg="12">
                <p>
                  <strong>
                    The pricing tiers below serve as a general guideline
                  </strong>{" "}
                  based on the clients we've worked with currently and in the
                  past.
                </p>
                <p>
                  If you're unsure where you fit,{" "}
                  <Link href="/get-a-quote">send us an inquiry</Link> and we can
                  help with the process.
                </p>
              </Col>
            </Row>
            {/* Websites */}
            <Row>
              <Col lg="12">
                <h2>Websites</h2>
              </Col>
            </Row>
            <Row className="pd-top-40">
              <Col lg="3" className="d-flex">
                <div className="card text-center">
                  <div className="top">
                    <h4>
                      Three Page <br />
                      Website
                    </h4>
                    <h3>
                      <sup>$</sup>2,000
                    </h3>
                  </div>
                  <div className="bg">
                    <ul>
                      <li>
                        <strong>3 pages</strong>
                      </li>
                      <li>
                        <strong>1 round of revisions</strong>
                      </li>
                      <li>Hosting included</li>
                      <li>SSL Certificate included</li>
                      <li>Mobile-Friendly</li>
                      <li>Google Sitemap</li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col lg="3" className="d-flex">
                <div className="card text-center">
                  <div className="top">
                    <h4>
                      Five Page
                      <br /> Website
                    </h4>
                    <h3>
                      <sup>$</sup>3,000
                    </h3>
                  </div>
                  <div className="bg">
                    <ul>
                      <li>
                        <strong>5 pages</strong>
                      </li>
                      <li>
                        <strong>SEO Optimized for Google</strong>
                      </li>
                      <li>1 round of revisions</li>
                      <li>Hosting included</li>
                      <li>SSL Certificate included</li>
                      <li>Mobile-Friendly</li>
                      <li>Google Sitemap</li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col lg="3" className="d-flex">
                <div className="card text-center">
                  <div className="top">
                    <h4>Five Page CMS Website</h4>
                    <h3>
                      <sup>$</sup>4,000
                    </h3>
                  </div>
                  <div className="bg">
                    <ul>
                      <li>
                        <strong>5 pages</strong>
                      </li>
                      <li>
                        <strong>(you can edit content)</strong>
                      </li>
                      <li>SEO Optimized for Google</li>
                      <li>1 round of revisions</li>
                      <li>Mobile-Friendly</li>
                      <li>Google Sitemap</li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col lg="3" className="d-flex">
                <div className="card text-center">
                  <div className="top">
                    <h4>Ten Page CMS Website</h4>
                    <h3>
                      <sup>$</sup>4,500
                    </h3>
                  </div>
                  <div className="bg">
                    <ul>
                      <li>
                        <strong>10 pages</strong>
                      </li>
                      <li>
                        <strong>(you can edit content)</strong>
                      </li>
                      <li>SEO Optimized for Google</li>
                      <li>1 round of revisions</li>
                      <li>Mobile-Friendly</li>
                      <li>Google Sitemap</li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
            {/* SEO*/}
            <Row>
              <Col lg="12">
                <h2>Search Engine Optimization</h2>
              </Col>
            </Row>
            <Row className="pd-top-40">
              <Col lg="4">
                <div className="card text-center">
                  <div className="top">
                    <h4>Boosted SEO</h4>
                    <h3>
                      <sup>$</sup>1,000
                    </h3>
                    per month for 3 months
                  </div>
                  <div className="bg">
                    <ul>
                      <li>
                        <strong>Backlink building</strong>
                      </li>
                      <li>
                        <strong>Custom SEO strategy</strong>
                      </li>
                      <li>
                        <strong>Keyword research</strong>
                      </li>
                      <li>
                        <strong>On-page SEO</strong>
                      </li>
                      <li>
                        <strong>Campaign reporting</strong>
                      </li>
                      <li>Optimize Google My Business Listing</li>
                      <li>Optimize website home page</li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col lg="4">&nbsp;</Col>
              <Col lg="4">&nbsp;</Col>
            </Row>
          </Container>
        </section>
      </InnerContent>
      <CTA />
      <Footer />
    </>
  );
};

export default Pricing;
