import React from "react";
import { InlineWidget } from "react-calendly";
import { Container, Row, Col } from "reactstrap";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Nav from "../../components/Nav/nav";
import InnerHero from "../../components/innerHero/innerHero";
import InnerContent from "../../components/innerContent/innerContent";
import CTA from "../../components/CTA/cta";
import Footer from "../../components/Footer/footer";

import best from "../../src/img/best-rated.png";
import rated from "../../src/img/web-design-niagara.webp";

const About = () => {
  return (
    <>
      <Head>
        <title>Infused Agency | Get A Custom Quote</title>
        <meta
          name="description"
          content="Get a free, no-obligation quote for expert web design and SEO services in Niagara. Boost your online presence with Infused Agency's tailored solutions for local businesses. Request your custom quote today!"
        />
        <link rel="canonical" href="https://infused.agency/get-a-quote" />
      </Head>
      <Nav />
      <InnerHero
        title="Get Your Free Quote"
        description="Transform your online presence with a tailored web and SEO solution."
      />
      <InnerContent>
        <section className="about">
          <Container>
            <Row className="d-flex align-items-center">
              <Col lg="6">
                <h2>Let's Elevate Your Brand</h2>

                <p>
                  At Infused Agency, we're passionate about crafting websites
                  that don't just look great, but drive real results for local
                  businesses. Our team of expert designers and SEO specialists
                  are ready to create a tailored solution that boosts your
                  online visibility and converts visitors into customers.
                  <br />
                  <br />
                  With our proven track record of success and commitment to
                  excellence, we're here to take your digital presence to the
                  next level. Reach out today, and let's start your journey to
                  online success!
                </p>
              </Col>
              <Col lg="6">
                <InlineWidget url="https://calendly.com/infused-agency/project-discovery/" />
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
