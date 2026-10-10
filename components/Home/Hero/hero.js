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
              <h1 className="intro">Niagara SEO and AI SEO Services</h1>
              <p>
                Our Niagara SEO company helps businesses of every size grow
                their traffic and generate more local leads — improving local
                visibility, rankings, and revenue with proven search strategies.
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
