import React, { Component } from 'react'
import './app.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import ReactPlayer from 'react-player'
import VisibilitySensor from 'react-visibility-sensor'
import FadeIn from 'react-fade-in';



class Portfolio extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            doNotRerender: false,
            hasBeenRendered: false,
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

    shouldComponentUpdate() {
        if(this.state.screenWidth <= 992) {
            return true
        } else {
            return false
        }
    }

    render () {

        const screenWidth = this.state.screenWidth

        const fixTopCol = () => {
            return screenWidth >= 991 ? "d-flex justify-content-end align-items-center center-when-small" : "d-flex justify-content-center align-items-end center-when-small extra-margin-upper-div fade-fix-top"

        }

        const fixBottomCol = () => {
            return screenWidth >= 991 ? "d-flex justify-content-end align-items-center center-when-small" : "d-flex justify-content-center align-items-bottom center-when-small extra-margin-bottom-div t2"
        }

        const adjustPlayerHeight = () => {
            if(screenWidth > 575) { 
                return "520px"
            }
            if(screenWidth < 575 && screenWidth > 400) {
                return "300px"
            }
            if(screenWidth < 400) {
                return "200px"
            }
        }

        const video = 
                        // <iframe 
                        //     className="iframe"
                        //     src="https://www.youtube.com/embed/Q_L7lyYFSo8" 
                        //     frameBorder="0" 
                        //     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        //     allowFullScreen>
                        // </iframe>


                    <ReactPlayer      className="d-flex justify-content-center align-end"
                                        url="https://www.youtube.com/watch?v=Q_L7lyYFSo8&feature=youtu.be"
                                        muted={true}
                                        playing={true}
                                        loop={true}
                                        controls={true}
                                        height={adjustPlayerHeight()}
                                        width="100%"
                                        />

        const prerender =   <div style={{opacity:"0", border: '1px solid red'}}>
                                <div className="fade-fix-prerender">
                                    test
                                </div>  
                            </div> 

        const visible = () => {
            if(this.state.hasBeenRendered === false)  {
                setTimeout(()=> {
                    this.setState({
                        doNotRerender: true
                    })  
                }, 1000)
                return  <FadeIn transitionDuration={2000} > 

        {/* <iframe 
            className="iframe"
            src="https://www.youtube.com/embed/Q_L7lyYFSo8" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
        </iframe> */}

                            <ReactPlayer    className="d-flex justify-content-center align-end"
                                            url="https://www.youtube.com/watch?v=Q_L7lyYFSo8&feature=youtu.be"
                                            muted={true}                
                                            playing={true}
                                            loop={true}
                                            controls={true}
                                            height={adjustPlayerHeight()}
                                            width="100%"
                                            />                         
                        </FadeIn>
                } else if(this.state.hasBeenRendered === true) {
                return video
            }
        }

        const notVisible = () => {
            if(this.state.doNotRerender === false) {
                return prerender 
            } else if(this.state.doNotRerender === true) {
                setTimeout (() => {
                    this.setState({
                        hasBeenRendered: true
                    })
                }, 200)
                return video
            }
        }

        return (
            <div className="portfolio" id="portfolio">
                <Row className="row-height-set-100-2">
                    <Col xl={4} lg={4} md={12} className={fixTopCol()}>
                            <span id="portfolio-jared"> My recent projects include a financial dashboard, a music blog, and few personal websites. </span>
                    </Col>
                    <Col xl={8} lg={8} md={12} className={fixBottomCol()}>
                        <VisibilitySensor partialVisibility={true} offset={{top: 100}}>
                            {({isVisible}) => 
                                <div className="width-fix">
                                    {isVisible ?
                                    visible() : notVisible() }
                                </div>
                            }
                        </VisibilitySensor>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Portfolio