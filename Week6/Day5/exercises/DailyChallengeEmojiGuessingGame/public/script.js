// script.js (Клиентская сторона)
import { fetchEmojis, getRandomEmojiAndIds } from './api.js'; 
let score = 0;
let currentUser = '';


document.getElementById('registerBtn').addEventListener('click', async () => {
    const username = document.getElementById('username').value;
    if (username) {
        try {
            const response = await fetch('/api/users');
            const users = await response.json();
            const userExists = users.some(user => user.username === username);
            if (!userExists) {
                let user = {
                    username: username,
                    score: 0
                };
                const registerResponse = await fetch('/api/register', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(user)
                });
                if (registerResponse.ok) {
                    alert(`${username} registered!`);
                    currentUser = username; 
                    displayEmojiGame();
                    document.getElementById('userForm').classList.add('hidden');
                    document.getElementById('startGame').classList.add('hidden');
                } else {
                    alert('Error registering user: ' + await registerResponse.text());
                }
            } else {
                alert(`${username} already registered!`);
            }
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    } else {
        alert('Enter your username');
    }
});

document.getElementById('loginBtn').addEventListener('click', async () => {
    const username = document.getElementById('username').value;
    try {
        const response = await fetch('/api/users');
        const users = await response.json();
        const user = users.find(user => user.username === username);
        if (user) {
            alert(`Welcome, ${username}!`);
            currentUser = username; 
            score = user.score; 
            displayEmojiGame();
            document.getElementById('userForm').classList.add('hidden');
            document.getElementById('startGame').classList.add('hidden');          
        } else {
            alert('User not found. Please register.');
        }
    } catch (error) {
        console.error('Error fetching users:', error);
    }
});

document.getElementById('startGame').addEventListener('click', async () => {
    document.getElementById('userForm').classList.remove('hidden');
    await fetchEmojis(); 
    const response = await fetch('/api/users');

});

document.getElementById('finishGame').addEventListener('click', async () => {
    document.getElementById('userForm').classList.add('hidden');
    document.getElementById('emojiDisplay').classList.add('hidden');
    if (currentUser) {
        try {
            const response = await fetch('/api/users');
            const users = await response.json();
            const user = users.find(user => user.username === currentUser);
            if (user) {
                user.score = score;
                await fetch('/api/saveUserData', {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(user)
                });

                alert('Game data saved!');
                score = 0;
                currentUser = '';
                document.getElementById('startGame').classList.remove('hidden');
            } else {
                alert('User not found.');
            }
        } catch (error) {
            console.error('Error saving user data:', error);
        }
    } else {
        alert('Enter your username');
    }
});

const displayEmojiGame = async () => {
    try {
        const { randomEmoji, randomIds } = getRandomEmojiAndIds();

        if (randomEmoji && randomIds.length === 3) {
            document.getElementById('emojiDisplay').classList.remove('hidden');
            document.getElementById('emoji').textContent = randomEmoji.emoji;
            document.getElementById('score').value = score;

            const optionsContainer = document.getElementById('options');
            optionsContainer.innerHTML = '';

            [randomEmoji.id, ...randomIds].sort(() => 0.5 - Math.random()).forEach(option => {
                const button = document.createElement('button');
                button.textContent = option;
                button.addEventListener('click', () => {
                    let scoreElement = document.getElementById('score');
                    
                    if (option === randomEmoji.id) {
                        alert('Right!');
                        score += 1;
                    } else {
                        alert('Wrong!');
                    }
                    displayEmojiGame();
                    scoreElement.value = score;
                });
                optionsContainer.appendChild(button);
            });
        } else {
            alert('Failed to load emoji. Please try again later.');
        }
    } catch (error) {
        console.error('Error when receiving emoji:', error);
    }
};


