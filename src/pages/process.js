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
import leadGenImg from "../img/lead-generating-web-design-niagara.png";
import webConvImg from "../img/website-conversion-optimization-niagara.png";
import seoImg from "../img/search-engine-optimization-niagara.png";

const About = () => {
  return (
    <>
      <Head>
        <title>Infused Agency | Process</title>
        <meta
          name="description"
          content="Learn more the web design and SEO process that happens for your business at Infused Agency. Click here to learn more."
        />
        <link rel="canonical" href="https://infused.agency/process" />
      </Head>
      <Nav />
      <InnerHero
        title="Process"
        description="Outlining our tailored web design and SEO processes for your business."
      />
      <InnerContent>
        <section className="process">
          <Container>
            <Row>
              <Col lg="12">
                <p>
                  At <Link href="/">Infused Agency</Link>, we believe that a
                  systematic approach is key to delivering exceptional results.
                  Whether you're looking for a{" "}
                  <Link href="/web-design">stunning website</Link> that converts
                  visitors into customers or aiming to{" "}
                  <Link href="/niagara-seo-company">
                    dominate search engine rankings
                  </Link>
                  , our proven processes ensure we meet and exceed your
                  expectations. We've refined our methodologies over years of
                  experience, combining creativity with technical expertise to
                  drive real business growth for our clients across the Niagara
                  region. Below, we outline our step-by-step approaches to web
                  design and SEO, giving you insight into how we transform your
                  digital presence.
                </p>
              </Col>
            </Row>
            <br />
            <Row>
              <Col lg="6">
                <div className="card">
                  <h2>Web Design Process</h2>

                  <h3>Initial Consultation</h3>
                  <p>
                    We begin with a thorough discussion to understand your
                    business goals, target audience, and website requirements.
                  </p>

                  <h3>Research and Planning</h3>
                  <p>
                    Our team conducts in-depth market research and creates a
                    detailed project plan, including sitemap and wireframes.
                  </p>

                  <h3>Design Concept</h3>
                  <p>
                    We create initial design concepts that align with your brand
                    identity and project goals.
                  </p>

                  <h3>Client Feedback and Revisions</h3>
                  <p>
                    We present the designs for your review and make necessary
                    adjustments based on your feedback.
                  </p>

                  <h3>Development</h3>
                  <p>
                    Our developers bring the approved design to life, using
                    cutting-edge technologies like Next.js or WordPress.
                  </p>

                  <h3>Content Integration</h3>
                  <p>
                    We populate your website with optimized content, ensuring
                    it's engaging and SEO-friendly.
                  </p>

                  <h3>Testing and Quality Assurance</h3>
                  <p>
                    Rigorous testing is performed to ensure your website
                    functions flawlessly across all devices and browsers.
                  </p>

                  <h3>Launch</h3>
                  <p>
                    Once approved, we launch your new website and ensure it's
                    properly indexed by search engines.
                  </p>

                  <h3>Post-Launch Support</h3>
                  <p>
                    We provide ongoing support and maintenance to keep your
                    website running smoothly and securely.
                  </p>

                  <p>
                    Ready to start your web design journey?{" "}
                    <Link href="/get-a-quote">Contact us</Link> for a free
                    consultation!
                  </p>
                </div>
              </Col>
              <Col lg="6">
                <div className="card">
                  <h2>SEO Process</h2>

                  <h3>Keyword Research</h3>
                  <p>
                    Our team performs in-depth keyword research to identify the
                    most valuable search terms for your business.
                  </p>

                  <h3>On-Page Optimization</h3>
                  <p>
                    We optimize your website's content, meta tags, and structure
                    to improve search engine visibility.
                  </p>

                  <h3>Technical SEO</h3>
                  <p>
                    We address technical issues that may be hindering your
                    site's performance in search results.
                  </p>

                  <h3>Content Strategy</h3>
                  <p>
                    We develop a content strategy that aligns with your SEO
                    goals and engages your target audience.
                  </p>

                  <h3>Link Building</h3>
                  <p>
                    We implement ethical link building strategies to boost your
                    website's authority and rankings.
                  </p>

                  <h3>Local SEO (if applicable)</h3>
                  <p>
                    For local businesses, we optimize your online presence to
                    improve visibility in local search results.
                  </p>

                  <h3>Performance Tracking</h3>
                  <p>
                    We continuously monitor your website's performance using
                    advanced analytics tools.
                  </p>

                  <h3>Reporting</h3>
                  <p>
                    We provide detailed project-end reports on your SEO progress
                    and make data-driven recommendations for ongoing
                    improvement.
                  </p>

                  <h3>Optional Ongoing Optimization</h3>
                  <p>
                    SEO is an ongoing process. We continuously refine our
                    strategies to maintain and improve your search engine
                    rankings.
                  </p>

                  <p>
                    Ready to improve your search engine rankings?{" "}
                    <Link href="/get-a-quote">Get in touch</Link> for a free SEO
                    consultation!
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

export default About;
