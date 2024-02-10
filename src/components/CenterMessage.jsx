import { Container } from "react-bootstrap";

const CenterMessage = () => {
    return (
        <Container>
            <div style={{
                fontFamily: 'Abril Fatface',
                fontStyle: 'italic',
                textAlign: "center",
                borderTop: "1px solid #ddd",
                borderBottom: "1px solid #ddd",
                // backgroundColor: '#ddd',
                fontSize: "70px",
                color: '#004f83'
            }}>
                Embrace Change
            </div >
        </Container>
    )
}

export default CenterMessage
