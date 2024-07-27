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

const About = () => {
  return (
    <>
      <Head>
        <title>Cities We Serve - Infused</title>
        <meta
          name="description"
          content="Learn more about cities we serve across Canada and more with web design and SEO services."
        />
      </Head>
      <Nav />
      <InnerHero
        title="Cities We Serve"
        description="Serving cities all across Canada and beyond."
      />
      <InnerContent>
        <Container>
            <Row className="text-center">
                <Col lg="12">
                    <h2>Cities We Serve - Website Design</h2>
                </Col>
            </Row>
        </Container>
      </InnerContent>
      <CTA />
      <Footer />
    </>
  );
};

export default About;
