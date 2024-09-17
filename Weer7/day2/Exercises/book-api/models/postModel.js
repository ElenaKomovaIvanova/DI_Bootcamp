import {db} from '../config/knexfile.js';

export const getAllBooks = () => db('books').select('*');
export const getBookById = (id) => db('books').where({ id }).first();
export const createBook = (book) => db('books').insert(book).returning('*');
