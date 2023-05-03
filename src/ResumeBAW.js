import React from 'react'
import './app.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import cv from './docs/CV2020.pdf';
import resume from './docs/resume.pdf';

export default function ResumeBAW(props) {
    return (
        <div className="resumeBAW" id="resume">
            <Row className="row-height-set-90 d-flex align-items-center justify-content-center">
                <Col xl={6} lg={6} md={6} sm={12}> 
                <Container>
                    <h2 className="resume-header">
                        Some of my skills include:
                    </h2> 
                    <ul>
                        <li>Javascript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Shopify / Liquid</li>
                        <li>Bootstrap</li>
                        <li>React + React Native</li>
                        <li>Express.js</li>
                        <li>MySql</li>
                        <li>PHP</li>
                        <li>Responsive Web Design</li>
                        <li>A/B Testing</li>
                    </ul>
                    </Container>
                </Col>

                <Col xl={6} lg={6} md={6} sm={12}>
                    <Container>
                    <h2 className="resume-header">
                        Education and work:
                    </h2> 
                    <ul>
                        <li>Full Stack Developer - iRecon Marketing (2022 - present )</li>
                        <li>Web Developer - Freelance  (2021 - present )</li>
                        <li>Web Developer - Obvi (2021 - 2022)</li>
                        <li>Front-end developer intern - A Fresh Sip (2021)</li>
                        <li>The Ohio State University  - B.A. in English | Minor in finance </li>
                    </ul>
                    </Container> 
                </Col>
            </Row>

            <Row className="row-height-set-10 d-flex justify-content-center align-items-center">
                <p>
                    You can find my full resumé&nbsp;<a href={resume} target="_blank">here</a>
                </p>
            </Row>
          
        </div>
    )
}