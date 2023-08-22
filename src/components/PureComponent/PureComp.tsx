import React, { Component, PureComponent } from 'react'
import {p} from "../type"
export class PureComp extends PureComponent<p> {
  render() {
    console.log("pure Component")

    return (
      <>
        <p>Pure Component{this.props.name}</p>
      </>
    )
  }
}

