import React, { Component } from 'react';
import { Row, Col } from 'fluid-react';
import '../../less/consulting.css'
import '../consultingImg';
import ConsultingImg from '../consultingImg';
import ConsultingImgWeb from '../consultingImgWeb';
import Services from '../services';
import ServicesWeb from '../servicesWeb';
import PricingDisplay from '../PricingDisplay';
import PricingLead from '../PricingLead';
import BottomContact from "../bottomContact";
import Footer from "../footer";

class Consulting extends Component {
    render() {
        return (
            <div className="consulting_container">
                <ConsultingImg />
                <Services />
                <ConsultingImgWeb />
                <ServicesWeb />
                <PricingDisplay />
                <PricingLead />
                <BottomContact />
                <Footer />


            </div>
        )

    }
}

export default Consulting;