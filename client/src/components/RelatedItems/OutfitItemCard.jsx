import React, { useState } from 'react';
import StarRating from './StarRating.jsx';

function OutfitItemCard(props) {

  console.log('props from OutfitItemCard:', props);

  return (
    <div className="card-container">
      <div className="card">
        <div className="card-header">
          <span>{props.option.category}</span>
          <span>
            <button className="modal-button">
            {<span className="material-icons">close</span>}
            </button>
          </span>
        </div>
      <div className="img" >
        <img src={props.option.results[0].photos[0].url}
             className="card-image zoom"
             alt="Photo unavailable."
             value={props.option.product_id}
          >
        </img>
      </div>
        <div className="card-footer">
        <span className="name-price">
          <span>{props.option.name} --- </span>
            <span> </span>
          <span>{props.option.default_price}</span>
        </span>
          <div>
            <StarRating rating={props.option.ratingsAverage}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OutfitItemCard;