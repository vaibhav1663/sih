import React from "react";
import Navbar from "./Navbar";
import Table from "./TeacherDashboard/table";
import SuggestBook from "./SuggestBook";
import { useAuthContext } from "../hooks/useAuthContext";
const TeacherDashboard = () => {
  const teacher = useAuthContext();
  const teacherID = '123' || teacher._id;// '123' is only id availabke for now

  return (
    <>
      <Navbar page="admin" />
      <div className="p-4 box text-center">
        <h1 className="mt-24 font-bold text-4xl">Teacher Dashboard</h1>
        <div className="p-20">
        <h1 className="font-bold text-lg p-9">Books Reccomendation</h1>
          <SuggestBook />
          </div>
        <h1 className="font-bold text-lg p-9">Books Status Table</h1>
        <Table id={teacherID}/>
      </div>
    </>
  );
};

export default TeacherDashboard;
