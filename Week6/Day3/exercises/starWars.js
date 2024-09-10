const baseUrl = 'https://www.swapi.tech/api/people/';
const fildPerson = document.getElementById('person');

function loadPicture() {
    fildPerson.innerHTML = '';
    fildPerson.textContent = 'Loading...';
    const icon = document.createElement('i');
    icon.className = 'fa-solid fa-spinner fa-spin-pulse fa-6x';
    icon.style.color = '#FFD43B';
    for (let i = 0; i < 3; i++) {
        const lineBreak = document.createElement('br');
        fildPerson.appendChild(lineBreak);
    }
    fildPerson.appendChild(icon);
}

function showNotFoundMessage() {
    fildPerson.innerHTML = '<p> Oh No! That person isnt available. <p>';
}


async function getRandomPerson(event) {
    loadPicture();
    event.preventDefault();
    let id = Math.floor(Math.random() * 90) + 1;
    try {
        const response = await fetch(`${baseUrl}${id}`);
        if (response.status !== 200) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const objectPerson = await response.json();
        console.log(objectPerson);
        renderPerson(objectPerson.result.properties);
    } catch (error) {
        console.error('error:', error);
        showNotFoundMessage();
    }
}

function renderPerson(person) {
    fildPerson.innerHTML = '';
    const name = document.createElement('h3');
    name.textContent = person.name;
    const height = document.createElement('p');
    height.textContent = `Height: ${person.height}`;
    const gender = document.createElement('p');
    gender.textContent = `Gender: ${person.gender}`;
    const birthYear = document.createElement('p');
    birthYear.textContent = `Birth Year: ${person.birth_year}`;
    setTimeout(() => {
        fildPerson.appendChild(name);
    }, 500); // задержка в 1 секунду

    setTimeout(() => {
        fildPerson.appendChild(height);
    }, 1000); // задержка в 2 секунды

    setTimeout(() => {
        fildPerson.appendChild(gender);
    }, 1500); // задержка в 3 секунды

    setTimeout(() => {
        fildPerson.appendChild(birthYear);
    }, 2000);
}

document.querySelector('button').addEventListener('click', getRandomPerson);