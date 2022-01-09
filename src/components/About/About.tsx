import { Col, Container, Image, Row } from 'react-bootstrap';
import './About.scss';

export default function About() {
    return (
        <Container fluid="md">
            <Row className={"justify-content-center align-items-center"}>
                <Col lg={8}>
                    <h2 className={'fw-bold'}>My TLDR</h2>
                    <p>
                        Hello! My name is Justin Pong and I'm a 2nd year Computer Science student studying at Northeastern University. Originally from San Jose, California, I grew up in the suburbs near the heart of Silicon Valley.
                        <br /><br />
                        I was an avid gamer when I was growing up. Throughout middle school and high school, I played various PC games such as Minecraft and Team Fortress 2 when I wasn't busy with schoolwork. When it came time to decide on what I wanted to do after high school, I naturally gravitated towards computer science and eventually stumbled upon web development. I fell in love with creating apps and websites that others could use after designing my first application, a simple Discord bot that logged photos of my cats.
                        <br /><br />
                        Since I embarked on my journey as a web developer, I've involved myself in different endeavors. In the fall of 2021, I joined the Northeastern Electric Racing club as a software developer to learn more about what its like to work as a web developer. I worked on a team of 3 other developers and contributed to their project management dashboard. During this experience, I learned about different clean and efficient coding practices and improved my skills in React, TypeScript, Bootstrap and Jest. Separately in my free time, I spend time working on various personal projects. My most recent project is this website!
                    </p>
                </Col>
                <Col lg={4} className={"m-auto"}>
                    <Image fluid className={"mx-auto"} src={"https://placekitten.com/200/300"} rounded />
                </Col>
            </Row>
        </Container>
    );
}