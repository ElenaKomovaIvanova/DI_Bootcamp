import express from 'express';

import {
    createNewPost,
    deleteExistingPost,
    fetchAllPosts,
    fetchPostById,
    updateExistingPost
} from '../controllers/postController.js';


export const router = express.Router();

router.get('/posts', fetchAllPosts);
router.get('/posts/:id', fetchPostById);
router.post('/posts', createNewPost);
router.put('/posts/:id', updateExistingPost);
router.delete('/posts/:id', deleteExistingPost);
router.get('/', (req, res) => {
    res.send('Welcome back!');
})

