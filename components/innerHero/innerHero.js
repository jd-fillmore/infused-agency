import React from "react";
import Fade from "react-reveal/Fade";
import { Container, Row, Col } from "reactstrap";

const InnerHero = ({ title, description, bgImage }) => {
  return (
    <>
      <section className="inner-hero">
        <Container>
          <Row className="text-center">
            <Col lg="12">
              <h1>{title}</h1>
              <hr />
              <p>{description}</p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default InnerHero;
