import React from "react";
import Navbar from "./Navbar";
import Table from "./TeacherDashboard/table";
import SuggestBook from "./SuggestBook";
import Widget from "./TeacherDashboard/genie";
import PlagiarismForm from "./TeacherDashboard/PlagiarismForm";
import { useAuthContext } from "../hooks/useAuthContext";
const TeacherDashboard = () => {
    const teacher = useAuthContext();
    const teacherID = String(teacher?.user?._id);
  
  
    return (
        <>
            <Navbar page="admin" />
            <div className="p-4 box text-center">
                <h1 className="mt-4 font-bold text-4xl">Author's Dashboard</h1>
                <h1 className="font-semibold text-xl px-auto mt-4 mb-8">Books Status Table</h1>
                <div className="w-full md:w-full lg:w-3/4 mx-auto ">
                <Table recommenderID={teacherID} />
                </div>
                
                <div className="my-12">
                    <SuggestBook recommenderID={teacherID} bookID="" revise={false} />
                </div>
                
                
            </div>
            <Widget></Widget>
            <PlagiarismForm></PlagiarismForm>
        </>
    );
};

export default TeacherDashboard;
