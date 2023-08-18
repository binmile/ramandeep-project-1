import React from 'react'
import { Persontype } from './type'

export const Person:React.FC<Persontype> = ({name}) => {
  return (
    <>
    <h2>Welcome {name.first} {name.last}</h2>
    </>
  )
}


