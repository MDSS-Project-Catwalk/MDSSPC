import React, { useState } from 'react';
import ComparisonModal from './Comparing.jsx';

function RelatedItemCard(props) {
  const [openModal, setOpenModal] = useState(false);

  let itemsToShow;
  let name;

  if (props.relatedProducts.length !== 0) {
    itemsToShow = props.relatedProducts[0];
    name = itemsToShow.name;
    console.log('name:', name);
  }

  console.log(itemsToShow);

  // console.log('relatedProducts from RelatedItemCard:', props.relatedProducts);
  // console.log('relatedProductsStyles from RelatedItemCard:', props.relatedProductsStyles);
  // console.log('0:', props.relatedProducts[0]);

  return (
    <div>
      <li>
        <div>
        <div>{name}</div>
          <button
            className="openModalBtn"
            onClick={() => {
              setOpenModal(true);
            }}>*
          </button>
        </div>
        <img alt="Product"></img>
        <div>
        </div>
        <span>Star Rating</span>
        {openModal && <ComparisonModal closeModal={setOpenModal} />}
      </li>
    </div>
  )
}

export default RelatedItemCard;