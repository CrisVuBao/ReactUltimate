// Học về useReducer
//useReducer
// 1. Init state: 0
// 2. Action: Up (state + 1) / Down (state - 1)
// 3. Reducer
// 4. Dispatch

import { Button } from "@mui/material";
import { useEffect, useReducer, useState } from "react";
import "./Todo.css";
import reducer, { initState } from "./reducer";
import { setJob, addJob, deleteJob } from "./actions";
import logger from "./logger";

// TODO APP

export default function Todo() {
    const [state, dispatch] = useReducer(logger(reducer), initState);

    let { job, jobs } = state;

    const handleAddJob = () => {
        dispatch(addJob(job));
    }

    return (
        <>
            <div>
                <input
                    type="text"
                    value={job}
                    onChange={(e) => dispatch(setJob(e.target.value))}
                />
                <Button
                    onClick={handleAddJob}
                >Add</Button>
                {jobs.map(data =>
                    <li key={data}>{job}
                    </li>
                )}
            </div>
        </>
    )
}