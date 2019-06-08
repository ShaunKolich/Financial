import React, { Component } from 'react';
import { Container, Row, Col } from 'fluid-react';
import '../less/FundingTop.css';
import FundingType from './FundingType';
import FundingInfo from './FundingInfo';
import LoanInfo from './LoanInfo';
import LoanAmount from './LoanAmount';

function Business() {
    return (
        <div className="Funding_info-Container">
            <Row>
                <Col>
                    <div className="funding_info">
                        <Col>
                            <FundingType text="What is a Business Line of Credit?" />
                            <div className="border_container">
                                <div className="border"></div>
                            </div>
                            <FundingInfo text="A business line of credit offers you access to funds to draw from when you need capital. Unlike traditional business loans, you have the option to borrow up to a set amount (typically anywhere from $50k to $500k), repaying only the amount you withdraw, with interest. You can use your business line of credit to deal with cash flow gaps, get additional working capital, or handle emergencies or opportunities." />
                        </Col>
                    </div>

                    <Row>
                        <Col>
                            <div className="terms">
                                <h2><LoanInfo text="Maximum Amount" /></h2>
                                <p><LoanAmount text="$10K – over $2M" /></p>
                            </div>
                        </Col>
                        <Col>
                            <div className="terms">
                                <h2><LoanInfo text="Repayment" /></h2>
                                <p><LoanAmount text="6 months to 5 years" /></p>
                            </div>
                        </Col>
                        <Col>
                            <div className="terms">
                                <h2><LoanInfo text="Interests" /></h2>
                                <p><LoanAmount text="7% to 30%" /></p>
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

export default Business;