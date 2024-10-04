import { configureStore } from '@reduxjs/toolkit';
import toDoReducer from './todoSlice.js';

export const store = configureStore({
    reducer: {
        todoStore: toDoReducer, // добавляем редюсер счетчика в хранилище
    },
});
