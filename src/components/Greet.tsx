import React from 'react'
// type GreetProps={
//     name:string
// } 
import { GreetProps } from './type'
export const Greet=({name,messageCount=0}:GreetProps)=> {
  return (
    <>
      <h2>Welcome {name}! you have {messageCount} unread messages . </h2>
    </>
  )
}
