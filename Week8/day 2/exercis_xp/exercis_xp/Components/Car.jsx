import React, {useState} from 'react';


const Car = (props) => {
    const [color, setCount] = useState('red');

    return (
        <div>
            <h1>This car is {color} {props.mod}</h1>
        </div>
    );
};

export default Car;