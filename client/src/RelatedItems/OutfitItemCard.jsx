import React, { useState } from 'react';
import Comparing from './Comparing.jsx';

function OutfitItemCard(props) {

  return (
    <div className="card-container">
      <div className="card">
        <div className="card-header">
          <span>Category</span>
          <span>
            <button className="modal-button">
            {<span className="material-icons">close</span>}
            </button>
          </span>
        </div>
        <span className="img">
        </span>
        <div className="card-footer">
        <span className="name-price">
          <span>Name --- </span>
            <span> </span>
          <span>Price</span>
        </span>
          <div>
            <span>Star Rating</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OutfitItemCard;