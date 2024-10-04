import React, { useState } from 'react';

const DatePicker = ({ onDateChange }) => {
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().substr(0, 10));

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
        onDateChange(e.target.value);
    };

    return (
        <div>
            <label>Day: </label>
            <input type="date" value={selectedDate} onChange={handleDateChange} />
        </div>
    );
};

export default DatePicker;
