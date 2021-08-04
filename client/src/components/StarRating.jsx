import React, { useRef, useEffect } from 'react';

function StarRating(props) {
  const outerStar = useRef();
  const innerStar = useRef();

  useEffect(() => {
    innerStar.current.style.width = props.rating;
  })

  return (
    <div>
      <div id="stars-outer" ref={outerStar}>
        <div id="stars-inner" ref={innerStar} >
        </div>
      </div>
    </div>
  )
}

export default StarRating;