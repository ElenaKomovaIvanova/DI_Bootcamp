// src/features/usersSlice.js
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const initialState = {
    age: 0,
    date: new Date().toISOString(),
    loading: false,
};

export const ageUpAsync = createAsyncThunk('age/ageUp', async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(1); // Simulate age increment
        }, 1000);
    });
});

export const ageDownAsync = createAsyncThunk('age/ageDown', async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(-1); // Simulate age decrement
        }, 1000);
    });
});


const ageCounterSlice = createSlice({
    name: "ageCounter",
    initialState,
    reducers: {
        setAge: (state, action) => {
            state.age = action.payload.age;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(ageUpAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(ageUpAsync.fulfilled, (state, action) => {
                state.age += action.payload;
                state.loading = false;
            })
            .addCase(ageDownAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(ageDownAsync.fulfilled, (state, action) => {
                state.age += action.payload;
                state.loading = false;
            });
    },
});

export const {
    setAge,
} = ageCounterSlice.actions;


export default ageCounterSlice.reducer;
