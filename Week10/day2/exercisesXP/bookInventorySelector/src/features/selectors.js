
// Select all books
import {selectBooksState} from "./booksSlice.js";
import {createSelector} from "@reduxjs/toolkit";

export const selectBooks = createSelector(
    [selectBooksState],
    (state) => state.books
);

// Select Horror books
export const selectHorrorBooks = createSelector(
    [selectBooksState],
    (state) => state.books.filter((book) => book.genre === 'Horror')
);

// Select Fantasy books
export const selectFantasyBooks = createSelector(
    [selectBooksState],
    (state) => state.books.filter((book) => book.genre === 'Fantasy')
);

// Select Science Fiction books
export const selectScienceFictionBooks = createSelector(
    [selectBooksState],
    (state) => state.books.filter((book) => book.genre === 'Science Fiction')
);