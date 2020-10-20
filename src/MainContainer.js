import React, { Component } from 'react'
import Home from './Home'
import About from './About'
import Resume from './Resume'
import Portfolio from './Portfolio'
import Contact from './Contact'


export class MainContainer extends Component {
    render() {
        return (
            <div>            
                <Home />
                <About />
                <Resume />
                <Portfolio />
                <Contact />
            </div>
        )
    }
}

export default MainContainer
