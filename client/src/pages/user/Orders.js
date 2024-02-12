import React from 'react'
import UserMenu from './UserMenu'
import Header from '../../components/layouts/Header'
import Footer from '../../components/layouts/Footer'

const Orders = () => {
    return (
        <>
        <Header/>
            <div className="container-fluid m-3 p-3">
                <div className="row">
                    <div className="col-md-3">
                        <UserMenu />
                    </div>
                    <div className="col-md-9">
                        <h3>orders all</h3>
                    </div>
                </div>

            </div>
            <Footer/>
        </>
    )
}

export default Orders