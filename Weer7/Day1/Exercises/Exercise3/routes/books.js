import express from 'express';

const router = express.Router();

const books = [
    { id: 1, title: 'Book 1'},
    { id: 2, title: 'Book 2'},
    { id: 3, title: 'Book 3'},
];


router.get('/', (req, res) => {
    res.send('Hello, World!');
});


router.get('/books', (req, res) => {
    res.json(books);
});

router.post('/books', (req, res) => {
    const { title } = req.body;
    const newBook = { id: books.length + 1, title: title};
    books.push(newBook);
    res.json(newBook);
});

router.put('/books/:id', (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    const bookOld = books.find(b => b.id == id);
    if (!bookOld) {
        return res.status(404).json({ error: 'Todo not found' });
    }
    bookOld.title = title;
    res.status(201).json(bookOld);
});

router.delete('/books/:id', (req, res) => {
    const { id } = req.params;
    const index = books.findIndex(b => b.id == id);
    if (index === -1) {
        return res.status(404).json({ error: 'book not found' });
    }
    books.splice(index, 1);
    res.status(204).send();
});

export default router;