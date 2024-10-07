// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import {thunk} from "redux-thunk";
import ageCounterReducer from '../features/ageCounterSlice.js';
import {logger} from "redux-logger/src";



const store = configureStore({
    reducer: {
        ageCounter: ageCounterReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
