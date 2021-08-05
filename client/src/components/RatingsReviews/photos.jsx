import React from 'react';


  const Photos = (props) => {
    const photosExist = props.photos != [];
    if(photosExist) {
      return (
        props.photos.map((photo) => {
          return <img src={photo.url} width="100" height="100" style={{outlineStyle:"solid", outlineWidth: "1px"}}/>
        }))
    } 
  }  

export default Photos;