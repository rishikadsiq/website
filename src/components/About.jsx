import React, { useState } from 'react';
import { Nav, Dropdown } from 'react-bootstrap';
import './About.css'; // Import your CSS file
import { Link } from 'react-router-dom';

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <Nav>
      <Dropdown show={isOpen} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} as={Nav.Item}>
        <Dropdown.Toggle as={CustomNavLink} id="contact-us-dropdown">
          <Link to='about' className="link-unstyled text-decoration-none">
          About Us
          </Link>
        </Dropdown.Toggle>
        <Dropdown.Menu show={isOpen} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} as={Nav.Item}>
          <Dropdown.Item href="#action/1">About MediaAmp</Dropdown.Item>
          <Dropdown.Item href="#action/2">Our Clients</Dropdown.Item>
          <Dropdown.Item href="#action/3">Our Partners</Dropdown.Item>
          <Dropdown.Item href="#action/4">Leadership</Dropdown.Item>
          <Dropdown.Item href="#action/5">Career</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Nav>
  );
}

const CustomNavLink = React.forwardRef(({ children, onClick }, ref) => {
  return (
    <span
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      onMouseEnter={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      className="nav-link no-arrow" 
    >
      {children}
    </span>
  );
});

export default About;
