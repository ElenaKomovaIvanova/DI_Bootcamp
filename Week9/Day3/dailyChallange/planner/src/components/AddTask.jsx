import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addTask } from '../PlannerSlice.js';
import { v4 as uuidv4 } from 'uuid';

const AddTask = () => {
    const [taskName, setTaskName] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        if (taskName.trim()) {
            dispatch(addTask({ id: uuidv4(), name: taskName, completed: false })); // Dispatch the new task
            setTaskName(''); // Clear the input field
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                placeholder="Enter task"
                required // Optional: prevents submitting an empty task
            />
            <button type="submit">Add Task</button> {/* Submit button */}
        </form>
    );
}

export default AddTask;
