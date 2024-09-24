import React, {useState} from "react";

const Garage  = () => {
    const [size, setSize] = useState('small');
    return (
        <div>
            <h1>Who lives in my {size} Garage?</h1>
        </div>
    );
};

export default Garage;