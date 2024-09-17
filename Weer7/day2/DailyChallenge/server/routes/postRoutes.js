import express from 'express';

import {
    fetchUsers,
    updateExistingUser,
    createNewUser,
    login,
    fetchUserExisting
} from '../controllers/postController.js';


export const router = express.Router();

router.post('/register', createNewUser);
router.post('/login', login);
router.get('/users', fetchUsers);
router.get('/users/:id', fetchUserExisting);
router.put('/users/:id', updateExistingUser);
router.get('/', (req, res) => {
    res.send('Welcome back!');
})

