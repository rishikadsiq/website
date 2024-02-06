import { Container } from "react-bootstrap";

const CenterMessage = () => {
    return (
        <Container>
            <div style={{
                fontFamily: "Raleway",
                fontOpticalSizing: "auto",
                fontWeight: 900,
                fontStyle: "Normal",
                textAlign: "center",
                borderTop: "2px solid black",
                borderBottom: "2px solid black"
            }}>
                Embrace Change
            </div >
        </Container>
    )
}

export default CenterMessage
