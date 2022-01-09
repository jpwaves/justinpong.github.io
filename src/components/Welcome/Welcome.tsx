import { Container } from 'react-bootstrap';
import './Welcome.scss';

export default function Welcome() {
    return (
        <Container className={'welcome-container'} fluid>
            <h1 className={'text-uppercase fw-bold title'}>Hi!<br /> I'm Justin Pong</h1>
            <p className={'fs-4'}>Computer Science student @ Northeastern University</p>
        </Container>
    );
}