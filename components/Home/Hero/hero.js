import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import best from "../../../src/img/seo-niagara-company.png";

const Hero = () => {
  return (
    <>
      <section className="main-hero text-center">
        <Container>
          <Row>
            <Col lg="12">
              <Image src={best} alt="local SEO and AI search agency Niagara" />
              <h1 className="intro">Niagara Local SEO & AI Search Company</h1>
              <p>
                Our Niagara SEO & AI Search company partners with businesses of
                every size to get found on Google and AI tools like ChatGPT &
                Gemini — boosting local visibility, rankings, leads, and
                revenue.
              </p>
              <Link href="/get-a-quote">
                <button>Get A Free Quote</button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Hero;
