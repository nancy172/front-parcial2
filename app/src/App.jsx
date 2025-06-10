import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp/SignUp';
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
            <Link to="/signup">Registrarse</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </>
  )
}

export default App;
