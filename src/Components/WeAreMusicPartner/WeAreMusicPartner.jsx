import React, { useState,useEffect  } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AOS from 'aos';
import 'aos/dist/aos.css';

const WeAreMusicPartner = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [checkedItems, setCheckedItems] = useState({
    trackFeedback: true,
    syncCertification: true,
    distributionToNetworks: true,
    careerStrategyCollaboration: true,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems({ ...checkedItems, [name]: checked });
  };

  



  return (
    <>


      <section className="first_banner_sec" id="weAreMusicPartner">
        <Container>
          <Row className='justify-content-center'>
            < Col lg={8}>
              <div className="first_banner_txt">
                <h2>We Are Your Music Partners</h2>
                <p>We work with you from day one to guarantee your work reaches its highest potential in the music industry.</p>
                <a href="#" >Start Free Trial</a>
              </div>
            </Col>
            <Col lg={12}>
              <div className="selection_box">
                <ul>
                  <li data-aos="fade-up"  data-aos-delay="00">
                    <input type="checkbox" className="ui-checkbox" />
                    Track feedback
                  </li>
                  <li data-aos="fade-up"  data-aos-delay="300">
                    <input type="checkbox" className="ui-checkbox" />
                    Sync certification
                  </li>
                  <li data-aos="fade-up"  data-aos-delay="500">
                    <input type="checkbox" className="ui-checkbox" />
                    Distribution to networks
                  </li>
                  <li data-aos="fade-up"  data-aos-delay="700">
                    <input type="checkbox" className="ui-checkbox" />
                    Career strategy collaboration
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

    </>
  )
}

export default WeAreMusicPartner