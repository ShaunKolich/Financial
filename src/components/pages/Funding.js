import React, { Component } from 'react';
import { Container, Row, Col } from 'fluid-react';
import '../../less/funding.css'


import FundingHeader from '../fundingheader';
import FundingTop from '../FundingTopInfo';

class Funding extends Component {
    render() {
        return (
            <div>
                <FundingHeader />
                <FundingTop/>
            </div>

        )

    }


}

export default Funding;