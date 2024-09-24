import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Car from "../Components/Car.jsx";
import Garage from "../Components/Garage.jsx";
import Events from "../Components/Events.jsx";
import Phone from "../Components/Phone.jsx";
import Color from "../Components/Color.jsx";

function App() {
    const carInfo = {name: "Ford", model: "Mustang"};

    return (
        <div>
            <div>
                <Car mod={carInfo.model}/>
            </div>
            <div>
                <Garage/>
            </div><br/>
            <div>
                <Events/>
            </div>
            <div>
                <Phone />
            </div>
            <div>
                <Color />
            </div>
        </div>
    )
}

export default App
