import React from "react";
import { Container, Row, Col } from "reactstrap";
import Head from "next/head";
import Nav from "../../components/Nav/nav";
import InnerHero from "../../components/innerHero/innerHero";
import CTA from "../../components/CTA/cta";
import Footer from "../../components/Footer/footer";
import bgImage from "../img/inner-work.jpg";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <>
      <Head>
        <title>{frontmatter.title} - Infused</title>
        <meta name="description" content={frontmatter.excerpt} />
      </Head>
      <Nav />
      <InnerHero title={frontmatter.title} bgImage={bgImage} />
      <section className="inner-content">
        <Container className="single-blog">
          <Row>
            <Col lg="12">
              <div className="blog-post">
                <div
                  className="blog-post-content"
                  dangerouslySetInnerHTML={{ __html: html }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <CTA />
      <Footer />
    </>
  );
}
export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        excerpt
      }
    }
  }
`;
