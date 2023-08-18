import React from 'react'
// type GreetProps={
//     name:string
// } 
import { GreetProps } from './type'
export const Greet=(props:GreetProps)=> {
  const {name}=props;
const {messageCount=0}=props
  return (
    <>
      <h2>Welcome {name}! you have {messageCount} unread messages . </h2>
    </>
  )
}
