import React, { useContext, useEffect, useState } from 'react';
import ReviewTile from './ReviewTile.jsx';
import ReviewListContext from './context.jsx';

function ReviewList() {

  const reviewList = useContext(ReviewListContext);
  const [ counter, setCounter ] = useState(2);

  return (
    <div>
      {reviewList.list.slice(0, counter).map((tile, index) =>
        <ReviewTile key={index}
          value={tile} />
      )}
    { reviewList.list.length >= 2 ?  
    <button onClick={() => { setCounter(counter + 2) }}>Show More</button>
     : 
      null
    } 
    </div>
  );
};
export default ReviewList;