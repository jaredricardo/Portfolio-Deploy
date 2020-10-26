import React, { Component } from 'react'
import './app.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Navbar, Col, Row} from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from 'react-router-dom' 
import { Link as ScrollLink, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { HashLink } from 'react-router-hash-link';


import MainContainer from './MainContainer'

import Home from './Home'
import About from './About'
import Resume from './Resume'
import Portfolio from './Portfolio'
import Contact from './Contact'
import HomeBAW from './HomeBAW'
import AboutBAW from './AboutBAW'
import ResumeBAW from './ResumeBAW'
import PortfolioBAW from './PortfolioBAW'
import ContactBAW from './ContactBAW'
import FadeIn from 'react-fade-in';


class BodyORIG extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isColorful: false,
            screenWidth: window.innerWidth
        }   
    }

    componentDidMount() {
        window.addEventListener('resize', () => {
            this.setState({
                screenWidth: window.innerWidth
            });
        }, false);
    }


    changeTheme = () => {
        this.setState({
            isColorful: !this.state.isColorful,
        })

    } 

    render() {

        const isColorful = this.state.isColorful
        const screenWidth = this.state.screenWidth
        
        const centerNav =  () => {
            return screenWidth > 991 ? 'd-flex justify-content-start align-items-center' : 'd-flex justify-content-center align-items-center'
        }
            
        const changeNavClass = () => {
            return (isColorful) ? 'colorful-font p-0' : 'BAW-font p-0'
        }

        const displayCurrentTheme = () => {
            return (isColorful) ? colorful : baw 
        } 

        const colorful =    
                        <Container fluid className="p-0 m-0 colorful-font">
                            <FadeIn transitionDuration={800}
                                    delay={100}>

                                <Home />
                                <About />
                                <Portfolio />
                                <Resume />
                                <Contact />  
                            </FadeIn>
                        </Container>

        const baw =     
                    <Container fluid className="p-0 m-0 BAW-font"> 
                        <HomeBAW />
                        <AboutBAW />
                        <PortfolioBAW />
                        <ResumeBAW />
                        <ContactBAW />                                            
                    </Container>


        return (
            <Container fluid className="body p-0">
            

<div className="no-margin fixed-top ">
   <Row className={changeNavClass()}>
        <Col xl={7} md={12} className={centerNav()}>
            <Navbar className="navbar-items p-0">
                <ul>
                    <li className="link"> 
                        <ScrollLink activeClass="active" to="home" spy={true} smooth={true} offset={0} duration={600}>
                          
                                Home
                           
                        </ScrollLink>
                    </li>

                    <li className="link"> 
                        <ScrollLink activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={600}>
                           
                                About
                         
                        </ScrollLink>
                    </li> 

                    <li className="link">
                        <ScrollLink activeClass="active" to="portfolio" spy={true} smooth={true} offset={0} duration={600}> 
                        
                                Portfolio
                    
                        </ScrollLink>
                    </li> 

                    <li className="link">
                        <ScrollLink activeClass="active" to="resume" spy={true} smooth={true} offset={0} duration={600}>
                         
                                Resumé
                      
                        </ScrollLink>
                    </li>

                    <li className="link">
                        <ScrollLink activeClass="active" to="contact" spy={true} smooth={true} offset={0} duration={600}> 
                                Contact
                        </ScrollLink>
                    </li>
                    <li className="theme-button">
                        <label className="switch theme-button">
                            <input type="checkbox" onClick={this.changeTheme}/>
                            <span className="slider round"></span>
                        </label>
                    </li>  
                </ul>
            </Navbar>
        </Col>
        <Col xl={5} md={12} className="d-flex justify-content-center align-items-center p-0 m-0">
        </Col>
   </Row>
</div>

        
                {displayCurrentTheme()}

            
</Container>
        )
    }
}

export default BodyORIG
