import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

function Navbar() {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return(
        <>
           <nav className="bg-white shadow-md">
                <div className="container mx-auto flex justify-between items-center p-6">
                    
                    <Link to="/">
                        <img src={logo} alt="Logo" className='h-15'/>
                    </Link>

                    {/* Menú hamburguesa (mobile) */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu}>
                            {menuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>

                    {/* Menú */}
                    <ul className={`flex flex-col md:flex-row md:items-center gap-6 md:gap-8 absolute md:static bg-white md:bg-transparent top-16 left-0 w-full md:w-auto px-6 md:px-0 py-4 md:py-0 z-20 shadow-md md:shadow-none transition-all ${menuOpen ? "block" : "hidden md:flex"}`}>
                        
                        <li>
                            <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-amber-500">
                                Inicio
                            </Link>
                        </li>

                        <li>
                            <Link to="/mascotas" onClick={() => setMenuOpen(false)} className="hover:text-amber-500">
                                Mascotas
                            </Link>
                        </li>

                        {user && (
                            <>
                                <li>
                                    <Link to="/mis-mascotas" onClick={() => setMenuOpen(false)} className="hover:text-amber-500">
                                        Mis Mascotas
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/perfil" onClick={() => setMenuOpen(false)} className="hover:text-amber-500">
                                        Mi Perfil
                                    </Link>
                                </li>
                            </>
                        )}

                        {user ? (
                            <li>
                                <button onClick={handleLogout} className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600">
                                    Cerrar sesión
                                </button>
                            </li>
                        ) : (
                            <>
                                <li>
                                    <Link to="/registro" onClick={() => setMenuOpen(false)} className="hover:text-amber-500 underline">
                                        Registrarse
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/login" onClick={() => setMenuOpen(false)} className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600">
                                        Iniciar sesión
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
           </nav>  
        
        </>
    );
}

export default Navbar;