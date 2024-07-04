import React from "react";
import { Container, Row, Col } from "reactstrap";
import Head from "next/head";
import Fade from "react-reveal/Fade";
import Image from "next/image";
import Nav from "../../components/Nav/nav";
import InnerHero from "../../components/innerHero/innerHero";
import InnerContent from "../../components/innerContent/innerContent";
import CTA from "../../components/CTA/cta";
import Footer from "../../components/Footer/footer";
import { InlineWidget } from "react-calendly";

const About = () => {
  return (
    <>
      <Head>
        <title>Free Website &amp; SEO Audit | Niagara, ON</title>
        <meta
          name="description"
          content="Get a free website &amp; SEO audit for your Niagara business to boost your online presence. Start optimizing your site today!"
        />
      </Head>
      <Nav />
      <InnerHero
        title="Free Website Audit"
        description="Give your visitors a better website experience. Capture more leads, convert into customers, and make your company more credible."
      />
      <InnerContent>
        <section className="audit">
          <Container>
            <Row className="text-center">
              <Col lg="12">
                <h2>Improve Your Website</h2>
                <p className="w-75">
                  Is your website not meeting your expectations? We offer free audits for all types of websites, no
                  matter how they were made or what they look like. Our review process is data-driven, focusing on
                  metrics. Once you request an audit, our team will examine your site's structure, UX/UI, content,
                  performance, and other available metrics. Start showcasing your true potential and give your visitors
                  a compelling reason to convert when they visit your website.
                </p>
              </Col>
            </Row>
            <Row className="text-center pd-top-80 pd-btm-40">
              <Col lg="12">
                <h2>
                  Get your <span>free</span> website audit in three easy steps:
                </h2>
              </Col>
            </Row>
            <Row>
              <Col lg="6">
                <div className="card">
                  <div className="d-flex">
                    <div className="number">1</div>
                    <h3>Fill out the form</h3>
                  </div>
                  <p>
                    Provide us with your full name, email, website URL,{" "}
                    <strong>choose 'Free Website Audit' from the options</strong>, choose a day and time that works for
                    you for us to learn more about your business and goals, pre-audit.
                  </p>
                </div>
                <div className="card">
                  <div className="d-flex">
                    <div className="number">2</div>
                    <h3>Consultation</h3>
                  </div>
                  <p>
                    Once our website team reaches out, we'll start with a brief introduction and delve into your
                    preferences, concerns, and challenges. Understanding your business goals enables us to tailor our
                    audit accordingly.
                  </p>
                </div>
                <div className="card">
                  <div className="d-flex">
                    <div className="number">3</div>
                    <h3>Get Your Results</h3>
                  </div>
                  <p>
                    Following the website review, our expert will arrange a follow-up meeting to present your results.
                    They will provide recommendations on how to convert your visitors into customers, helping you take
                    the next steps effectively.
                  </p>
                </div>
              </Col>
              <Col lg="6">
                <InlineWidget
                  styles={{
                    height: "700px",
                  }}
                  url="https://calendly.com/infused-agency/project-discovery/"
                />
              </Col>
            </Row>
            <Row className="pd-top-80">
              <Col lg="12" className="text-center">
                <h2>What We Review</h2>
                <p className="w-75">
                  If you're facing issues with low website traffic, engagement, or conversions, we're here to help you
                  understand the causes, identify the necessary fixes, and implement them effectively. Since every
                  website is unique, we begin by examining fundamental checkpoints to diagnose the problem.
                </p>
              </Col>
            </Row>
            <Row className="pd-top-40 review">
              <Col lg="3">
                <div className="card text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#0bb98b" height="40" viewBox="0 0 24 24" width="40">
                    <circle cx="12" cy="12" r="10" stroke="#0bb98b" stroke-width="2" fill="none" />
                    <path d="M9 16.2L4.8 12l-1.4 1.4L9 18 21 6l-1.4-1.4L9 16.2z" />
                  </svg>
                  <h3>
                    <br />
                    {""} Health &amp; Functionality
                  </h3>
                  <p>
                    Is your website loading and functioning correctly? Are there any visible errors or layout issues on
                    the front end?
                  </p>
                </div>
              </Col>
              <Col lg="3">
                <div className="card text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#0bb98b" height="40" viewBox="0 0 24 24" width="40">
                    <circle cx="12" cy="12" r="10" stroke="#0bb98b" stroke-width="2" fill="none" />
                    <path d="M9 16.2L4.8 12l-1.4 1.4L9 18 21 6l-1.4-1.4L9 16.2z" />
                  </svg>
                  <h3>
                    <br />
                    {""} Website Structure
                  </h3>
                  <p>How does your sitemap look? Is your navigation well-organized, intuitive for visitors and simple for people to use?</p>
                </div>
              </Col>
              <Col lg="3">
                <div className="card text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#0bb98b" height="40" viewBox="0 0 24 24" width="40">
                    <circle cx="12" cy="12" r="10" stroke="#0bb98b" stroke-width="2" fill="none" />
                    <path d="M9 16.2L4.8 12l-1.4 1.4L9 18 21 6l-1.4-1.4L9 16.2z" />
                  </svg>
                  <h3>
                    <br />
                    {""} Speed &amp; Performance
                  </h3>
                  <p>
                    Page load times are crucial. Performance can suffer from poor setup, large files, messy code, slow
                    hosting, etc.
                  </p>
                </div>
              </Col>
              <Col lg="3">
                <div className="card text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#0bb98b" height="40" viewBox="0 0 24 24" width="40">
                    <circle cx="12" cy="12" r="10" stroke="#0bb98b" stroke-width="2" fill="none" />
                    <path d="M9 16.2L4.8 12l-1.4 1.4L9 18 21 6l-1.4-1.4L9 16.2z" />
                  </svg>
                  <h3>
                    <br />
                    {""} UI / UX Design
                  </h3>
                  <p>
                    Content, layout, and visual cues are key for user experience. Are you balancing design and
                    functionality effectively?
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
