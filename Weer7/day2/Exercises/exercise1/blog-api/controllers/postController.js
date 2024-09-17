import {createPost, deletePost, getAllPosts, getPostById, updatePost} from '../models/postModel.js';

export const fetchAllPosts = async (req, res) => {
    try {
        const posts = await getAllPosts();
        res.json(posts);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const fetchPostById = async (req, res) => {
    try {
        const post = await getPostById(req.params.id);
        if (post) {
            res.json(post);
        } else {
            res.status(404).json({ error: 'Post not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const createNewPost = async (req, res) => {
    try {
        const [post] = await createPost(req.body);
        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const updateExistingPost = async (req, res) => {
    try {
        const [post] = await updatePost(req.params.id, req.body);
        if (post) {
            res.json(post);
        } else {
            res.status(404).json({ error: 'Post not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const deleteExistingPost = async (req, res) => {
    try {
        const count = await deletePost(req.params.id);
        if (count) {
            res.status(204).end();
        } else {
            res.status(404).json({ error: 'Post not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
