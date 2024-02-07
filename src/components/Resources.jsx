import React, { useState } from 'react';
import { Nav, Dropdown } from 'react-bootstrap';

const Resources = () => {
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
                    href="/resources"
                    style={{ color: 'white', marginLeft: '20px', marginRight: '20px' }}
                >
                    Resources
                </Nav.Link>

                {isOpen && (
                    <Dropdown.Menu
                        show={isOpen}
                        style={{
                            backgroundColor: 'white', // Change background color
                            color: '#fff', // Change text color
                        }}
                    >
                        <Dropdown.Item href="/resources/case-study">Case Study</Dropdown.Item>
                        <Dropdown.Item href="/resources/blog">Blog</Dropdown.Item>
                        <Dropdown.Item href="/resources/news-stories">News & Stories</Dropdown.Item>
                    </Dropdown.Menu>

                )
                }
            </Dropdown >
        </div >
    );
};

export default Resources;