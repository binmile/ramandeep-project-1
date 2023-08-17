import React from 'react'
// type GreetProps={
//     name:string
// } 
import { GreetProps } from './type'
export const Greet=(props:GreetProps)=> {
const {messageCount=0}=props
  return (
    <>
      <h2>Welcome {props.name}! you have {messageCount} unread messages . </h2>
    </>
  )
}
