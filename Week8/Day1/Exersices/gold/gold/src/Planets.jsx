import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const Planets = () => {
const planets = ['Mars', 'Venus', 'Jupiter', 'Earth', 'Saturn', 'Neptune'];
return (
    <>
        {planets.map((planet) => (
            <ul className="list-group">
                <li className="list-group-item">{planet}</li>
            </ul>
            )
        )}
    </>
)
}


export default Planets;