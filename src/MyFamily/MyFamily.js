import React from 'react'
import CardFamily from './CardFamily'
import './MyFamily.css'

export default class MyFamily extends React.Component{

    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(

            <div className="MyFamily">
                <div className="title">
                    My Family
                </div>
                <div>
                    <CardFamily />
                </div>
            </div>
        )
    }
}