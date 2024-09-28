import React, {useState} from 'react';

const Calculator = (props) => {
    const [firstNumber, setFirstNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0);
    const [summ, setSumm] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        const add  = Number(firstNumber) + Number(secondNumber);
        console.log(add)
        setSumm(add);
    };


    return (
        <div id='calculator'>
            <h2>Adding Two Numbers</h2>
            <form onSubmit={handleSubmit}>
                <div id="input">
                <input className="num"
                    type="number"
                    value={firstNumber}
                    onChange={(e) => setFirstNumber(e.target.value)} // Обновляем стейт при вводе
                    placeholder="First Number"
                />
                <input className="num"
                    type="number"
                    value={secondNumber}
                    onChange={(e) => setSecondNumber(e.target.value)} // Обновляем стейт при вводе
                    placeholder="Second Number"
                />
                </div>
                <button id="submit" type="submit">Add Them!</button>
                <output>
                    {summ}
                </output>
            </form>
        </div>

    )
}

export default Calculator;