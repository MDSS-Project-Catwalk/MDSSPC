import React, { useState } from 'react';
import RelatedItemCard from './RelatedItemCard.jsx';

function RelatedItemsList(props) {
  return (
    <div>
      <button className="carousel-button">Left</button>
        <div className="carousel-track-container"></div>
          <ul className="carousel-track">
            <RelatedItemCard
              relatedProducts={props.relatedProducts}
              relatedProductsStyles={props.relatedProductsStyles}
            />
          </ul>
      <button className="carousel-button">Right</button>
    </div>
  )
}

export default RelatedItemsList;
