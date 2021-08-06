import React, { useEffect, useState } from 'react';
import ReviewList from './ReviewList.jsx';
import ReviewListContext from './context.jsx';
import Sort from './sort.jsx';
import axios from 'axios';
import AddReview from './AddReview.jsx';
import Breakdown from './Breakdown.jsx';
import styled from 'styled-components';

const Reviews = () => {
  const [list, setList] = useState([]);
  const [meta, setMeta] = useState({});
  const [showModal, setModal] = useState(false);

  const Container = styled.div`
  display: flex;
    position: relative;
    justify-content: center;
  `;
  const Boxtwo = styled.div`
  width: 260px;
  position: relative;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  `;
  const Boxone = styled.div`
  flex: 0 0 auto;
  align-items: center;
  width: 1400px;
  justify-content: center;
  `;
  const Header = styled.div`
  flex: none;
  justify-content: center;
  position: relative;
  text-align: center;
  `;

  const ContainerTwo = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
`;
  const Butn = styled.div`
  left: 300px;
  `;
  const Line = styled.div`
  flex: 0 0 auto;
  border-left: solid #dfe0e1;
  width: 0px;
  top: 6px;
  right: 0px;
  position: relative;
  
  `;
  const BoxThree = styled.div`
  flex: none;
  width: 700px;
  position: relative;
  `;
  const BoxFour = styled.div`
  flex: none;
  position: relative;
  width: 700px;
  left: 600px;
  `;

  useEffect(() => {
    axios.get('/reviews', {
      params: {
        product_id: 25192,
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
        product_id: 25192,
      },
    })
      .then((data) => {
        setMeta(data.data);
        console.log('hihi', meta)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []
  )

  return (
    <ReviewListContext.Provider value={{ list, setList, meta, setMeta, showModal, setModal }}>
        <Header>
          <p style={{color: "#4c4c4b"}}>Ratings &amp; Reviews</p>
        </Header>
        {Object.keys(meta).length ? <Boxtwo>
         <Breakdown />
        </Boxtwo> : null}
        <ContainerTwo>
        
      {Object.keys(meta).length ? <BoxThree>Sort &nbsp;
          <Sort />
        </BoxThree> : null} 
        <BoxFour>
        {!showModal ? <Butn><button className="rr-WriteReview btn" onClick={() => { setModal(!showModal) }}> Write Review </button></Butn> : null}
        </BoxFour>
        </ContainerTwo>
      <hr style={{ width: "1450px", color: "#dfe0e1" }}></hr>
      {showModal ? <AddReview /> : null}
      <Container>
        <Boxone><ReviewList /></Boxone>
      </Container>
    </ReviewListContext.Provider>
  );
};
export default Reviews;
