import React from 'react';

const Form = () => {
    const [username, setUsername] = React.useState('');
    const [username2, setUsername2] = React.useState('');
    const [username3, setUsername3] = React.useState('');
    const [username4, setUsername4] = React.useState('');
    const [age4, setAge4] = React.useState('');
    const [username5, setUsername5] = React.useState('');
    const [age5, setAge5] = React.useState('');
    const [errormessage, setErrormessage] = React.useState('');
    const [textarea, setTextarea] = React.useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis quam sem, id iaculis purus feugiat et. Praesent varius fermentum leo at semper. ');
    const [car,setCar ] = React.useState('');
    let header = null;

    const handleChange = (e) => {
        setUsername2(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setUsername3(e.target.elements.usernameInput.value);
    }

     if (username2) {
         header = <>{username2}</>;
     }

    const handleChangeName4 = (e) => {
        setUsername4(e.target.value);
    }

    const handleChangeName5 = (e) => {
        setUsername5(e.target.value);
    }

    const handleChangeAge4 = (e) => {
       setAge4(e.target.value);
    }

    const handleChangeAge5 = (e) => {
        const value = Number(e.target.value);
        !isNaN(value)  ? (setAge5(value), setErrormessage("")) : setErrormessage("Your age must be a number");
    }

    const handleChangeselect = (e) => {
        setCar(e.target.value); // Обновляем состояние при выборе нового значения
    };

    return (
        <>
            <h3>Part 1 <br/>Hello {username}</h3>
            <form style={{border: '2px solid blue'}}> Enter your name:<br/>
                <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username"/>
            </form>
            <br/><br/>

            <h3>Part 2: Conditional Rendering <br/>Hello {header}</h3>
            <form style={{border: '2px solid blue'}}> Enter your name:<br/>
                <input value={username2} onChange={handleChange} placeholder="Username"/>
            </form>
            <br/><br/>

            <h3>Part 3: Submitting Forms <br/>Hello {username3}</h3>
            <form onSubmit={handleSubmit} style={{border: '2px solid blue'}}> Enter your name:<br/>
                <input name="usernameInput" placeholder="Username"/>
                <button>Submit</button>
            </form>
            <br/><br/>

            <h3>Part 4: Multiple Input Fields <br/>Hello {username4} {age4}</h3>
            <form style={{border: '2px solid blue'}}> Enter your name:<br/>
                <input value={username4} onChange={handleChangeName4} placeholder="Username"/><br/>
                <input value={age4} onChange={handleChangeAge4} placeholder="Username"/>
            </form>
            <br/><br/>

            <h3>Part 5: Validating Form Input <br/>Hello {username5} {age5}</h3>
            <form style={{border: '2px solid blue'}}> Enter your name:<br/>
                <input value={username5} onChange={handleChangeName5} placeholder="Username"/><br/>
                <input value={age5} onChange={handleChangeAge5} placeholder="Username"/>
                <output>{errormessage}</output>
            </form>
            <br/><br/>

            <h3>Part 6: Textarea <br/></h3>
            <textarea value={textarea} style={{border: '2px solid blue'}}/><br/>
            <br/><br/>

            <h3>Part 7: Select <br/></h3>
            <select value={car} onChange={handleChangeselect}>
                <option value="">-- Choose --</option>
                <option value="Ford">Ford</option>
                <option value="Volvo">Volvo</option>
                <option value="Fiat">Fiat</option>
            </select>
            <output>You have chosen {car}</output>

        </>


    )
}

export default Form;