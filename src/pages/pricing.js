import React from "react";
import { Row, Col, Container } from "reactstrap";
import PricingTiers from "../../components/Pricing/pricing";
import Head from "next/head";
import Nav from "../../components/Nav/nav";
import InnerHero from "../../components/innerHero/innerHero";
import InnerContent from "../../components/innerContent/innerContent";
import CTA from "../../components/CTA/cta";
import Footer from "../../components/Footer/footer";

const Pricing = () => {
  return (
    <>
      <Head>
        <title>Website Design Pricing for Ontario Businesses | Infused</title>
        <meta
          name="description"
          content="Check out the premium pricing for Infused Ageny's web design, SEO and digital marketing services."
        />
      </Head>
      <Nav />
      <InnerHero
        title="Affordable, Monthly Pricing"
        description="Say goodbye to flat-fee pricing. We make it more affordable for you to have an awesome online presence."
      />
      <InnerContent>
        <Container>
          <Row className="text-center">
            <Col lg="12">
              <h2>
                Affordable Website Design &amp; SEO Pricing For <br />
                <span>All Business Sizes</span>
              </h2>
            </Col>
          </Row>
          <Row>
            <Col lg="12">
              <p className="w-75 text-center">
                High-quality web design shouldn't be reserved for large
                companies. We help small to medium businesses and alike build a
                strong online presence at an affordable, pay monthly price for
                one year.
              </p>
              <br />
              <br />
              <h3 className="w-75 text-center">
                The prices outlined below are{" "}
                <span>meant to be treated as general guidelines</span>.<br />
                They are subject to change depending on the work involved.
              </h3>
            </Col>
          </Row>
        </Container>
        <PricingTiers />
      </InnerContent>
      <CTA />
      <Footer />
    </>
  );
};

export default Pricing;
