import React, { useReducer } from 'react'
import { countState, CounterAction } from '../type'
const initialState = { count: 0 ,count2:0 }
function reducer(state: countState, action: CounterAction): countState {
    switch (action.type) {
        case 'increment':
            return { ...state,count: state.count + action.payload }
        case 'decrement':
            return {...state, count: state.count - action.payload }
        case 'reset':
            return initialState
            case 'increment2':
                return { ...state,count2: state.count2 + action.payload }
            case 'decrement2':
                return {...state, count2: state.count2 - action.payload }
        default:
            return state
    }
}
export const Counter: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const[state2,dispatch2]=useReducer(reducer,initialState)
    return (
        <>
            <p>count:{state.count}</p>
            <p>count2:{state.count2}</p>
            <button onClick={() => dispatch({ type: 'increment', payload: 10 })}>Increment 10</button>
            <button onClick={() => dispatch({ type: 'decrement', payload: 10 })}>Decrement 10</button>
            <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
            <button onClick={() => dispatch({ type: 'increment2', payload: 90 })}>Increment 10</button>
            <button onClick={() => dispatch({ type: 'decrement2', payload: 90})}>Decrement 10</button>
            <div>
                <p>count3:{state2.count}</p>
            <button onClick={() => dispatch2({ type: 'increment', payload: 10 })}>Increment 10</button>
            <button onClick={() => dispatch2({ type: 'decrement', payload: 10 })}>Decrement 10</button>
            </div>
        </>
    )
}

