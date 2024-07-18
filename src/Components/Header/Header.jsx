import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import SyngLogo from "../img/syng-logo.png";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <header className='header_main'>
        <Container>
          <Row>
            <Col lg={2}>
              <div className="header_logo">
                <img src={SyngLogo} alt="Syng Logo" />
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

      <header className='header_mobile'>
        <Container>
          <Row>
            <Col xs={6}>
              <div className="header_logo">
                <img src={SyngLogo} alt="Syng Logo" />
              </div>
            </Col>
            <Col xs={6} className="text-right">
              <div className="hamburger_icon" onClick={toggleSidebar}>
                <FaBars size={24} />
              </div>
            </Col>
          </Row>
        </Container>
      </header>

      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar_content">
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">How it works</a></li>
            <li><a href="#">Plans</a></li>
            <li><a href="#">Log in</a></li>
            <li><a href="#">Sign up</a></li>
          </ul>
        </div>
      </div>

      <div className={`sidebar_overlay ${sidebarOpen ? 'show' : ''}`} onClick={toggleSidebar}></div>
    </>
  );
};

export default Header;
