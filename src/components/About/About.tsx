import { Col, Container, Image, Row } from 'react-bootstrap';
import './About.scss';

export default function About() {
    const originStory: string = `
    Hi! My name is Justin Pong and I'm a 2nd year Computer Science student studying at Northeastern University. My passion for web development began when I developed my first application, a Discord bot that uploaded photos of my cats (Eevee and Pushpop).
    \n
    When I showed it to some of my friends who I built it for since they always bugged me for photos of my cats, their admiration and amazement at what I created by my own hands filled my heart with joy. Having experienced the euphoria I get from creating things for others, I decided then and there to go down the path of web development.
    \n
    Here are some of the things I'm doing right now to pursue my dreams of being a web developer:`;

    return (
        <Container fluid="md">
            <Row className="justify-content-center align-items-center">
                <Col lg={8}>
                    <h2>About Me</h2>
                    <p>{originStory}</p>
                    <ul>
                        <li>I'm contributing to the Northeastern Electric Racing club's project management dashboard as a software developer. Our current tech stack includes Bootstrap, Node.js, PostreSQL, React, and TypeScript; I've primarily contributed to the back-end, so I worked with React and TypeScript.</li>
                        <li>On my own, I'm self-teaching myself React and React Bootstrap (v5), which I'm using to build this portfolio website! I enjoy challenging myself to learn how to use frameworks, languages, and technologies I haven't used before whenever I'm building a new app.</li>
                    </ul>
                </Col>
                <Col lg={4} className="m-auto">
                    <Image fluid className="mx-auto" src="https://placekitten.com/200/300" rounded />
                </Col>
            </Row>
        </Container>
    );
}