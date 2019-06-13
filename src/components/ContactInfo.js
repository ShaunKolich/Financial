import React from 'react';
import { Container, Row, Col } from 'fluid-react';
import "../less/ContactInfo.css";

function ContactInfo() {
    return (
        <div className = "Contact_Info_Container">
            <Row>
                <Col>
                    <div className="Contact_info">
                        <i className="fas fa-home"></i>
                        <h2>Address</h2>
                        <p>Seed Financial LLC</p>
                        <p>111 North Orange Ave</p>
                        <p>Orlando, FL 32801</p>
                        <button className="contact_button">
                        Get In Touch!
                        </button>
                    
                    </div>
                </Col>
                
                <Col>
                    <div className="Contact_info">
                        <i className="fas fa-phone-alt"></i>
                        <h2>Phone</h2>
                        <p>Main Office: 321-352-6201</p>
                        <p>Marketing: 407-473-0445</p>
                        <p>Development: 407-486-8060</p>
                        <button className="contact_button">
                        Click to Call Now!
                        </button>
                    </div>
                </Col>
                <Col>
                    <div className="Contact_info">
                        <i className="far fa-envelope"></i>
                        <h2>Email</h2>
                        <p>Underwriting & Marketing: </p>
                        <p>cestevez@seedfinancial.org</p>
                        <p>marketing@seedfinancial.org</p>
                        <button className="contact_button">
                        Click to Email Now!
                        </button>
                    </div>
                </Col>
            </Row>
        </div>

    )
}

export default ContactInfo;