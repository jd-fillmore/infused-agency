import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col } from "reactstrap";
import Fade from "react-reveal/Fade";
import heroImg from "./../../../src/img/niagara-web-design-marketing-agency.png";

const Hero = () => {
  return (
    <>
      <section className="hero" title="Niagara web design">
        <Container>
          <div className="bg">
            <Row className="d-flex align-items-center">
              <Col lg="6">
                <Fade duration={2000}>
                  <h1 className="intro">Niagara Web Design &amp; Business Strategy</h1>
                </Fade>
                <Fade delay={300} duration={2000}>
                  <h2>
                    We help local businesses boost <span>leads</span>, drive <span>sales</span>
                    and enhance <span>credibility</span>.
                  </h2>
                </Fade>
                <Fade bottom delay={600} duration={2000}>
                  <Link href="/work">
                    <button>
                      View Portfolio
                      <svg
                        stroke="#005c97"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        class="absolute left-1/2 top-1/2 translate-centered group-hover:ml-1 transition-250"
                        height="20px"
                        width="20px"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"></path>
                      </svg>
                    </button>
                  </Link>
                </Fade>
              </Col>

              <Col lg="6">
                <Fade duration={2000}>
                  <Image priority={true} className="img-fluid" src={heroImg} alt="niagara web design" />
                  <div className="d-block d-md-flex cards">
                    <Fade duration={1000} delay={300}>
                      <div className="card">
                        <h3>10,700</h3>
                        <p>monthly website views</p>
                      </div>
                    </Fade>
                    <Fade duration={1000} delay={600}>
                      <div className="card">
                        <h3>20,000%</h3>
                        <p>in leads over 6 months</p>
                      </div>
                    </Fade>
                    <Fade duration={1000} delay={900}>
                      <div className="card">
                        <h3>5,800</h3>
                        <p>new monthly visitors</p>
                      </div>
                    </Fade>
                  </div>
                </Fade>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Hero;
