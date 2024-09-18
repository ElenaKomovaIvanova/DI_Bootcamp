const loginForm = document.getElementById('loginForm');
const loginBtn = document.getElementById('loginBtn');
const inputs = loginForm.querySelectorAll('input');

inputs.forEach(input => {
    input.addEventListener('input', () => {
        const allFilled = [...inputs].every(input => input.value.trim() !== "");
        loginBtn.disabled = !allFilled;
    });
});

const login = async (event) => {
    event.preventDefault()
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });
        console.log(response);
        const data = await response.json();
        console.log(data);
        document.getElementById("messageLogin").textContent = data.message;
    } catch (error) {
        document.getElementById("messageLogin").textContent = 'Error register';
    }
};

loginBtn.addEventListener('click', async (event) => {
    await login(event);
});

