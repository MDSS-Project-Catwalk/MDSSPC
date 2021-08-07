import React from 'react';


  const Photos = (props) => {
    const photosExist = props.photos != [];
    if(photosExist) {
      return (
        props.photos.map((photo, i) => {
          return <img key={i} src={photo.url} style={{width: "100px", height: "100px"}}/>
        }))
    } 
  }  

export default Photos;