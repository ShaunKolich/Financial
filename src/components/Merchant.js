import React, { Component } from 'react';
import { Container, Row, Col } from 'fluid-react';
import '../less/FundingTop.css';
import FundingType from './FundingType';
import FundingInfo from './FundingInfo';
import LoanInfo from './LoanInfo';
import LoanAmount from './LoanAmount';

function FundingMerchant() {
    return (
        <div className="Funding_info-Container">
            <Row>
                <Col>
                    <div className="funding_info">
                        <Col>
                            <FundingType text="What is a Merchant Cash Advance?" />
                            <FundingInfo text="MCA or Merchant Cash Advances are not technically loans. With an MCA, a private company offers you cash in exchange for a percentage of your (future) daily credit card and debit card sales, plus a set fee. These cash advances can be an effective and quick ways to get your business fast cash with no need for collateral (regardless of credit score!)." />
                        </Col>
                    </div>

                    <Row>
                        <Col>
                            <div className="terms">
                                <h2><LoanInfo text="Maximum Advance Amount" /></h2>
                                <p><LoanAmount text="$2.5K – $250K" /></p>
                            </div>
                        </Col>
                        <Col>
                            <div className="terms">
                                <h2><LoanInfo text="Repayment" /></h2>
                                <p><LoanAmount text="Paid daily" /></p>
                            </div>
                        </Col>
                        <Col>
                            <div className="terms">
                                <h2><LoanInfo text="Factor Fee" /></h2>
                                <p><LoanAmount text="1.10 – 1.45" /></p>
                            </div>
                        </Col>
                        <Col>
                            <div className="terms">
                                <h2><LoanInfo text="Time To Fund" /></h2>
                                <p><LoanAmount text="As fast as 2 days" /></p>
                            </div>
                        </Col>
                    </Row>



                </Col>
            </Row>
        </div>
    )
}

export default FundingMerchant;