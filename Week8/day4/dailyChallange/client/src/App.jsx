import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [responseMessage, setResponseMessage] = useState(null);
    const [responseMessage2, setResponseMessage2] = useState(null);
    const [bodyData, setBodyData] = useState('');

    useEffect(() => {
        const fetchInfo = async () => {
            try {
                const res = await fetch('http://localhost:3000/api/hello');
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await res.json();
                setResponseMessage(data);
                console.log(data);
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };
        fetchInfo();
    }, []);

    const fetchInfo2 = async () => {
        try {
            const res = await fetch('http://localhost:3000/api/world', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: bodyData }), // Отправка данных
            });
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await res.json();
            setResponseMessage2(data);
            console.log(data);
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };


    const handleChange = (e) => {
        setBodyData(e.target.value);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        fetchInfo2();
    };

    return (
        <>
            <div>
                {responseMessage ? <p>{responseMessage.message}</p> : <p>...</p>}
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    value={bodyData}
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter data"
                /><br/><br/>
                <button type="submit">Submit</button>
                <br/>
                <br/>
                <output>
                    I received your POST request. This is what you sent me: {responseMessage2.message}
                </output>
            </form>
        </>
    );
}

export default App;
