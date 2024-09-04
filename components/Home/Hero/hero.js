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
      <section className="hero">
        <Container>
          <div>
            <Row className="align-items-center">
              <Col lg="6">
                <Image src={best} alt="niagara best rated web design company" />
                <h1 className="intro">
                  Niagara Web Design | Website Developer St. Catharines
                </h1>
                <h2>
                  We're <span>Infused Agency</span>, a Niagara web design &amp;
                  SEO company.
                </h2>
                <p>
                  Award-winning web design agency that helps businesses boost
                  leads and drive sales through their websites.
                </p>
                <Link href="/work">
                  <button>View Our Work</button>
                </Link>
              </Col>
              <Col lg="6">
                <div className="card">
                  <Image
                    className="img-fluid"
                    src={heroImg}
                    alt="niagara web design website"
                  />
                  <div className="text-center">
                    <p>Recent Work | Custom Web Design/Development</p>
                    <h2>
                      <span>Jerry's Insulating</span>
                    </h2>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Hero;
