import React, { useState, useEffect, useContext } from 'react';
import ReviewListContext from './context.jsx';
import StarRatings from 'react-star-ratings';
import styled from 'styled-components';

const Breakdown = () => {
  const metaContext = useContext(ReviewListContext);
  const [avg, setAvg] = useState(null);
  const [totalRatings, setTotal] = useState(null);
  const rating = metaContext.meta.ratings;
  const rate = [5, 4, 3, 2, 1];
  const meterStyle = {
    width: "80px",
    height: "12px",
  }
  const Container = styled.div`
  display:flex;
  `;
  const Boxone = styled.div`
  flex:3;
  align-self: center;
  justify-content: end;
  `;
  const Boxtwo = styled.div`
  flex:1;
  align-self: end;
  `;

  useEffect(() => {
    let sum = 0;
    const { ratings } = metaContext.meta;
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
    setAvg(Math.round(number * 10) / 10);
    setTotal(length);
  }, []);


  return (
    <div>
      <Container>
      <Boxtwo><h1 >{avg}</h1></Boxtwo>
        {avg ? <Boxone>
          <StarRatings rating={avg}
            starDimension="17px"
            starSpacing="1px"
            starRatedColor="grey"
            starEmptyColor="#d2d2d2" /> </Boxone>
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
            )
          }
        })}
      </div>
    </div>
  );
};

export default Breakdown;
