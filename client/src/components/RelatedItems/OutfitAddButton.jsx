import React, { useState } from 'react';

function OutfitAddButton() {

  return (
    <div className="card-container">
      <div className="card">
        <button className="add-outfit-button">
        <span className="material-icons">add_circle</span>
        <span>Add to Outfit</span>
        </button>
      </div>
    </div>
  )
}

export default OutfitAddButton;