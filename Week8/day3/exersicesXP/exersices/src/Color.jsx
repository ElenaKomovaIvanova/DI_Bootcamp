import React, { Component } from 'react';

class Color extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'red',
        };
    }

    componentDidMount() {
        this.setState({ color: 'yellow' });
        alert('componentDidMount reached');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate called");
        return true;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("after update");
    }

    changeColorToBlue = () => {
        this.setState({ color: 'blue' });
    };

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate " + prevState.color);
        return null;
    }

    render() {
        return (
            <div>
                <h1>My Favorite Color is {this.state.color}</h1>
                <button onClick={this.changeColorToBlue}>Change Color</button>
            </div>
        );
    }
}

export default Color;
