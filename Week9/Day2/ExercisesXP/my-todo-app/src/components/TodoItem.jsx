import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodo } from '../actions/todoActions';

const TodoItem = ({ todo }) => {
    const dispatch = useDispatch();

    return (
        <li>
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.text}
            </span>
            <button onClick={() => dispatch(toggleTodo(todo.id))}>
                {todo.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
        </li>
    );
};

export default TodoItem;
