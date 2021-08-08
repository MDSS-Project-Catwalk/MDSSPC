import React, { useState, useRef, useEffect, useContext } from 'react';
import ProductContext from '../../productContext.jsx';

function OutfitAddButton(props) {
  const globalContext = useContext(ProductContext);
  // console.log('from OutfitAddButton:', globalContext);

  const addOutfitButton = useRef();

  return (
    <div className="card-container">
      <div className="card">
        <button className="add-outfit-button" ref={addOutfitButton} onClick={props.addToOutfit}>
        <span className="material-icons">add_circle</span>
        <span>Add to Outfit</span>
        </button>
      </div>
    </div>
  )
}

export default OutfitAddButton;