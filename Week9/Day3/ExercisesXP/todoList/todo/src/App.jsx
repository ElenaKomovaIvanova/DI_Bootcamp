// App.jsx
import React from 'react';
import AddTodo from "./components/AddTodo.jsx";
import TodoList from "./components/TodoList.jsx";

function App() {

    return (
        <div>
            <h1>Todo List with React-Redux and Redux Toolkit</h1>
            <AddTodo /> {/* Компонент для добавления задач */}
            <TodoList/>
        </div>
    );
}

export default App;
