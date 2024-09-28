import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

app.get('/api/hello', (req, res) => {
    res.send({ message: 'Hello From Express' });
});

app.post('/api/world', (req, res) => {
    const requestBody = req.body;
    res.send(requestBody);
});