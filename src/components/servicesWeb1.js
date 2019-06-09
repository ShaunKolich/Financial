import React, { Component } from 'react';
import { Container, Row, Col } from 'fluid-react';
import '../less/services.css';
import ServicesName from "../components/ServicesName";
import ServicesDescript from "../components/ServicesDescript";

function ServicesWeb() {
    return (
        <div className="Services_Container">
            <Row>
                <Col>
                    <div className="Services_info">
                        <ServicesName text="Web Development Services
" />
                        <ServicesDescript text="If your website has not recently been updated, does not look great or if you need an entirely new website built, we can help! Our Marketing Department includes a web development team that specializes in building, maintaining and reworking websites. Do not underestimate the importance of your online presence! 

                        Depending on what we decide on together with you, the project will vary in price, however we wanted to provide you with some pricing as a guideline for an average web development project."/>
                    </div>

                </Col>

            </Row>

        </div>
    )
}

export default ServicesWeb;