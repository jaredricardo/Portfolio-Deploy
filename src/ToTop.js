import React, { Component } from 'react'
import './app.css'
import { Container } from 'react-bootstrap'
import { animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'



export class ToTop extends Component {

    scrollToTop = () => {
        scroll.scrollToTop()
    }

    render() {
        return (
            <div className="scroll-button"> 

                <button onClick={this.scrollToTop}> ^ ^ ^ </button>
       
            </div>
        )
    }
}


export default ToTop

