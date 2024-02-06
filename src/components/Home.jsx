import CarouselComponent from "./CarouselComponent";
import CardComponent from "./CardComponent";
import CenterMessage from "./CenterMessage";
import { Container } from "react-bootstrap";

const Home = () => {
    return (
        <Container>

        <div>
            <CarouselComponent />
            <CardComponent />
            <CenterMessage />
        </div>
        </Container>
    )
}

export default Home