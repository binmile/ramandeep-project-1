import React, { useReducer } from 'react'
import { countState, CounterAction } from '../type'
const initialState = { count: 0 }
function reducer(state: countState, action: CounterAction): countState {
    switch (action.type) {
        case 'increment':
            return { count: state.count + action.payload }
        case 'decrement':
            return { count: state.count - action.payload }
        case 'reset':
            return initialState
        default:
            return state
    }
}
export const Counter: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            <p>count:{state.count}</p>
            <button onClick={() => dispatch({ type: 'increment', payload: 10 })}>Increment 10</button>
            <button onClick={() => dispatch({ type: 'decrement', payload: 10 })}>Decrement 10</button>
            <button onClick={() => dispatch({ type: 'reset' })}>reset</button>

        </>
    )
}

