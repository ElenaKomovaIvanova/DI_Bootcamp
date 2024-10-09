import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { addTask, selectTasksState, deleteTask, editTask, updateTaskStatus } from '../features/tasksSlice.js';
import CategorySelector from "./CategorySelector.jsx";
import { selectCategoryState } from "../features/categoriesSlice.js";
import 'bootstrap/dist/css/bootstrap.min.css';


const TaskList = () => {
    const [tasksShow, setTasksShow] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [editingTask, setEditingTask] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState();
    const [newNameEditingTask, setNewNameEditingTask] = useState('');

    const categories = useSelector(selectCategoryState);
    const dispatch = useDispatch();
    const allTasks = useSelector(selectTasksState);

    const handleButtonAdd = (e) => {
        e.preventDefault();
        const task = { id: uuidv4(), name: newTask, status: "New task", category: selectedCategory };
        dispatch(addTask(task));
        setNewTask('');
        setSelectedCategory('');
    };

    const handleButtonDelete = (id) => {
        dispatch(deleteTask(id));
    };

    const handleButtonStartEdit = (task) => {
        setEditingTask(task.id);
        setNewNameEditingTask(task.name);
    };

    const handleButtonEdit = (id) => {
        dispatch(editTask({ id, newName: newNameEditingTask }));
        setEditingTask(null);
        setNewNameEditingTask('');
    };

    const handleChangeStatus = (id, status) => {
        dispatch(updateTaskStatus({ id, newStatus: status }));
    };

    useEffect(() => {
        setTasksShow(allTasks.tasks);
    }, [allTasks]);

    return (
        <div className="container mt-4">
            <h2>Task List</h2>
            <CategorySelector setTasksShow={setTasksShow} />
            <form className="mb-4">
                <div className="input-group">
                    <input
                        type='text'
                        className="form-control"
                        placeholder="New Task"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                    />
                    <select
                        className="form-select"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        <option value="">Select Category</option>
                        {categories.length > 0 ? (
                            categories.map(category => (
                                <option key={category.id} value={category.name}>{category.name}</option>
                            ))
                        ) : (
                            <option disabled>No categories available</option>
                        )}
                    </select>
                    <button type='submit' className='btn btn-primary' onClick={handleButtonAdd}>
                        Add Task
                    </button>
                </div>
            </form>
            <ul className="list-group">
                {tasksShow && tasksShow.length > 0 ? (
                    tasksShow.map(task => (
                        <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
                            {editingTask !== task.id ? (
                                <div>
                                    <strong>{task.name}</strong>
                                    <div>Status: {task.status}</div>
                                </div>
                            ) : (
                                <div>
                                    <input
                                        type='text'
                                        value={newNameEditingTask}
                                        onChange={(e) => setNewNameEditingTask(e.target.value)}
                                    />
                                </div>
                            )}
                            <div>
                                <button className="btn btn-danger me-2" onClick={() => handleButtonDelete(task.id)}>Remove</button>
                                {editingTask !== task.id ? (
                                    <>
                                        <button className="btn btn-warning me-2" onClick={() => handleButtonStartEdit(task)}>Edit</button>
                                        <select
                                            className="form-select"
                                            value={task.progress}
                                            onChange={(e) => handleChangeStatus(task.id, e.target.value)}
                                        >
                                            <option value="New task">New task</option>
                                            <option value="Task at work">Task at work</option>
                                            <option value="Task completed">Task completed</option>
                                        </select>
                                    </>
                                ) : (
                                    <>
                                        <button className="btn btn-success me-2" onClick={() => handleButtonEdit(task.id)}>Save</button>
                                        <button className="btn btn-secondary" onClick={() => setEditingTask(null)}>Cancel</button>
                                    </>
                                )}
                            </div>
                        </li>
                    ))
                ) : (
                    <li className="list-group-item">No tasks available</li>
                )}
            </ul>
        </div>
    );
};

export default TaskList;
