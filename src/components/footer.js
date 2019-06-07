import React from 'react';
import { Row, Col } from 'fluid-react';
import '../less/footer.css';

function Footer() {
    return (
        <div>
            <Row>
                <Col>
                    <div className="footer">
                        <p><i class="far fa-copyright"> 2019 Seed Financial Powered By React</i></p>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
export default Footer;