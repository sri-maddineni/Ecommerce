import { Routes, Route } from 'react-router-dom';
import { Homepage } from './pages/Homepage';
import { About } from "./pages/About"
import { Pagenotfound } from "./pages/Pagenotfound"
import { Contact } from './pages/Contact';

import { Toaster } from 'react-hot-toast';

import { Login } from './pages/Auth/Login';
import { Register } from './pages/Auth/Register';
import AuthState from './context/AuthState';
import Dashboard from './pages/user/Dashboard';
import PrivateRoute from './components/routes/Private';
import ForgotPassword from './pages/Auth/ForgotPassword';

import AdminRoute from './components/routes/AdminRoute';
import AdminDashboard from './pages/admin/AdminDashboard';



function App() {
  return (
    <>
      <AuthState>
        <Toaster />

        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/dashboard' element={<PrivateRoute />}>
            <Route path='user' element={<Dashboard />} />
          </Route>

          <Route path='/dashboard' element={<AdminRoute />}>
            <Route path='admin' element={<AdminDashboard />} />
          </Route>


          <Route path='/forgot-password' element={<ForgotPassword />} />


          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/*' element={<Pagenotfound />} />
          <Route path='/register' element={<Register />} />
        </Routes>

      </AuthState>
    </>


  );
}

export default App;
