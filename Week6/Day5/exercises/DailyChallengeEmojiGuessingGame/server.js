import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { promises as fs } from 'fs';

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use(express.json());

const dataFilePath = path.join(__dirname, 'public', 'data.json');
let users = [];

app.get('/api/emojis', async (req, res) => {
    try {
        const data = await fs.readFile('./emojis.json', 'utf-8');
        res.json(JSON.parse(data));
    } catch (err) {
        res.status(500).json({ error: 'Error loading emoji.' });
    }
});

const loadUsers = async () => {
    try {
        const data = await fs.readFile(dataFilePath, 'utf-8');
        users = JSON.parse(data);
    } catch (err) {
        console.error('Error reading or parsing the file:', err);
    }
};

loadUsers();

app.get('/api/users', (req, res) => {
    res.json(users);
});

const saveUsers = async () => {
    try {
        await fs.writeFile(dataFilePath, JSON.stringify(users, null, 2), 'utf-8');
    } catch (err) {
        console.error('Error writing to the file:', err);
    }
};

app.post('/api/register', (req, res) => {
    const user = req.body;
    if (!user || !user.username) {
        return res.status(400).send('Invalid user data');
    }
    const userExists = users.some(u => u.username === user.username);
    if (userExists) {
        return res.status(400).send('User already exists');
    }
    users.push(user);
    saveUsers().then(() => {
        res.status(201).send('User registered');
    }).catch(err => {
        res.status(500).send('Error saving user');
    });
});

app.put('/api/saveUserData', async (req, res) => {
    try {
        const userData = req.body;
        await loadUsers();
        const userIndex = users.findIndex(user => user.username === userData.username);
        if (userIndex !== -1) {
            users[userIndex] = userData; 
        } else {
            users.push(userData);  
        }
        await saveUsers();
        res.status(200).send('User data saved successfully');
    } catch (error) {
        console.error('Error saving user data:', error);
        res.status(500).send('Error saving user data');
    }
});


app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});
