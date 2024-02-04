import { Routes, Route } from 'react-router-dom';
import { Homepage } from './pages/Homepage';
import { About } from "./pages/About"
import { Pagenotfound } from "./pages/Pagenotfound"
import { Contact } from './pages/Contact';
import { Header } from './components/layouts/Header';
import { Footer } from './components/layouts/Footer';
import { Login } from './pages/Login';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/*' element={<Pagenotfound />} />
      </Routes>
      <Footer />
    </>


  );
}

export default App;
