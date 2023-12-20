import React, { useState } from 'react';

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (file) {
      const formData = new FormData();
      formData.append('file', file, file.name);

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
          console.log("Hek==",result);
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
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default FileUpload;