import React from 'react'
import { PersonProps } from './type'

export const Person = (props:PersonProps) => {
  return (
    <>
    <h2>Welcome {props.name.first} {props.name.last}</h2>
    </>
  )
}


