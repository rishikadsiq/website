import logo from './logo.png';
import About from './components/About.jsx';
import Resources from './components/Resources.jsx';
import { Nav, Navbar, Container } from 'react-bootstrap';

function Header() {
    return (
        <Navbar sticky="top" expand="lg" style={{
            fontFamily: 'Poppins',
            backgroundColor: '#0C2D57',

        }}>
            <Container >

                <Navbar.Brand href="/" style={{ color: 'white' }} >
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"

                    />{' '}
                    MediaAmp
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ border: '2px solid white' }}>
                    <span className="navbar-toggler-icon" style={{ backgroundColor: 'white' }}></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav" style={{ paddingLeft: '10px' }}>
                    <Nav style={{
                        display: 'flex', justifyContent: 'space-evenly', width: '100% '
                    }} >
                        < Nav.Link href="/" style={{ color: 'white' }}> Home</Nav.Link>
                        <About />
                        <Resources />
                        <Nav.Link href="/contact" style={{ color: 'white' }}>Contact Us</Nav.Link>
                        <Nav.Link href="/career" style={{ color: 'white' }}>Career</Nav.Link>
                    </Nav>
                </Navbar.Collapse >

            </Container>
        </Navbar >
    );
}

export default Header;
