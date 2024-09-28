import React, { useState } from 'react';
import SampleForm from './component/SampleForm';
import EntertdInformation from './component/EntertdInformation';

const App = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        age: '',
        gender: '',
        destination: '',
        nutsFree: false,
        lactoseFree: false,
        vegan: false,
    });

    const handleFormChange = (newData) => {
        setFormData(newData);
    };

    return (
        <div>
            <SampleForm onFormChange={handleFormChange} />
            <EntertdInformation formData={formData} />
        </div>
    );
};

export default App;
