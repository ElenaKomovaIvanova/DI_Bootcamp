import express from 'express';
import { router } from './routers/postRoutes.js';


const app = express();
const port = 3000;
app.use(express.json());

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