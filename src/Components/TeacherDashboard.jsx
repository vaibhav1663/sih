import React, { useState } from "react";
import Navbar from "./Navbar";
import Table from "./TeacherDashboard/table";
import SuggestBook from "./SuggestBook";
import Widget from "./TeacherDashboard/genie";
import { useAuthContext } from "../hooks/useAuthContext";
const TeacherDashboard = () => {
    const teacher = useAuthContext();
    const teacherID = String(teacher?.user?._id);
    const [data, setData] = useState({});
    const [selectedFile, setSelectedFile] = useState(null);
  
    const handleFileChange = (e) => {
      setSelectedFile(e.target.files[0]);
    };
  
    const handleUpload = () => {
      if (selectedFile) {
        const formData = new FormData();
        formData.append('file', selectedFile, selectedFile.name); // Use a different name for the FormData object
  
        const requestOptions = {
          method: 'POST',
          body: formData,
        };
  
        fetch('http://localhost:5000/plagiarism/text', requestOptions)
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
          })
          .then((result) => {
            setData(JSON.parse(result));
            // Handle the result as needed
          })
          .catch((error) => {
            console.error('Error:', error);
            // Handle errors
          });
      } else {
        console.error('No file selected');
        // Handle case where no file is selected
      }
    };
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
            <div className="p-4 box text-center">
            <h1 className="mt-4 font-bold text-4xl">Plagiarism Check</h1>
            </div>
             
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <input className="m-auto p-2 block text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none" type="file" onChange={handleFileChange} />
                <button className="center m-auto mt-2 mb-2 ml-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"  onClick={handleUpload}>Upload</button>
            </div>
            <Widget data={data} ></Widget>
           
        </>
    );
};

export default TeacherDashboard;
