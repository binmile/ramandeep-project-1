import React, { Component } from 'react'
import { p, State } from "../type"
import MemoComp from '../PureComponent/MemoComp'
import { PureComp } from "./PureComp"
import { RegComp } from './RegComp'
export class ParentComp extends Component<p, State> {
  constructor(props: p) {
    super(props)
    this.state = {
      name: "raman"
    }
  }
  componenetDidMount() {
    setInterval(() => {
      this.setState({ name: "vishwas" })
    }, 2000)
  }
  render() {
    console.log("parent component****");

    return (
      <>
        <p> Parent Component</p>
        <MemoComp name={this.state.name} />
        {/* <PureComp name={this.state.name}/>
       <RegComp name={this.state.name}/> */}
      </>
    )
  }
}

export default ParentComp
