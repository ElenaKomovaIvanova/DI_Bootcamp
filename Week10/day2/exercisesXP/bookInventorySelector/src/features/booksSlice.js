// src/features/postsSlice.js
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const initialState = {
    books:  [
        { id: 1, title: 'Dune', author: 'Frank Herbert', genre: 'Science Fiction' },
        { id: 2, title: 'The Shining', author: 'Stephen King', genre: 'Horror' },
        { id: 3, title: 'Harry Potter and the Sorcerer\'s Stone', author: 'J.K. Rowling', genre: 'Fantasy' },
        { id: 4, title: 'Neuromancer', author: 'William Gibson', genre: 'Science Fiction' },
        { id: 5, title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasy' },
        { id: 6, title: 'It', author: 'Stephen King', genre: 'Horror' },
    ],
};




const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
    },
});

export const selectBooksState = (state) => state.books;

export default booksSlice.reducer;
