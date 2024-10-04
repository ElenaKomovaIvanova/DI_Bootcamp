import { useContext } from 'react';
import { EDIT_STATUS, TaskContext } from './App.jsx';

const TaskStatus = ({ id, currentStatus }) => {
    const { dispatch } = useContext(TaskContext);

    const handleToggleStatus = () => {
        dispatch({ type: EDIT_STATUS, payload: { id, status: !currentStatus } });
    };

    return (
        <div>
            <button onClick={handleToggleStatus}>
                {currentStatus ? 'Complete' : 'Return to Active'}
            </button>
        </div>
    );
};

export default TaskStatus;
