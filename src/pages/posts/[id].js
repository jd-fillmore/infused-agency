import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Container, Row, Col } from "reactstrap";
import { remark } from "remark";
import html from "remark-html";
import Image from "next/image";
import { format } from "date-fns";
import Head from "next/head";
import Nav from "../../../components/Nav/nav";
import InnerHero from "../../../components/innerHero/innerHero";
import InnerContent from "../../../components/innerContent/innerContent";
import CTA from "../../../components/CTA/cta";
import Footer from "../../../components/Footer/footer";

const postsDirectory = path.join(process.cwd(), "posts");

export default function Post({ postData }) {
  return (
    <div>
      <Head>
        <title>{postData.title} | Infused Agency</title>
        <meta name="description" content={postData.excerpt} />
      </Head>
      <Nav />
      <InnerHero
        title={postData.title}
        description={format(new Date(postData.date), "eeee, MMMM d, yyyy")}
      />
      <InnerContent>
        <Container>
          <Row className="blog">
            <Col lg="12">
              {postData.image && (
                <Image
                  className="img-fluid"
                  src={postData.image}
                  alt={`${postData.title}`}
                  layout="responsive" // This makes the image scale with its container
                  width={800} // Aspect ratio reference
                  height={400} // Aspect ratio reference
                />
              )}

              <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </Col>
          </Row>
        </Container>
      </InnerContent>
      <CTA />
      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  const fileNames = fs.readdirSync(postsDirectory);
  const paths = fileNames.map((fileName) => ({
    params: {
      id: fileName.replace(/\.md$/, ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const fullPath = path.join(postsDirectory, `${params.id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  // Convert date to string for serialization
  const date = matterResult.data.date ? matterResult.data.date.toString() : "";

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    props: {
      postData: {
        id: params.id,
        contentHtml,
        ...matterResult.data,
        date, // Ensure date is a string
      },
    },
  };
}
