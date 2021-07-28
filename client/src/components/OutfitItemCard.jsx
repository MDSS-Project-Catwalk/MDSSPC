import React, { useState } from 'react';
import Comparing from './Comparing.jsx';

function OutfitItemCard() {

  return (
    <div>
      OUTFIT ITEM CARD:
      <div>
        Category
        <button>X</button>
      </div>
      <div>
        <span>Product Name</span>
        <span>Price</span>
      </div>
      <span>Star Rating</span>
    </div>
  )
}

export default OutfitItemCard;