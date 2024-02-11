import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import Fade from "react-reveal/Fade";

const FAQ = () => {
  return (
    <>
      <section className="faq">
        <Container>
          <div className="bg">
            <Fade>
              <Row>
                <Col lg="12">
                  <h2>Common Questions</h2>
                  <p>
                    <strong>
                      How will I know if my website needs updating?
                    </strong>
                  </p>
                  <p>
                    The biggest factor when it comes to deciding if your website
                    needs a refresh, is if it's achieving your business goal.
                    For example - if you own a local business, is your website
                    bringing you new revenue? If not, it may be time for a new
                    website that does so.
                  </p>
                  <p>
                    <strong>
                      Will adjusting my current website be sufficient?
                    </strong>
                  </p>
                  <p>
                    Comparing an old <Link href="/services">website</Link> to a
                    new website is a lot like a car; can you put a Porsche
                    engine inside of a Ford Tempo and make it perform like a
                    Porsche? Probably not. While you can certainly make small
                    updates here and there to a current website, it's much more
                    effective if you had an all-around modern website.
                  </p>
                  <p>
                    <strong>
                      What questions should I ask my web developer?
                    </strong>
                  </p>
                  <p>
                    As a business owner, there are several key questions you
                    want to ask your designer. For example, does your new
                    websiteinclude SEO (search engine optimization - the ability
                    to rank on the first page of Google)? How long does the
                    entire process take? Are they outsourcing the job or keeping
                    the job in-house? These are all very important questions and
                    it's equally important to weigh out the answers.
                  </p>
                  <p>
                    <strong>
                      What should I expect during a new website build?
                    </strong>
                  </p>
                  <p>
                    At Infused Agency, we want you to have the best possible
                    experience when it comes to investing in a new website
                    design for your business. You should expect to work closely
                    with the company themselves and for the website work to
                    especially not be outsourced overseas (everything we do is
                    in-house).
                  </p>
                </Col>
              </Row>
            </Fade>
          </div>
        </Container>
      </section>
    </>
  );
};

export default FAQ;
