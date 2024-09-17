import express from 'express';
import { router } from './routes/postRoutes.js';

const app = express();
const port = 3000;

// Middleware для парсинга JSON
app.use(express.json());

// Подключение маршрутов
app.use('/', router);

// Обработка ошибок для несуществующих маршрутов
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

// Обработка общих ошибок
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
