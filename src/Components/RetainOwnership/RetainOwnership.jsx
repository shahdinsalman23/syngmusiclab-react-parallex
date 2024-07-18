import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import LogoMarque from '../LogoMarque/LogoMarque'
import pngwing from "../img/pngwing_img.png"
import netflix from "../img/blacknetflix.png"
import universal from "../img/NBCU_Careers_Logo_Purple.png"
import FXnetwork from '../img/pngegg.png'
import blackhulu from "../img/blackhulu.png"
import paramount from "../img/blackparamount.png"
import amazonstudio from "../img/AMZN_STUDIOS.png"

const RetainOwnership = () => {


    const logos = [
        pngwing, 
        netflix,
        universal,
        FXnetwork,
        blackhulu,
        paramount,
        amazonstudio
      ];


  return (
    <section className="retain_ownership_sec">
        <Container>
            <Row className="justify-content-center">
                <Col lg={10}>
                    <div className="retain_owner_txt">
                        <h2>Retain 100% ownership of your music.</h2>
                        <p>Our network of producers and music supervisors span all forms of media including these major players and many more.</p>
                    </div>
                </Col>
            </Row>
        </Container>
        <LogoMarque logos={logos}/> 
    </section>
  )
}

export default RetainOwnership