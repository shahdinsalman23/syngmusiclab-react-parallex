import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import MusicComposer from "../img/Music_Composer-2.png"

const UploadYourTracks = () => {
  return (
    <>
        <section className="upload_your_tracks">
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="upload_your_track_txt">
                            <h6>Step 1</h6>
                            <h3>upload your tracks.</h3>
                            <p>Submit your demos or masters each month. If your tracks are on point, we’ll pitch them for free, or we will do what it takes to get you sync-ready.</p>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="upload_track_img">
                            <img src={MusicComposer} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default UploadYourTracks