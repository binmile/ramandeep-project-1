import React, { Component } from 'react'
import LifeCycleB from "./LifeCycleB"
import {Props,State} from "../type"

export class LifeCycleA extends Component{
    constructor(props:Props){
        super(props)
        this.state={
            name:"Raman saini"
        }
        console.log("LifecycleA constructor")
    }
    
    static getDerivedStateFromProps(props:Props,state:State){
        console.log("LifecycleA getDerivedStateFromProps ")
        return null;
    }
    componentDidMount(): void {
        console.log("LifeCycleA componentDidMount")
    }
   
    shouldComponentUpdate(){
        console.log("LifeCycleA shouldComponentUpdate")
        return true;
    }
    getSnapshotBeforeUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>) {
        console.log("LifeCycleA getSnapshotBeforeUpdate")
        return  null;
    }
    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
        console.log("LifeCycleA componentDidUpdate")
    }
 changeState=()=>{
    this.setState({
        name:"codeevolution"
    })
 }
  render() {
    console.log('lifecycle A render ')
    return (
      <div>
        Lifecycle A
        <button onClick={this.changeState}>Change state</button>
        <LifeCycleB/>
      </div>
    )
  }
}


