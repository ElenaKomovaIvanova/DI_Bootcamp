// counterSlice.js
import { createSlice } from '@reduxjs/toolkit';
import log from "eslint-plugin-react/lib/util/log.js";

const initialState = {
    tasks: {},
    pickedDate: new Date().toISOString().split('T')[0],
};

export const plannerSlice = createSlice({
    name: 'planner',
    initialState,
    reducers: {
        addTask: (state, action) => {
            const newTask = action.payload;
            state.tasks[state.pickedDate] = state.tasks[state.pickedDate] || [];
            state.tasks[state.pickedDate].push(newTask);
        },
        pickDate: (state, action) => {
            state.pickedDate = action.payload;
        },
        editTask: (state, action) => {
            const { day, id, newName} = action.payload;
            console.log(day, id, newName);
            const taskEdit = state.tasks[day].find(task => task.id === id);
            console.log(taskEdit);
            taskEdit.name = newName;
        },
        deleteTask: (state, action) => {
            const idToRemove = action.payload.id;
            const day = action.payload.day;
            state.tasks[day] = state.tasks[day].filter(task => task.id !== idToRemove);
        },

    },
});

export const { addTask, editTask, deleteTask, pickDate } = plannerSlice.actions;

export default plannerSlice.reducer
