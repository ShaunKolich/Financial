import React from 'react';
import { Row, Col } from 'fluid-react';
import '../less/bottomImg.css';

import Leaf from '../img/seed-clipart-transparent-background-7.png';

function BottomImg() {
    return (
        <Row>
            <Col xs="12">
                <div className="bottomImg_container">
                    <section class="bottom_img">
                        <img src={Leaf} alt=""></img>
                    </section>
                    <Row>
                        <Col>
                            <div className="services_info">
                                <h2>SPECIALTY SERVICES</h2>
                                <p>“While we are a financial company at heart, we felt the need to offer businesses even more opportunities to grow. We also offer consultancy services provided by a full in-house team in regards to business development & marketing in addition to financial advice and funding. This is another way we work together with clients to build long-term lasting and successful relationships.” – Christian Estevez</p>
                            </div>
                        </Col>
                    </Row>
                    <div className="services_container">
                        <Col>
                            <div className="services">
                                <h2>Financial Services</h2>
                                <p>We provide businesses with a large variety of loans, cash advances, lines of credit, collateral funding and more. Take a look here at what we offer.</p>
                                <i class="fas fa-globe"></i>
                                <button a href ="#">Learn More!</button>
                            </div>
                        </Col>
                        <Col>
                            <div className="services">
                                <h2>Business Consulting</h2>
                                <p>Growing a business can be done in a variety of ways, get in touch with our in-house experts in business development & marketing to find out how!</p>
                                <i class="fas fa-chart-line"></i>
                                <button a href ="#">Learn More!</button>
                            </div>
                        </Col>
                        <Row>

                        </Row>

                    </div>
                </div>
            </Col>
        </Row>

    )
}

export default BottomImg;