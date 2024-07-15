import React from "react";
import { Container, Row, Col } from "reactstrap";
import Head from "next/head";
import Image from "next/image";
import Nav from "../../components/Nav/nav";
import InnerHero from "../../components/innerHero/innerHero";
import InnerContent from "../../components/innerContent/innerContent";
import CTA from "../../components/CTA/cta";
import Footer from "../../components/Footer/footer";
import bgImage from "../img/inner-web-design.jpg";

import ui from "../img/ui-design.png";
import build from "../img/build.png";
import grow from "../img/grow.png";
import growth from "../img/lead-generating-websites-niagara.png";
import data from "../img/website-conversion-rate-optimization-niagara.jpg";
import test from "../img/testing.jpg";
import results from "../img/results.jpg";

const WebDesign = () => {
  return (
    <>
      <Head>
        <title>
          #1 Conversion Rate Optimization Optimization Agency Niagara | Infused
        </title>
        <meta
          name="description"
          content="Boost your conversions with Niagara's #1 Conversion Rate Optimization Agency. Expert strategies to maximize your website's performance and drive real results. Contact us today!"
        />
      </Head>
      <Nav />
      <InnerHero
        title="Website Conversion Rate Optimization"
        description="Website not bringing in customers? Our website conversion rate optimizations make sure it brings you leads."
        bgImage={bgImage}
      />
      <InnerContent>
        <section className="web-design">
          <Container>
            {/* Websites */}
            <Row>
              <Col md="6">
                <h2>
                  Websites optimized to <span>engage</span>,{" "}
                  <span>capture</span> and <span>convert</span>.
                </h2>
              </Col>
              <Col md="6">&nbsp;</Col>
            </Row>
            <Row className="pd-top-40">
              <Col lg="4" className="d-flex">
                <div className="card">
                  <Image src={ui} alt="ui design" />
                  <h3>Analyze &amp; Understand</h3>
                  <p>
                    We start with a deep dive into your website's performance
                    and user behavior. Through comprehensive audits and user
                    research, we identify key areas for improvement and set
                    clear goals tailored to your business objectives.
                  </p>
                </div>
              </Col>
              <Col lg="4">
                <div className="card">
                  <Image src={build} alt="web development" />
                  <h3>Test &amp; Optimize</h3>
                  <p>
                    Next, we implement targeted A/B tests and experiments to
                    find the most effective changes. By testing different
                    variations, we determine what truly resonates with your
                    audience and enhances their journey, from engagement to
                    conversion.
                  </p>
                </div>
              </Col>
              <Col lg="4">
                <div className="card">
                  <Image src={grow} alt="web growth" />
                  <h3>Enhance</h3>
                  <p>
                    Finally, we deploy the successful changes across your site
                    and continuously monitor their impact. Our ongoing
                    optimization ensures your website stays ahead, consistently
                    driving higher conversions and achieving sustained growth.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="pd-top-120 d-flex align-items-center">
              <Col lg="6" className="d-none d-sm-block">
                <Image
                  className="img-fluid"
                  src={data}
                  alt="conversion rate optimization st catharines niagara"
                />
              </Col>
              <Col lg="6" className="order-1 order-lg-2">
                <h2>
                  Data-Driven Insights for <span>Conversion Optimization</span>
                </h2>
                <p>
                  At Infused Agency, we start with a deep dive into your
                  website's performance and user behavior. Our comprehensive
                  audits and user research help us identify key areas for
                  improvement and set clear, actionable goals tailored to your
                  business objectives. This foundational analysis ensures we
                  understand your audience and how best to engage them.
                </p>
                <a
                  href="https://calendly.com/infused-agency/project-discovery/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>
                    Get Started
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      class="absolute left-1/2 top-1/2 translate-centered group-hover:ml-1 transition-250"
                      height="20px"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"></path>
                    </svg>
                  </button>
                </a>
              </Col>
              <Col lg="6" className="d-block d-sm-none">
                <Image
                  className="img-fluid"
                  src={growth}
                  alt="niagara website conversion optimization"
                />
              </Col>
            </Row>

            <Row className="pd-top-120 d-flex align-items-center">
              <Col lg="6" className="d-block d-lg-none">
                <Image
                  className="img-fluid pd-btm-40"
                  src={test}
                  alt="conversion optimization st. catharines"
                />
              </Col>
              <Col lg="6">
                <h2>
                  A/B Testing for <br />
                  <span>Continuous Improvement</span>
                </h2>
                <p>
                  We implement targeted A/B tests and experiments to discover
                  what changes drive the most conversions. By testing different
                  variations of elements like CTAs, layouts, and content, we
                  refine your website to maximize its effectiveness. Our
                  data-driven approach ensures that every tweak is backed by
                  evidence, leading to continuous improvement.
                </p>
                <a
                  href="https://calendly.com/infused-agency/project-discovery/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>
                    Get Started
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      class="absolute left-1/2 top-1/2 translate-centered group-hover:ml-1 transition-250"
                      height="20px"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"></path>
                    </svg>
                  </button>
                </a>
              </Col>
              <Col lg="6" className="d-none d-lg-block">
                <Image
                  className="img-fluid"
                  src={test}
                  alt="st catharines website conversion rate optimization"
                />
              </Col>
            </Row>
            <Row className="pd-top-120 d-flex align-items-center">
              <Col lg="6">
                <Image
                  className="img-fluid pd-btm-40"
                  src={results}
                  alt="conversion optimization websites niagara"
                />
              </Col>
              <Col lg="6">
                <h2>
                  Seamless Implementation for <span>Lasting Results</span>
                </h2>
                <p>
                  Once we identify the most effective strategies, we deploy
                  these changes across your site and continuously monitor their
                  impact. Our ongoing optimization ensures your website remains
                  ahead of the competition, consistently driving higher
                  conversions and sustained growth. Experience the benefits of a
                  website that adapts and improves with every visitor
                  interaction.
                </p>
                <a
                  href="https://calendly.com/infused-agency/project-discovery/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>
                    Get Started
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      class="absolute left-1/2 top-1/2 translate-centered group-hover:ml-1 transition-250"
                      height="20px"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"></path>
                    </svg>
                  </button>
                </a>
              </Col>
            </Row>

            <Row>
              <Col lg="12">
                <div className="card">
                  <img
                    width="48"
                    height="48"
                    src="https://lh3.googleusercontent.com/a-/ALV-UjVLy6_ixr6gqj-aH80ExcMvtlXgbc5j4QWfjolnkaklnH0bIsE=s40-c-rp-mo-br100"
                  />
                  <p className="author">KD Flowers</p>
                  <div className="d-flex">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 2L14.09 8.26L20 9.27L15.55 13.97L16.91 20L12 16.9L7.09 20L8.45 13.97L4 9.27L9.91 8.26L12 2Z"
                        fill="#FFD700"
                      />
                    </svg>
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 2L14.09 8.26L20 9.27L15.55 13.97L16.91 20L12 16.9L7.09 20L8.45 13.97L4 9.27L9.91 8.26L12 2Z"
                        fill="#FFD700"
                      />
                    </svg>
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 2L14.09 8.26L20 9.27L15.55 13.97L16.91 20L12 16.9L7.09 20L8.45 13.97L4 9.27L9.91 8.26L12 2Z"
                        fill="#FFD700"
                      />
                    </svg>
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 2L14.09 8.26L20 9.27L15.55 13.97L16.91 20L12 16.9L7.09 20L8.45 13.97L4 9.27L9.91 8.26L12 2Z"
                        fill="#FFD700"
                      />
                    </svg>
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 2L14.09 8.26L20 9.27L15.55 13.97L16.91 20L12 16.9L7.09 20L8.45 13.97L4 9.27L9.91 8.26L12 2Z"
                        fill="#FFD700"
                      />
                    </svg>
                  </div>
                  <p className="desc">
                    JD has helped my business immensely! His eye for design met
                    mine through and through and his SEO skills have increased
                    my clientele so much that I was able to quit my other part
                    time job. I am very thankful for all the work JD has done
                    for me and I would recommend him to anyone looking to
                    elevate their business!
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </InnerContent>
      <CTA />
      <Footer />
    </>
  );
};

export default WebDesign;
