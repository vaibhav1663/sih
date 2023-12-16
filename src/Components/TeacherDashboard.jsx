import React from "react";
import Navbar from "./Navbar";
import Table from "./TeacherDashboard/table";
import { useAuthContext } from "../hooks/useAuthContext";
import SuggestBook from "./SuggestBook";
const TeacherDashboard = () => {
  const teacher = useAuthContext();
  
  console.log(teacher);
  const teacherID = teacher?.user?._id ;
  console.log(teacher?.user?._id)
  return (
    <>
      <Navbar page="admin" />
      <div className="p-4 box text-center">
        <h1 className="mt-24 font-bold text-4xl">Teacher Dashboard</h1>
        <SuggestBook id={teacherID}/>
        <Table id={teacherID}/>
      </div>
    </>
  );
};

export default TeacherDashboard;
