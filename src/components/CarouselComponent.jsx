import Carousel from 'react-bootstrap/Carousel';
import Image1 from './Images/1.jpg';
import Image2 from './Images/2.jpg';
import Image3 from './Images/3.jpg';
import { Container } from 'react-bootstrap';
import { Image } from 'react-bootstrap';



function CarouselComponent() {
    return (
        <Container style={{ paddingTop: '20px' }}>

            <Carousel data-bs-theme="dark" fade={true} >
                <Carousel.Item >
                    <Image
                        className="d-block w-100"
                        src={Image1}
                        alt="First slide"
                        style={{ maxHeight: '500px', width: 'auto' }}
                        fluid={true}
                    />
                    <Carousel.Caption>
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        className="d-block w-100"
                        src={Image2}
                        alt="Second slide"
                        style={{ maxHeight: '500px', width: 'auto' }}
                        fluid={true}
                    />
                    <Carousel.Caption>
                        <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        className="d-block w-100"
                        src={Image3}
                        alt="Third slide"
                        style={{ maxHeight: '500px', width: 'auto' }}
                        fluid={true}
                    />
                    <Carousel.Caption>
                        <h5>Third slide label</h5>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
}

export default CarouselComponent;