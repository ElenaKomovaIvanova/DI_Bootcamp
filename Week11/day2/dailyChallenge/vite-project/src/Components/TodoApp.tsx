import React, { useState } from 'react';
import List from './List';

interface Todo {
    id: number;
    text: string;
}

const TodoApp: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [text, setText] = useState<string>('');

    const addTodo = () => {
        if (text.trim()) {
            const newTodo: Todo = {
                id: todos.length + 1,
                text: text,
            };
            setTodos((prevTodos) => [...prevTodos, newTodo]);
            setText('');
        }
    };

    return (
        <div>
            <h1>Todo List</h1>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={addTodo}>Add Todo</button>

            <List
                items={todos}
                renderItem={(todo) =>
                    <li key={todo.id}>
                        <span>{todo.text}</span> - <span>{todo.id}</span>
                    </li>
                }
            />
        </div>
    );
};

export default TodoApp;
