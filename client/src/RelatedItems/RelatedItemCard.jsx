import React, { useState, useRef, useEffect } from 'react';
import ComparisonModal from './Comparing.jsx';
import StarRating from './StarRating.jsx';

function RelatedItemCard(props) {
  const [openModal, setOpenModal] = useState(false);
  const currentImage = useRef();

  return (
    <div className="card-container">
      <div className="card">
        <div className="card-header">
          <span>{props.product.category}</span>
          <span>
            <button
            className="modal-button"
            onClick={() => {
              setOpenModal(true);
            }}>
            {<span className="material-icons">star</span>}
          </button>
        </span>
        </div>
      <div className="img">
        <img src={props.product.results[0].photos[0].url}
             ref={currentImage}
             className="card-image zoom"
             alt="Photo unavailable."
          >
        </img>
      </div>
        <div className="card-footer">
        <span className="name-price">
          <span>{props.product.name} --- </span>
            <span> </span>
          <span>${props.product.default_price}</span>
        </span>
          <div>
            <StarRating rating={props.product.ratingsAverage}/>
          </div>
        </div>
        {openModal && <ComparisonModal closeModal={setOpenModal} />}
      </div>
    </div>
  )
}

export default RelatedItemCard;


//props.product.results[0].photos[0].url