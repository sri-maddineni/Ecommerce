import React, { useEffect, useState } from 'react'
import Header from '../../components/layouts/Header'
import Footer from '../../components/layouts/Footer'
import AdminMenu from '../../components/layouts/AdminMenu'
import toast from 'react-hot-toast'
import axios from "axios"


const CreateCategory = () => {
  const [categories, setCategories] = useState([]);

  //get all categories
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get('http://localhost:8000/api/v1/category/categories')
      if (data.success) {
        setCategories(data.category)
       
      }
    } catch (error) {
      console.log(error)
      toast.error("something went wrong in getting categoires")
    }
  }

  useEffect(() => {
    getAllCategory();
  })

  return (
    <>
      <Header />
      <div className="row m-3">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9">
          <h3>Manage Categories</h3>
          <div className="">
            <table className="table">
              <thead>
                <tr>
                  
                  <th scope="col">Name</th>
                  <th scope="col">Action</th>
                
                </tr>
              </thead>
              <tbody>
              {categories?.map(c=>{
                <tr>
                 
                  <>
                  <td key={c._id}>{c.name}</td>
                  <td className='btn btn-sm btn-success'>Edit</td>
                 </>
                  
                </tr>
                })}
              </tbody>
            </table>

          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default CreateCategory