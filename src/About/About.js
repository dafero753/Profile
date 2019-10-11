import React from 'react'
import Img from '../static/daniel.jpeg'
import './About.css'

export default class About extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div className="About">
                <div className="first">
                    <div className="hi">
                        Hi!
                    </div>
                    <div className="i-am">
                        I´m Daniel
                    </div>
                </div>
                <div className="photo">
                    
                    <img className="imagen" src={Img} alt="photo"/>
                </div>
            </div>
        )
    }
}
