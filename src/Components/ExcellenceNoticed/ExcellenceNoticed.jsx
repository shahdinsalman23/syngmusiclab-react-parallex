import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Typewriter from 'react-typewriter-effect';
import MusicVideo from '../MusicVideo/MusicVideo';
import { Parallax } from 'react-parallax';

const NoticedExcellenceSection = () => {
  return (

    <section className="noticed_excellence_sec" id="excellenceNoticed" style={{ width: "80%" }}>
      <Container>
        <Row>
          <Col lg={12}>
            <div className="noticed_excellence_txt">
              <Typewriter
                startDelay={100}
                cursorColor="black"
                multiText={[
                  'For composers',
                  'For artists',
                  'For songwriters',
                ]}
                multiTextDelay={2000}
                typeSpeed={100}
                deleteSpeed={50}
                multiTextLoop
              />
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


  );
};

export default NoticedExcellenceSection;
