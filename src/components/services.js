import React, { Component } from 'react';
import { Container, Row, Col } from 'fluid-react';
import '../less/services.css';
import ServicesName from "../components/ServicesName";
import ServicesDescript from "../components/ServicesDescript";

function Services() {
    return (
        <div className="Services_Container">
            <Row>
                <Col>
                    <div className="Services_info">
                        <ServicesName text="Business Consulting" />
                        <ServicesDescript text="A lot of our clients and partners were able to accelerate their growth by investing a part of their funding in consulting services. This investment makes sure your business is operating as smooth as possible, while opening doors for new opportunities for growth and higher revenue. 

                            By working together on different levels of your business, we build a partnership. This helps us to better understand where your business is going in the future and how we can help you with future funding options. To guarantee the best results for unbeatable prices our consultancy services are being provided by a full in-house consulting team at SEED."/>
                    </div>

                </Col>

            </Row>

        </div>
    )
}

export default Services;