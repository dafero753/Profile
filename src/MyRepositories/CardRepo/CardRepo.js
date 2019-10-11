import React from 'react'
import './CardRepo.css'

export default class CardRepo extends React.Component{

    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(

            <div className="CardRepo">
    
                    <h2>ID:{this.props.id}</h2>
                    <h3>NAME:{this.props.name}</h3>                    
            
            </div>
        )
    }
}