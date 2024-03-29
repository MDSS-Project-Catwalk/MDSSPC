import React, { useState, useRef, useEffect } from 'react';
import OutfitItemCard from './OutfitItemCard.jsx';
import OutfitAddButton from './OutfitAddButton.jsx';

function OutfitList(props) {
  const [addedOutfits, setAddedOufits] = useState([]);
  const [placeholderCards, setPlaceholderCards] = useState(3);

  let trackEl = useRef();
  let prevBtn = useRef();
  let nextBtn = useRef();

  useEffect(() => {
    nextBtn.current.style="display: none";
    prevBtn.current.styke="display: none";
  })

   //Allow slide scrolling:
   let currentLocation = -161.5;
   let maximumScroll = -(placeholderCards.length / 2) * 323;

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
     if (currentLocation !== -161.5) {
       trackEl.current.style.transform = `translateX(${currentLocation + 323}px)`;
       currentLocation += 323;
     }
     if (currentLocation === -161.5) {
       prevBtn.current.style="display: none;"
     } else {
       prevBtn.current.style="display: block;"
     }
     if (currentLocation === -161.5) {
       nextBtn.current.style="display: block;"
     }
   }

  return (
    <div className="carousel-container">
      <div className="carousel-inner">
        <div className="track" ref={trackEl}>
          <OutfitAddButton addOutfit={props.addOutfit}/>
          <OutfitItemCard />
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