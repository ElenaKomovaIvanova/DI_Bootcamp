import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTask, editTask, deleteTask } from './actions/actions.js';
import DatePicker from './components/DatePicker.jsx';
import TaskList from './components/TaskList.jsx';
import TaskForm from './components/TaskForm.jsx';

const App = ({ tasks, addTask, editTask, deleteTask }) => {
    const [selectedDay, setSelectedDay] = useState(new Date().toISOString().substr(0, 10));

    const handleAddTask = (taskName) => {
        const newTask = { id: Date.now(), name: taskName, completed: false };
        addTask(selectedDay, newTask);
    };

    return (
        <div>
            <h1>Planner Application</h1>
            <DatePicker onDateChange={setSelectedDay} />

            {tasks[selectedDay] && tasks[selectedDay].length > 0 ? (
                <TaskList
                    tasks={tasks[selectedDay]}
                    editTask={editTask}
                    deleteTask={deleteTask}
                    selectedDay={selectedDay}
                />
            ) : (
                <p>No tasks for this day</p>
            )}

            <TaskForm addTask={handleAddTask} />
        </div>
    );
};


const mapStateToProps = (state) => ({
    tasks: state.tasksByDay,
});

const mapDispatchToProps = {
    addTask,
    editTask,
    deleteTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
