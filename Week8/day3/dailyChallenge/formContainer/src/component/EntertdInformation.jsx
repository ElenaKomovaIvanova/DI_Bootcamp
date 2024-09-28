import React from 'react';

const EntertdInformation = ({ formData }) => {
    return (
        <div id = "enteredInformation">
            <h2>Entered information:</h2>
            <p>Your name: {formData.firstName} {formData.lastName}</p>
            <p>Your age: {formData.age}</p>
            <p>Your gender: {formData.gender}</p>
            <p>Your destination: {formData.destination}</p>
            <h4>
                Your dietary restrictions:</h4>
            <p>Nuts Free: {formData.nutsFree ? 'Yes' : 'No'}</p>
            <p>Lactose Free: {formData.lactoseFree ? 'Yes' : 'No'}</p>
            <p>Vegan: {formData.vegan ? 'Yes' : 'No'}</p>
        </div>
    );
};

export default EntertdInformation;
