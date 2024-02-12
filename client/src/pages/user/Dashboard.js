import React, { useContext } from 'react'
import Header from '../../components/layouts/Header'
import Footer from '../../components/layouts/Footer'
import UserMenu from './UserMenu'
import AuthContext from '../../context/AuthContext'

const Dashboard = () => {
    const [auth]=useContext(AuthContext)
    return (
        <>
            <Header />
            <div className="container-fluid m-3 p-3">
                <div className="row">
                    <div className="col-md-3">
                        <UserMenu />
                    </div>
                </div>

                <div className="col-md-9">
                    <div className='text-center m-3'>
                        <h1>{auth?.user?.name}</h1>
                        <h1>{auth?.user?.email}</h1>

                        <h1>user Dash board</h1>
                    </div>
                </div>
            </div>

            <Footer />

        </>
    )
}

export default Dashboard