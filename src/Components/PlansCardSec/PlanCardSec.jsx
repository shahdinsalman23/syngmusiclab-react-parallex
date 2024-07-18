import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PricingCard from '../PricingCard/PricingCard';

const PlanCardSec = () => {

    const plans = [
        {
          title: 'Trial',
          price: 12,
          features: [
            'Submit 1 track/month',
            'SML critique',
            '2 video track consultations',
          ],
        },
        {
          title: 'Pro',
          price: 49,
          features: [
            'Up to 5 tracks/month',
            'SML critique',
            'Expert and music supervisor critiques',
            '2 video consultations per track (max 10/month)',
            'Sync fee negotiation consultation',
            'Live critiques by sync experts',
            'SML certification, distribution, and pitching',
          ],
          bestValue: true,
        },
        {
          title: 'Sync Partner',
          price: 299,
          originalPrice: 399,
          features: [
            '20 tracks/month',
            'SML and expert critiques',
            'Unlimited video consultations',
            'Production services for high-potential tracks',
            'Sync fee negotiation consultation',
            'Live interactive critiques',
            'Guaranteed SML certification for distribution and pitching',
          ],
        },
      ];
    

  return (
    <>
        <section className="right_plan_sec">
            <Container>
                <Row>
                    <Col lg={8}>
                        <div className="right_plan_txt">
                            <h4>We’ve got the right plan for you.</h4>

                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <h2 className="text-center mb-5">We've got the right plan for you.</h2>
                    {plans.map((plan, index) => (
                        <Col key={index} lg={4} className="mb-4">
                        <PricingCard {...plan} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    </>
  )
}

export default PlanCardSec
