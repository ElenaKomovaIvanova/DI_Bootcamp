import { useContext, useState } from 'react';
import { EDIT_TASK, TaskContext } from './App.jsx';

const TaskEdit = ({ id }) => {
    const { dispatch } = useContext(TaskContext);
    const [newName, setNewName] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = () => {
        if (newName.trim() === '') return;
        dispatch({ type: EDIT_TASK, payload: { id, name: newName } });
        setNewName('');
        setIsEditing(false);
    };

    return (
        <div>
            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={newName}
                        placeholder="Edit Task"
                        onChange={(e) => setNewName(e.target.value)}
                    />
                    <button onClick={handleEdit}>Save</button>
                </>
            ) : (
                <button onClick={() => setIsEditing(true)}>Edit</button>
            )}
        </div>
    );
};

export default TaskEdit;
