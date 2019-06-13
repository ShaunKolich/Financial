import React, { Component } from 'react';
import { Container, Row, Col } from 'fluid-react'
import '../../less/partner.css';
import MapsContent from '../mapContact';
import ContactInfo from '../ContactInfo';
import Contact from '../ContactForm';

class Partner extends Component {
    render() {
        return (

            <div>
                <Contact/>
                <ContactInfo />
                <MapsContent />
                
            </div>
        )
    }


}

export default Partner;