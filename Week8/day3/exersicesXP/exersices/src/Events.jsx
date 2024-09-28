import React, {Component, useState} from "react";

export const Events = (props) => {
    const clickMe = () => {
        alert('I was clicked');
    };

    const [isToggleOn, setIsToggleOn] = useState(true);
    const [show, setShow] = useState(true);

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            alert(`The Enter was pressed, you input is: ${event.target.value}`);
        }
    };

    const handleToggle = (event) => {

        setIsToggleOn(prevState => !prevState);
    };

    const removeChild = (event) => {
        setShow(false);
    }


    return (
        <div>
            {show ? <Child/> : null}
            <button onClick={removeChild}>remove Child</button><br/>
            <button onClick={clickMe}>Click me</button>
            <br/><br/>
            <input
                onKeyDown={handleKeyDown}
            />
            <br/><br/>
            <button onClick={handleToggle}> Exercise 9 <br/>
                {isToggleOn ? "ON" : "OFF"}
            </button>
            <br/><br/>
        </div>
    );
};

export class Child extends Component {

    componentWillUnmount() {
        console.log('unmount');
    }

    render() {
        return (
            <div>
                Hello World!
            </div>
        );

    }
}
