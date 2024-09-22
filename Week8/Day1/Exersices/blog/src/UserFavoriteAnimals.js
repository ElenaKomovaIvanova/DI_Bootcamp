import {Component} from "react";

class UserFavoriteAnimals extends Component {
    render() {
        const { favAnimals } = this.props;
        return (
            <div>
                <h1>My Favorite Animals</h1>
                <ul>
                    {favAnimals.map((animal, index) => (
                        <li key={index}>{animal}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default UserFavoriteAnimals;