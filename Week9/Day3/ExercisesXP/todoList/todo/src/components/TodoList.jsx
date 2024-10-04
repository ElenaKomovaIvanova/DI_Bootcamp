// TodoList.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { toggleTask, removeTask } from '../todoSlice.js';
import { useDispatch } from 'react-redux';
import CompleteTodos from "./CompleteTodos.jsx";
import RemoveTodos from "./RemoveTodos.jsx";

const TodoList = () => {
    const tasks = useSelector((state) => state.todoStore.tasks || []); // Получаем задачи из хранилища
    const dispatch = useDispatch();

    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id}>
                    <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                        Name: {task.name} , Status: {task.completed ? 'Completed' : 'Active'}<br/>
                    </span>
                    <CompleteTodos id={task.id} completed={task.completed} />
                    <RemoveTodos id={task.id} />
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
