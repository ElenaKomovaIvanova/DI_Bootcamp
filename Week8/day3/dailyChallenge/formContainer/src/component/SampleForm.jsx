import React, { useState, useEffect } from 'react';

const SampleForm = ({ onFormChange }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");
    const [selectedGender, setGender] = useState('');
    const [destination, setDestination] = useState('');
    const [nutsFree, setNutsFree] = useState(false);
    const [lactoseFree, setLactoseFree] = useState(false);
    const [vegan, setVegan] = useState(false);

    useEffect(() => {
        onFormChange({
            firstName,
            lastName,
            age,
            gender: selectedGender,
            destination,
            nutsFree,
            lactoseFree,
            vegan
        });
    }, [firstName, lastName, age, selectedGender, destination, nutsFree, lactoseFree, vegan, onFormChange]);

    return (
        <form id="sample-form-container">
            <h1>Sample Form</h1>
            <div id = "inputForm">
            <input class="text"
                type="text"
                placeholder="First Name"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />
            <input class="text"
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
            <input class="text"
                type="text"
                placeholder="Age"
                name="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
            />
            <label>
                <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={selectedGender === 'Male'}
                    onChange={(e) => setGender(e.target.value)}
                />
                Male
            </label>
            <label>
                <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={selectedGender === 'Female'}
                    onChange={(e) => setGender(e.target.value)}
                />
                Female
            </label>
            <label>
                Select your destination:
                <select value={destination} onChange={(e) => setDestination(e.target.value)}>
                    <option value="">--Select Destination--</option>
                    <option value="Japan">Japan</option>
                    <option value="Brazil">Brazil</option>
                    <option value="Thailand">Thailand</option>
                </select>
            </label>
            <div id = "restrictions">
                Dietary restrictions:
                <label>
                    <input
                        type="checkbox"
                        checked={nutsFree}
                        onChange={(e) => setNutsFree(e.target.checked)}
                    />
                    Nuts Free
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={lactoseFree}
                        onChange={(e) => setLactoseFree(e.target.checked)}
                    />
                    Lactose Free
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={vegan}
                        onChange={(e) => setVegan(e.target.checked)}
                    />
                    Vegan
                </label>
            </div>
            <button>Submit</button>
            </div>
        </form>
    );
};

export default SampleForm;
