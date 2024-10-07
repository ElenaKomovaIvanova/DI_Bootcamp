import {useState} from 'react'
import './App.css'
import AgeCouter from "./conponents/AgeCouter.jsx";
import {Provider} from "react-redux";
import store from "./app/store.js";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [count, setCount] = useState(0)

    return (
        <Provider store={store}>
            <AgeCouter/>
        </Provider>
    )
}

export default App
