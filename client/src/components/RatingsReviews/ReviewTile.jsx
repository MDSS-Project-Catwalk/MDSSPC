import React, { useState, useContext } from 'react';
import TileStar from './TileStar.jsx';
import Photos from './photos.jsx';
import Response from './response.jsx';
import Recommend from './recommend.jsx';
import ReviewListContext from './context.jsx';

const ReviewTile = (props) => {
  const [Yes, setYes] = useState(props.value.helpfulness);
  const [voted, setVote] = useState(false);
  const list = useContext(ReviewListContext);

  return (
    <div style={{backgroundColor: "#f2g2g2", padding:"10px", paddingLeft:"10px"}}  >
      { list.list[0] !== props.value ? <hr style={{color: "#dfe0e1", width: "1280px"}}/> : null}
      <TileStar rating={props.value.rating}/>
      <div style={{textAlign:"right", color:"#808284"}}>{props.value.reviewer_name} {props.value.date.slice(0,10)}</div>
      <div style={{paddingBottom: "5px"}}><Photos photos={props.value.photos}/></div>
      <div style={{fontWeight: "bold", color: "#4c4c4b", paddingBottom: "10px"}}>{props.value.summary}</div>
      <p style={{color:"#808284", paddingBottom: "10px"}}>{props.value.body}</p>
      <p ><Recommend recommend={props.value.recommend}/></p>
      <div style={{color: "#4c4c4b"}}>
      <Response response={props.value.response} style={{color: "#4c4c4b"}}/>
      {props.value.response ? <div style={{paddingTop: "10px"}}></div> : null}
      <div style={{backgroundColor: "#f1f1f1", width: "220px", padding: "5px"}}>
       &nbsp; Helpful? &nbsp; &nbsp; 
      <button style={{ color: "#4c4c4b"}} className="astext" onClick={() => {
        if( voted === false ){
        setYes(Yes + 1);
        setVote(true);
        }}} > Yes &nbsp;  </button> {`(${Yes})`} &nbsp;&nbsp;|  
      <button style={{color: "#4c4c4b"}}className="astext">&nbsp;&nbsp; Report </button>
      </div>
    </div>
    </div>
  )
};

export default ReviewTile;