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
                                    <PricingSlot onClick={this.submit} buttonText='CONTACT US' title='BASIC' priceText='$949'style>
                                        <ul>
                                            <PricingDetail> <b>Website Domain (included if under $49.00)</b></PricingDetail>
                                            <PricingDetail> <b>Web Hosting</b> Storage</PricingDetail>
                                            <PricingDetail> <b>Website Construction</b></PricingDetail>
                                            <PricingDetail> <b>Branding & Media</b></PricingDetail>
                                            <PricingDetail> <b>Written Content</b></PricingDetail>
                                        </ul>
                                    </PricingSlot>
                                </Col>
                                <PricingSlot highlighted onClick={this.submit} buttonText='CONTACT US' title='ADVANCED' priceText='$1999'>
                                    <PricingDetail> <b>Website Domain (included if under $99.00)</b> </PricingDetail>
                                    <PricingDetail> <b>Web Hosting</b> Storage</PricingDetail>
                                    <PricingDetail> <b>Website Construction</b> </PricingDetail>
                                    <PricingDetail> <b>Branding & Media </b></PricingDetail>
                                    <PricingDetail> <b>Written Content</b></PricingDetail>
                                    <PricingDetail> <b>Custom Coding</b></PricingDetail>
                                </PricingSlot>
                                <PricingSlot onClick={this.submit} buttonText='CONTACT US' title='REACT SITE' priceText='$2499'>
                                    <PricingDetail> <b>Website Domain (included if under $199.00)</b> </PricingDetail>
                                    <PricingDetail> <b>Web Hosting</b> Storage</PricingDetail>
                                    <PricingDetail> <b>Website Construction</b> </PricingDetail>
                                    <PricingDetail> <b>Branding & Media </b></PricingDetail>
                                    <PricingDetail> <b>Written Content</b></PricingDetail>
                                    <PricingDetail> <b>Custom Coding</b></PricingDetail>
                                </PricingSlot>
                                <PricingSlot onClick={this.submit} buttonText='CONTACT US' title='ADVANCED REACT' priceText='CONTACT US FOR QUOTE'>
                                    <PricingDetail> <b>Website Domain (included if under $199.00)</b> </PricingDetail>
                                    <PricingDetail> <b>Web Hosting</b> Storage</PricingDetail>
                                    <PricingDetail> <b>Website Construction</b> </PricingDetail>
                                    <PricingDetail> <b>Branding & Media </b></PricingDetail>
                                    <PricingDetail> <b>Written Content</b></PricingDetail>
                                    <PricingDetail> <b>Custom Coding</b></PricingDetail>
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