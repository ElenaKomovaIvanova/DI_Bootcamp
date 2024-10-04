import { useState, useEffect } from "react";
import '../App.css';

const DateTime = () => {
    const [year, setYear] = useState(new Date().getFullYear());
    const [month, setMonth] = useState(new Date().getMonth() + 1); // getMonth возвращает 0-11, поэтому добавляем +1
    const [day, setDay] = useState(new Date().getDate());
    const [hour, setHour] = useState(new Date().getHours());
    const [minute, setMinute] = useState(new Date().getMinutes());
    const [second, setSecond] = useState(new Date().getSeconds());

    const array = length => Array.from({ length }).map((_, k) => k + 1);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = new Date();
            setYear(now.getFullYear());
            setMonth(now.getMonth() + 1);
            setDay(now.getDate());
            setHour(now.getHours());
            setMinute(now.getMinutes());
            setSecond(now.getSeconds());
        }, 1000);

        return () => clearInterval(intervalId); // Очищаем интервал при размонтировании компонента
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <div className='msg'>
                    <div className='year'>
                        <span>{year}</span> / Year
                    </div>
                </div>

                <div className='M_month'>
                    {`${month}`}
                </div>

                <div className='box'>
                    {array(12).map((x, index) => (
                        <div
                            key={index}
                            className={`month item ${index === (month - 1) ? "active" : ""}`}
                            style={{ transform: `rotate(${index * 30 - 30 * (month - 1)}deg)` }}>
                            {`${x} month`}
                        </div>
                    ))}

                    {array(31).map((x, index) => (
                        <div
                            key={index}
                            className={`day item ${index === (day - 1) ? "active" : ""}`}
                            style={{ transform: `rotate(${index * 12 - 12 * (day - 1)}deg)` }}>
                            {`${x} day`}
                        </div>
                    ))}

                    {array(24).map((x, index) => (
                        <div
                            key={index}
                            className={`hour item ${index === (hour - 1) ? "active" : ""}`}
                            style={{ transform: `rotate(${index * (360 / 24) - (360 / 24) * (hour - 1)}deg)` }}>
                            {`${x} hr`}
                        </div>
                    ))}

                    {array(60).map((x, index) => (
                        <div
                            key={index}
                            className={`minute item ${index === (minute - 1) ? "active" : ""}`}
                            style={{ transform: `rotate(${index * (360 / 60) - (360 / 60) * (minute - 1)}deg)` }}>
                            {`${x} min`}
                        </div>
                    ))}

                    {array(60).map((x, index) => (
                        <div
                            key={index}
                            className={`second item ${index === (second - 1) ? "active" : ""}`}
                            style={{ transform: `rotate(${index * (360 / 60) - (360 / 60) * (second - 1)}deg)` }}>
                            {`${x} sec`}
                        </div>
                    ))}
                </div>
            </header>
        </div>
    );
}

export default DateTime;
