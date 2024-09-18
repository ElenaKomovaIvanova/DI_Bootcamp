import fs from 'fs/promises';

export const writeUser = async (filePath, newUser) => {
    try {
        const fileData = await fs.readFile(filePath, 'utf-8');
        const users = JSON.parse(fileData);

        newUser.id = users.length + 1;
        users.push(newUser);

        await fs.writeFile(filePath, JSON.stringify(users, null, 2));
        return newUser;
    } catch (error) {
        throw new Error('Error writing users file');
    }
};

export const readAllUsers = async (filePath) => {
    try {
        const fileData = await fs.readFile(filePath, 'utf-8');
        return JSON.parse(fileData);
    } catch (error) {
        throw new Error('Error reading user file');
    }
};

export const updateUser = async (filePath, user, index) => {
    try {
        const fileData = await fs.readFile(filePath, 'utf-8');
        const users = JSON.parse(fileData);
        users[index] = user;
        const updUser = users[index];
        await fs.writeFile(filePath, JSON.stringify(users, null, 2));
        return updUser;
    } catch (error) {
        throw new Error('Error writing tasks file');
    }
};
