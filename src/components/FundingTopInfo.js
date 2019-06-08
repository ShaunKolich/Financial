import React, { Component } from 'react';
import { Container, Row, Col } from 'fluid-react';
import '../less/FundingTop.css';
import FundingType from './FundingType';
import FundingInfo from './FundingInfo';

function FundingTop() {
    return (
        <div className="Funding_info-Container">
            <Row>
                <Col>
                    <div className="funding_info">
                        <Col>
                            <FundingType text="What Are Term Loans?" />
                        </Col>
                        <Col>
                            <FundingInfo text ="A traditional term loan is a set amount of capital that you pay back with scheduled repayments at a fixed interest rate. The word “term” stems from the agreed on set repayment term length, the length of a term loan is usually between 1 & 5 years. Generally speaking business owners will use the proceeds of these term loans to finance a certain, individual investment for their business."/>
                        </Col>
                    </div>
                    <Row>
                        <div className="Terms_container">
                            <Col>
                                <div className="terms">
                                    <h2></h2>
                                    <p></p>
                                </div>
                            </Col>
                            <Col>
                                <div className="terms">
                                    <h2></h2>
                                    <p></p>
                                </div>
                            </Col>
                            <Col>
                                <div className="terms">
                                    <h2></h2>
                                    <p></p>
                                </div>
                            </Col>
                            <Col>
                                <div className="terms">
                                    <h2></h2>
                                    <p></p>
                                </div>
                            </Col>

                        </div>
                    </Row>

                </Col>
            </Row>
        </div>
    )
}

export default FundingTop;