import React from 'react'
import { Persontype } from '../type'

export const Person:React.FC<Persontype> = ({first,last}) => {
  return (
    <>
    <h2>Welcome {first} {last}</h2>
    </>
  )
}


