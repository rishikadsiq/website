import React, { useState } from 'react';
import { Nav, Dropdown } from 'react-bootstrap';

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ display: 'inline-block' }} // Adjust this style as needed
    >
      <Dropdown>
        <Nav.Link
          href="/about"
          style={{ color: 'white', marginLeft: '20px', marginRight: '20px' }}
        >
          About Us
        </Nav.Link>

        {isOpen && (
          <Dropdown.Menu
            show={isOpen}
            style={{
              
              backgroundColor: 'white', // Change background color
              color: '#fff', // Change text color
            }}
          >
            <Dropdown.Item href="/portfolio">About MediaAmp</Dropdown.Item>
            <Dropdown.Item href="/clients">Our Clients</Dropdown.Item>
            <Dropdown.Item href="/partners">Our Partners</Dropdown.Item>
            <Dropdown.Item href="/leadership">Leadership</Dropdown.Item>
            <Dropdown.Item href="/career">Career</Dropdown.Item>
          </Dropdown.Menu>
        )}
      </Dropdown>
    </div>
  );
};

export default About;
