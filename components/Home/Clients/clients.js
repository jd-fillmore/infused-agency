import React from "react";
import Fade from "react-reveal/Fade";
import { Container, Row, Col } from "reactstrap";
import TestimonialCard from "./../../testimonialCard/testimonialCard";

const Clients = ({ title, subTitle }) => {
  return (
    <>
      <section className="clients text-center">
        <Container>
          <Row>
            <Col lg="12">
              <Fade>
                <h2>
                  {title}{" "}
                  <span role="img" aria-label="wave">
                    &#9994;
                  </span>
                </h2>
              </Fade>
              <hr />
              <div>
                <Fade>
                  <TestimonialCard>
                    <p>
                      "Fantastic experience from start to end. JD is organized,
                      thorough and professional. I highly recommend his company
                      if you are thinking of needing his services."
                    </p>
                    <em>Harry Althorpe, TreeReports</em>
                  </TestimonialCard>
                </Fade>
                <Fade>
                  <TestimonialCard>
                    <p>
                      "Great Job, WELL DONE. I'm very pleased with my new
                      website. If you ever need a new website for your business
                      I do recommend Infused Agency for their services. JD keep
                      up the great work. Thank you."
                    </p>
                    <em>Mr. Duarte, Cass-A-Bella Construction</em>
                  </TestimonialCard>
                </Fade>
              </div>
              <div>
                <Fade>
                  <TestimonialCard>
                    <p>
                      "Amazing experience, really helped to elevate my business
                      and I would highly recommend working with them for all of
                      your online marketing needs!!"
                    </p>
                    <em>Lauren Emberson, Lauren Emberson Photography</em>
                  </TestimonialCard>
                </Fade>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Clients;
