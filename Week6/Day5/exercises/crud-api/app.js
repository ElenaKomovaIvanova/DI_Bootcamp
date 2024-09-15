import express from 'express';
import { fetchPosts } from './data/dataService.js';

const app = express();
const port = 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get('/', (req, res) => {
    res.send('Welcome');
});

app.use(express.json());

app.get('/posts', async (req, res) => {
    const pos = await fetchPosts();
    if (pos) {
        console.log('Data has been successfully retrieved')
        res.json(pos);
    } else {
        res.status(404).send('Post not found');
    }
});
        