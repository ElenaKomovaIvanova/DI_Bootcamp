const baseUrl = 'https://www.swapi.tech/api/people/';
const fildPerson = document.getElementById('person');
let homePlanet = 'Unknown'

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
        homePlanet = await getHomeWorld(objectPerson.result.properties.homeworld);
        renderPerson(objectPerson.result.properties, homePlanet);
    } catch (error) {
        console.error('error:', error);
        showNotFoundMessage();
    }
}

async function getHomeWorld(url) {
    try {
        const response = await fetch(url);
        if (response.status !== 200) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const objectHomeWorld = await response.json();
        return objectHomeWorld.result.properties.name;
        
    } catch (error) {
        console.error('error:', error);
    }
}

function renderPerson(person, home) {
    fildPerson.innerHTML = '';
    const name = document.createElement('h3');
    name.textContent = person.name;
    const height = document.createElement('div');
    height.textContent = `Height: ${person.height}`;
    const gender = document.createElement('div');
    gender.textContent = `Gender: ${person.gender}`;
    const birthYear = document.createElement('div');
    birthYear.textContent = `Birth Year: ${person.birth_year}`;
    const homeWorld = document.createElement('div');
    homeWorld.textContent = `Home World: ${home}`;
    fildPerson.appendChild(name);
    fildPerson.appendChild(height);
    fildPerson.appendChild(gender);
    fildPerson.appendChild(birthYear);
    fildPerson.appendChild(homeWorld);
}

document.querySelector('button').addEventListener('click', getRandomPerson);