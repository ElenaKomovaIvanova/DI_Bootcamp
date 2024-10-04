import { ADD_TASK, EDIT_TASK, DELETE_TASK } from '../actions/actions.js'

const initialState = {
    tasksByDay: {},
};

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK: {
            const { day, task } = action.payload;
            return {
                ...state,
                tasksByDay: {
                    ...state.tasksByDay,
                    [day]: [...(state.tasksByDay[day] || []), task],
                },
            };
        }
        case EDIT_TASK: {
            const { day, taskId, updatedTask } = action.payload;
            return {
                ...state,
                tasksByDay: {
                    ...state.tasksByDay,
                    [day]: state.tasksByDay[day].map(task =>
                        task.id === taskId ? { ...task, ...updatedTask } : task
                    ),
                },
            };
        }
        case DELETE_TASK: {
            const { day, taskId } = action.payload;
            return {
                ...state,
                tasksByDay: {
                    ...state.tasksByDay,
                    [day]: state.tasksByDay[day].filter(task => task.id !== taskId),
                },
            };
        }
        default:
            return state;
    }
};

export default taskReducer;
