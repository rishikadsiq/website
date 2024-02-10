import About from './About.jsx';
import Resources from './Resources.jsx';
import { Nav, Navbar, Container } from 'react-bootstrap';
import Logo from '../logo.png';

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
                        src={Logo}
                        width="30"
                        height="30"

                    />{' '}
                    MediaAmp
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ border: '2px solid white' }}>
                    <span className="navbar-toggler-icon" style={{ backgroundColor: 'white' }}></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav" style={{ paddingLeft: '10px' }}>
                    <Nav className="ms-auto" >
                        < Nav.Link href="/" style={{ color: 'white', marginRight: '20px' }}> Home</Nav.Link>
                        <About />
                        <Resources />

                        <Nav.Link href="/contact" style={{ color: 'white', marginLeft: '20px', marginRight: '20px' }}>Contact Us</Nav.Link>
                        <Nav.Link href="/career" style={{ color: 'white', marginLeft: '20px' }}>Career</Nav.Link>
                    </Nav>
                </Navbar.Collapse >

            </Container>
        </Navbar >
    );
}

export default Header;
