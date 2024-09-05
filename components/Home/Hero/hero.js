import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col } from "reactstrap";
import Fade from "react-reveal/Fade";
import heroImg from "./../../../src/img/niagara-web-design-website.webp";
import best from "../../../src/img/best-rated.png";

const Hero = () => {
  return (
    <>
      <section className="main-hero">
        <Container>
          <div>
            <Row className="align-items-center">
              <Col lg="12">
                <Image src={best} alt="niagara web design company" />
                <h1 className="intro">
                  Niagara Web Design | Website Developer St. Catharines
                </h1>
                <h2>
                  Crafting winning website designs for Niagara's businesses
                </h2>
                <p>
                  Infused is an award-winning web design agency that helps
                  businesses boost leads and drive sales through their websites.
                </p>
                <Link href="/work">
                  <button>View Our Work</button>
                </Link>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Hero;
