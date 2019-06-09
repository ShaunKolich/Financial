import React from 'react';
import { PricingTable, PricingSlot, PricingDetail } from 'react-pricing-table';
import { Row, Col } from 'fluid-react';
import '../less/PricingDisplay.css';
import '../less/price.css';

class PricingDisplay extends React.Component {

    render() {
        return (
            <div className="Container_Pricing">
                <h2>Web Services</h2>
                <PricingTable highlightColor='green' >
                    <Row>
                        <div className="pricing_Container">
                            <PricingTable highlightColor='green' >
                                <Col>
                                    <PricingSlot onClick={this.submit} buttonText='TRY IT FREE' title='FREE' priceText='$0/month'>
                                        <ul>
                                            <PricingDetail> <b>15</b> projects</PricingDetail>
                                            <PricingDetail> <b>5 GB</b> storage</PricingDetail>
                                            <PricingDetail> <b>5</b> users</PricingDetail>
                                            <PricingDetail strikethrough> <b>Time tracking</b></PricingDetail>
                                        </ul>
                                    </PricingSlot>
                                </Col>
                                <PricingSlot highlighted onClick={this.submit} buttonText='SIGN UP' title='BASIC' priceText='$24/month'>
                                    <PricingDetail> <b>35</b> projects</PricingDetail>
                                    <PricingDetail> <b>15 GB</b> storage</PricingDetail>
                                    <PricingDetail> <b>Unlimited</b> users</PricingDetail>
                                    <PricingDetail> <b>Time tracking</b></PricingDetail>
                                </PricingSlot>
                                <PricingSlot onClick={this.submit} buttonText='SIGN UP' title='PROFESSIONAL' priceText='$99/month'>
                                    <PricingDetail> <b>100</b> projects</PricingDetail>
                                    <PricingDetail> <b>30 GB</b> storage</PricingDetail>
                                    <PricingDetail> <b>Unlimited</b> users</PricingDetail>
                                    <PricingDetail> <b>Time tracking</b></PricingDetail>
                                </PricingSlot>
                                <PricingSlot onClick={this.submit} buttonText='SIGN UP' title='ENTERPRISE' priceText='$200/month'>
                                    <PricingDetail> <b>Unlimited</b> projects</PricingDetail>
                                    <PricingDetail> <b>75 GB</b> storage</PricingDetail>
                                    <PricingDetail> <b>Unlimited</b> users</PricingDetail>
                                    <PricingDetail> <b>Time tracking</b></PricingDetail>
                                </PricingSlot>
                            </PricingTable >
                        </div>
                    </Row>
                </PricingTable >
            </div>
        )
    }
}

export default PricingDisplay;