import React from 'react';
import { Row, Col } from 'fluid-react';
import '../less/headerImg.css';



function HeaderImg(){
    return (
        <div>
        <Row>
        <Col>
            <div className='header_container'>
                <Col xs="8">
                    <section className="info_box_container">
                                <div className="header_box">
                                    <h2>Need Money to Grow Your Business?</h2>
                                    <p>We offer funding from $5,000 to $2 Billion and in most cases you can recieve within 24 hours!</p>
                                    <button className ="btn_header">Get Funded Today!</button>
                                </div>
                            
                    </section>
                </Col>
            </div>
        </Col>
    </Row>
    </div>
    )
    
}

export default HeaderImg;