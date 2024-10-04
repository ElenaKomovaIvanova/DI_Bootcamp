import React from 'react';
import { Provider } from 'react-redux';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import store from "./store/store.js";

const App = () => {
    return (
        <Provider store={store}>
            <h1>Todo List</h1>
            <AddTodo />
            <TodoList />
        </Provider>
    );
};

export default App;
