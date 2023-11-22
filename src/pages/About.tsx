import { Suspense } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { defer, useLoaderData, Await } from "react-router-dom";
import { Entry } from "contentful";
import { BasicContentPageSkeleton } from "../contentful/ContentTypes";
import Spinner from "react-bootstrap/Spinner";

import ContentfulClient from "../contentful/ContentfulClient";
import ContentPage from "../components/ContentPage";

const AboutPage: React.FC = () => {
  const { entry } = useLoaderData() as {
    entry: Promise<Entry<BasicContentPageSkeleton>>;
  };

  return (
    <Container fluid>
      <Row>
        <Col>
          <Suspense
            fallback={
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            }
          >
            <Await resolve={entry}>
              {(aboutEntry) => <ContentPage entry={aboutEntry} />}
            </Await>
          </Suspense>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;

async function loadContent(): Promise<Entry<BasicContentPageSkeleton>> {
  const contentfulClient = new ContentfulClient();
  const entry = await contentfulClient.getBasicContentPage("About");
  return entry;
}

export function loader() {
  return defer({
    entry: loadContent(),
  });
}
