import React, { Component } from 'react';
import { Container, Row, Col } from 'fluid-react';
import '../less/FundingTop.css';
import FundingType from './FundingType';
import FundingInfo from './FundingInfo';
import LoanInfo from './LoanInfo';
import LoanAmount from './LoanAmount';

function Collateral() {
    return (
        <div className="Funding_info-Container">
            <Row>
                <Col>
                    <div className="funding_info">
                        <Col>
                            <FundingType text="What is Collateral Funding?" />
                            <div className="border_container">
                                <div className="border"></div>
                            </div>
                            <FundingInfo text="Collateral financing helps you finance up to 100% of the new or used physical assets you need for your business. Applying for collateral funding is typically a fast and easy way to finance the purchase of most types of real estate or equipment—computers, machinery, vehicles, or whatever else you need." />
                        </Col>
                    </div>

                    <Row>
                        <Col>
                            <div className="terms">
                                <h2><LoanInfo text="Maximum Loan Amount" /></h2>
                                <p><LoanAmount text="Up to 100% of asset value" /></p>
                            </div>
                        </Col>
                        <Col>
                            <div className="terms">
                                <h2><LoanInfo text="Loan Term" /></h2>
                                <p><LoanAmount text="Evaluated based on collateral" /></p>
                            </div>
                        </Col>
                        <Col>
                            <div className="terms">
                                <h2><LoanInfo text="Interest Rate" /></h2>
                                <p><LoanAmount text="8 – 30%" /></p>
                            </div>
                        </Col>
                        <Col>
                            <div className="terms">
                                <h2><LoanInfo text="Speed" /></h2>
                                <p><LoanAmount text="As fast as 2 days" /></p>
                            </div>
                        </Col>
                    </Row>



                </Col>
            </Row>
        </div>
    )
}

export default Collateral;