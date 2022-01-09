import { Container, Nav, Navbar } from 'react-bootstrap';
import './Navigation.scss';

export default function Navigation() {
    return (
        <Navbar expand="lg" fixed="top">
            <Container fluid className="mx-5-sm">
                <Navbar.Brand href="#welcome">Justin Pong</Navbar.Brand>
                <Nav justify className="flex-fill flex-row justify-content-end align-items-center">
                    <Nav.Item className="me-3 flex-grow-0">
                        <Nav.Link href="#about">About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="mx-3 flex-grow-0">
                        <Nav.Link href="#projects">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="mx-3 flex-grow-0">
                        <Nav.Link href="#resume">Resume</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="ms-3 flex-grow-0">
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    );
}