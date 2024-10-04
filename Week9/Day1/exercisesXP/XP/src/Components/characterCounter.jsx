import React from 'react';
import {useRef} from "react";

const CharacterCounter = () => {

    const [value, setValue] = React.useState(0);

    const inputRef = useRef(null);

    const handleInputChange = () => {
        const textLength = inputRef.current.value.length;
        setValue(textLength);
        // Update the character count based on textLength
    };

    return (
        <div>
            <h1>Character Counter</h1>
            <textarea
                ref={inputRef}
                onChange={handleInputChange}
                placeholder="Type something..."></textarea>
            <p>Character Count: {value}</p>
        </div>
    );
}

export default CharacterCounter;