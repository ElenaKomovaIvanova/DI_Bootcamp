import {
    createUser,
    getAllUsers,
    getUserByUsername,
    checkPassword,
    getUserById,
    updateUser
} from '../models/postModel.js';
import {hashPassword} from "./userController.js";


// done
export const fetchUsers = async (req, res) => {
    try {
        const users = await getAllUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// done
export const fetchUserExisting = async (req, res) => {
    try {
        const user = await getUserById(req.params.id);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
// done
export const updateExistingUser = async (req, res) => {
    try {
        const userFromReq = req.body;
        console.log(userFromReq.password);
        if (userFromReq.password) {
            userFromReq.password = await hashPassword(userFromReq.password);
        }
        const result = await updateUser(req.params.id, userFromReq);
        const { user, hashpwd } = result;
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// done
export const createNewUser = async (req, res) => {
    try {
        const userFromReq = req.body;
        const isUserExist = await getUserByUsername(userFromReq.username);
        if (isUserExist) {
            return res.status(409).json({ error: 'User already exists' }); // Добавляем return для предотвращения дальнейшего выполнения
        }
        userFromReq.password = await hashPassword(userFromReq.password);
        const { newUser } = await createUser(userFromReq);
        res.status(201).json(newUser[0]);
    } catch (error) {
        console.log('+');
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// done
export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await getUserByUsername(username);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        console.log(user);
        const isPasswordCorrect = await checkPassword(username, password);
        console.log(isPasswordCorrect);
        if (!isPasswordCorrect) {
            return res.status(401).json({ error: 'Invalid password' });
        }
        res.json("You are logged in to the site");
    } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
    }
};
