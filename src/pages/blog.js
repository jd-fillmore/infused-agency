import { format } from "date-fns";
import { getPaginatedPostsData } from "../lib/posts";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import Head from "next/head";
import Nav from "../../components/Nav/nav";
import InnerHero from "../../components/innerHero/innerHero";
import InnerContent from "../../components/innerContent/innerContent";
import Image from "next/image";
import CTA from "../../components/CTA/cta";
import Footer from "../../components/Footer/footer";

export default function Blog({ posts, currentPage, totalPages }) {
  return (
    <div>
      <Head>
        <title>Infused Agency | Our Educational Blog</title>
        <meta
          name="description"
          content="Explore expert insights on web design and SEO, tailored to educate and empower clients. Discover strategies and tips to enhance your online presence and drive business growth."
        />
        <link rel="canonical" href="https://infused.agency/blog" />
      </Head>
      <Nav />
      <InnerHero
        title="Blog"
        description="Educating clients on digital marketing, SEO & web design best practices."
      />
      <InnerContent>
        <Container>
          <Row className="blog-overview">
            {posts.map(({ id, date, title, excerpt, image }) => (
              <Col lg="4" md="6" sm="12" key={id} className="mb-4">
                <Link href={`/posts/${id}`}>
                  {image && (
                    <Image
                      src={image}
                      className="img-fluid"
                      alt={`${title}`}
                      width={600} // Adjust width as needed
                      height={400} // Adjust height as needed
                    />
                  )}
                </Link>
                <div className="post-card card">
                  <h2>
                    <Link href={`/posts/${id}`}>{title}</Link>
                  </h2>
                  <small>{format(new Date(date), "eeee, MMMM d, yyyy")}</small>
                  <p>{excerpt}</p>
                </div>
              </Col>
            ))}
          </Row>

          <Row>
            <Col lg="12" className="text-center">
              <div className="pagination">
                {currentPage > 1 && (
                  <Link href={`/blog?page=${currentPage - 1}`}>Previous</Link>
                )}

                {currentPage < totalPages && (
                  <Link href={`/blog?page=${currentPage + 1}`}>Next</Link>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </InnerContent>
      <CTA />
      <Footer />
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const page = parseInt(query.page) || 1;
  const limit = 9;
  const { posts, total } = getPaginatedPostsData(page, limit);

  return {
    props: {
      posts,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
    },
  };
}
