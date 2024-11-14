import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import Head from "next/head";
import Nav from "../../components/Nav/nav";
import InnerHero from "../../components/innerHero/innerHero";
import InnerContent from "../../components/innerContent/innerContent";
import CTA from "../../components/CTA/cta";
import Footer from "../../components/Footer/footer";

import { useForm, ValidationError } from "@formspree/react";

const Quote = () => {
  return (
    <>
      <Head>
        <title>Infused Agency | Get A Custom Quote</title>
        <meta
          name="description"
          content="Get a free, no-obligation quote for expert web design and SEO services in Niagara. Boost your online presence with Infused Agency's tailored solutions for local businesses. Request your custom quote today!"
        />
        <link rel="canonical" href="https://infused.agency/get-a-quote" />
      </Head>
      <Nav />
      <InnerHero
        title="Get Your Free Quote"
        description="Transform your online presence with a tailored web and SEO solution."
      />
      <InnerContent>
        <section className="quote">
          <Container>
            <Row className="d-flex align-items-center">
              <Col lg="6">
                <h2>Let's Elevate Your Brand!</h2>

                <p>
                  Our team is ready to start your next web design, SEO or
                  digital marketing project.
                  <br />
                  <br />
                  The first step is to get in touch with us, and within 24 hours
                  you'll receive your custom, free quote.
                  <br />
                  <br />
                  Fill out the form to get your project started!
                </p>
              </Col>
              <Col lg="6">
                <Container>
                  <form
                    action="https://formsubmit.co/jd@infused.agency"
                    method="POST"
                  >
                    <input
                      type="hidden"
                      name="_subject"
                      value="New submission from Infused Agency"
                    ></input>

                    <Row form>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="name">Name *</Label>
                          <Input id="name" type="text" name="name" required />
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="email">Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            name="email"
                            required
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row form>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="phoneNumber">Phone Number *</Label>
                          <Input
                            id="phoneNumber"
                            type="tel"
                            name="phoneNumber"
                            required
                          />
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="company">Company *</Label>
                          <Input
                            id="company"
                            type="text"
                            name="company"
                            required
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row form>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="websiteURL">Website URL</Label>
                          <Input
                            id="websiteURL"
                            type="text"
                            name="websiteURL"
                          />
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="budget">What is your budget? *</Label>
                          <Input
                            type="select"
                            id="budget"
                            name="budget"
                            required
                          >
                            <option value="">Select an option</option>
                            <option value="$4,000 - $10,000">
                              $4,000 - $10,000
                            </option>
                            <option value="$10,001 - $20,000">
                              $10,001 - $20,000
                            </option>
                            <option value="$20,001 - $30,000">
                              $20,001 - $30,000
                            </option>
                            <option value="$30,000+">$30,000+</option>
                          </Input>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row form>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="start">
                            When would you like to start? *
                          </Label>
                          <Input type="select" id="start" name="start" required>
                            <option value="">Select an option</option>
                            <option value="Next 2 weeks">Next 2 weeks</option>
                            <option value="in 1 month">In 1 month</option>
                            <option value="in 2 months">In 2 months</option>
                            <option value="in 6 months">In 6 months</option>
                            <option value="I don't know">I don't know</option>
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="referral">How did you find us? *</Label>
                          <Input
                            type="select"
                            id="referral"
                            name="referral"
                            required
                          >
                            <option value="">Select an option</option>
                            <option value="Google">Google</option>
                            <option value="Referral">Referral</option>
                            <option value="ChatGPT">ChatGPT</option>
                            <option value="Social Media">Social Media</option>
                            <option value="Other">Other</option>
                          </Input>
                        </FormGroup>
                      </Col>
                    </Row>
                    <FormGroup>
                      <Label for="description">
                        Please describe your needs - the more we know, the
                        better *
                      </Label>
                      <Input
                        type="textarea"
                        id="description"
                        name="description"
                        required
                      />
                    </FormGroup>
                    <Button type="submit">Submit</Button>
                  </form>
                </Container>
              </Col>
            </Row>
          </Container>
        </section>
      </InnerContent>
      <CTA />
      <Footer />
    </>
  );
};

export default Quote;
