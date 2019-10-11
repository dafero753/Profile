import React from 'react'
import './CardFamily.css'

export default class CardFamily extends React.Component{

    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(

            <div className="CardFamily">
                <div className="aja">
                <div className="name">
                    Name
                </div>
                <div className="rel">
                    Relationship
                </div>
                </div>
                <div className="aja">
                <div className="name">
                    Name
                </div>
                <div className="rel">
                    Relationship
                </div>
                </div> <div className="aja">
                <div className="name">
                    Name
                </div>
                <div className="rel">
                    Relationship
                </div>
                </div> <div className="aja">
                <div className="name">
                    Name
                </div>
                <div className="rel">
                    Relationship
                </div>
                </div>
            </div>
        )
    }
}