import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Breakdown = () => {
  const [ratings, setRatings] = useState([]);
  const [avg, setAvg] = useState(0);

  useEffect(() => {
    axios.get('/reviews/meta', {
      params: {
        product_id: 25167,
      },
    })
      .then((data) => {
        setRatings(data.data.ratings);
      })
      .then(()=> {
        console.log(ratings);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []
  )
  const average = (data) => {
      const sum = 0; 
      for( var i = 0; i < data.data.ratings.length; i++){
          sum += data.data.ratings[i];
      }
      return sum / data.data.ratings.length;
  }  

  return (
    <div>
    </div>
  );
};

export default Breakdown;
