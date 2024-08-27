const planets = [
    'Mercury',
    'Venus',
    'Earth',
    'Mars',
    'Jupiter',
    'Saturn',
    'Uranus',
    'Neptune',
    'Pluto'
];

planets.forEach(planet => {
    const planetDiv = document.createElement('div');
    planetDiv.classList.add(planet);
    planetDiv.textContent = planet;
    document.body.appendChild(planetDiv)
});

const planetMercury = document.getElementsByClassName('Mercury')
planetMercury[0].style.backgroundColor = 'blue';

const planetVenus = document.getElementsByClassName('Venus')
planetVenus[0].style.backgroundColor = 'pink';

const planetEarth = document.getElementsByClassName('Earth')
planetEarth[0].style.backgroundColor = 'green';

const planetMars = document.getElementsByClassName('Mars')
planetMars[0].style.backgroundColor = 'red';

const planetJupiter = document.getElementsByClassName('Jupiter')
planetJupiter[0].style.backgroundColor = 'orange';

const planetSaturn = document.getElementsByClassName('Saturn')
planetSaturn[0].style.backgroundColor = 'grey';

const planetUranus = document.getElementsByClassName('Uranus')
planetUranus[0].style.backgroundColor = 'lightblue';

const planetNeptune = document.getElementsByClassName('Neptune')
planetNeptune[0].style.backgroundColor = 'indigo';

const planetPluto = document.getElementsByClassName('Pluto')
planetPluto[0].style.backgroundColor = 'purple';