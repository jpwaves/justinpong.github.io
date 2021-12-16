import { Col, Container, Row } from 'react-bootstrap';
import About from '../About/About';
import Navigation from '../Navigation/Navigation';
import Welcome from '../Hero/Welcome';
import './App.scss';

export default function App() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Navigation />
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
