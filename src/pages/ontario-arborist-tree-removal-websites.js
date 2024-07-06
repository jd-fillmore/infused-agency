import React from "react";
import Head from "next/head";
import { Container, Row, Col } from "reactstrap";
import Nav from "../../components/Nav/nav";
import InnerHero from "../../components/innerHero/innerHero";
import InnerContent from "../../components/innerContent/innerContent";
import CTA from "../../components/CTA/cta";
import Footer from "../../components/Footer/footer";
import bgImage from "../img/inner-about.jpg";

const OntarioArborist = () => {
  return (
    <>
      <Head>
        <title>Toronto, Ottawa &amp; Ontario Arborist Tree Removal Services Website Design</title>
        <meta
          name="description"
          content="Boost your Ontario arborist business with custom website design for tree removal services. Showcase expertise, attract clients. Contact us for a free quote!"
        />
      </Head>
      <Nav />
      <div className="niche-pages">
        <section className="niche-inner-hero">
          <Container>
            <Row>
              <Col lg="12">
                <h1>Professional Websites & SEO for Ontario Arborists & Tree Removal Services</h1>
                <h2>Get the Arborist Tree Removal website you need to succeed.</h2>
                <h3>Toronto - Ottawa - Hamilton - Kitchener - London and across Ontario</h3>
              </Col>
            </Row>
          </Container>
        </section>
        <InnerContent>
          <div className="niche-services">
            <h2>Ontario Arborist and Tree Removal Service Website Solutions that get results.</h2>
            <h3>Your website will have all the right stuff to help capture attention and garner more leads.</h3>
          </div>
        </InnerContent>
      </div>

      <CTA />
      <Footer />
    </>
  );
};

export default OntarioArborist;
