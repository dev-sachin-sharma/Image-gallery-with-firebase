import React, { useState } from "react";
import { storage } from "./firebase";

function App() {
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      ()=>{
          storage
          .ref('images')
          .child(image.name)
          .getDownloadURL()
          .then(url=>{
              console.log(url)
              document.getElementById('setImage').src=url;
          })
      }
    );
  };
  console.log(image, "image check");

  return (
    <div>
      <input type="file" onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
      <img id="setImage" width="400" height="400"/>
    </div>
  );
}

export default App;
