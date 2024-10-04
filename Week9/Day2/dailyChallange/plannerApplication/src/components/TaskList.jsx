import React from 'react';

const TaskList = ({ tasks, editTask, deleteTask, selectedDay }) => {
    const handleEditTask = (taskId) => {
        const updatedTask = prompt('Enter new task name:'); // Добавляем способ получения обновленных данных
        if (updatedTask) {
            editTask(selectedDay, taskId, { name: updatedTask });
        }
    };

    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id}>
                    {task.name}
                    <button onClick={() => handleEditTask(task.id)}>Edit</button>
                    <button onClick={() => deleteTask(selectedDay, task.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};


export default TaskList;
