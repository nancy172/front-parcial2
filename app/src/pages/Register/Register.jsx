import {useState} from "react";
import { useNavigate } from "react-router-dom";
import './Register.css';

const Register = () => {

    const HOST = 'http://127.0.0.1:3000/api';
    const navigate = useNavigate();

    // Estados
    const [ user, setUser] = useState({
        name: '', 
        email: '', 
        phone: '', 
        role: '', 
        password:''
    });
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    async function postUsers(e){
        e.preventDefault();
        setMessage('');
        setError('');

        try {
            const options = {
                method: 'POST',
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(user)
            };

            const response = await fetch(`${HOST}/users`, options);
            const data = await response.json();

            if (response.ok) {
                setMessage('¡Usuario registrado correctamente!');
                // Se limpia el formulario
                setUser({
                    name: '', 
                    email: '', 
                    phone: '', 
                    role: '', 
                    password:'' 
                });
                navigate("/Login");
            } else {
                setError(data.message || 'Error al registrarse');
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
                <h1>Registrarse</h1>
            </header>
            <main>

                {message && <div style={{color: 'green', marginBottom: '1em'}}> {message} </div>}
                {error && <div style={{color: 'red', marginBottom: '1em'}}> {error} </div>}

                <form onSubmit={postUsers}>

                    <div>
                        <label htmlFor="name">Nombre*</label>
                        <input
                            id="name" 
                            name="name"
                            value={user.name}
                            type="text"
                            onChange={handlerChange}
                            placeholder="Ej: Gabriela"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email">Email*</label>
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
                        <label htmlFor="phone">Teléfono</label>
                        <input 
                            id="phone"
                            name="phone" 
                            value={user.phone} 
                            type="text" 
                            onChange={handlerChange}
                            placeholder="Ej: 1134567890"    
                        />
                    </div>

                    <div>
                        <label htmlFor="role">Tipo de usuario*</label>
                        <select 
                            id="role"
                            name="role" 
                            value={user.role} 
                            onChange={handlerChange}
                            required
                        >
                            <option value="">Elegir opción</option>
                            <option value="adoptante">Adoptante</option>
                            <option value="cuidador">Cuidador</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="password">Contraseña*</label>
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

export default Register;