import React from 'react';
import { Row, Col } from 'fluid-react';
import '../less/middleContent.css';

function MiddleContent() {
    return (
        <div className="middle_Content_Container">
            <Row>
                <Col>
                    <Row>
                    <div className="middle_info">
                        <h2>Making Growth Possible</h2>
                        <p>Every company needs working capital, whether you need it for inventory, equipment, machines,  marketing or something else, we got you covered.</p>
                        <p>
                            With vast experience helping businesses grow, industry experts on our team and many returning long-term clients, you know you’re in good hands. We strive to outperform all of our competitors by providing you with better service and better results, every single day.
                        </p>
                        </div>
                        </Row>
                </Col>
                <Col>
                    <div className="middle_Img">

                    </div>

                </Col>
            </Row>
        </div>

    )



}
export default MiddleContent;