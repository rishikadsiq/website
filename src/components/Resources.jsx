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
        <Dropdown>
            <Nav.Link onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href='resources' style={{ color: 'white' }}>
                Resources

                {isOpen && (
                    <div>
                        <Dropdown.Menu show={isOpen}>
                            <Dropdown.Item href="/case-study">Case Study</Dropdown.Item>
                            <Dropdown.Item href="/blog">Blog</Dropdown.Item>
                            <Dropdown.Item href="/news-stories">News & Stories</Dropdown.Item>
                        </Dropdown.Menu>
                    </div>
                )}
            </Nav.Link>
        </Dropdown>
    );
};

export default Resources;