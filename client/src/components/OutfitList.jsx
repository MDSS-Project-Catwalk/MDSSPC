import React, { useState } from 'react';
import OutfitItemCard from './OutfitItemCard.jsx';
import OutfitAddButton from './OutfitAddButton.jsx';

function OutfitList() {
  const [addedOutfits, setAddedOufits] = useState([]);


  return (
    <div className="carousel-container">
      <div className="carousel-inner">
        <div className="track">
          <OutfitAddButton />
        </div>
      </div>
        <div className="nav">
        <button className="prev">
          <span className="material-icons">chevron_left</span>
        </button>
        <button className="next">
          <span className="material-icons">chevron_right</span>
        </button>
      </div>
    </div>
  )
}

export default OutfitList;