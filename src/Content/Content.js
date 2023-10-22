// Học về useReducer
//useReducer
// 1. Init state: 0
// 2. Action: Up (state + 1) / Down (state - 1)
// 3. Reducer
// 4. Dispatch

import { Button } from "@mui/material";
import { useEffect, useReducer, useState } from "react";
import "./content.css";

// khởi tạo initState
const initState = 0;

// khởi tạo action
const ACTION_UP = 'up';
const ACTION_DOWN = 'down';

// khởi tạo reducer
const reducer = (state, action) => {
    switch (action) {
        case ACTION_UP:
            return state + 1;
        case ACTION_DOWN:
            return state - 1;
        default:
            throw new Error("invalid action");
    }
}

export default function Content() {
    const [count, dispatch] = useReducer(reducer, initState)

    return (
        <>
            <div>
                <Button onClick={() => dispatch(ACTION_UP)}>up</Button>
                <h3 >{count}</h3>
                <Button onClick={() => dispatch(ACTION_DOWN)}>down</Button>
            </div>
        </>
    )
}