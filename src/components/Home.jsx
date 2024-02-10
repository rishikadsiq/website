import CarouselComponent from "./CarouselComponent";
import CardComponent from "./CardComponent";
import CenterMessage from "./CenterMessage";
import { Container } from "react-bootstrap";
import Stack from 'react-bootstrap/Stack';
import MeetOurClients from "./MeetOurClients";

const Home = () => {
    return (

        <Container>
            <Stack gap={3}>
                <div>
                    <CarouselComponent />
                </div>
                <div>
                    <CardComponent />
                </div>

                <div>
                    <CenterMessage />
                </div>
                <div>
                    <MeetOurClients />
                </div>
            </Stack>
        </Container>
    )
}

export default Home