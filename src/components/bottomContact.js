import React from 'react';
import { Row, Col } from 'fluid-react';
import '../less/bottomContact.css';

function BottomContact() {
    return (
        <div className="bottom_Contact_cont">
            <Row>
                <div className= "bottom_contact_info">
                <Col>
                    <h2>Speak with a specialist right now!</h2>
                </Col>
                <Col>
                    <p>We have an entire team of specialists at your disposal, get in touch now and find out how we’re able to help you grow your business!</p>
                </Col>
                <Col>
                    <button className ="contact_btn">Contact Us</button>
                </Col>
               </div>
            </Row>
        </div>
    )

}

export default BottomContact;