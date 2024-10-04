import React, { useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import { pickDate} from "../PlannerSlice.js";


const DatePicker = () => {
    const selectedDate = useSelector((state) => state.plannerStore.pickedDate);

    const dispatch = useDispatch();

    const handleDateChange = (e) => {
        const newDate = e.target.value;
        dispatch(pickDate(newDate));
    };

    return (
        <div>
            <label>Day: </label>
            <input type="date" value={selectedDate} onChange={handleDateChange} />
        </div>
    );
};

export default DatePicker;
