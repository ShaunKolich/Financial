import React from 'react';
import { Row, Col } from 'fluid-react';
import '../less/bottomTest.css';


import Sport from "../img/testimonial/Hammersport_Logo_web.jpg";
import Maison from "../img/testimonial/maisonSekilogo_web-e1556226853560.png";
import Mazi from "../img/testimonial/Mazi-Pure-Logo_web.png";

function BottomTest() {
    return (
        <div className="testimonials_container">
            <Row>
                <Col>
                    <div className="feedback_heading">
                        <h2>Client Feedback</h2>
                    </div>
                    <div className="border_bottom"></div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="Testimonial">
                        <img src={Sport} alt=""></img>

                        <p>“SEED offers fantastic services! They are helping us maintain our social media presence & website, props to the marketing team! I recommend their services to other business owners.”</p>
                        <p className="owner">L. May</p>
                        <p className= "company">Hammersport Racing</p>
                    </div>

                </Col>
                <Col>
                    <div className="Testimonial">
                        <img src={Mazi} alt=""></img>

                        <p>“It was enjoyable discussing my various options with Chris, he makes things happen! They were able to beat offers from other cash advance companies I received, so they did offer better terms than competitors!"</p>
                        <p className="owner">R. Rouquart</p>
                        <p className= "company">Mazi Pure</p>
                    </div>
                </Col>
                <Col>
                    <div className="Testimonial">
                        <img src={Maison} alt=""></img>

                        <p className="align">“I contacted SEED to find out what my options were to get some working capital, I didn’t have the best credit score and knew that was gonna be an obstacle, they helped me build my credit before getting me funded”</p>
                        <p className="owner">L. De Bruyn</p>
                        <p className= "company">Maison Seki</p>
                    </div>
                </Col>
            </Row>
        </div>



    )



}

export default BottomTest;