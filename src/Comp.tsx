import React from 'react'
import Counts from "./components/UseMemo/Counts"
import Parent from "./components/callBackhook/Parent"
export const Comp:React.FC  = () => {
  return (
    <>
      <Parent/>
      <Counts/>
    </>
  )
}

