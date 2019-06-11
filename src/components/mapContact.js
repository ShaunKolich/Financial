import React from 'react';
import { Container, Row, Col } from 'fluid-react';
import "../less/mapContact.css";

function MapsContent() {
    return (


        <div className="mapsContent">
            <Row>
               
                <Col>
                    <div class="mapouter"><div class="gmap_canvas"><iframe width="70%" height="500px" id="gmap_canvas" src="https://maps.google.com/maps?q=111%20S%20Orange%20Ave%20Orlando%20Fl&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.crocothemes.net"></a></div></div>

                </Col>
                
             </Row>
        </div >
        
    )
}

export default MapsContent;