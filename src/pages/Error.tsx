import { isRouteErrorResponse, useRouteError } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";
import { Container, Col } from "react-bootstrap";

function ErrorPage() {
  const error = useRouteError();

  let title = "An error occurred!";
  let message = "Something went wrong!";

  if (isRouteErrorResponse(error)) {
    if (error.status === 500) {
      message = error.data.message;
    }

    if (error.status === 404) {
      title = "Not found!";
      message = "Could not find resource or page.";
    }
  }

  return (
    <>
      <MainNavigation />
      <Container fluid>
        <Col>
          <h1>{title}</h1>
          <p>{message}</p>
        </Col>
      </Container>
    </>
  );
}

export default ErrorPage;
