import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col } from "reactstrap";
import heroImg from "./../../../src/img/niagara-web-design-client.webp";

const Hero = () => {
  return (
    <>
      <section className="hero" title="Niagara web design">
        <Container>
          <div className="bg">
            <Row className="text-center">
              <Col lg="12">
                <h1 className="intro">Web Design Niagara</h1>
                <h2>
                  <span>Elevate Your Business</span> with Expert Niagara Web
                  Design.
                </h2>
                <h3>
                  Premier Niagara web design agency helping countless local
                  businesses since 2013.
                </h3>
              </Col>
            </Row>
            <Row className="pd-top-40">
              <Col lg="6">
                <Image
                  priority={true}
                  className="img-fluid"
                  src={heroImg}
                  alt="niagara web design"
                />
                <Link href="/kd-florist">
                  <button className="kd">
                    KD Flowers - Local Niagara Business Case Study
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
              </Col>
              <Col lg="6" className="cities">
                <h3>
                  Here to help with all of your website design needs anywhere in
                  the Niagara Region.
                </h3>
                <Row>
                  <Col lg="6">
                    <p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#005c97"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="12" cy="10" r="2" fill="currentColor" />
                        <path d="M12 2C7.5 2 4 5.5 4 10c0 3.4 2.2 6.2 5 9.2L12 22l2.9-2.8c2.8-3 5-5.8 5-9.2 0-4.5-3.5-8-8-8z"></path>
                      </svg>
                      {""} Beamsville-Lincoln
                    </p>
                    <p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#005c97"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="12" cy="10" r="2" fill="currentColor" />
                        <path d="M12 2C7.5 2 4 5.5 4 10c0 3.4 2.2 6.2 5 9.2L12 22l2.9-2.8c2.8-3 5-5.8 5-9.2 0-4.5-3.5-8-8-8z"></path>
                      </svg>
                      {""} Fort Erie
                    </p>

                    <p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#005c97"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="12" cy="10" r="2" fill="currentColor" />
                        <path d="M12 2C7.5 2 4 5.5 4 10c0 3.4 2.2 6.2 5 9.2L12 22l2.9-2.8c2.8-3 5-5.8 5-9.2 0-4.5-3.5-8-8-8z"></path>
                      </svg>
                      {""} Grimsby
                    </p>

                    <p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#005c97"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="12" cy="10" r="2" fill="currentColor" />
                        <path d="M12 2C7.5 2 4 5.5 4 10c0 3.4 2.2 6.2 5 9.2L12 22l2.9-2.8c2.8-3 5-5.8 5-9.2 0-4.5-3.5-8-8-8z"></path>
                      </svg>
                      {""} Niagara Falls
                    </p>

                    <p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#005c97"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="12" cy="10" r="2" fill="currentColor" />
                        <path d="M12 2C7.5 2 4 5.5 4 10c0 3.4 2.2 6.2 5 9.2L12 22l2.9-2.8c2.8-3 5-5.8 5-9.2 0-4.5-3.5-8-8-8z"></path>
                      </svg>
                      {""} Niagara-on-the-Lake
                    </p>

                    <p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#005c97"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="12" cy="10" r="2" fill="currentColor" />
                        <path d="M12 2C7.5 2 4 5.5 4 10c0 3.4 2.2 6.2 5 9.2L12 22l2.9-2.8c2.8-3 5-5.8 5-9.2 0-4.5-3.5-8-8-8z"></path>
                      </svg>
                      {""} Pelham/Fonthill
                    </p>
                  </Col>
                  <Col lg="6">
                    <p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#005c97"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="12" cy="10" r="2" fill="currentColor" />
                        <path d="M12 2C7.5 2 4 5.5 4 10c0 3.4 2.2 6.2 5 9.2L12 22l2.9-2.8c2.8-3 5-5.8 5-9.2 0-4.5-3.5-8-8-8z"></path>
                      </svg>{" "}
                      Port Colborne
                    </p>

                    <p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#005c97"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="12" cy="10" r="2" fill="currentColor" />
                        <path d="M12 2C7.5 2 4 5.5 4 10c0 3.4 2.2 6.2 5 9.2L12 22l2.9-2.8c2.8-3 5-5.8 5-9.2 0-4.5-3.5-8-8-8z"></path>
                      </svg>{" "}
                      St. Catharines
                    </p>

                    <p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#005c97"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="12" cy="10" r="2" fill="currentColor" />
                        <path d="M12 2C7.5 2 4 5.5 4 10c0 3.4 2.2 6.2 5 9.2L12 22l2.9-2.8c2.8-3 5-5.8 5-9.2 0-4.5-3.5-8-8-8z"></path>
                      </svg>{" "}
                      Thorold
                    </p>

                    <p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#005c97"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="12" cy="10" r="2" fill="currentColor" />
                        <path d="M12 2C7.5 2 4 5.5 4 10c0 3.4 2.2 6.2 5 9.2L12 22l2.9-2.8c2.8-3 5-5.8 5-9.2 0-4.5-3.5-8-8-8z"></path>
                      </svg>{" "}
                      Wainfleet
                    </p>

                    <p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#005c97"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="12" cy="10" r="2" fill="currentColor" />
                        <path d="M12 2C7.5 2 4 5.5 4 10c0 3.4 2.2 6.2 5 9.2L12 22l2.9-2.8c2.8-3 5-5.8 5-9.2 0-4.5-3.5-8-8-8z"></path>
                      </svg>{" "}
                      Welland
                    </p>

                    <p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#005c97"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="12" cy="10" r="2" fill="currentColor" />
                        <path d="M12 2C7.5 2 4 5.5 4 10c0 3.4 2.2 6.2 5 9.2L12 22l2.9-2.8c2.8-3 5-5.8 5-9.2 0-4.5-3.5-8-8-8z"></path>
                      </svg>{" "}
                      West Lincoln
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Hero;
