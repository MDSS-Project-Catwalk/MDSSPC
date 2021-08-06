import React from 'react';

const PhotoEntry = (props) => {
  const {photo} = props;
  return (
    <div className="photos">
      <img src={photo.url} width="75" height="100" />
    </div>
  );
};

export default PhotoEntry;
