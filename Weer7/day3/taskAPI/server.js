import express from 'express';
import { router } from './routers/userRoutes.js';
import { fileURLToPath } from 'url';
import path from 'path';

const app = express();
const port = 3000;

app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(__dirname));

app.get('/register', (req, res) => {
    res.sendFile(path.resolve('register.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.resolve('login.html'));
});
app.use('/', router);

app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
