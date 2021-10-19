import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../logo.svg';
import './app.scss';
import NavigationBar from './nav';

function App() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <NavigationBar />
        </Col>
      </Row>
      <Row>
        <Col>
          // insert welcome
        </Col>
      </Row>
      <Row>
        <Col>
          // insert about me
        </Col>
      </Row>
      <Row>
        <Col>
          // insert projects carousel
        </Col>
      </Row>
      <Row>
        <Col>
          // insert contact info
        </Col>
      </Row>
    </Container>
  );
}

export default App;
