import React, { Component } from 'react';
import { Container, Row, Col } from 'fluid-react';
import '../../less/funding.css'


import FundingHeader from '../fundingheader';
import FundingTop from '../FundingTopInfo';
import FundingMiddle from '../FundingMiddle';
import FundingMerchant from '../Merchant';

class Funding extends Component {
    render() {
        return (
            <div>
                <FundingHeader />
                <FundingTop />
                <FundingMiddle />
                <FundingMerchant/>
            </div>

        )

    }


}

export default Funding;