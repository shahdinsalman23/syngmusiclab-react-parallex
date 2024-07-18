import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const PlanCard = () => {
  return (
    <section className="plan_card_sec">
        <Container>
            <Row>
                <Col lg={4}>
                    <div className="plan_card_box">
                        <div className="plan_card_txt">
                            <h6>Trial</h6>
                            <h3>$12 <span>/month</span></h3>
                        </div>
                        <div className="plan_card_selection">
                            <ul>
                                <li><input type="checkbox" name="" id="" /> Submit 1 track/month</li>
                                <li><input type="checkbox" name="" id="" /> SML critique</li>
                                <li><input type="checkbox" name="" id="" /> 2 video track consultations</li>
                            </ul>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default PlanCard