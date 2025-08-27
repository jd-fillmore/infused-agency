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
              <Image src={best} alt="seo niagara" />
              <h1 className="intro">Niagara SEO Company</h1>
              <p>
                Our SEO Niagara company partners with businesses of every size
                in Niagara, St. Catharines & beyond to boost their SEO, elevate
                search rankings, and drive more organic traffic, leads, and
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
