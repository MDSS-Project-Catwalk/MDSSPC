import React, { useEffect, useState } from 'react';
import ReviewList from './ReviewList.jsx';
import ReviewListContext from './context.jsx';
import Sort from './sort.jsx';
import axios from 'axios';
import AddReview from './AddReview.jsx';
import Breakdown from './Breakdown.jsx';
import styled from 'styled-components';

const App = () => {
  const [list, setList] = useState([]);
  const [meta, setMeta] = useState({});
  const [showModal, setModal] = useState(false);

  const Container = styled.div`
    display:flex;
    justify-content: center;
  `;
  const Boxtwo = styled.div`
  flex:1;
  width: 200px;
  `;
  const Boxone = styled.div`
  flex:4; 
  align-items: center;
  width: 600px;
  `;

useEffect(() => {
  axios.get('/reviews', {
    params: {
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

useEffect(() => {
  axios.get('/reviews/meta', {
    params: {
      product_id: 25167,
    },
  })
    .then((data) => {
      setMeta(data.data);
    })
    .catch((err) => {
      console.log(err);
    });
}, []
)

return (
  <ReviewListContext.Provider value={{ list, setList, meta, setMeta, showModal, setModal }}>
      <h1>Reviews</h1>
      <Sort />
    <Container>
    {Object.keys(meta).length ? <Boxtwo><Breakdown /></Boxtwo> : null}
    <Boxone><ReviewList /></Boxone>
    </Container>
    {showModal ? <AddReview /> : null}
    {!showModal ? <button onClick={() => { setModal(!showModal) }}> Write Review </button> : null}
  </ReviewListContext.Provider>
);
};
export default App;
