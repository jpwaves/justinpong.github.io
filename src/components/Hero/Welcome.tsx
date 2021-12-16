import { Container } from 'react-bootstrap';
import './Welcome.scss';

export default function Welcome() {
    return (
        <Container fluid="md">
            <h1 className="display-1">heya! i'm justin </h1>
            <h2 className="display-6">CS student @ Northeastern University with a passion for web development</h2>
        </Container>
    );
}