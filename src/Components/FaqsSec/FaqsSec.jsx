import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
import { Col, Container, Row } from 'react-bootstrap'
import GotAQuestion from "../GotAQuestion/GotAQuestion";
import Concept from "../Concept/Concept";
import Footer from "../Footer/Footer";



const data = {
    rows: [
        {
            title: " On certified tracks, who will you be sending the music to",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
        },
        {
            title: "Do you ever offer help with the production of a song?",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            title: "What, if any, guarantees do you make for getting a song placed in a show, film or theatrical trailer?",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            title: "When you certify a track for distribution, do you take any ownership of the song or any portion of fees from the song placement?",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }]
}





const FaqsSec = () => {

    return (
        <>
        <section className="faqs_sec">
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="faqs_head">
                            <h2>Faq</h2>
                        </div>
                    </Col>
                    <Col lg={12}>
                        <div className="faqs_txt">
                            <Faq data={data} />
                        </div>
                    </Col>
                </Row>
            </Container>
            <GotAQuestion/>
            <Concept/>
            <Footer/>
        </section>
         
          </>

    )
}

export default FaqsSec
