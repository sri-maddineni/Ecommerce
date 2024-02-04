import { Routes, Route } from 'react-router-dom';
import { Homepage } from './pages/Homepage';
import { About } from "./pages/About"
import { Pagenotfound } from "./pages/Pagenotfound"
import { Contact } from './pages/Contact';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify"
import { Login } from './pages/Auth/Login';
import { Register } from './pages/Auth/Register';



function App() {
  return (
    <>
    
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/*' element={<Pagenotfound />} />
        <Route path='/register' element={<Register />} />

      </Routes>

    </>


  );
}

export default App;
