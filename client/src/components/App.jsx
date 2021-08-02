import React, { useEffect, useState } from 'react';
import ReviewList from './ReviewList.jsx';
import ReviewListContext from './context.jsx';
import Sort from './sort.jsx';
import axios from 'axios';
import AddReview from './AddReview.jsx';
import Breakdown from './Breakdown.jsx';

const App = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios.get('/reviews', { params: {
      product_id: 25167,
      sort: 'newest'
    }
  })
      .then((data) => {
        setList(data.data.results);
      })
      .catch((error) => {
        console.log('error', error);
      })
  }, []
  );


  return (
    <ReviewListContext.Provider value={{ list, setList }}>
      <div>
        <h1>Reviews</h1>
        <Sort />
        <ReviewList />
      </div>
      <Breakdown />
      <AddReview />
    </ReviewListContext.Provider>
  );
};
export default App;
