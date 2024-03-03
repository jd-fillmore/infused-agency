import React from "react";
import Head from "next/head";
import Nav from "../../components/Nav/nav";
import InnerHero from "../../components/innerHero/innerHero";
import CTA from "../../components/CTA/cta";
import Footer from "../../components/Footer/footer";
import bgImage from "../img/inner-work.jpg";

const GetEvaluation = () => {
  return (
    <>
      <Head>
        <title>Get Started - Infused</title>
        <meta
          name="description"
          content="Ready to start your project? Click here to fill out the form and we'll be in contact as soon as possible."
        />
      </Head>
      <Nav />
      <InnerHero
        title="Get Started"
        description="Ready to start your project? Fill out the form below to get started."
        bgImage={bgImage}
      />
      {/* <InnerContent>
        <Container>
          <Row>
            <Col lg="12">
              <Form />
            </Col>
          </Row>
        </Container>
      </InnerContent> */}
      <CTA />
      <Footer />
    </>
  );
};

export default GetEvaluation;
