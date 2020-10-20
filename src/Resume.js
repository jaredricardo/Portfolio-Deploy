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
                        <li>Adobe Photoshop & InDesign</li>
                    </ul>
                    </Container>
                </Col>

                <Col xl={6} lg={6} md={6} sm={12}>
                    <Container>
                    <h2 className="resume-header">
                        Education, work, exhibitions:
                    </h2> 
                    <ul>
                        <li>The Ohio State University  - B.A. in English | Minor in finance </li>
                        <li>Augustine NYC - Captain / Server </li>
                        <li>Best in Show, photography, imageOHIO 2017</li>
                        <li>Underwater, 934 Gallery - Columbus, OH </li>
                        <li>Center Forward 2016, Center for Fine Art Photoshop - Denver, CO</li>
                        <li>Intimacy, PH21, Gallery - Budapest, Hungary </li> 
                    </ul>
                    </Container> 
                </Col>
            </Row>

            <Row className="row-height-set-10 justify-content-center align-self-center">
                <p>
                    You can find my full resumé&nbsp;<a href={resume} target="_blank">here</a>, 
                    my arts CV&nbsp;<a href={cv} target="_blank">here</a>, 
                    and a link to my arts website:&nbsp;<a href={'https://www.jaredricardo.com/'} 
                    target="_blank">Jaredricardo.com</a>
                </p>
            </Row>
          
        </div>
    )
}
