import {useState} from "react";

const UsersABM = () => {

    const HOST = 'http://127.0.0.1:3000/api'
    const [ users, setUsers] = useState([]);
    const [ user, setUser] = useState({name: '', email: '', password:''});
    
    async function getUsers() {
        try {
            const response = await fetch(`${HOST}/users`);
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.log(error);
        }
        
    }

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
                <h1>ABM de usuarios</h1>
            </header>
            <main>
                <button onClick={getUsers} type="button">Obtener usuarios</button>
                <h2>Lista de usuarios</h2>
                <ul>
                    {
                        users.map(user => <li key={user._id}> {user.name} </li>)
                    }
                </ul>

                <hr />
                <h2>Nuevo Usuario</h2>
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

export default UsersABM;