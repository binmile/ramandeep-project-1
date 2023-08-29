import React from 'react'
import { p } from "../type"
const MemoComp: React.FC<p> = ({ name }) => {
  console.log("rendering memo component")
  return (
    <>
      {name}
    </>
  )
}
export default React.memo(MemoComp)

