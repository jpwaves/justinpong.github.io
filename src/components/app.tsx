import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import About from './about';
import './app.scss';
import NavigationBar from './nav';
import Welcome from './welcome';

function App() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <NavigationBar />
        </Col>
      </Row>
      <Row id="welcome" className="vh-100 justify-content-center align-items-center">
        <Col>
          <Welcome />
        </Col>
      </Row>
      <Row id="about" className="vh-100 justify-content-center align-items-center">
        <Col lg={6}>
          <About />
        </Col>
      </Row>
      <Row id="projects" className="vh-100 justify-content-center align-items-center">
        <Col>
          // insert projects carousel
        </Col>
      </Row>
      <Row id="contact" className="vh-100 justify-content-center align-items-center">
        <Col>
          // insert contact info
        </Col>
      </Row>
    </Container>
  );
}

export default App;
