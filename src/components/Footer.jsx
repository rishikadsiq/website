import React from 'react';
import { Container, Row, Col, Nav, Form, Button } from 'react-bootstrap';
import logo from '../logo.png'

function Footer() {
    return (

        <Container>
            <footer className="py-5" style={{
                fontFamily: 'Poppins',
            }} >
                <Row>
                    <Col xs={6} md={2} mb={3}>
                        <h5>Section</h5>
                        <Nav className="flex-column">
                            <Nav.Item className="nav-item mb-2"><Nav.Link href="#" className="nav-link p-0 text-body-secondary">Home</Nav.Link></Nav.Item>
                            <Nav.Item className="nav-item mb-2"><Nav.Link href="#" className="nav-link p-0 text-body-secondary">Features</Nav.Link></Nav.Item>
                            <Nav.Item className="nav-item mb-2"><Nav.Link href="#" className="nav-link p-0 text-body-secondary">Pricing</Nav.Link></Nav.Item>
                            <Nav.Item className="nav-item mb-2"><Nav.Link href="#" className="nav-link p-0 text-body-secondary">FAQs</Nav.Link></Nav.Item>
                            <Nav.Item className="nav-item mb-2"><Nav.Link href="#" className="nav-link p-0 text-body-secondary">About</Nav.Link></Nav.Item>
                        </Nav>
                    </Col>

                    <Col xs={6} md={2} mb={3}>
                        <h5>Section</h5>
                        <Nav className="flex-column">
                            <Nav.Item className="nav-item mb-2"><Nav.Link href="#" className="nav-link p-0 text-body-secondary">Home</Nav.Link></Nav.Item>
                            <Nav.Item className="nav-item mb-2"><Nav.Link href="#" className="nav-link p-0 text-body-secondary">Features</Nav.Link></Nav.Item>
                            <Nav.Item className="nav-item mb-2"><Nav.Link href="#" className="nav-link p-0 text-body-secondary">Pricing</Nav.Link></Nav.Item>
                            <Nav.Item className="nav-item mb-2"><Nav.Link href="#" className="nav-link p-0 text-body-secondary">FAQs</Nav.Link></Nav.Item>
                            <Nav.Item className="nav-item mb-2"><Nav.Link href="#" className="nav-link p-0 text-body-secondary">About</Nav.Link></Nav.Item>
                        </Nav>
                    </Col>

                    <Col xs={6} md={2} mb={3}>
                        <h5>Section</h5>
                        <Nav className="flex-column">
                            <Nav.Item className="nav-item mb-2"><Nav.Link href="#" className="nav-link p-0 text-body-secondary">Home</Nav.Link></Nav.Item>
                            <Nav.Item className="nav-item mb-2"><Nav.Link href="#" className="nav-link p-0 text-body-secondary">Features</Nav.Link></Nav.Item>
                            <Nav.Item className="nav-item mb-2"><Nav.Link href="#" className="nav-link p-0 text-body-secondary">Pricing</Nav.Link></Nav.Item>
                            <Nav.Item className="nav-item mb-2"><Nav.Link href="#" className="nav-link p-0 text-body-secondary">FAQs</Nav.Link></Nav.Item>
                            <Nav.Item className="nav-item mb-2"><Nav.Link href="#" className="nav-link p-0 text-body-secondary">About</Nav.Link></Nav.Item>
                        </Nav>
                    </Col>

                    <Col md={5} offset-md={1} mb={3}>
                        <a href="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
                            <img src={logo} alt="Logo" className="me-2" width="80" height="80" href='/' />
                            <div class="fs-4" href='/'>

                                MediaAmp
                            </div>
                        </a>
                    </Col>
                </Row>

                <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                    <p>Copyright © 2023 MediaAmp, Inc. All rights reserved.</p>
                    <ul className="list-unstyled d-flex">
                        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#twitter"></use></svg></a></li>
                        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#instagram"></use></svg></a></li>
                        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#facebook"></use></svg></a></li>
                    </ul>
                </div>
            </footer>
        </Container>

    );
}

export default Footer;
