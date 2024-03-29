import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";
import { marked } from "marked";
import Head from "next/head";
import Image from "next/image";
import { Container, Row, Col } from "reactstrap";
import Nav from "../../../components/Nav/nav";
import InnerHero from "../../../components/innerHero/innerHero";
import CTA from "../../../components/CTA/cta";
import Footer from "../../../components/Footer/footer";

export default function PostPage({ frontmatter: { title }, content }) {
  return (
    <>
      <Head>
        <title>Blog - Infused</title>
        <meta
          name="description"
          content="Check out the latest educational blog posts from Infused."
        />
      </Head>
      <Nav />
      <InnerHero title={title} />
      <section className="inner-content single-blog">
        <Container>
          <Row>
            <Col lg="12">
              <ReactMarkdown
                components={{
                  img: ({ src, alt }) => (
                    <Image src={src} alt={alt} width={1400} height={400} />
                  ),
                }}
              >
                {content}
              </ReactMarkdown>
            </Col>
          </Row>
        </Container>
      </section>
      <CTA />
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync("./posts");

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  // Convert the Date object to a string representation
  frontmatter.date = frontmatter.date.toString();

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
