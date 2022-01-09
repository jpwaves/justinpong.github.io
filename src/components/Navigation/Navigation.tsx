import { Container, Nav, Navbar } from 'react-bootstrap';
import './Navigation.scss';

export default function Navigation() {
    return (
        <Navbar className={'darkBkgd lightText'} expand={'lg'} fixed={'top'}>
            <Container fluid className={'mx-5-sm'}>
                <Navbar.Brand href={'#welcome'}>Justin Pong</Navbar.Brand>
                <Nav justify id={'#navBar'} className={'flex-fill flex-row justify-content-end align-items-center'}>
                    <Nav.Item className={'me-3 flex-grow-0 linkItem'}>
                        <Nav.Link eventKey={'about'} href={'#about'} className={'linkItem'}>About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className={'mx-3 flex-grow-0 linkItem'}>
                        <Nav.Link eventKey={'projects'} href={'#projects'}>Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className={'ms-3 flex-grow-0 linkItem'}>
                        <Nav.Link eventKey={'contact'} href={'#contact'}>Contact</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className={'mx-3 flex-grow-0 linkItem'}>
                        <Nav.Link eventKey={'resume'} href={'#resume'}>Resume</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    );
}