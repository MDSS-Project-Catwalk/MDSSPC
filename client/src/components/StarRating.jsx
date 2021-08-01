import React, { useRef, useEffect } from 'react';

function StarRating(props) {
  const outerStar = useRef();
  const innerStar = useRef();

  useEffect(() => {
    console.log(props.rating);
    innerStar.current.style.width = props.rating;
    console.log(outerStar);
    console.log(innerStar);
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