import React from 'react'
import { CountType } from "../type"
const Count: React.FC<CountType> = ({ text, count }) => {
  console.log(`rendering ${text}`)
  return (
    <>
      <p>{text} - {count}</p>
    </>
  )
}

export default React.memo(Count)
