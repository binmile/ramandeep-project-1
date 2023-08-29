import React from 'react'
import { Greet } from "./Greet"
import { Person } from "./Person"
import { NameList } from "./NameList"
import { Status } from "./Status"
import { Heading } from './Heading'
import { Oscar } from "./Oscar"
import { User } from './User'
import { personName, nameList } from "../dummydata"
const allStates = () => {
  return (
    <>
      <Greet name="vishwas" messageCount={20} isLoggedIn={false} />
      <Person first={personName.first} last={personName.last} />
      <NameList name={nameList} />
      <Status status="loading" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Lenardo Dicpario!</Heading>
      </Oscar>
      <User />
    </>
  )
}

export default allStates
