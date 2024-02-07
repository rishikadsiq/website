import React from 'react';
import { Card, Col, Row, Container } from 'react-bootstrap';
import Card1 from './Images/Card1.jpg'


const MyCard = () => {
    return (
        <Container>
            <div style={{ paddingTop: '20px' }}>
                <h1>Blog</h1>
            </div>
            <Card className="mb-3" >
                <Row className="g-0">
                    <Col md={4}>
                        <Card.Img src={Card1} className="img-fluid rounded-start" alt="..." />
                    </Col>
                    <Col md={8}>
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusamus aliquam laborum minima mollitia officiis voluptatibus, labore nisi possimus voluptas, asperiores voluptates eveniet incidunt nam? Adipisci facere saepe in velit?
                            </Card.Text>
                            <Card.Text>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </Container>
    );
}

export default MyCard;
