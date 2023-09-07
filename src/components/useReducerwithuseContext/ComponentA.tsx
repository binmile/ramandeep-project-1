import React,{useReducer,createContext} from 'react'
import ComponentB from "./ComponentB"
import ComponentE from "./ComponentE"
import { countState2,CounterAction,ReducerContextType } from '../type'
export const ReducerContext=createContext<ReducerContextType | undefined>(undefined)
const initialCount=0;
const reducer=(state:number,action:CounterAction)=>{
    switch(action.type){
        case 'increment':
            return state+1
        case 'decrement':
            return state -1;
        case "reset":
            return initialCount;
        default:
            return state

    }
}
const ComponentA = () => {
    const [state,dispatch]=useReducer(reducer,initialCount)
  return (
    <div>
      <ReducerContext.Provider value={{countState:state,countDispatch:dispatch}}>
        <ComponentB/>
        <ComponentE/>
      </ReducerContext.Provider>
    </div>
  )
}

export default ComponentA
