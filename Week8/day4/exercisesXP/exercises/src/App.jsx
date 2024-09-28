import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import Profile from './component/Profile';
import Shop from './component/Shop';
import ErrorBoundary from "./exercise1.jsx";
import PostList from "./component/PostList.jsx";
import Example1 from "./component/Example1.jsx";
import Example2 from "./component/Example2.jsx";
import Example3 from "./component/Example3.jsx";
import {useState} from "react";
// import Example3 from "./component/Example3.jsx";

function App() {

    const [responseMessage, setResponseMessage] = useState(null);

    const sendData = async () => {
        const url = 'https://webhook.site/7c5771b5-eecd-432c-a46f-29a851bce9bf';
        const bodyData = {
            key1: 'myusername',
            email: 'mymail@gmail.com',
            name: 'Isaac',
            lastname: 'Doe',
            age: 27
        };

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(bodyData)
            });
            console.log(response);
            const result = await response.text();
            setResponseMessage(result);
        } catch (error) {
            console.error('error:', error);
        }
    };


    return (

        <BrowserRouter>
            <header>
                <nav>
                    <NavLink to='/'>Home</NavLink>
                    {"  "}
                    <NavLink to='./profile'>Profile</NavLink>
                    {"  "}
                    <NavLink to='./shop'>Shop</NavLink>
                </nav>
            </header>
            <ErrorBoundary>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/shop" element={<Shop/>}/>
                </Routes>
            </ErrorBoundary>
            <div className="App">
                <PostList/>
            </div>
            <div>
                <Example1/>
            </div>
            <div>
                <Example2/>
            </div>
            <div>
                <Example3/>
            </div>
            <div>
                <button onClick={sendData}>Send data</button>
            </div>
        </BrowserRouter>

    );
}

export default App;
