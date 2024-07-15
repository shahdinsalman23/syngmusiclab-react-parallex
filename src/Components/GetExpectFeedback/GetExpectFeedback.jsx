import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ExpertFeedBack from "../img/feedback_img.png"

const GetExpectFeedback = () => {
    return (
        <section className="upload_your_tracks">
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="upload_your_track_txt">
                            <h6>Step 2</h6>
                            <h3>get expert feedback.</h3>
                            <p>Receive a thorough review and a full, detailed evaluation from our music and sound experts. We’ll give you specific notes from our producers and music supervisors on lyrical content, production quality and arrangement.</p>
                            <div className="feedback_checkbox">
                                <ul>
                                    <li><input type="checkbox" name="" id="" /> 48 hour response guarantee</li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="upload_track_img">
                            <img src={ExpertFeedBack} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default GetExpectFeedback