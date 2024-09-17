import express from 'express';
import {
    fetchAllBooks,
    fetchBookById,
    createNewBook,
} from '../controllers/postController.js';


export const router = express.Router();

router.get('/books', fetchAllBooks);
router.get('/books/:bookId', fetchBookById);
router.post('/books', createNewBook);

