import React, {Component} from 'react'
import './app.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import FadeIn from 'react-fade-in';
import VisibilitySensor from 'react-visibility-sensor'

class AboutBAW extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            sectionRendered: false,
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
    
    render() {

        const screenWidth = this.state.screenWidth

        const fixTopCol = () => {
            return screenWidth >= 768 ?  "d-flex justify-content-center align-items-center" : "d-flex justify-content-center align-items-end"
        }

        const fixBottomCol = () => {
            return screenWidth >= 768 ? "d-flex justify-content-center align-items-center" : "d-flex justify-content-center align-items-top extra-margin extra-margin-bottom-div" 
        }
        
        const fadeList = () => {
            if(this.state.sectionRendered === false) {
                setTimeout(() => { 
                    this.setState({
                        sectionRendered:true 
                    }) 
                }, 4200)
                return  <FadeIn transitionDuration = {600} delay={500}>
                            <li>Writing</li>
                            <li>Finance</li>
                            <li>Photography</li>
                            <li>Programing (obviously)</li>
                            <li>Music Production / DJing</li>
                            <li>Calisthenics</li>
                        </FadeIn>
            } else if (this.state.sectionRendered === true) {
                return <div> 
                            <li>Writing</li>
                            <li>Finance</li>
                            <li>Photography</li>
                            <li>Programing (obviously)</li>
                            <li>Music Production / DJing</li>
                            <li>Calisthenics</li>
                        </div>   
            }
        }
          
        const prerender =   <div style={{color: 'white'}}> 
                                <li>Writing</li>
                                <li>Finance</li>
                                <li>Photography</li>
                                <li>Programing (obviously)</li>
                                <li>Music Production / DJing</li>
                                <li>Calisthenics</li>
                            </div> 

        return (
            <div className="aboutBAW" id="about">
                <Row className="row-height-set-100">
                    <Col xl={6} lg={6} md={6} sm={12} className={fixTopCol()}>
                        <span id="about-jared"> My name is Jared. I am a self-taught web developer with a wide range of interests, which include: </span>
                    </Col>
                    <Col xl={6} lg={6} md={6} sm={12} className={fixBottomCol()}>
                        <VisibilitySensor  partialVisibility={true} offset={{top:100}}>
                            {({isVisible}) =>
                                <ul>
                                    {isVisible || this.state.sectionRendered === true ?
                                    fadeList() : prerender }
                                </ul>
                            }           
                        </VisibilitySensor>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default AboutBAW














// export default function AboutBAW(props) {


//     return (
//         <div className="aboutBAW" id="about">
//               <Row className="row-height-set-100">
//                 <Col className="d-flex justify-content-end align-items-center">
//                     <span id="about-jared"> My name is Jared. I am a self-taught web developer with a (seriously) wide range of interests, which include: </span>
//                 </Col>
//                 <Col className="d-flex justify-content-center align-items-center">
//                     <ul>
//                         <VisibilitySensor>
                     
//                                     <FadeIn transitionDuration = {600} delay={600}>
//                                         <li>Writing</li>
//                                         <li>Finance</li>
//                                         <li>Photography</li>
//                                         <li>Programing (obviously)</li>
//                                         <li>Music Production / DJing</li>
//                                         <li>Calisthenics</li>
//                                     </FadeIn>
                                          
//                         </VisibilitySensor>
//                     </ul>
//                 </Col>
//             </Row>
//         </div>
//     )
// }

