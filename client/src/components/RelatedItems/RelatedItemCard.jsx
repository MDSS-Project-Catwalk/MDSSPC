import React, { useState, useRef, useEffect, useContext } from 'react';
import ComparisonModal from './Comparing.jsx';
import StarRating from './StarRating.jsx';
import ProductContext from '../../productContext.jsx';

function RelatedItemCard(props) {
  const [openModal, setOpenModal] = useState(false);
  const currentImage = useRef();
  const [isClicked, setIsClicked] = useState(false);

  const globalContext = useContext(ProductContext);

  function selectOutfitItem (e) {
    let currentProduct = parseInt(e.target.getAttribute('value'));
    globalContext.setProductId(currentProduct);
    if (!isClicked) {
      setIsClicked(true);
      globalContext.setOutfitItemId(currentProduct);
      event.target.style.background="#fcffa4";
    } else {
      event.target.style.background="#aaa";
      setIsClicked(false);
    }
  }

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
      <div className="img" >
        <img src={props.product.results[0].photos[0].url}
             onClick={selectOutfitItem}
             ref={currentImage}
             className="card-image zoom"
             alt="Photo unavailable."
             value={props.product.product_id}
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
        {openModal && <ComparisonModal  relatedItemCharacteristics={props.product.features} closeModal={setOpenModal}  />}
      </div>
    </div>
  )
}

export default RelatedItemCard;


//props.product.results[0].photos[0].url