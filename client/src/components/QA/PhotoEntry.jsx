import React from 'react';

const PhotoEntry = (props) => {
  const {photo} = props;
  return (
    <div>
      <img className="answer-img" src={photo.url} />
    </div>
  );
};

export default PhotoEntry;
