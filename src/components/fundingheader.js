import React from 'react';
import { Row, Col } from 'fluid-react';
import '../less/fundingheader.css';

function FundingHeader() {
    return (
        <div>
            <Row>
                <Col>
                    <div className='funding_container'>
                        <Col xs="8">
                            <section className="funding_box_container">
                                <div className="funding_box">
                                    <h2>Funding Your Business Needs</h2>
                                    <p><i class="fas fa-check"></i> Term Loans</p>
                                    <p><i class="fas fa-check"></i> Factoring Loans</p>
                                    <p><i class="fas fa-check"></i> Cash Advances</p>
                                    <p><i class="fas fa-check"></i> Lines Of Credit</p>
                                    <p><i class="fas fa-check"></i> Collateral Funding</p>
                                </div>

                            </section>
                        </Col>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default FundingHeader;