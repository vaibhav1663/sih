import React, {useState, useEffect} from 'react';
import Navbar from './Navbar';
import Accordian from './ReviewerDashboard/Accordian';
import { useAuthContext } from "../hooks/useAuthContext";


const ReviewerDashboard = () => {

    const reviewer = useAuthContext();
    const reviewerID = '123' || reviewer._id;

    return (
        <>
            <Navbar page="admin" />
            <div className="p-4 box text-center">
            <h1 className="mt-8 font-bold text-4xl mb-8">Reviewer's Dashboard</h1>
                <Accordian id={reviewerID}/>
            </div>
        </>
    )
}

export default ReviewerDashboard