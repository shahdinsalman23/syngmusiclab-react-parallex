import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import FooterLogo from "../img/footer_logo.png"



const Footer = () => {
    return (


        <footer className="footer_main">
            <Container>
                <Row>
                    <Col lg={4}>
                        <div className="footer_flex">
                            <div className="footer_logo">
                                <img src={FooterLogo} alt="" />
                            </div>
                            <div className="footer_link">
                                <ul>
                                    <li><a href="#">About SML</a></li>
                                    <li><a href="#">How it works</a></li>
                                    <li><a href="#">Pricing</a></li>
                                </ul>
                            </div>
                            <div className="footer_link">
                                <ul>
                                    <li><a href="#">FAQ</a></li>
                                    <li><a href="#">Terms</a></li>
                                    <li><a href="#">Contract</a></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col lg={8}>
                        <div className="footer_end">
                            <a href="#">Start Free Trial</a>
                            <a href="#">Supervisor Login</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>

    )
}

export default Footer