import {hashPassword, isValidPassword} from "./passwordController.js";
import {readAllUsers, updateUser, writeUser} from "../services/userService.js";
import { resolve } from "path";
import res from "express/lib/response.js";
import req from "express/lib/request.js";

const usersFilePath = resolve('data', 'users.json');

export const createUser = async (req, res) => {
    try {
        let { firstName, lastName, username, email, password } = req.body;
        const users = await readAllUsers(usersFilePath);
        const userExists = users.some(user => user.username === username || user.email === email);
        if (userExists) {
            return res.status(400).json({ message: "A user with the same username or email already exists" });
        }
        password = await hashPassword(password);

        const newUser = {
            id: users.length + 1,
            firstName,
            lastName,
            username,
            email,
            password,
        };
        const userCreated = await writeUser(usersFilePath, newUser);
        res.json({ message: "User registered successfully", user: userCreated });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const login = async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await hashPassword(password);
    const users = await readAllUsers(usersFilePath);
    const userExists = users.find(user => user.username == username);
    if (!userExists) {
        return res.status(400).json({ message: "Invalid username" });
    }
    const isValid = isValidPassword(password, userExists.password);
    if (!isValid) {
            return res.status(400).json({ message: "Invalid password" });
        }
    res.json({ message: "Login successful" });
}

export const fetchAllUsers = async (req, res) => {
    try {
        const users = await readAllUsers(usersFilePath);
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const fetchUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const users = await readAllUsers(usersFilePath);
        const user = users.find(user => user.id == userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const changeUser = async (req, res) => {
    try {
        const userId = Number(req.params.id);
        const users = await readAllUsers(usersFilePath);
        let user = users.find(user => user.id == userId);
        const index = users.indexOf(user);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const { firstName, lastName, username, email, password } = req.body;

        const updatedUser = {
            id: user.id,
            firstName: firstName ? firstName : user.firstName,
            lastName: lastName ? lastName : user.lastName,
            username: username ? username : user.username,
            email: email ? email : user.email,
            password
        };
        await updateUser(usersFilePath, updatedUser, index);
        res.json({ message: "User updated successfully", user: updatedUser });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}