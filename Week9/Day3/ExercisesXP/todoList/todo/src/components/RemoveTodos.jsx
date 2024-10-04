import React from 'react';
import {useDispatch} from "react-redux";
import {removeTask} from "../todoSlice.js";
const RemoveTodos = ({id}) => {
    const dispatch = useDispatch();

    return (
        <button onClick={() => dispatch(removeTask(id))}>Remove</button>
    )
}

export default RemoveTodos;