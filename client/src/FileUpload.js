import React, { useState } from "react";
import axios from "axios";

function FileUpload({ onFilterComplete }) {
  const [file, setFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file first.");
      return;
    }
    setIsUploading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("http://localhost:5000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      onFilterComplete(response.data);
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Failed to upload and process the file.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="file-upload">
      <h2>Upload MIME File</h2>
      <input type="file" accept=".txt,.eml" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={isUploading}>
        {isUploading ? "Uploading..." : "Upload and Filter"}
      </button>
    </div>
  );
}

export default FileUpload;
