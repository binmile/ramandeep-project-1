import React from 'react'
import { Persontype } from './type'

export const Person = ({name}:Persontype) => {
  return (
    <>
    <h2>Welcome {name.first} {name.last}</h2>
    </>
  )
}


