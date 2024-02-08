import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import AuthContext from '../../context/AuthContext'
import toast from 'react-hot-toast'



const Header = () => {
  const [auth, setAuth] = useContext(AuthContext);

  const handlelogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",

    })

    localStorage.removeItem('auth')
    toast.success("Log out successfully")
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link className="navbar-brand" to="/"><i className="fa-solid fa-bag-shopping"></i> Ecommerce</Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/category">Category</NavLink>
              </li>

              {
                !auth.user ? (<>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/register">Register</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/login">Login</NavLink>
                  </li></>



                ) : (
                  <>

                    <div className="dropdown">
                      <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {auth?.user.name}
                      </button>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <NavLink className="nav-link" to={`/dashboard/${auth?.user?.role==="1"?"admin":"user"}`}>Dashboard</NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink className="nav-link" to="/profile">Profile</NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink className="nav-link" onClick={handlelogout} to="/login">Logout</NavLink>
                        </li></ul>
                    </div>

                  </>

                )
              }

              <li className="nav-item">
                <NavLink className="nav-link" to="/cart">Cart(0)</NavLink>
              </li>

            </ul>

          </div>
        </div>
      </nav></>
  )
}

export default Header;
