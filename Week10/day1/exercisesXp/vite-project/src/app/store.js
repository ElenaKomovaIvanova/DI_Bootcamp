// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../features/usersSlice';
import {thunk} from "redux-thunk";
import {logger} from "redux-logger/src";



const store = configureStore({
    reducer: {
        users: usersReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
