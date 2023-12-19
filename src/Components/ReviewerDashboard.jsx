import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Accordian from "./ReviewerDashboard/Accordian";
import { useAuthContext } from "../hooks/useAuthContext";

const ReviewerDashboard = () => {

  const { user } = useAuthContext();
  
    return user && (
        <>
            <Navbar page="admin" />
            <div className="p-4 box text-center">
                <h1 className="mt-4 font-bold text-4xl mb-8">
                    Reviewer's Dashboard
                </h1>
                <Accordian reviewerID={user._id} />
            </div>
        </>
    );
};

export default ReviewerDashboard;
