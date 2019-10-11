import React from 'react'
import CardRepo from './CardRepo'
import './MyRepositories.css'

export default class MyRepositories extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            vCharacters: [
            
            ]
        }
    }
    componentDidMount(){
        fetch("https://api.github.com/users/dafero753/repos")
        .then(res => res.json())
        .then((res)=>{
           this.setState({
                vCharacters: res
            })
            
        })
    }

    render(){
        return(

            <div className="MyRepositories">
                <div className="titleR">
                    My repositories
                </div>
                <div className="rip">
                {
                    this.state.vCharacters.map(item =>(
                      <CardRepo
                      id={item.id}
                      name={item.name}
                      />
                    ))
                }
                </div>
               
            </div>
        )
    }
}