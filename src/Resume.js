import React from 'react'
import './app.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import cv from './docs/CV2020.pdf';
import resume from './docs/resume.pdf';

export default function Resume(props) {
    return (
        <div className="resume" id="resume">
            <Row className="row-height-set-90 d-flex align-items-center justify-content-center">
                <Col xl={6} lg={6} md={6} sm={12}> 
                <Container>
                    <h2 className="resume-header">
                        My skills include:
                    </h2> 
                    <ul>
                        <li>Javascript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Bootstrap 4</li>
                        <li>React (Router + Bootstrap) </li>
                        <li>Shopify / Liquid </li>
                    </ul>
                    </Container>
                </Col>

                <Col xl={6} lg={6} md={6} sm={12}>
                    <Container>
                    <h2 className="resume-header">
                        Education, work, exhibitions:
                    </h2> 
                    <ul>
                        <li>Front-end developer intern - A Fresh Sip</li>
                        <li>Captain / Server - Augustine NYC</li>
                        <li>The Ohio State University  - B.A. in English | Minor in finance </li>
                        <li>Best in Show, photography, imageOHIO 2017</li>
                        <li>Center Forward 2016, Center for Fine Art Photoshop - Denver, CO</li>
                        <li>Intimacy, PH21, Gallery - Budapest, Hungary </li> 
                    </ul>
                    </Container> 
                </Col>
            </Row>

            <Row className="row-height-set-10 justify-content-center align-self-center">
                <p>
                    You can find my full resumé&nbsp;<a href={resume} target="_blank">here</a> and
                    my arts CV&nbsp;<a href={cv} target="_blank">here</a>.
                </p>
            </Row>
          
        </div>
    )
}
