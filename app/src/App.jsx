import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register/Register';
import NotFound from './pages/NotFound';
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
            <Link to="/register">Registrarse</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element= {<Home/>} />
        <Route path='/register' element= {<Register/>} />
        <Route path='*' element= {<NotFound/>} />
      </Routes>
      
    </>
  )
}

export default App;
