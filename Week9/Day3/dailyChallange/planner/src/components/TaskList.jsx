import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import { editTask, deleteTask } from '../PlannerSlice.js';

const TaskList = () => {

    const dispatch = useDispatch();
    const day = useSelector((state) => state.plannerStore.pickedDate);
    const tasks = useSelector((state) => state.plannerStore.tasks);
    const taskByDay = tasks[day] || [];

    const handleEditTask = (taskId) => {
        const newName = prompt('Enter new task name:');
        if (newName) {
            dispatch(editTask({day, id: taskId, newName}));
        }
    };

    return (
        <ul>
            {taskByDay.map(task => (
                <li key={task.id}>
                    {task.name}  {task.id}
                    <button onClick={() => handleEditTask(task.id)}>Edit</button>
                    <button onClick={() => dispatch(deleteTask({day, id:task.id}))}>Delete</button>
                </li>
            ))}
        </ul>
    );
};


export default TaskList;
