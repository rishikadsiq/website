import React from 'react'
import { Container } from 'react-bootstrap'
import backgroundImage from './Images/background-meetourclients.png';
import Dummy from './Images/dummy-logo.png'
import { Image } from 'react-bootstrap';

const MeetOurClients = () => {
    return (
        <Container //style={{
            // backgroundImage: `url(${backgroundImage})`,
            // backgroundSize: 'cover',
            // backgroundRepeat: 'no-repeat',
            // backgroundPosition: 'center'
            //  }} 
            fluid={true} >
            <div style={{
                fontFamily: 'Poppins',
                textAlign: 'center',
                fontSize: '54px',
                paddingBottom: '10px',
            }}>
                <h2>
                    <strong>
                        Meet Our Clients
                    </strong>
                </h2>
            </div>
            <Image src={Dummy} fluid={true} />



        </Container >
    )
}

export default MeetOurClients