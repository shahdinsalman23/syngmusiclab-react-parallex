import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import GetCertifiedImg from "../img/certified_img.png"


const GetCertifFiedRecognized = () => {
  return (
    <section className="upload_your_tracks">
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="upload_your_track_txt">
                            <h6>Step 3</h6>
                            <h3>get certified & recognized.</h3>
                            <p>Tracks that are Sync Music Lab-Certified get distributed to contacts actively looking for music. We actively pitch your tracks to our network of key players in the world of global media.</p>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="upload_track_img">
                            <img src={GetCertifiedImg} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
  )
}

export default GetCertifFiedRecognized