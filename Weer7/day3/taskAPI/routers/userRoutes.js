import express from 'express';

import {
    createUser,
    login,
    fetchAllUsers,
    fetchUser,
    changeUser
} from '../controllers/userController.js';

export const router = express.Router();

router.post('/register', createUser);
router.post('/login', login);
router.get('/users', fetchAllUsers);
router.get('/users/:id', fetchUser);
router.put('/users/:id', changeUser);
router.get('/', (req, res) => {
    res.send('Welcome back!');
})

