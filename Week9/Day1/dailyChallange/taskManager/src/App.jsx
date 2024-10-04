import { createContext, useReducer, useRef } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import TaskList from './TaskList.jsx';
import TasksFilter from "./TasksFilter.jsx";

export const TaskContext = createContext();

const initialState = {
    tasks: [],
    filteredTasks: [],
};

const ADD_TASK = 'add_task';
export const REMOVE_TASK = 'remove_task';
export const EDIT_TASK = 'edit_task';
export const EDIT_STATUS = 'edit_status';
export const FILTER_TASKS = 'filter_tasks';


const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK: {
            const newTask = [...state.tasks, { id: uuidv4(), name: action.payload, status: true }];
            return { ...state, tasks: newTask, filteredTasks: newTask }; // Обновляем обе копии
        }
        case REMOVE_TASK: {
            const filteredTasks = state.tasks.filter(task => task.id !== action.payload);
            return { ...state, tasks: filteredTasks, filteredTasks };
        }
        case EDIT_TASK: {
            const updatedTasks = state.tasks.map(task =>
                task.id === action.payload.id
                    ? { ...task, name: action.payload.name }
                    : task
            );
            return { ...state, tasks: updatedTasks, filteredTasks: updatedTasks };
        }
        case EDIT_STATUS: {
            const updatedStatus = state.tasks.map(task =>
                task.id === action.payload.id
                    ? { ...task, status: action.payload.status }
                    : task
            );
            return { ...state, tasks: updatedStatus, filteredTasks: updatedStatus };
        }
        case FILTER_TASKS: {
            const filterValue = action.payload.filterValue.toLowerCase(); // Приводим к нижнему регистру
            const filteredTasks = state.tasks.filter(task =>
                task.name.toLowerCase().includes(filterValue)
            );
            return { ...state, filteredTasks }; // Обновляем только отфильтрованные задачи
        }
        default:
            return state;
    }
};



function App() {
    const [state, dispatch] = useReducer(taskReducer, initialState);
    const inputRef = useRef();

    const addTask = () => {
        const value = inputRef.current.value.trim();
        if (value === '') return;
        dispatch({ type: ADD_TASK, payload: value });
        inputRef.current.value = '';
    };



    return (
        <>
            <TaskContext.Provider value={{ state, dispatch }}>
                <h2>Add Task</h2>
                <div>
                    <input placeholder="Add Task" ref={inputRef} />
                    <button onClick={addTask}>Add</button>
                </div>
                <div>
                    <h2>List</h2>
                    <TasksFilter tasks={state.filteredTasks} />
                    <TaskList />
                </div>
            </TaskContext.Provider>
        </>
    );
}

export default App;
