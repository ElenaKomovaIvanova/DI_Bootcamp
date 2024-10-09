import {useState} from 'react'
import store from './app/store.js'
import './App.css'
import {Provider} from "react-redux";
import TaskList from "./components/TaskList.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
    const [count, setCount] = useState(0)

    return (
        <Provider store={store}>
            <TaskList/>
        </Provider>
    )
}

export default App
