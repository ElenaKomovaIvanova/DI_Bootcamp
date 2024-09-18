const registerForm = document.getElementById('registerForm');
const registerBtn = document.getElementById('registerBtn');
const inputs = registerForm.querySelectorAll('input');
inputs.forEach(input => {
    input.addEventListener('input', () => {
        const allFilled = [...inputs].every(input => input.value.trim() !== "");
        registerBtn.disabled = !allFilled;
    });
});

const register = async (event) => {
    event.preventDefault()
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    console.log(firstName);
    try {
        const response = await fetch('/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ firstName, lastName, email, username, password })
        });
        console.log(response);
        const data = await response.json();
        console.log(data);
        document.getElementById("message").textContent = data.message;
    } catch (error) {
        document.getElementById("message").textContent = 'Error register';
    }
};


registerBtn.addEventListener('click', async (event) => {
    await register(event);
});

