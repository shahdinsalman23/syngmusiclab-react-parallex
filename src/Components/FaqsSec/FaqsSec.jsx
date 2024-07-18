import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
import { Col, Container, Row } from 'react-bootstrap'



const data = {
    rows: [
        {
            title: " On certified tracks, who will you be sending the music to",
            content: "Lorem ipsum dolor sit amet, consectetur "
        },
        {
            title: "Do you ever offer help with the production of a song?",
            content: "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam."
        },
        {
            title: "What, if any, guarantees do you make for getting a song placed in a show, film or theatrical trailer?",
            content: "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc"
        },
        {
            title: "When you certify a track for distribution, do you take any ownership of the song or any portion of fees from the song placement?",
            content: "Lorem ipsum"
        }]
}





const FaqsSec = () => {

    return (

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
        </section>

    )
}

export default FaqsSec
