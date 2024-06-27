import React from "react";
import { Container, Row, Col } from "reactstrap";
import Button from "../Button/button";
import { InlineWidget } from "react-calendly";

const CTA = () => {
  return (
    <>
      <section className="cta">
        <Container>
          <Row className="text-center">
            <Col lg="12">
              <h2>Connect with us for your free quote today!</h2>
              <InlineWidget
                styles={{
                  height: "700px",
                }}
                url="https://calendly.com/infused-agency/project-discovery/"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default CTA;
