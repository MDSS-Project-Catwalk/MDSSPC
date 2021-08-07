import React, { useEffect, useState, useContext } from 'react';
import ReviewList from './ReviewList.jsx';
import ReviewListContext from './context.jsx';
import Sort from './sort.jsx';
import axios from 'axios';
import AddReview from './AddReview.jsx';
import Breakdown from './Breakdown.jsx';
import styled from 'styled-components';

const Reviews = (props) => {
  const [list, setList] = useState([]);
  const [meta, setMeta] = useState({});
  const [showModal, setModal] = useState(false);
  const [sort, setSort] = useState(null);

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
  width: 1280px;
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
  const BoxThree = styled.div`
  flex: none;
  position: relative;
  justify-content: start;
  right: 500px;
  `;
  const BoxFour = styled.div`
  flex: none;
  position: relative;
  left: 500px;
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
        alert('error', error);
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
        console.log(meta)
      })
      .catch((err) => {
        alert(err);
      });
  }, []
  )

  return (
    <ReviewListContext.Provider value={{ list, setList, meta, setMeta, showModal, setModal }}>
        <div style={{padding: "25px"}}/>
        <Header>
          <p style={{color: "#4c4c4b"}}>Ratings &amp; Reviews</p>
        </Header>
        {Object.keys(meta).length ? <Boxtwo>
         <Breakdown />
        </Boxtwo> : null}
        <ContainerTwo>

      {Object.keys(meta).length ? <BoxThree>Sort &nbsp;
          <Sort props={{sort, setSort}} />
        </BoxThree> : null}
        <BoxFour>
        {!showModal ? <button className="rr-WriteReview btn" onClick={() => { setModal(!showModal) }}> Write Review </button> : null}
        </BoxFour>
        </ContainerTwo>
      <hr style={{ width: "1280px", color: "#dfe0e1" }}></hr>
      {showModal ? <AddReview /> : null}
      <Container>
        <Boxone><ReviewList /></Boxone>
      </Container>
    </ReviewListContext.Provider>
  );
};
export default Reviews;
