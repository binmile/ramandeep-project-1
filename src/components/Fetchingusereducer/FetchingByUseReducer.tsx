import React, { useReducer, useEffect } from 'react';
import axios from "axios";
import { stateuseReducer, actionUseReducer } from "../../components/type";

const initialState = {
    loader: true,
    post: {},
    error: "" // Fix the typo here: 'eroor' to 'error'
};

const FetchingByUseReducer = () => {
    const reducer = (state: stateuseReducer, action: actionUseReducer): stateuseReducer => {
        switch (action.type) {
            case 'FETCH_SUCCESS':
                return {
                    loader: false,
                    post: action.payload!,
                    error: ""
                };
            case 'FETCH_FAIL':
                return {
                    loader: false,
                    post: {},
                    error: "Loading failed"
                };
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
            .then((res) => {
                dispatch({ type: 'FETCH_SUCCESS', payload: res.data });
            })
            .catch((error) => {
                dispatch({ type: 'FETCH_FAIL' });
            });
    }, []); // Add an empty dependency array to run the effect only once

    return (
        <div>
            {state.loader ? "Loading" : state.post.title}
            {state.error ? state.error : null}
        </div>
    );
};

export default FetchingByUseReducer;
