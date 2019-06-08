import React, { Component } from 'react';
import { Container, Row, Col } from 'fluid-react';
import '../less/FundingTop.css';
import FundingType from './FundingType';
import FundingInfo from './FundingInfo';
import LoanInfo from './LoanInfo';
import LoanAmount from './LoanAmount';

function FundingTop() {
    return (
        <div className="Funding_info-Container">
            <Row>
                <Col>
                    <div className="funding_info">
                        <Col>
                            <FundingType text="What Are Term Loans?" />
                            <div className = "border_container">
                            <div className="border"></div>
                            </div>
                            <FundingInfo text="A traditional term loan is a set amount of capital that you pay back with scheduled repayments at a fixed interest rate. The word “term” stems from the agreed on set repayment term length, the length of a term loan is usually between 1 & 5 years. Generally speaking business owners will use the proceeds of these term loans to finance a certain, individual investment for their business." />
                        </Col>
                    </div>

                    <Row>
                        <Col>
                            <div className="terms">
                                <h2><LoanInfo text="Maximum Loan Amount" /></h2>
                                <p><LoanAmount text="$25K – $5M" /></p>
                            </div>
                        </Col>
                        <Col>
                            <div className="terms">
                                <h2><LoanInfo text="Loan Terms" /></h2>
                                <p><LoanAmount text="1 to 5 years" /></p>
                            </div>
                        </Col>
                        <Col>
                            <div className="terms">
                                <h2><LoanInfo text="Interest Rates" /></h2>
                                <p><LoanAmount text="starting below 10%" /></p>
                            </div>
                        </Col>
                        <Col>
                            <div className="terms">
                                <h2><LoanInfo text="Speed" /></h2>
                                <p><LoanAmount text="As fast as 24 hours" /></p>
                            </div>
                        </Col>
                    </Row>



                </Col>
            </Row>
        </div>
    )
}

export default FundingTop;