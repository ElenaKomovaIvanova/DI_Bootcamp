import { configureStore } from '@reduxjs/toolkit';
import { logger } from "redux-logger";
import booksReducer from '../features/booksSlice.js'; // Используем правильное название редьюсера

const store = configureStore({
    reducer: {
        books: booksReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger), // Добавляем логгер
});

export default store;
