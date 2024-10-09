import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    tasks: []
};

const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action) => {
            const task = action.payload;
            state.tasks.push(task);
        },
        deleteTask: (state, action) => {
            console.log(action.payload);
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        },
        editTask: (state, action) => {
            const {id, newName} = action.payload;
            const task = state.tasks.find((task) => task.id === id);
            task.name = newName;
        },
        updateTaskStatus(state, action) {
            const { id, newStatus } = action.payload;
            const existingTask = state.tasks.find(task => task.id === id);
            if (existingTask) {
                existingTask.status = newStatus; // Обновляем состояние задачи
            }
        },
    }
})
export const selectTasksState = (state) => state.tasks;
export const { addTask, editTask, deleteTask, updateTaskStatus } = tasksSlice.actions;
export default tasksSlice.reducer;