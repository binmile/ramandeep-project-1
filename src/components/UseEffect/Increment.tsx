import React, { useState, useEffect } from 'react'

export const Increment: React.FC = () => {
  const [num, setNum] = useState<number>(0);
  const [nums, setNums] = useState<number>(0)
  useEffect(() => {
    alert("clicked");
  }, [])
  return (
    <>
      <button onClick={() => setNum(num + 1)}> click : {num}</button>
      <button onClick={() => setNums(nums + 1)}> click : {nums}</button>

    </>
  )
}

