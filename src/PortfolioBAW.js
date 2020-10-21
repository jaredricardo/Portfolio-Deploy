import React, { Component } from 'react'
import './app.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import ReactPlayer from 'react-player'
import VisibilitySensor from 'react-visibility-sensor'
import FadeIn from 'react-fade-in';

class PortfolioBAW extends Component {
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
            return screenWidth >= 991 ? "d-flex justify-content-end align-items-center center-when-small" : " d-flex justify-content-center align-items-bottom center-when-small extra-margin-bottom-div t2"
        }

        const video = <ReactPlayer      className="d-flex justify-content-center align-end"
                                        url="./videos/demo_video.MP4"
                                        muted={true}
                                        playing={true}
                                        loop={true}
                                        controls={true}
                                        height='auto'
                                        width='100%' 
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
                return  <FadeIn transitionDuration={2000}> 
                            <ReactPlayer    className="d-flex justify-content-center align-end"
                                            url="./videos/demo_video.MP4"
                                            muted={true}                
                                            playing={true}
                                            loop={true}
                                            controls={true}
                                            height='auto'
                                            width='100%' 
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
            <div className="portfolioBAW" id="portfolio">
                <Row className="row-height-set-100-2">
                    <Col xl={4} lg={4} md={12} className={fixTopCol()}>
                            <span id="portfolio-jared"> My recent projects include a financial dashboard, a music blog, and few personal websites. </span>
                    </Col>
                    <Col xl={8} lg={8} md={12} className={fixBottomCol()}>
                        <div> 
                        <VisibilitySensor partialVisibility={true} offset={{top: 100}}>
                            {({isVisible}) => 
                                <div>
                                    {isVisible ?
                                    visible() : notVisible() }
                                </div>
                            }
                        </VisibilitySensor>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default PortfolioBAW