// App.jsx
import React from 'react';

import {plannerSlice} from "./PlannerSlice.js";
import AddTask from "./components/AddTask.jsx";
import DatePicker from "./components/DatePicker.jsx";
import TaskList from "./components/TaskList.jsx";

function App() {

    return (
        <div>
            <h1>Daily Planner Application using React-Redux</h1>
            <DatePicker />
            <AddTask />
            <TaskList />
        </div>
    );
}

export default App;
