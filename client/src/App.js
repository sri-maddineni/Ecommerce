

import { Layouts } from './components/layouts/Layouts';
import { Routes, Route } from 'react-router-dom';
import { Homepage } from './pages/Homepage';
import { About } from "./pages/About"
import { pagenotfound } from "./pages/Pagenotfound"

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<About />} />
        <Route path='/*' element={<pagenotfound />} />
      </Routes>
    </>


  );
}

export default App;
