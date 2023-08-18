import React from 'react'
import { PersonProps } from './type'

export const Person = ({name}:PersonProps) => {
  const{first,last}=name
  return (
    <>
    <h2>Welcome {first} {last}</h2>
    </>
  )
}


