import React from "react";
import Navbar from "./Navbar";
import Table from "./TeacherDashboard/table";
import { useAuthContext } from "../hooks/useAuthContext";
const TeacherDashboard = () => {
  const teacher = useAuthContext();
  const teacherID = '123' || teacher._id;// '123' is only id availabke for now

  return (
    <>
      <Navbar page="admin" />
      <div className="p-4 box text-center">
        <h1 className="mt-24 font-bold text-4xl">Teacher Dashboard</h1>
        <Table id={teacherID}/>
      </div>
    </>
  );
};

export default TeacherDashboard;
