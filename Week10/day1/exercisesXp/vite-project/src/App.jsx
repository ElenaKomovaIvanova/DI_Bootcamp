import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserData from "./components/UserData.jsx";
import {Provider} from "react-redux";
import store from './app/store.js'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [count, setCount] = useState(0)

    return (
        <Provider store={store}>
            <UserData/>
        </Provider>
    )
}

export default App
