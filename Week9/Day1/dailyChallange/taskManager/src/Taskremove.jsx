import { useContext } from 'react';
import {REMOVE_TASK, TaskContext} from './App.jsx';



const Taskremove = ({ id }) => {
    const { dispatch } = useContext(TaskContext);

    const removeTask = () => {
        console.log("removeTask");
        dispatch({ type: REMOVE_TASK, payload: id }); // Исправлено: id передается как payload
    };


    return (
        <>
        <br/><button onClick={() =>removeTask()}>Remove</button>
        </>
    );
};

export default Taskremove;
