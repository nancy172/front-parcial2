import { useLocation } from 'react-router-dom';
import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Pets from './pages/Pets';
import PetDetail from './pages/PetDetail';
import CreatePet from './pages/CreatePet';
import EditPet from './pages/EditPet';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import MyPets from './pages/MyPets';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {

  const location = useLocation();

  // Se oculta el nav en las vistas de login y registro
  const hideNavbar = location.pathname === "/login" || location.pathname === "/registro";

  return (
    <>
      {!hideNavbar && <Navbar />}

      <main className='min-h-[80vh]'>
        <Routes>
            <Route path='/' element= {<Home/>} />
            <Route path='/mascotas' element= {<Pets/>} />
            <Route path='/mascotas/:id' element= {<PetDetail/>} />
            <Route path='/mascotas/editar/:id' element= {<EditPet/>} />
            <Route path='/mascotas/crear' element= {<CreatePet/>} />
            <Route path='/mis-mascotas' element= {<MyPets/>} />

            <Route path='/login' element= {<Login/>} />
            <Route path='/registro' element= {<Register/>} />

            <Route path='/perfil' element= {<Profile/>} />
            <Route path='/perfil/editar' element= {<EditProfile/>} />

            <Route path='*' element= {<NotFound/>} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App;
