import React from 'react'
import Footer from '../../components/layouts/Footer'
import Header from '../../components/layouts/Header'
import AdminMenu from '../../components/layouts/AdminMenu'

const AdminDashboard = () => {
    return (
        <>
            <Header />
            <div className="container-fluid m-3">
                <div className="row">
                    <div className="col-md-3">
                        <AdminMenu />
                    </div>
                    <div className="col-md-9">
                        <div className="card">
                            <h1>{}</h1>
                        </div>
                    </div>

                </div>
            </div>
       
     
            <Footer />
        </>
    )
}

export default AdminDashboard