import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SyngLogo from "../img/syng-logo.png"

const Header = () => {
  return (

    <header className='header_main'>
        <Container>
            <Row>
                <Col lg={2}>
                    <div className="header_logo">
                        <img src={SyngLogo} alt="" />
                    </div>
                </Col>
                <Col lg={7}>
                    <div className="header_nav">
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">How it works</a></li>
                            <li><a href="#">Plans</a></li>
                        </ul>
                    </div>
                </Col>
            <Col lg={3}>
                <div className="header_end">
                    <a href="#" className='header_light_btn'>Log in</a>
                    <a href="#" className='header_dark_btn'>Sign up</a>
                </div>
            </Col>
            </Row>
        </Container>
    </header>
    
  )
}

export default Header