import React, { Component }  from 'react'
import ToTop from './ToTop'
import './app.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import selfie from './images/selfie.jpeg'
import VisibilitySensor from 'react-visibility-sensor'

class ContactBAW extends Component {
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
    
    //     const charList = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o',
    //                     'p','q','r','s','t','u','v','w','x','y','z','A', 'B', 'C','D',
    //                     'E','F','G','H','I','J','K','L','M','N','O', 'P', 'Q','R','S',
    //                     'T','U','V','W','X','Y','Z','!','@','#','$','%','^','&','*','(',
    //                     ')', '-','+']

    //     function randomNum() {
    //         return Math.floor(Math.random() * charList.length)
    //     }

    //    function randomLetter() { 
    //         return charList[randomNum()]
    //     }

    //     function randomizeWord(orig) {
    //         let randomArr = []
    //         for(let i = 0; i < orig.length; i++) {
    //             randomArr.push(randomLetter(orig[i]))
    //         }
    //         return randomArr
    //     }

    //     function randomTime(t) {
    //         return Math.floor(Math.random() * t)
    //     }

        //possiblly add this functionality back at later time, for now defunct

        // const randomizeThenDisplay = (e,l,g,i) => {
        //     if(this.state.hasBeenRendered === false) {
        //         const t1 = 600
        //         const t2 = t1+ 800

        //         setTimeout(()=> {
        //             this.setState({
        //                 hasBeenRendered: true
        //             })
        //         }, 601)

        //         // set state of randomized 

        //         setTimeout(() => {
        //             this.setState({
        //                 email: randomizeWord(e),
        //                 linkedIn: randomizeWord(l),
        //                 gitHub: randomizeWord(g),
        //                 instagram: randomizeWord(i)
        //             })
        //         }, randomTime(t1))
            

        //         // set state back to original 

        //         setTimeout(() => {
        //             this.setState({
        //                 email: 'Jaredricardo94@gmail.com',
        //                 linkedIn: 'LinkedIn',
        //                 gitHub: 'GitHub',
        //                 instagram: 'Instagram'
        //             })
        //         }, randomTime(t2))
        //     }
        // }

        const email = this.state.email
        const linkedIn = this.state.linkedIn
        const gitHub = this.state.gitHub

        // const visible = () => {
        //     return      <ul onLoad={randomizeThenDisplay(email, linkedIn, gitHub, instagram)} >
        //                     <li>                {email}     </li>
        //                     <li ><a target="_blank" href="https://www.linkedin.com/in/jared-ricardo-5802b81b9/">   {linkedIn}  </a></li>
        //                     <li><a target="_blank" href="https://github.com/jaredricardo">    {gitHub}    </a></li>
        //                     <li><a target="_blank" href="https://www.instagram.com/jared_ricardo/">    {instagram}  </a></li>
        //                 </ul>
        // }

        // const notVisible = () => {
        //     return <ul >
        //                 <li>                {email}     </li>
        //                 <li ><a target="_blank" href="https://www.linkedin.com/in/jared-ricardo-5802b81b9/">   {linkedIn}  </a></li>
        //                 <li><a target="_blank" href="https://github.com/jaredricardo">    {gitHub}    </a></li>
        //                 <li><a target="_blank" href="https://www.instagram.com/jared_ricardo/">    {instagram}  </a></li>
        //             </ul>
        // }

        //not currently in use, may add back later 

        // <VisibilitySensor partialVisibility={true} offset={{top:100}}>
        // {({isVisible}) => 
        //     <div className="no-overflow">
        //         {isVisible ?
        //         visible() : notVisible() }
        //     </div>
        // }
        // </VisibilitySensor>
    
        

        return (
            <div className="contactBAW" id="contact">
              <Row className="row-height-set-100">
                    <Col className="d-flex justify-content-center align-items-center my-auto">
                            <img className="margin-small-screen" src={selfie}></img>
                    </Col>
                    <Col className="d-flex justify-content-center align-items-center small-screen-padding-2">
                        <ul >
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
export default ContactBAW
