import React from 'react';
import { PricingTable, PricingSlot, PricingDetail } from 'react-pricing-table';
import { Row, Col } from 'fluid-react';
import '../less/PricingDisplaylead.css';
import '../less/pricelead.css';


class PricingLead extends React.Component {

    render() {
        return (
            <div className="Container_Pricing_lead">
                <h2>Lead Generation Services</h2>
                <PricingTable highlightColor='green' >
                    <Row>
                        <div className="pricing_Container">
                            <PricingTable highlightColor='green' >
                                <Col>
                                    <PricingSlot onClick={this.submit} buttonText='CONTACT US' title='BASIC' priceText='$249/MONTH'>
                                        <ul>
                                            <PricingDetail> <b>Single Platform</b></PricingDetail>
                                            <PricingDetail> <b>Basic Dashboard</b></PricingDetail>
                                            <PricingDetail> <b> - </b> </PricingDetail>
                                            <PricingDetail> <b> - </b></PricingDetail>
                                            <PricingDetail> <b> - </b></PricingDetail>
                                        </ul>
                                    </PricingSlot>
                                </Col>
                                <PricingSlot highlighted onClick={this.submit} buttonText='CONTACT US' title='ADVANCED' priceText='$499/MONTH'>
                                    <PricingDetail> <b>Multi-Platform</b> </PricingDetail>
                                    <PricingDetail> <b>Advanced Dashboarding</b> </PricingDetail>
                                    <PricingDetail> <b>A/B Testing</b> </PricingDetail>
                                    <PricingDetail> <b>Regular Updates</b></PricingDetail>
                                    <PricingDetail> <b> - </b></PricingDetail>
                                    
                                </PricingSlot>
                                <PricingSlot onClick={this.submit} buttonText='CONTACT US' title='CUSTOM' priceText='$499+/MONTH'>
                                    <PricingDetail> <b>Multi-Platform</b> projects</PricingDetail>
                                    <PricingDetail> <b>Custom Client Dashboarding</b></PricingDetail>
                                    <PricingDetail> <b>A/B Testing</b> </PricingDetail>
                                    <PricingDetail> <b>Regular Updates</b></PricingDetail>
                                    <PricingDetail> <b>Higher Volume Leads</b></PricingDetail>
                                    
                                </PricingSlot>
                            </PricingTable >
                        </div>
                    </Row>
                </PricingTable >
            </div>
        )
    }
}

export default PricingLead;