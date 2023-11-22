import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import { Container, Row, Col } from "react-bootstrap";
import ContentfulClient from "../contentful/ContentfulClient";
//import "../App.css";

const HomePage: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <Container fluid>
      <Row>
        <Col>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
        </Col>
        <Col>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </Col>
      </Row>
      <Row>
        <Col>
          <h1>Vite + React</h1>
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <p>
              Edit <code>src/App.tsx</code> and save to test HMR
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
