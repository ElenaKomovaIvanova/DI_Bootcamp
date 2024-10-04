import React from 'react';
import { toggleTask } from "../todoSlice.js";
import { useDispatch } from "react-redux";

const CompleteTodos = ({ id, completed }) => {
    const dispatch = useDispatch();

    return (
        <button onClick={() => dispatch(toggleTask(id))}>
            {completed ? 'Undo' : 'Complete'}
        </button>
    );
}

export default CompleteTodos;
