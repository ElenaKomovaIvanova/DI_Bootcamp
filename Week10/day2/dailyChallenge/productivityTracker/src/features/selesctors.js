import { createSelector } from '@reduxjs/toolkit';
import {selectTasksState} from "./tasksSlice.js";
import {selectCategoryState} from "./categoriesSlice.js";


export const selectTasksByStatus = (status) => createSelector(
    [selectTasksState],
    (state) => state.tasks.filter(task => task.status === status)
);


export const selectTasksByCategory = (name) => createSelector(
    [selectTasksState],
    (state) => state.tasks.filter(task => task.category === name) // Corrected here
);

export const selectCategoryById = (idCategory) => createSelector(
    [selectCategoryState],
    (categories) => categories ? categories.filter(category => category.id === idCategory) : []
);