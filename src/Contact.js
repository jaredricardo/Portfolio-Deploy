import React, { Component }  from 'react'
import ToTop from './ToTop'
import './app.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import selfie from './images/selfie.jpeg'


class Contact extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            hasBeenRendered: false,
            email: 'Jaredricardo94@gmail.com',
            linkedIn: 'LinkedIn',
            gitHub: 'GitHub',
        }
    }

    render() {
    
        const email = this.state.email
        const linkedIn = this.state.linkedIn
        const gitHub = this.state.gitHub
       
        
        return (
            <div className="contact" id="contact">
                <Row className="row-height-set-100">
                    <Col className="d-flex justify-content-center align-items-center">
                            <img className="margin-small-screen" src= {selfie} ></img>
                    </Col>
                    <Col className="d-flex justify-content-center align-items-center small-screen-padding-2">
                        <ul>
                            <li>                {email}     </li>
                            <li ><a target="_blank" href="https://www.linkedin.com/in/jared-ricardo-5802b81b9/">   {linkedIn}  </a></li>
                            <li><a target="_blank" href="https://github.com/jaredricardo">    {gitHub}    </a></li>
                        </ul>
                    </Col>  
                    <Container className="d-flex justify-content-center align-items-top">
                        <ToTop />
                    </Container>
                </Row>
            </div>
        )
    }
}
export default Contact
