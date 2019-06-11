import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Row, Col } from 'fluid-react';
import '../less/WebsiteDisp.css'
import Logo from '../img/logo.png'


import Home from './pages/Home';
import Funding from './pages/Funding';
import Consulting from './pages/Consulting';
import Partner from './pages/Partner';
import Questions from './pages/Questions';

function WebSiteDisplay() {
    return (
        <Router>
            <div className="main_container">
                <section className="nav_logo_container">
                    <Row>
                        <Col>
                            <div className="logo_container">
                                <img src={Logo} alt="logo"></img>
                            </div>
                        </Col>
                        <Col>
                            <div className="nav_container">
                                <ul>
                                    <li><Link to={'/'} className="nav-link">Home</Link></li>
                                    <li><Link to={'/funding'} className="nav-link">Funding</Link></li>
                                    <li><Link to={'/consulting'} className="nav-link">Consulting</Link></li>
                                    <li><Link to={'/partner'} className="nav-link">Contact Us</Link></li>
                                    <li><Link to={'/questions'} className="nav-link">F.A.Q</Link></li>
                                </ul>

                            </div>
                        </Col>
                    </Row>
                </section>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/funding' component={Funding} />
                    <Route path='/consulting' component={Consulting} />
                    <Route exact path='/partner' component={Partner} />
                    <Route path='/questions' component={Questions} />

                </Switch>

            </div>
        </Router>






    )
}
export default WebSiteDisplay;