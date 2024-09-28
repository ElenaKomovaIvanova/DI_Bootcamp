import React, { Component } from 'react';

class BuggyCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
    }

    handleClick = () => {
        this.setState(({counter}) => {
            if (counter === 4) {
                throw new Error('I crashed!');
            }
            return { counter: counter + 1 };  // Увеличиваем счетчик
        });
    };


    render() {
        return (
            <div>
                <button onClick={this.handleClick}>{this.state.counter}</button>

            </div>
        );
    }
}

export default BuggyCounter;

