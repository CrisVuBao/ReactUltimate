// Học về useReducer
//useReducer
// 1. Init state: 0
// 2. Action: Up (state + 1) / Down (state - 1)
// 3. Reducer
// 4. Dispatch

import { Button } from "@mui/material";
import { useEffect, useReducer, useState } from "react";
import "./content.css";

// TODO APP

// khởi tạo initState
const initState = {
    job: '',
    jobs: []
}

// khởi tạo action
const SET_JOB = 'set_job';
const ADD_JOB = 'add_job';
const DELETE_JOB = 'delete_job';

const setJob = (payload) => {
    return {
        type: SET_JOB,
        payload
    }
}

const addJob = (payload) => {
    return {
        type: ADD_JOB,
        payload
    }
}

const deleteJob = (payload) => {
    return {
        type: DELETE_JOB,
        payload
    }
}

// khởi tạo reducer
const reducer = (state, action) => {

    let kiemTraJob;

    switch (action.type) {
        case SET_JOB:
            kiemTraJob = {
                ...state,
                job: action.payload
            }
            break
        case ADD_JOB:
            kiemTraJob = {
                ...state,
                jobs: [
                    ...state.jobs,
                    action.payload]
            }
            break
        default:
            throw new Error("ivalid input");
    }

    console.log(kiemTraJob);

    return kiemTraJob;
}

export default function Content() {
    const [state, dispatch] = useReducer(reducer, initState);

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