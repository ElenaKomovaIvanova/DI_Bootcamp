const planets = [
    { name: 'Mercury', color: 'darkblue', moons: 0 },
    { name: 'Venus', color: 'yellow', moons: 0 },
    { name: 'Earth', color: 'green', moons: 1 },
    { name: 'Mars', color: 'red', moons: 2 },
    { name: 'Jupiter', color: 'orange', moons: 79 },
    { name: 'Saturn', color: 'gray', moons: 83 },
    { name: 'Uranus', color: 'lightblue', moons: 27 },
    { name: 'Neptune', color: 'blue', moons: 14 },
    { name: 'Pluto', color: 'purple', moons: 4 },
];

const section = document.querySelector('.listPlanets');

planets.forEach(planet => {
    const planetDiv = document.createElement('div');
    planetDiv.classList.add('planet');
    planetDiv.style.backgroundColor = planet.color;

    const planetText = document.createElement('p');
    planetText.textContent = planet.name;
    planetDiv.appendChild(planetText);

    const distanceFromPlanet = 60; 

    for (let i = 0; i < planet.moons; i++) {
        const moonDiv = document.createElement('div');
        moonDiv.classList.add('moon');
        const angle = (i / planet.moons) * 2 * Math.PI; 
        const moonX = distanceFromPlanet * Math.cos(angle);
        const moonY = distanceFromPlanet * Math.sin(angle);

        moonDiv.style.left = `${50 + moonX}px`;
        moonDiv.style.top = `${50 + moonY}px`;

        planetDiv.appendChild(moonDiv);
    }

    section.appendChild(planetDiv);
});
