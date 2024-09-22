// import React from 'react';
// import UserFavoriteAnimals from "./UserFavoriteAnimals";
//
// function App() {
//     const myelement = <h1>I Love JSX!</h1>;
//     const sum = 5 + 5;
//
//     const user = {
//         firstName: 'Bob',
//         lastName: 'Dylan',
//         favAnimals: ['Horse', 'Turtle', 'Elephant', 'Monkey']
//     };
//
//     return (
//         <div>
//             <p>Hello World!</p>
//             {myelement}
//             <p>React is better with JSX in {sum} times</p>
//             <h3>{user.firstName} {user.lastName}</h3>
//             <UserFavoriteAnimals favAnimals={user.favAnimals} />
//         </div>
//     );
// }
//
// export default App;
import React from 'react';
import Exercise3 from "./Exercise3";


function App() {
    return(
    <div>
        <Exercise3/>
    </div>
    );
}

export default App;
