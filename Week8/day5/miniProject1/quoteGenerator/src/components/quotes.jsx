import { useEffect, useState } from 'react';
import quotes from "../../public/dataQuotrs.js";

const Quotes = () => {
    const [randomColor, setRandomColor] = useState('');
    const [currentQuote, setCurrentQuote] = useState({ quote: '', author: '' });
    const [animationKey, setAnimationKey] = useState(0);

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    useEffect(() => {
        let newQuote = getRandomQuote(quotes);
        setCurrentQuote(newQuote);
        const newBgColor = getRandomColor();
        setRandomColor(newBgColor);
        document.body.style.backgroundColor = newBgColor;
        setAnimationKey(prevKey => prevKey + 1);
    }, []);

    function getRandomQuote(arr) {
        if (arr.length === 0) {
            throw new Error('Array is empty');
        }
        let newQuote;
        do {
            const randomIndex = Math.floor(Math.random() * arr.length);
            newQuote = arr[randomIndex];
        } while (newQuote.quote === currentQuote.quote);

        return newQuote;
    }

    const handleClick = () => {
        let newQuote = getRandomQuote(quotes);
        setCurrentQuote(newQuote);
        const newBgColor = getRandomColor();
        setRandomColor(newBgColor);
        document.body.style.backgroundColor = newBgColor;
        setAnimationKey(prevKey => prevKey + 1);
    }

    return (
        <div id="conteiner">
            <div id="quotesConteiner" key={animationKey}>
                <h1 id="quote" style={{ color: randomColor }}>"{currentQuote.quote}"</h1>
                <h5 id="autor" style={{ color: randomColor }}>- {currentQuote.author} -</h5>
                <button onClick={handleClick} style={{ backgroundColor: randomColor }}>New quote</button>
            </div>
        </div>
    )
}

export default Quotes;
