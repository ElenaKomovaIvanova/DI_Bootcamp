import { configureStore } from '@reduxjs/toolkit';
import plannerReducer from './PlannerSlice.js';

export const store = configureStore({
    reducer: {
        plannerStore: plannerReducer,
    },
});
