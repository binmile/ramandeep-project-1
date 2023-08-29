import React from 'react'
// type GreetProps={
//     name:string
// } 

import { GreetProps } from '../type'
export const Greet: React.FC<GreetProps> = ({ name, messageCount = 0 }) => {
  return (
    <>
      <h2>Welcome {name}! you have {messageCount} unread messages . </h2>
    </>
  )
}
