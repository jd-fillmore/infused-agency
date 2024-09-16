import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col } from "reactstrap";

const InnerHero = ({ title, description, bgImage }) => {
  return (
    <>
      <section className="inner-hero">
        <Container>
          <Row>
            <Col lg="12">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <h1>{title}</h1>
                <hr />
                <p>{description}</p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default InnerHero;
