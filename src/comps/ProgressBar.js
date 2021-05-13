import React,{useEffect} from "react";
import useStorage from "../hooks/useStorage";
import "./style.css";

const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);
  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url,setFile]);

  return (
    <div className="prog-container">
      <div className="progress-bar" style={{ width: `${progress}%` }}>
        {progress}%
      </div>
    </div>
  );
};

export default ProgressBar;
