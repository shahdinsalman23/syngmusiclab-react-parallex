import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const GotAQuestion = () => {
    return (

        <section className="got_question_sec">
            <Container>
                <Row className='justify-content-end'>
                    <Col lg={5}>
                        <div className="got_question_txtbox">
                            <div className="got_question_txt">
                                <h4>got a question?</h4>
                                <p>Send us a message and we will respond shortly.</p>
                            </div>
                            <div className="got_question_form">
                                <form action="">
                                    <div className="got_input_field">
                                        <label htmlFor="">Your Name</label>
                                        <input type="text" name="" id="" />
                                    </div>
                                    <div className="got_input_field">
                                        <label htmlFor="">Your Email</label>
                                        <input type="email" name="" id="" />
                                    </div>
                                    <div className="got_input_field">
                                        <label htmlFor="">Your Message</label>
                                        <textarea name="" id=""></textarea>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>



    )
}

export default GotAQuestion