import React, {Component} from 'react'
import { Particles } from "react-particles-js";
import './app.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'

class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
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
        return false
    }

    render() {
        
        const screenWidth = this.state.screenWidth

        const greeting = () => {
            const greetings = ["Hello", "Hey", "Hey there", "Greetings" ]
            const random = Math.floor(Math.random() * greetings.length)
            return greetings[random]
        }

        const lessParticles = () => {
            if(screenWidth < 700) {
                return 40
            } else {
                return 75
            }
        }

        const centerDiv = () => {
            return screenWidth > 992 ? "d-flex justify-content-center align-items-center" : "d-flex justify-content-center align-items-start" 
        }
    
        return (
            <div className="home" id="home">
                <Particles className="resize-fix"
                params={{
                    "particles": {
                        "number": {
                            "value": lessParticles()
                        },
                        "size": {
                            "value": 4,
                            "random": true
                        },
                        "color": {
                            "value":"#ffffff"
                        },
                        "line_linked": {
                            "enable": false,
                            "opacity": 1,
                            "color": "#ffffff",
                            "width": 1
                        },
                        "move": {
                            "enable": true,
                            "straight": false,
                        },
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            },
                        },
                        "resize": true
                    },
                }} />

                <Row className="row-height-set-100">
                    <Col lg={6} xs={0}>

                    </Col>
                    <Col lg={6} xs={12} className={centerDiv()}>
                        <span id="hello"> {greeting()} & welcome to my personal website :) </span>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Home
