import React from 'react'
import Navbar from './Navbar'

const AdminDashboard = () => {
    return (
        <>
            <Navbar page="admin" />
            <div className="p-4 box text-center">
            <h1 className='mt-24 font-bold text-4xl'>Admin Dashboard</h1>
                
            </div>
        </>
    )
}

export default AdminDashboard