import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import "./style.css";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg"];

  const handleChange = (e) => {
    const selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("please select a valid file");
    }
  };
  const handleClick = () => {
    document.getElementById("realButton").click();
  };

  return (
    <div className="uploadForm">
      <div className="inputCont">
        <input
          type="file"
          id="realButton"
          className="uploadButton"
          placeholder="+"
          onChange={handleChange}
        />
        <button className="uploadButton1" onClick={handleClick}>
          +
        </button>
      </div>
      <div className="output">
      {file && file.name && <div className="filename">{file.name}</div>}
      {error && <div className="error">{error}</div>}
      {file && <ProgressBar file={file} setFile={setFile}/>}
      </div>
    </div>
  );
};

export default UploadForm;
