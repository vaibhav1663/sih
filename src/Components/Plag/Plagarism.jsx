import React, { useEffect, useState } from 'react';
import { pdfToText } from "pdf-to-text";

const Plagarism = () => {

    useEffect(()=>{
        pdfToText("./Aurvedic.pdf", {}, (err, data) => {
            console.log(data);
            console.log(err);
        });
    },[])
        
    
      return (
        <div className="App">
          <h1>result</h1>
          <input type="file"/>
          <h2>Start editing to see some magic happen!</h2>
        </div>
      );
};



export default Plagarism