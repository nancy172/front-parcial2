import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Pets from './pages/Pets';
import NotFound from './pages/NotFound';
import { AuthProvider } from './contexts/AuthContext';
import './App.css';

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/pets">Mascotas</Link>
          </li>
          <li>
            <Link to="/login">Iniciar sesión</Link>
          </li>
          <li>
            <Link to="/register">Registrarse</Link>
          </li>
        </ul>
      </nav>
      
      <AuthProvider>
        <Routes>
          <Route path='/' element= {<Home/>} />
          <Route path='/pets' element= {<Pets/>} />
          <Route path='/login' element= {<Login/>} />
          <Route path='/register' element= {<Register/>} />
          <Route path='*' element= {<NotFound/>} />
        </Routes>
      </AuthProvider>
      
    </>
  )
}

export default App;
