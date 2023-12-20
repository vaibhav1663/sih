import React, { useState } from 'react';

const PlagiarismForm = () => {
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
          console.log("Response:", result);
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

export default PlagiarismForm;
