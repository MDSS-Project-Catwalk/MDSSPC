import React from 'react';

const PhotoEntry = (props) => {
  const {photo} = props;
  return (
    <div className="photos">
      <img src="photo.url"/>
    </div>
  );
};

export default PhotoEntry;
