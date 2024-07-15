import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import MusicVideo from '../MusicVideo/MusicVideo'
const ExcellenceNoticed = () => {
  return (

     <>
     <section className="noticed_excellence_sec">
        <Container>
            <Row>
                <Col lg={12}>
                    <div className="noticed_excellence_txt">
                        <h3>For Produce</h3>    
                        <h3>who want to get noticed for their excellence.</h3>
                    </div>
                </Col>
                <Col lg={12}>
                    <div className="noticed_sec_video">
                        <MusicVideo src="https://epicnap.appssols.com/video/Flowers.mp4" />
                    </div>
                </Col>
            </Row>
        </Container>
     </section>
     </>
  )
}

export default ExcellenceNoticed