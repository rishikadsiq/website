import React, { useState, useEffect } from 'react';
import { Card, Col, Row, Container } from 'react-bootstrap';
import BlogData from './data/blogData.json'; // Importing blogData.json


const BlogList = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        // Set the state with the data from the JSON file
        setBlogs(BlogData.blog);
    }, []);

    return (
        <Container>
            <Container style={{ paddingTop: '20px', position: 'fixed', width: '100%', backgroundColor: 'white', zIndex: 1 }}>
                <h1>Blog</h1>
            </Container>
            {blogs.map(blog => (
                <Card key={blog.id} className="mb-3">
                    <Row className="g-0">
                        <Col md={4}>
                            <Card.Img src={blog['img-path']} className="img-fluid rounded-start" alt="..." />
                        </Col>
                        <Col md={8}>
                            <Card.Body>
                           {console.log(blog['img-path'])}
                                <Card.Title>{blog.title}</Card.Title>
                                <Card.Text>
                                    {blog.description}
                                </Card.Text>
                                <Card.Text>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            ))}
        </Container>
    );
}

export default BlogList;