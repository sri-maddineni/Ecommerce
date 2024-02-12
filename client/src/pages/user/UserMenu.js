import React from 'react'
import { NavLink } from 'react-router-dom'

const UserMenu = () => {
    return (
        <>
            <div className="list-group">
            
                <NavLink to="/dashboard/user/profile" className="list-group-item list-group-item-action">profile</NavLink>
                <NavLink to="/dashboard/user/orders" className="list-group-item list-group-item-action">orders</NavLink>
            </div>


        </>
    )
}

export default UserMenu