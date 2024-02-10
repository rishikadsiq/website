import Card1 from './Images/Card1.jpg';
import Card2 from './Images/Card2.jpg';
import Card3 from './Images/Card3.jpg';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Image } from 'react-bootstrap';

function CardComponent() {
    return (
        <Container>
            <div>
                <h2>Services</h2>
            </div>
            <Row xs={1} sm={2} md={3} className="g-3">
                <Col style={{ paddingTop: '10px' }}>
                    <Card className="shadow-sm">
                        <Image className="bd-placeholder-img card-img-top" width="100%" height="225" src={Card1} fluid={true} />
                        <Card.Body>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                            </Card.Text>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">

                                    <Button variant="outline-secondary">Read More</Button>
                                </div>

                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col style={{ paddingTop: '10px' }}>
                    <Card className="shadow-sm">
                        <Image className="bd-placeholder-img card-img-top" width="100%" height="225" src={Card2} fluid={true} />
                        <Card.Body>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                            </Card.Text>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">

                                    <Button variant="outline-secondary">Read More</Button>
                                </div>

                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col style={{ paddingTop: '10px' }}>
                    <Card className="shadow-sm">
                        <Image className="bd-placeholder-img card-img-top" width="100%" height="225" src={Card3} fluid={true} />
                        <Card.Body>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                            </Card.Text>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">

                                    <Button variant="outline-secondary">Read More</Button>
                                </div>

                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default CardComponent;
