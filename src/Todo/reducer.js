import { SET_JOB, ADD_JOB, DELETE_JOB } from './constants'

// khởi tạo initState
export const initState = {
    job: '',
    jobs: []
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

export default reducer