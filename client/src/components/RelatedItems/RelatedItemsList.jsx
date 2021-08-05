import React, { useState, useRef, useEffect } from 'react';
import RelatedItemCard from './RelatedItemCard.jsx';

function RelatedItemsList(props) {

  const [relatedItemCount, setRelatedItemCount] = useState(0);

  const trackEl = useRef();
  const prevBtn = useRef();
  const nextBtn = useRef();

  let count;

  useEffect(() => {
    setRelatedItemCount(props.relatedProducts.length);
    nextBtn.current.style="display: none";
    if (relatedItemCount > 4) {
      nextBtn.current.style="display: block";
      count = 4;
    }
    prevBtn.current.style="display: none";
  })

  //Allow slide scrolling:
  let currentLocation = 0;
  let maximumScroll = -(props.relatedProducts.length / 2) * 323;

  const nextScrollHandler = () => {
    count++;
    console.log(count);
    if (currentLocation > maximumScroll) {
      trackEl.current.style.transform = `translateX(${currentLocation - 323}px)`;
      currentLocation -= 323;
    }
    if (relatedItemCount <= 4 || count === relatedItemCount ) {
      nextBtn.current.style="display: none;"
    } else {
      nextBtn.current.style="display: block;"
    }
    if (count >= 5) {
      prevBtn.current.style="display: block;"
    }
  }
  const prevScrollHandler = () => {
    count--;
    console.log(count);
    if (currentLocation !== 0) {
      trackEl.current.style.transform = `translateX(${currentLocation + 323}px)`;
      currentLocation += 323;
    }
    if (count <= 4) {
      prevBtn.current.style="display: none;"
    } else {
      prevBtn.current.style="display: block;"
    }
    if (relatedItemCount <= 4 || count > 4) {
      nextBtn.current.style="display: block;"
    }
  }

  return (
    <div className="carousel-container">
      <div className="carousel-inner">
        <div className="track" ref={trackEl}>
        {
          props.relatedProducts.map((product, index) => {
            return <RelatedItemCard product={product} key={index} />
          })
        }
        </div>
      </div>
      <div className="nav">
        <button
          ref={prevBtn}
          className="prev"
          onClick={prevScrollHandler}>
          <span className="material-icons">chevron_left</span>
        </button>
        <button
          ref={nextBtn}
          className="next"
          onClick={nextScrollHandler}>
          <span className="material-icons">chevron_right</span>
        </button>
      </div>
    </div>
  )
}

export default RelatedItemsList;
