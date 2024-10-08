import express from 'express';
import router from './routes/todos.js';



const app = express();

const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.use(express.json());

app.use("/", router);