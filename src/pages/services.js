import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";
import Head from "next/head";
import Image from "next/image";
import Nav from "../../components/Nav/nav";
import InnerHero from "../../components/innerHero/innerHero";
import InnerContent from "../../components/innerContent/innerContent";
import CTA from "../../components/CTA/cta";
import Footer from "../../components/Footer/footer";

import leadGenImg from "../../src/img/lead-generating-web-design-niagara.png";
import webConvImg from "../../src/img/website-conversion-optimization-niagara.png";
import seoImg from "../../src/img/search-engine-optimization-niagara.png";

const Services = () => {
  return (
    <>
      <Head>
        <title>
          Niagara Digital Marketing Services | St. Catharines Marketing Company
        </title>
        <meta
          name="description"
          content="Boost your business with Niagara digital marketing services. St. Catharines' top marketing company for SEO, web design, and more. Drive results today!"
        />
      </Head>
      <Nav />
      <InnerHero
        title="Services"
        description="Online marketing services for business who strive to grow their revenue."
      />
      <InnerContent>
        <section className="services">
          <Container>
            <div className="row">
              <div className="col-lg-4">
                <div className="card">
                  <Image src={leadGenImg} alt="web designer niagara" />
                  <h2>Lead-Generating Web Design</h2>
                  <p>
                    Is your website not bringing you customers? We create
                    lead-generating websites, for the purpose of converting
                    visitors into customers.
                  </p>
                  <Link href="/web-design">
                    <button>
                      Boost Your Leads
                      <svg
                        stroke="currentColor"
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
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card">
                  <Image
                    src={webConvImg}
                    alt="website conversion optimization niagara"
                  />
                  <h2>Website Conversion Optimization</h2>
                  <p>
                    Is your website not bringing you leads? Our team will
                    identify and fix conversion barriers, optimizing your site
                    to turn visitors into customers.
                  </p>
                  <Link href="/web-design">
                    <button>
                      Increase Conversions
                      <svg
                        stroke="currentColor"
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
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card">
                  <Image
                    className="img-fluid"
                    src={seoImg}
                    alt="best web designer niagara"
                  />
                  <h2>Search Engine Optimization</h2>
                  <p>
                    Are your customers not finding your website in Google? Lets
                    help get your website found, and drive more leads to you.
                  </p>
                  <Link href="/niagara-seo-company">
                    <button>
                      Drive Sales
                      <svg
                        stroke="currentColor"
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
                </div>
              </div>
            </div>
          </Container>
        </section>
      </InnerContent>
      <CTA />
      <Footer />
    </>
  );
};

export default Services;
