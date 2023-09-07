import React,{useContext} from 'react'
import {ReducerContext} from "./ComponentA"
const ComponentF = () => {
    const countContext=useContext(ReducerContext)
  return (

         <div>
      <p>componentD :{countContext?.countState}</p>
      <button onClick ={()=>{countContext?.countDispatch({type:'increment',payload:1})}} >Increment</button>
      <button onClick ={()=>{countContext?.countDispatch({type:'decrement',payload:1})}} >Decrement</button>
      <button onClick ={()=>{countContext?.countDispatch({type:'reset'})}} >reset</button>


    </div>
  )
}

export default ComponentF
