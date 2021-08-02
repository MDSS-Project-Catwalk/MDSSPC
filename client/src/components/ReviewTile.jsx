import React, { useState } from 'react';
import TileStar from './TileStar.jsx';
import Photos from './photos.jsx';
import Response from './response.jsx';
import Recommend from './recommend.jsx';

const ReviewTile = (props) => {
  const [Yes, setYes] = useState(props.value.helpfulness);
  const [voted, setVote] = useState(false);

  return (
    <div >
      <hr style={{backgroundColor: "#b3b3b3"}}/>
      <TileStar rating={props.value.rating}/>
      <div style={{textAlign:"right", color:"#b3b3b3"}}>{props.value.reviewer_name} {props.value.date.slice(0,10)}</div>
      <Photos photos={props.value.photos}/>
      <div style={{fontWeight: "bold"}}>{props.value.summary}</div>
      <div >{props.value.body}</div>
      <Recommend recommend={props.value.recommend}/>
      <Response response={props.value.response}/> &nbsp; Helpful? &nbsp; &nbsp; 
      <button className="astext" onClick={() => {
        if( voted === false ){
        setYes(Yes + 1);
        setVote(true);
        }}} > Yes &nbsp;  </button> {`(${Yes})`} &nbsp;&nbsp;|  
      <button className="astext">&nbsp;&nbsp;&nbsp; Report </button>
    </div>
  )
};

export default ReviewTile;