import React,{useState,useMemo} from 'react'

const Counter:React.FC= () => {
    const[counterOne,setCounterOne]=useState(0)
    const[counterTwo,setCounterTwo]=useState(0)
    const incrementOne=()=>{
        setCounterOne(counterOne+1)
    }
    const incrementTwo=()=>{
        setCounterTwo(counterTwo+1)
    }
    const isEven=useMemo(()=>{
        let i=0;
        while(i<2000)i++
        return counterOne%2===0
    },[counterOne])
  return (
    <>
      <div>
        <button onClick={incrementOne}>Count -One {counterOne} </button>
        <span>{isEven?'EVEN':'ODD'}</span>
      </div>
      <div>
        <button onClick={incrementTwo}>Count - Two {counterTwo} </button>
      </div>
    </>
  )
}

export default Counter
