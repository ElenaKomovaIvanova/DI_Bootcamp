import { useContext } from 'react';
import { TaskContext } from './App.jsx';
import Taskremove from './Taskremove.jsx';
import TaskEdit from "./TaskEdit.jsx";
import TaskStatus from "./TaskStatus.jsx";

const TaskList = () => {
    const { state } = useContext(TaskContext);

    const tasksToDisplay = state.filteredTasks.length > 0 ? state.filteredTasks : state.tasks;

    return (
        <>
            {tasksToDisplay.length > 0 ? (
                tasksToDisplay.map((item) => (
                    <div key={item.id}>
                        <span>Task:  {item.name}    </span>
                        <br/>Status:  {item.status ? (<span>active</span>) : (<span>completed</span>)}
                        <Taskremove id={item.id} />
                        <TaskEdit id={item.id} />
                        <TaskStatus id={item.id} currentStatus={item.status} />
                    </div>
                ))
            ) : (
                <p>No tasks available</p>
            )}
        </>
    );
};

export default TaskList;
