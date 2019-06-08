import React, { Component } from 'react';
import { Row, Col } from 'fluid-react';
import '../../less/consulting.css'
import '../consultingImg';
import ConsultingImg from '../consultingImg';

import Services from '../services';

class Consulting extends Component {
    render() {
        return (
            <div className = "consulting_container">
                <ConsultingImg />
                <Services/>

            </div>
        )

    }
}

export default Consulting;