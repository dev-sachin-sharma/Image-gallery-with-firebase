import react, { useState, useEffect } from "react";
import { storage,fireStore,timestamp } from "../firebase";

const useStorage = ( file ) => {
  const [progress, SetProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const storageRef = storage.ref(`${file.name}`);
    const collectionRef=fireStore.collection('images')
    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        SetProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        console.log(url)
        const createdAt=timestamp()
        collectionRef.add({url,createdAt})
        setUrl(url);
        
      }
    );
  }, [file]);

  return { progress, error, url };
};

export default useStorage;
