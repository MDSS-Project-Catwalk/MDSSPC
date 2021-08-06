import React, { useState, useRef, useEffect } from 'react';

function OutfitAddButton(props) {

  const addOutfitButton = useRef();

  return (
    <div className="card-container">
      <div className="card">
        <button className="add-outfit-button" ref={addOutfitButton}>
        <span className="material-icons">add_circle</span>
        <span>Add to Outfit</span>
        </button>
      </div>
    </div>
  )
}

export default OutfitAddButton;