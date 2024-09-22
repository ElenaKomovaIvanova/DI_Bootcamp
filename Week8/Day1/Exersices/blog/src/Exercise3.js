import {Component} from "react";
import logo from './logo.svg';
import './Exercise.css';

class Exercise3 extends Component {
    render() {
        const style_header = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px"
        };
        const containerStyle = {
            padding: '20px',
            borderRadius: '5px',
            border: '2px solid black',
            maxWidth: '600px',
            margin: '0 auto',
            textAlign: 'center',
        };

        return (
            <div style={containerStyle}>
                <h1 style={style_header}>
                    This is Heading
                </h1>

                <p className= "para"> This is a paragraph.</p>

                <a href="https://e.com" target="_blank" rel="noopener noreferrer">
                    This is a link
                </a>

                <form>
                    <label htmlFor="Email">Email:</label>
                    <input type="text" id="Email" name="Email"/>
                    <button type="submit">Submit</button>
                </form>

                <img src={logo} alt="A descriptive text for the logo"/>

                <ul>This is a list
                    <li>coffe</li>
                    <li>tea</li>
                </ul>

            </div>
        )
    };

}


export default Exercise3;