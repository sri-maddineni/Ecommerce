import React from 'react'
import Header from '../../components/layouts/Header'
import Footer from '../../components/layouts/Footer'
import AdminMenu from '../../components/layouts/AdminMenu'

const CreateProduct = () => {
  return (
    <>
      <Header />
      <div className="row m-3">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9">
          <h3>content prodct</h3>
        </div>
      </div>
      <Footer />
    </>

  )
}

export default CreateProduct