import { useContext, useRef } from 'react';
import { TaskContext, FILTER_TASKS } from './App.jsx';

const TasksFilter = () => {
    const { dispatch } = useContext(TaskContext); // Получаем dispatch
    const filterInputRef = useRef();

    const handleFilter = () => {
        const filterValue = filterInputRef.current.value.trim();
        dispatch({ type: FILTER_TASKS, payload: { filterValue } });
        console.log(dispatch.filteredTasks)
    };

    return (
        <div>
            <input placeholder="Filter tasks" ref={filterInputRef} />
            <button onClick={handleFilter}>Filter</button>
        </div>
    );
};

export default TasksFilter;
