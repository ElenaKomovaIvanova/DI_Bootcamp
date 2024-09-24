import React, {useEffect, useState} from 'react';


const Color = () => {
    const[color, favoriteColor ] = useState("red");

    useEffect(() => {
        favoriteColor("yellow");
        alert("useEffect reached");
    }, []);

    const changeColorToBlue = () => {
        favoriteColor("blue");
    };

    return (
        <div>
            <h1> My Favorite Color is {color} </h1>
            <button onClick={changeColorToBlue}>Change Color</button>
        </div>
    )
}

export default Color;