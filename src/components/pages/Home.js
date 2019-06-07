import React, { Component } from 'react';
// import { Container, Row, Col } from 'fluid-react'
import '../../less/home.css'

import HeaderImg from '../headerImg';
import MiddleContent from '../middleContent';
import BottomImg from '../bottomImg';
import BottomContact from "../bottomContact";
import BottomTest from "../bottomTest";
import Footer from "../footer";

class Home extends Component {
    render() {
        return (
            <div className = "home_container">
                <HeaderImg /> 
                <MiddleContent />
                <BottomImg />
                <BottomContact />
                <BottomTest />
                <Footer/>
            </div>
        )
    }
}

export default Home;