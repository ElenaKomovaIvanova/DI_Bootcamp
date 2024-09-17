import {createBook, getAllBooks, getBookById} from '../models/postModel.js';

export const fetchAllBooks = async (req, res) => {
    try {
        const books = await getAllBooks();
        res.json(books);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const fetchBookById = async (req, res) => {
    try {
        const book = await getBookById(req.params.id);
        if (book) {
            res.json(book);
        } else {
            res.status(404).json({ error: 'Book not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const createNewBook = async (req, res) => {
    try {
        const [book] = await createBook(req.body);
        res.status(201).json(book);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
