import React from 'react'
import Navbar from './Navbar'
import ReviewForm from './ReviewForm'

const ReviewerDashboard = () => {
    return (
        <>
            <Navbar page="admin" />
            <div className="p-4 box text-center">
            <h1 className='mt-24 font-bold text-4xl'>Reviewer Dashboard</h1>           
                <ReviewForm />
            </div>
        </>
    )
}

export default ReviewerDashboard