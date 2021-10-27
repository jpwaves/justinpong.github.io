import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import './welcome.scss';

class Welcome extends Component {
    render() {
        return (
            <Container fluid="md">
                <h1 className="display-1">heya! i'm justin </h1>
                <h2 className="display-6">CS student @ Northeastern University with a passion for web development</h2>
            </Container>
        );
    }
}

export default Welcome;