import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import Image from "next/image";

const InnerHeroCities = ({ title, subTitle, description, image, alt }) => {
  return (
    <>
      <section className="inner-hero-cities">
        <Container>
          <Row className="align-items-center">
            <Col lg="6">
              <h1>{title}</h1>
              <h2>{subTitle}</h2>
              <hr />
              <p>{description}</p>
              <ul>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path
                      fill="none"
                      stroke="#ffffff"
                      stroke-width="2"
                      d="M6 12l4 4 8-8"
                    />
                  </svg>
                  Over a decade of local SEO experience
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path
                      fill="none"
                      stroke="#ffffff"
                      stroke-width="2"
                      d="M6 12l4 4 8-8"
                    />
                  </svg>
                  Transparent and fair pricing
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path
                      fill="none"
                      stroke="#ffffff"
                      stroke-width="2"
                      d="M6 12l4 4 8-8"
                    />
                  </svg>
                  Honest and ethical practices
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path
                      fill="none"
                      stroke="#ffffff"
                      stroke-width="2"
                      d="M6 12l4 4 8-8"
                    />
                  </svg>
                  Proven track record for page 1 results
                </li>
              </ul>
              <Link href="/get-a-quote">
                <button>Book A Free Consultation</button>
              </Link>
            </Col>
            <Col lg="6">
              <Image className="img-fluid shadow" src={image} alt={alt} />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default InnerHeroCities;
