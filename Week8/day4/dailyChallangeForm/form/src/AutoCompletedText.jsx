import { useState } from "react";
import countries from "../public/Countries.js"; // Убедитесь, что этот путь правильный
import 'bootstrap/dist/css/bootstrap.min.css';


const AutoCompletedText = () => {
    const [suggestions, setSuggestions] = useState([]);
    const [text, setText] = useState('');

    const handleChange = (e) => {
        const inputText = e.target.value;
        setText(inputText);

        if (inputText) {
            const filteredSuggestions = countries.filter(item =>
                item.toLowerCase().includes(inputText.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    };

    return (
        <div className="bg-warning p-4 border border-primary rounded">
            <h3 className="text-primary">Auto Completed</h3>
            <input  className="form-control mb-3" type="text" onChange={handleChange} value={text} />
            <ul className="list-group">
                {suggestions.map((item, index) => (
                    <li key={index} className="list-group-item list-group-item-action">{item}</li>
                ))}
            </ul>
            <output className="text-primary">Suggestions: {suggestions.length}</output>
        </div>
    );
};

export default AutoCompletedText;
