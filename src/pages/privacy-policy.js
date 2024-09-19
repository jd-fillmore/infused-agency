import React from "react";
import { Container, Row, Col } from "reactstrap";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Nav from "../../components/Nav/nav";
import InnerHero from "../../components/innerHero/innerHero";
import InnerContent from "../../components/innerContent/innerContent";
import CTA from "../../components/CTA/cta";
import Footer from "../../components/Footer/footer";
import about from "../img/about.jpeg";
import leadGenImg from "../img/lead-generating-web-design-niagara.png";
import webConvImg from "../img/website-conversion-optimization-niagara.png";
import seoImg from "../img/search-engine-optimization-niagara.png";

const About = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy - Infused</title>
        <meta
          name="description"
          content="Infused Agency Privacy Policy. Click here to learn more about how we handle your privacy."
        />
        <link rel="canonical" href="https://infused.agency/privacy-policy" />
      </Head>
      <Nav />
      <InnerHero
        title="Privacy Policy"
        description="How we handle your privacy."
      />
      <InnerContent>
        <section className="about">
          <Container>
            <Row>
              <Col lg="12">
                <h2>Introduction</h2>
                <p>
                  At Infused Agency, accessible from bluelakewebdesign.com, the
                  privacy of our visitors is of extreme importance to us. This
                  privacy policy document outlines the types of personal
                  information that is received and collected by Infused Agency
                  and how it is used.
                </p>

                <h2>Policy Effective Date</h2>
                <p>This policy is effective as of Sept. 19, 2024.</p>

                <h2>Information Collection and Use</h2>
                <p>
                  Infused Agency is dedicated to safeguarding your privacy. When
                  interacting with our website, we may ask you to provide
                  certain personal information for identification purposes.
                  Here’s what we may collect:
                </p>
                <ul>
                  <li>First and Last Name</li>
                  <li>Email Address</li>
                  <li>Contact Information</li>
                  <li>
                    Demographic Information (like postcode, preferences, and
                    interests)
                  </li>
                  <li>
                    Other relevant information for customer surveys/offers
                  </li>
                </ul>

                <h2>Purpose of Data Collection</h2>
                <p>The information we collect from you may be used for:</p>
                <ul>
                  <li>Maintaining internal records.</li>
                  <li>Enhancing our products and services.</li>
                  <li>
                    Sending periodic emails about new products, special offers,
                    or other information we believe you may find interesting.
                  </li>
                  <li>
                    Contacting you for market research purposes via email,
                    phone, or mail.
                  </li>
                  <li>Customizing the website according to your interests.</li>
                </ul>

                <h2>Data Security</h2>
                <p>
                  To prevent unauthorized access or disclosure, we have
                  implemented robust physical, electronic, and managerial
                  procedures to secure the information we collect online.
                </p>

                <h2>Use of Cookies</h2>
                <p>
                  Our website uses cookies to enhance user experience. Cookies
                  help us tailor our website operations to your needs and likes.
                  You have the option to accept or decline cookies. Declining
                  cookies may hinder your full experience of our website.
                </p>

                <h2>Analytics and Tracking</h2>
                <p>
                  We utilize Google Analytics for traffic log cookies to
                  identify which pages are being used, aiding us in data
                  analysis regarding web page traffic. This is crucial for us to
                  refine our website and tailor it more to our customers’ needs.
                </p>

                <h2>Session Cookies</h2>
                <p>
                  Essential session cookies are used for the operation of our
                  website.
                </p>

                <h2>Third-Party Applications</h2>
                <p>
                  We may use third-party applications like YouTube, Twitter,
                  Facebook, or others, which may set cookies to remember user
                  preferences.
                </p>

                <h2>Disabling Cookies</h2>
                <p>
                  Instructions to disable cookies can be found in your specific
                  web browser settings. However, this might affect your
                  experience with certain parts of our website.
                </p>

                <h2>External Links</h2>
                <p>
                  Our website may contain links to other websites. Please note
                  that once you use these links, we do not have control over
                  other websites. Therefore, we cannot be responsible for the
                  protection and privacy of any information you provide whilst
                  visiting such sites.
                </p>

                <h2>Controlling Your Personal Information</h2>
                <p>
                  You have the right to restrict the collection or use of your
                  personal information. If you have previously agreed to us
                  using your personal information for direct marketing, you can
                  change your mind at any time by contacting us at
                  hello@infused.agency.
                </p>
                <p>
                  We will not sell, distribute, or lease your personal
                  information to third parties unless required by law. You may
                  request details of personal information which we hold about
                  you under the Data Protection Act 1998.
                </p>

                <h2>Corrections and Concerns</h2>
                <p>
                  If you believe that any information we are holding on you is
                  incorrect or incomplete, please write to or email us as soon
                  as possible. We will promptly correct any information found to
                  be incorrect.
                </p>

                <h2>Contact Us</h2>
                <p>
                  For any questions or concerns regarding this privacy policy,
                  please contact us at hello@infused.agency.
                </p>

                <h2>Updates to Our Privacy Policy</h2>
                <p>
                  Infused Agency reserves the right to modify this privacy
                  policy at any time, so please review it frequently. Changes
                  and clarifications will take effect immediately upon their
                  posting on the website.
                </p>
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

export default About;
