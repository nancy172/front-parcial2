import {useState} from "react";

const SignUp = () => {

    const HOST = 'http://127.0.0.1:3000/api'
    const [ users, setUsers] = useState([]);
    const [ user, setUser] = useState({name: '', email: '', password:''});

    async function postUsers(e){
        e.preventDefault();
        try {
            const options = {
                method: 'POST',
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(user)
            }

            const response = await fetch(`${HOST}/users`, options);
            const data = await response.json();
            setUsers(data);
            
        } catch (error) {
            console.log(error);
        }
    }

    function handlerChange(e){
        setUser( {...user, [e.target.name]: e.target.value} )
    }

    return(
        <>
            <header>
                <h1></h1>
            </header>
            <main>
                <h2>Registrate</h2>
                <form onSubmit={postUsers}>
                    <label htmlFor="name">Nombre</label>
                    <input 
                        name="name"
                        value={user.name}
                        type="text"
                        onChange={handlerChange}

                    />

                    <label htmlFor="name">Email</label>
                    <input
                        name="email"
                        value={user.email}
                        type="email"
                        onChange={handlerChange}
                    />

                    <label htmlFor="name">password</label>
                    <input
                        name="password"
                        type="password"
                        value={user.password}
                        onChange={handlerChange}
                    />

                    <button type="submit">Guardar</button>
                </form>
            </main>
        </>
    )
}

export default SignUp;