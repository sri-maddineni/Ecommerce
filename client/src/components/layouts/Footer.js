import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <div className='bg-dark text-light p-3 footer'>
      <h1 className='text-center'>All rights reserved. &copy;  kisanraj</h1>
      <div className="links">
        <Link className="" to='/'>Home</Link>
        <Link className="" to='/login'>Login</Link>
        <Link className="" to='/register'>Register</Link>
        <Link className="" to='/cart'>Cart</Link>
      </div>
    </div>
  )
}
