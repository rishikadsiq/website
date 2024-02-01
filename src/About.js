import React, { useState } from 'react';
import { NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const About = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  return (
    <NavDropdown
      title="About"
      id="about-dropdown"
      show={showDropdown}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <NavDropdown.Item>
        <Link to="/about">About Us</Link>
      </NavDropdown.Item>
      <NavDropdown.Item href="#action/3.2">Mission</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.3">Vision</NavDropdown.Item>
    </NavDropdown>
  );
};

export default About;
