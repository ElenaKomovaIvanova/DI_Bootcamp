import React, { useState } from "react";

const Events = (props) => {
    const clickMe = () => {
        alert('I was clicked');
    };

    const [isToggleOn , setIsToggleOn ] = useState(true);

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            alert(`The Enter was pressed, you input is: ${event.target.value}`);
        }
    };

    const handleToggle = (event) => {

        setIsToggleOn(prevState => !prevState);
    };



    return (
        <div>
            <button onClick={clickMe}>Click me</button>
            <br/><br/>
            <input
                onKeyDown={handleKeyDown}
            />
            <br/><br/>
            <button onClick={handleToggle}> Exercise 9 <br/>
                {isToggleOn ? "ON" : "OFF"}
            </button>
            <br/><br/>
        </div>
    );
};

export default Events;
