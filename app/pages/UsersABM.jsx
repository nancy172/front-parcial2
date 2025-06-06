import {useState} from "react";

const UsersABM = () => {

    const [ users, setUsers] = useState([]);
    
    async function getUsers() {
        const response = await fetch('http://127.0.0.1:3000/api/users');
        const data = await response.json();
        setUsers(data);
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
            </main>
        </>
    )
}

export default UsersABM;