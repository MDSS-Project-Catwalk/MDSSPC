import React, { useState, useEffect, useContext } from 'react';
import StarRatings from 'react-star-ratings';
import styled from 'styled-components';
import ReviewListContext from './context.jsx';

const Breakdown = () => {
  const metaContext = useContext(ReviewListContext);
  const [avg, setAvg] = useState(null);
  const [totalRatings, setTotal] = useState(null);
  const ratez = metaContext.meta.ratings;
  const rate = [5, 4, 3, 2, 1];

  const meterStyle = {
    width: "150px",
    height: "12px",
    alignSelf: "center",
  }
  const Container = styled.div`
  display:flex;
  justify-content: center;
  `;
  const Boxone = styled.div`
  flex: 0 0 auto;
  align-self: center;
  `;
  const ContainerTwo = styled.div`
  display: flex;
  justify-content: center;
  padding: 7px;
  width: 240px;
  color: #808284;
  font-size: 13px;
  `;
  const Boxtwo = styled.div`
  flex: 0 0 auto;
  `;
  const BoxThree = styled.div`
  flex: 0 0 auto;
  justify-content: center;
  `;
  const Ratings = styled.div`
  display: flex;
  background-color: #f1f1f1;
  justify-content: center;
  padding-bottom: 10px;
  padding-top: 10px;
  `;
  const Text = styled.div`
  flex: 1
  width: 60px;
  position: relative;
  justify-content: center;
  font-size: 13px;
  color: #4c4c4b;
  `;
  const Meter = styled.div`
  flex: 3;
  width: 160px;
  position: relative;
  justify-content: center;
  left: 35px;
  `;


  useEffect(() => {
    let sum = 0;
    let ratings = metaContext.meta.ratings;
    let length = 0;
    for (const i in ratings) {
      length += parseInt(ratings[i]);
    }
    for (let i = 1; i <= 5; i++) {
      if (ratings[i]) {
        sum += i * parseInt(ratings[i]);
      }
    }
    const number = sum / length;
    console.log(number);
    setAvg(Math.round(number * 10) / 10);
    setTotal(length);
  }, []);


  return (
    <div style={{ fontFamily: "Arial"}}>
      <Container>
        {avg ? <Boxone>
          <StarRatings rating={avg}
            starDimension="25px"
            starSpacing="1px"
            starRatedColor="#4c4c4b"
            starEmptyColor="#d2d2d2" /> </Boxone>
<<<<<<< HEAD
          : null}

      </Container>
      <div>
        {rate.map((bar, index) => {
          if (rating[bar]) {
          return (
            <div >{bar} stars <meter key={index} style={meterStyle} max={totalRatings} min="0.0" value={rating[bar]}></meter></div>
          )
          } else {
            return (
              <div >{bar} stars <meter key={index} style={meterStyle} max={totalRatings} min="0.0" value="0"></meter></div>
=======
          : null} 
      </Container>
      <ContainerTwo>
        <Boxtwo>{avg}</Boxtwo>&nbsp;|&nbsp;
        <BoxThree>{totalRatings}  reviews</BoxThree>
      </ContainerTwo>
      
      <Ratings>
      <Meter>
        {rate.map((bar, i) => {
          if (ratez[bar]) {
          return (
            <Text >{rate[i]} star &nbsp; <meter style={meterStyle} max={totalRatings} min="0.0" value={ratez[bar]}></meter></Text>
          )
          } else {
            return (
              <Text > {rate[i]} star &nbsp; <meter style={meterStyle} max={totalRatings} min="0.0" value="0"></meter></Text>
>>>>>>> 00b56ebee28a9d5191d98e998ec550575ad8ef4c
            )
          }
        })}
      </Meter>
      </Ratings>
      
    </div>
  );
};

export default Breakdown;
