import React, { Component } from 'react';
import { Container, Row, Col } from 'fluid-react'
import '../../less/partner.css';
import MapsContent from '../mapContact';
import ContactInfo from '../ContactInfo';

class Partner extends Component {
    render() {
        return (

            <div>
                <ContactInfo/>
                <MapsContent />
                
            </div>
        )
    }


}

export default Partner;