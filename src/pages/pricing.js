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
      <InnerHero title="Pricing" description="Our Website & SEO Pricing" />
      <InnerContent>
        <Container>
          <Row className="text-center">
            <Col lg="12">
              <h2>
                Website Design &amp; SEO Pricing For{" "}
                <span>All Business Sizes</span>
              </h2>
            </Col>
          </Row>
          <Row>
            <Col lg="12">
              <p className="w-75 text-center">
                High-quality web design shouldn't be reserved for large
                companies. We help small to medium businesses and alike build a
                strong online presence at an affordable price.
              </p>
              <h3 className="w-75 pd-top-40 text-center">
                <strong>
                  <span>These prices are a general guideline only.</span> <br />
                  <br />
                  Depending on your specific project scope, whether it's
                  reducing or adding to the scope, the prices may fluctuate.
                </strong>
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
