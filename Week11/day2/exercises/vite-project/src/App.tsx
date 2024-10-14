import ReactDOM from 'react-dom';
import Greeting from './components/Greeting.tsx';
import Counter from "./components/Counter.tsx";
import UserCard from "./components/UserCard.tsx";
import API from "./components/API.tsx";

const App = () => {
    return (
        <div>
            <Greeting name="Alice" />
            <Greeting name="Bob" />
            <Counter />
            <UserCard name="Jon" age={18} />
            <UserCard />
            <API />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));

export default App
