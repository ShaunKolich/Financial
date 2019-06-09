import React, { Component } from 'react';
import { Row, Col } from 'fluid-react';
import '../../less/consulting.css'
import '../consultingImg';
import ConsultingImg from '../consultingImg';
import ConsultingImgWeb from '../consultingImgWeb';
import Services from '../services';
import ServicesWeb from '../services';
import PricingDisplay from '../PricingDisplay';

class Consulting extends Component {
    render() {
        return (
            <div className = "consulting_container">
                <ConsultingImg />
                <Services />
                <ConsultingImgWeb />
                <ServicesWeb />
                <PricingDisplay/>

            </div>
        )

    }
}

export default Consulting;