import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { FaUpload } from "react-icons/fa";
import "./UploadMRI.css";

function UploadMRI() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleUpload = () => {
    if (!image) {
      alert("Please upload an MRI image");
      return;
    }

    alert("MRI Uploaded Successfully!");
  };

  return (
    <div className="upload-page">
      <Sidebar />

      <div className="upload-main">
        <Navbar />

        <div className="upload-content">
          <h2>Upload MRI Scan</h2>

          <div className="upload-container">
            {/* LEFT - Upload Box */}

            <div className="upload-box">
              <FaUpload size={50} className="upload-icon" />

              <p className="upload-text">Upload MRI Image</p>

              <label className="custom-upload">
                Choose Image
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </label>

              <button className="upload-btn" onClick={handleUpload}>
                Upload MRI
              </button>
            </div>

            {/* RIGHT - Preview */}

            {preview && (
              <div className="preview-box">
                <h3>MRI Preview</h3>

                <img src={preview} alt="MRI Preview" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadMRI;
