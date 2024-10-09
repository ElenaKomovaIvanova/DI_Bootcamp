import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    categories: []
};

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        addCategory: (state, action) => {
            const category  = action.payload;
            console.log(action.payload);
            state.categories.push(category);
        },
    }
})

export const selectCategoryState = (state) => state.categories.categories;

export const { addCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;