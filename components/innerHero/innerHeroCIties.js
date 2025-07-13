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
