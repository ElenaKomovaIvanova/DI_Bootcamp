import { useState } from 'react';
import './App.css';

function App() {
    const [languages, setLanguages] = useState([
        { name: "Php", votes: 0 },
        { name: "Python", votes: 0 },
        { name: "JavaScript", votes: 0 },
        { name: "Java", votes: 0 }
    ]);

    const handleVote = (index) => {
        setLanguages(prevLanguages =>
            prevLanguages.map((language, i) =>
                i === index
                    ? { ...language, votes: language.votes + 1 }
                    : language
            )
        );
    };

    return (
        <div className= "all">
            <h1>Vote for Your Language</h1>
            <div className="app">
                {languages.map((language, index) => (
                    <div  className= "one" key={index}>
                        <span className="lan">{language.name}</span>
                        <span className="vot"> Votes: {language.votes} </span>
                        <button
                            onClick={() => handleVote(index)}>
                            Click Here
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
