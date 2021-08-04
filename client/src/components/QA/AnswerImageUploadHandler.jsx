import React, { useState, useEffect } from 'react';
import useStorage from '../hooks/useStorage';

const AnswerImageUploadHandler = ({files, extract, imageUrlData}) => {
  if (files !== undefined) {
    const {
      url,
      error,
      progress,
      taskCompleted,
    } = useStorage(files);

    const [isUploading, setIsUploading] = useState(true);

    useEffect(() => {
      const eachProgress = Object.values(taskCompleted);
      if (!eachProgress.includes(false)
      && eachProgress.length !== 0
      && url.length === eachProgress.length) {
        setIsUploading(false);
        extract(error, url);
      }
    }, [taskCompleted, url]);

    return (
      <div className="thumbnails">
        {isUploading && <div className="progress-bar">Uploading...</div>}
        {imageUrlData.map((u, index) => (
          <img src={u} key={u} width="75" height="100" />
        ))}
      </div>
    );
  }
  return (<></>);
};

export default AnswerImageUploadHandler;
