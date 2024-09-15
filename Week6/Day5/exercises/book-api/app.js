import express from 'express';

const app = express();
const port = 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get('/', (req, res) => {
    res.send('Welcome');
});

app.use(express.json());

const books = [
    {
      id: 1,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      publishedYear: 1960
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      publishedYear: 1949
    },
    {
      id: 3,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      publishedYear: 1925
    }
  ];
  
  app.get('/books/:id', (req, res) => {
    const { id } = req.params;
    const book = books.find(book => book.id == id);
    if (book) {
        res.status(200).json(book);
    } else {
        res.status(404).send('Book not found');
    }
});  

app.post('/books', (req, res) => {
    const { title, author, publishedYear } = req.body;
    const newBook = {
        id: books.length + 1,
        title,
        author,
        publishedYear
    };
    res.status(201).json(newBook);
});