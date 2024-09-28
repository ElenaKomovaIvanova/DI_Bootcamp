import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapCard from "./BootstrapCard.jsx";
import Planets from "./Planets.jsx";

function App() {


    return (
        <>
            <BootstrapCard/>
            <Planets />
        </>
    )
}

export default App
