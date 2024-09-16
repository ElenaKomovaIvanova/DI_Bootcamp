import express from 'express';

const router = express.Router();

const todos = [
    { id: 1, to_do: 'Learn JavaScript' },
    { id: 2, to_do: 'Build a REST API' },
    { id: 3, to_do: 'Deploy the API' },
];


router.get('/', (req, res) => {
    res.send('Hello, World!');
});


router.get('/todos', (req, res) => {
    res.json(todos);
});

router.post('/todos', (req, res) => {
    const { to_do } = req.body;
    const newTodo = { id: todos.length + 1, text: to_do };
    todos.push(newTodo);
    res.json(newTodo);
});

router.put('/todos/:id', (req, res) => {
    const { id } = req.params;
    const { to_do } = req.body;
    const todo = todos.find(t => t.id == id);
    if (!todo) {
        return res.status(404).json({ error: 'Todo not found' });
    }
    todo.to_do = to_do;
    res.status(201).json(todo);
});

router.delete('/todos/:id', (req, res) => {
    const { id } = req.params;
    const index = todos.findIndex(t => t.id == id);
    if (index === -1) {
        return res.status(404).json({ error: 'Todo not found' });
    }
    todos.splice(index, 1);
    res.status(204).send();
});

export default router;