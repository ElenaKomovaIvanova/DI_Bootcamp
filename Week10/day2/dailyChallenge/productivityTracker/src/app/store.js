import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../features/tasksSlice';
import categoriesReducer  from '../features/categoriesSlice';
import {logger} from "redux-logger/src";
// import categoriesReducer from '../features/categoriesSlice';

const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        categories: categoriesReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;