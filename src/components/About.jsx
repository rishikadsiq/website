import React, { useState } from 'react';
import { Nav, Dropdown } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';

const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 });

  const handleMouseEnter = () => {
    if (isDesktopOrLaptop) {
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <Dropdown >
      <Nav.Link
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        href='/about'
        style={{ color: 'white' }}
      >
        About Us

        {isOpen && isDesktopOrLaptop && (
          <Dropdown.Menu show={isOpen} style={{
            textAlign: 'center',
            backgroundColor: 'white', // Change background color
            color: '#fff', // Change text color

          }}>
            <Dropdown.Item href="/portfolio" >About MediaAmp</Dropdown.Item>
            <Dropdown.Item href="/clients" >Our Clients</Dropdown.Item>
            <Dropdown.Item href="/partners" >Our Partners</Dropdown.Item>
            <Dropdown.Item href="/leadership" >Leadership</Dropdown.Item>
            <Dropdown.Item href="/career" >Career</Dropdown.Item>
          </Dropdown.Menu>
        )}
      </Nav.Link>
    </Dropdown>
  );
};

export default About;
