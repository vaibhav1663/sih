import React from "react";
import Navbar from "./Navbar";
import Table from "./TeacherDashboard/table";
import SuggestBook from "./SuggestBook";
import { useAuthContext } from "../hooks/useAuthContext";
const TeacherDashboard = () => {
    const teacher = useAuthContext();
    const teacherID = String(teacher?.user?._id);
  
  
    return (
        <>
            <Navbar page="admin" />
            <div className="p-4 box text-center">
                <h1 className="mt-8 font-bold text-4xl">Teacher's Dashboard</h1>
                <h1 className="font-semibold text-xl px-auto mt-16 mb-8">Books Status Table</h1>
                <div className="w-full md:w-full lg:w-3/4 mx-auto border border-2 rounded-xl">
                <Table recommenderID={teacherID} />
                </div>
                
                <div className="my-12">
                    <SuggestBook recommenderID={teacherID} />
                </div>
            </div>
        </>
    );
};

export default TeacherDashboard;
