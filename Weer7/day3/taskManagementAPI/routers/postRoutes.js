import express from 'express';

import {
    createTask,
    fetchAllTask,
    fetchTask,
    updateTask,
    deleteTask
} from '../controllers/taskController.js';

export const router = express.Router();

router.post('/tasks', createTask);
router.get('/tasks', fetchAllTask);
router.get('/tasks/:id', fetchTask);
router.put('/tasks/:id', updateTask);
router.delete('/tasks/:id', deleteTask);
router.get('/', (req, res) => {
    res.send('Welcome back!');
})

