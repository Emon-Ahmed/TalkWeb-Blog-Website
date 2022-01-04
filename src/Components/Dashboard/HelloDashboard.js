import React from 'react'
import {  useSelector } from "react-redux";
import Welcome from "../../Image/welcome.svg"

const HelloDashboard = () => {
    const user = useSelector((state) => state.user);
    return (
        <div>
            <h3 className='my-4'>Hello {user.currentUser?.email}</h3>
            <img src={Welcome} alt="Welcome" className='w-50' />
        </div>
    )
}

export default HelloDashboard
