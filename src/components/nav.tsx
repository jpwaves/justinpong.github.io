import React, { Component } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './nav.scss';

class NavigationBar extends Component {
    render() {
        return (
            <Navbar expand="lg" fixed="top">
                <Container>
                    <Navbar.Brand href="#home">Justin Pong</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#">About</Nav.Link>
                        <Nav.Link href="#">Projects</Nav.Link>
                        <Nav.Link href="#">Resume</Nav.Link>
                        <Nav.Link href="#">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        );
    }
}

export default NavigationBar;