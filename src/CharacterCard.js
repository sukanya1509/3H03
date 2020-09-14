import React, {Component} from 'react';
import './App.css';
export default class CharacterCard extends Component {
 
    constructor(props){
        super(props)
        this.state ={
            activate : false,
        }
    }
    activate =() => {
        if(this.state.activate){
            this.props.activationHandler(this.props.value)
            this.setState({activ: true})
        }
    }
    render(){
        let className = 'card ${this.state.active ? 'activeCard' : ''}'
 return (
   <div className={className} onClick={activate}>{this.activate}
   {this.props.value
   }</div>
 )

}
  ComponentDidUpdata(prevProps){
      if(prevProps.attempt != this.props.attempt){
        this.setState({active: false})
      }
  }