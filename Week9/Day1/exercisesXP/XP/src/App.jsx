import React, {useContext} from "react";
import {ThemeContext, ThemeProvider} from "./Components/ThemeContext";
import "./ex1.css"
import characterCounter from "./Components/characterCounter.jsx";
import CharacterCounter from "./Components/CharacterCounter.jsx";

const App = () => {

    const ThemeSwitcher = () => {

        const {theme, setTheme} = useContext(ThemeContext);

        return (
            <div>
                <button onClick={() => setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"))}>Toggle Theme
                </button>
                <p className={theme}>Current Theme: {theme}</p>
            </div>
        );
    }



    return (
        <>
            <ThemeProvider>
                <div className="App">
                    <h1>Theme Switcher Example</h1>
                    <ThemeSwitcher/>
                    {/* Other components here */}
                </div>
            </ThemeProvider>
            <CharacterCounter/>
        </>

    );
}

export default App;