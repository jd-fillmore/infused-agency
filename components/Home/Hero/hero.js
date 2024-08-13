import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col } from "reactstrap";
import Fade from "react-reveal/Fade";
import heroImg from "./../../../src/img/niagara-web-design-marketing-agency.png";
import best from "../../../src/img/best-rated.png";
import goog from "../../../src/img/google-reviews.png";

const Hero = () => {
  return (
    <>
      <section className="hero" title="Niagara web design">
        <Container>
          <div className="bg">
            <Row className="text-center">
              <Col lg="12">
                <Image src={best} alt="niagara best rated web design company" />
                <h1 className="intro">Niagara Web Design</h1>
                <h2>
                  We help businesses <span>boost leads</span> and{" "}
                  <span>drive sales</span> through their websites.
                </h2>
                <p>
                  From increasing traffic to generating leads and boosting
                  sales, we are your digital partner for success.
                </p>
                <a
                  href="https://calendly.com/infused-agency/project-discovery/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>
                    Get Free Quote
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      className="absolute left-1/2 top-1/2 translate-centered group-hover:ml-1 transition-250"
                      height="20px"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"></path>
                    </svg>
                  </button>
                </a>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Hero;
