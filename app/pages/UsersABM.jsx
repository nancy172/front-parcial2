const UsersABM = () => {


    
    async function getUsers() {
        const response = fetch('http://localhost:3000/api/users');
        const data = await response.json();
        users = data;
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
                        users.map(user => <li> {user.name} </li>)
                    }
                </ul>
            </main>
        </>
    )
}

export default UsersABM;