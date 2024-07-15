import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const WeAreMusicPartner = () => {

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

      <section className="first_banner_sec">
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
                  <li>
                    <label className="checkbox-container">
                      <input
                        className="custom-checkbox"
                        type="checkbox"
                        name="trackFeedback"
                        checked={checkedItems.trackFeedback}
                        onChange={handleCheckboxChange}
                      />
                      <span className="checkmark"></span>
                    </label>
                    Track feedback
                  </li>
                  <li>
                    <label className="checkbox-container">
                      <input
                        className="custom-checkbox"
                        type="checkbox"
                        name="syncCertification"
                        checked={checkedItems.syncCertification}
                        onChange={handleCheckboxChange}
                      />
                      <span className="checkmark"></span>
                    </label>
                    Sync certification
                  </li>
                  <li>
                    <label className="checkbox-container">
                      <input
                        className="custom-checkbox"
                        type="checkbox"
                        name="distributionToNetworks"
                        checked={checkedItems.distributionToNetworks}
                        onChange={handleCheckboxChange}
                      />
                      <span className="checkmark"></span>
                    </label>
                    Distribution to networks
                  </li>
                  <li>
                    <label className="checkbox-container">
                      <input
                        className="custom-checkbox"
                        type="checkbox"
                        name="careerStrategyCollaboration"
                        checked={checkedItems.careerStrategyCollaboration}
                        onChange={handleCheckboxChange}
                      />
                      <span className="checkmark"></span>
                    </label>
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