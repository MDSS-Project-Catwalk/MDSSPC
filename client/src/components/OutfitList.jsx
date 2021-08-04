import React, { useState, useRef } from 'react';
import OutfitItemCard from './OutfitItemCard.jsx';
import OutfitAddButton from './OutfitAddButton.jsx';

function OutfitList(props) {
  const [addedOutfits, setAddedOufits] = useState([]);
  console.log('addedOutfits:', addedOutfits.length);

  let trackEl = useRef();
  let prevBtn = useRef();
  let nextBtn = useRef();

   //Allow slide scrolling:
   let currentLocation = 0;
  //  let maximumScroll = -(props.relatedProducts.length / 2) * 323;

   const nextScrollHandler = () => {
     if (currentLocation > maximumScroll) {
       trackEl.current.style.transform = `translateX(${currentLocation - 323}px)`;
       currentLocation -= 323;
     }
     if (currentLocation === maximumScroll) {
       nextBtn.current.style="display: none;"
     } else {
       nextBtn.current.style="display: block;"
     }
     if (currentLocation < 0) {
       prevBtn.current.style="display: block;"
     }
   }
   const prevScrollHandler = () => {
     if (currentLocation !== 0) {
       trackEl.current.style.transform = `translateX(${currentLocation + 323}px)`;
       currentLocation += 323;
     }
     if (currentLocation === 0) {
       prevBtn.current.style="display: none;"
     } else {
       prevBtn.current.style="display: block;"
     }
     if (currentLocation !== 0) {
       nextBtn.current.style="display: block;"
     }
   }

  return (
    <div className="carousel-container">
      <div className="carousel-inner">
        <div className="track" ref={trackEl}>
          <OutfitAddButton />
        </div>
      </div>
        <div className="nav">
        <button
          ref={prevBtn}
          className="prev"
          onClick={prevScrollHandler}
        >
        <span className="material-icons">chevron_left</span>
        </button>
        <button
          ref={nextBtn}
          className="next"
          onClick={prevScrollHandler}
        >
        <span className="material-icons">chevron_right</span>
        </button>
      </div>
    </div>
  )
}

export default OutfitList;