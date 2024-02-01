import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './logo.png';
import About from './components/About.jsx';

function Header() {

    return (
        <Container>
            <Navbar bg="light" data-bs-theme="light" expand="lg" className="bg-body-tertiary" sticky="top">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        MediaAmp
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <About />
                            <Nav.Link href="/Resources.js">Resources</Nav.Link>
                            <Nav.Link href="/Contact Us" >Contact Us</Nav.Link>
                            <Nav.Link href="/Career">Career</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </Container>
    );
}

export default Header;