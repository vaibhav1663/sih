import React, {useState, useEffect} from 'react';
import Navbar from './Navbar';
import Accordian from './ReviewerDashboard/Accordian';
import { useAuthContext } from "../hooks/useAuthContext";


const ReviewerDashboard = () => {

    const reviewer = useAuthContext();
    const reviewerID = '657ecc2de60688e877a990f5' ;
    
    console.log({reviewerID})
    return (
        <>
            <Navbar page="admin" />
            <div className="p-4 box text-center">
            <h1 className="mt-8 font-bold text-4xl mb-8">Reviewer's Dashboard</h1>
                <Accordian reviewerID={reviewerID}/>
            </div>
        </>
    )
}

export default ReviewerDashboard