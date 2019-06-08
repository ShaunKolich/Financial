import React, { Component } from 'react';
import { Container, Row, Col } from 'fluid-react';
import '../less/FundingTop.css';
import FundingType from './FundingType';
import FundingInfo from './FundingInfo';
import LoanInfo from './LoanInfo';
import LoanAmount from './LoanAmount';

function FundingMiddle() {
    return (
        <div className="Funding_info-Container">
            <Row>
                <Col>
                    <div className="funding_info">
                        <Col>
                            <FundingType text="What Are Factoring Loans?" />
                            <div className="border_container">
                                <div className="border"></div>
                            </div>
                            <FundingInfo text="Factoring is a financial transaction where a “factoring company” buys your open invoices. These invoices are ones for which you usually receive payment for within 24 hours. You can choose yourself which invoices to sell to the factoring company and you will in exchange receive an advance on each of them. Some of these factoring companies can advance up to 97% of the total amount of the invoice. Keep in mind that since the factoring company will then own these invoices, they will be responsible for collecting the payment from the customer the invoice has veep made out to." />
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
                                <h2><LoanInfo text="Terms" /></h2>
                                <p><LoanAmount text="Evaulated 30 day periods" /></p>
                            </div>
                        </Col>
                        <Col>
                            <div className="terms">
                                <h2><LoanInfo text="Factoring Rates" /></h2>
                                <p><LoanAmount text="1.15% to 4.5% per 30 days" /></p>
                            </div>
                        </Col>
                        <Col>
                            <div className="terms">
                                <h2><LoanInfo text="Speed" /></h2>
                                <p><LoanAmount text="Often within 24 hours" /></p>
                            </div>
                        </Col>
                    </Row>



                </Col>
            </Row>
        </div>
    )
}

export default FundingMiddle;