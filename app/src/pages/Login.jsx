import {useState} from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const HOST = 'http://127.0.0.1:3000/api';
    const navigate = useNavigate();

    // Estados
    const [ user, setUser] = useState({ 
        email: '',  
        password:''
    });
    const [error, setError] = useState('');

    async function postUser(e){
        e.preventDefault();
        setError('');

        try {
            const options = {
                method: 'POST',
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(user)
            };

            const response = await fetch(`${HOST}/users/login`, options);
            const data = await response.json();

            if (response.ok) {
                // Se limpia el formulario
                setUser({ 
                    email: '',  
                    password:'' 
                });
                navigate("/");
                
            } else {
                setError(data.message || 'Error al ingresar');
            }

        } catch (error) {
            console.log(error);
            setError('Error. Intente nuevamente.')
        }
    }

    function handlerChange(e){
        setUser( {...user, [e.target.name]: e.target.value} );
    };

    return(
        <>
            <header>
                <h1>Iniciar sesión</h1>
            </header>
            <main>

                {error && <div style={{color: 'red', marginBottom: '1em'}}> {error} </div>}

                <form onSubmit={postUser}>

                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            name="email"
                            value={user.email}
                            type="email"
                            onChange={handlerChange}
                            placeholder="Ej: gabriela@email.com"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password">Contraseña</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            value={user.password}
                            onChange={handlerChange}
                            required
                        />
                    </div>

                    <button type="submit">Enviar</button>
                </form>
            </main>
        </>
    )
}

export default Login;