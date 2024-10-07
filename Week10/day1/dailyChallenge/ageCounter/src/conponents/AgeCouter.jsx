import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {ageDownAsync, ageUpAsync, setAge} from "../features/ageCounterSlice.js";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const AgeCouter = () => {
    const dispatch = useDispatch();
    const age = useSelector((state) => state.ageCounter.age);
    const loading = useSelector((state) => state.ageCounter.loading);
    const [selectedDate, setSelectedDate] = useState("");

    const handleOnChange = (event) => {
        const currentDate = new Date();
        const inputDate = new Date(event.target.value);

        if (!isNaN(inputDate)) {
            setSelectedDate(event.target.value);

            let yearsDifference = currentDate.getFullYear() - inputDate.getFullYear();


            const isBirthdayPassed =
                currentDate.getMonth() > inputDate.getMonth() ||
                (currentDate.getMonth() === inputDate.getMonth() && currentDate.getDate() >= inputDate.getDate());

            if (!isBirthdayPassed) {
                yearsDifference -= 1;
            }

            dispatch(setAge({age: yearsDifference}));
        }
    };

    return (
        <div className="container-md mb-9 bg-light">
            <h3>Age counter:</h3><br/>
            <input className="form-control" type="date" value={selectedDate} onChange={handleOnChange}/><br/>
            <h4>Your age is: {age}</h4>
            <br/>
            <div className="btn-group" role="group" aria-label="Basic example">
                <button className="btn btn-primary" onClick={() => dispatch(ageUpAsync())}>Age Up</button>
                <button className="btn btn-primary" onClick={() => dispatch(ageDownAsync())}>Age Down</button>
            </div>
            <div className="mt-2"> {loading &&
                <div className="spinner-border text-warning" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>}
            </div>
        </div>
    );
};

export default AgeCouter;
