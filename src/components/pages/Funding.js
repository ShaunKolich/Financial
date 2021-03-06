import React, { Component } from 'react';
import { Container, Row, Col } from 'fluid-react';
import '../../less/funding.css'


import FundingHeader from '../fundingheader';
import FundingTop from '../FundingTopInfo';
import FundingMiddle from '../FundingMiddle';
import FundingMerchant from '../Merchant';
import Business from "../Business";
import Collateral from "../Collateral";
import BottomContact from "../bottomContact";
import Footer from "../footer";

class Funding extends Component {
    render() {
        return (
            <div>
                <FundingHeader />
                <FundingTop />
                <FundingMiddle />
                <FundingMerchant />
                <Business />
                <Collateral />
                <BottomContact />
                <Footer />
            </div>

        )

    }


}

export default Funding;