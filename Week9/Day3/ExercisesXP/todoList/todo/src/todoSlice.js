// counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tasks: [], // начальное значение
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTask: (state, action) => {
            const task = action.payload;
            state.tasks.push(task);
        },
        toggleTask: (state, action) => {
            const id = action.payload;
            const task = state.tasks.find((task) => task.id === id);
            task.completed = !task.completed;
        },
        removeTask: (state, action) => {
            const idToRemove = action.payload;
            state.tasks = state.tasks.filter(task => task.id !== idToRemove);
        },

    },
});

// Экспортируем экшены для использования в компонентах
export const { addTask, toggleTask, removeTask } = todoSlice.actions;

// Экспортируем редюсер для добавления в хранилище
export default todoSlice.reducer
