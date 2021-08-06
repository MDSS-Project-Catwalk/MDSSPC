import { useState, useEffect } from 'react';
import { answerImageStorage } from '../firebase/fireBaseConfig';

const useStorage = (files) => {
  const [progress, setProgress] = useState({});
  const [taskCompleted, setTaskCompleted] = useState({});
  const [error, setError] = useState({});
  const [url, setUrl] = useState([]);

  useEffect(() => {
    for (let i = 0; i < files.length; i += 1) {
      const file = files[i];
      const storageRef = answerImageStorage.ref(file.name);
      const uploadTask = storageRef.put(file);
      uploadTask.on('state_changed', (snapshot) => {
        const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress((prevState) => ({ ...prevState, [i]: percentage }));
        if (percentage === 100) {
          setTaskCompleted((prevState) => ({ ...prevState, [i]: true }));
        } else {
          setTaskCompleted((prevState) => ({ ...prevState, [i]: false }));
        }
      }, (err) => {
        setError((prevState) => ({ ...prevState, [file.name]: err }));
      }, () => {
        uploadTask.snapshot.ref.getDownloadURL()
          .then((downloadUrl) => {
            setUrl((prevState) => ([...prevState, downloadUrl]));
          });
      });
    }
  }, [files]);

  return {
    error,
    url,
    progress,
    taskCompleted,
  };
};

export default useStorage;
