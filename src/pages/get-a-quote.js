import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import Head from "next/head";
import Nav from "../../components/Nav/nav";
import InnerHero from "../../components/innerHero/innerHero";
import InnerContent from "../../components/innerContent/innerContent";
import CTA from "../../components/CTA/cta";
import Footer from "../../components/Footer/footer";

import { InlineWidget } from "react-calendly";

import { useForm, ValidationError } from "@formspree/react";

const Quote = () => {
  const [state, handleSubmit] = useForm("mjkvogze");
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
        <section className="quote">
          <Container>
            <Row className="d-flex align-items-center">
              <Col lg="6">
                <h2>Let's Elevate Your Brand!</h2>

                <p>
                  Our team is ready to start your next web design, SEO or
                  digital marketing project.
                  <br />
                  <br />
                  The first step is to get in touch with us to book your free
                  project consultation.
                  <br />
                  <br />
                  Fill out the form to get your project started!
                </p>
              </Col>
              <Col lg="6">
                <InlineWidget url="https://calendly.com/infused-agency/project-discovery" />
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

export default Quote;
