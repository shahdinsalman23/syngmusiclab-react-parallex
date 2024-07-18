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
                  <input type="checkbox" class="ui-checkbox" />
                    Track feedback
                  </li>
                  <li>
                  <input type="checkbox" class="ui-checkbox"/>
                    Sync certification
                  </li>
                  <li>
                  <input type="checkbox" class="ui-checkbox"/>
                    Distribution to networks
                  </li>
                  <li>
                  <input type="checkbox" class="ui-checkbox"/>
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