import React, { useState, useContext } from 'react';
import axios from 'axios';
import ReviewListContext from './context.jsx';

const Sort = (props) => {
  // const dropdownRef = useRef(null);
  const reviewList = useContext(ReviewListContext);

  // upon clicking sort, it should open up the list
  // then each item has a click event where if you click, it'll render a new list based on helpful, newest, or relvant
  // set state using
  const filter = (currentValue) => {
    axios.get('/reviews', {
      params: {
        product_id: 25167,
        sort: currentValue,
      }, 
    })
      .then((data) => {
        props.props.setSort(currentValue);
        reviewList.setList(data.data.results);
      })
      .catch((error) => {
        alert('error', error);
      });
  };

  return (
    <div className="link">
      <form>
        <label>
          <select value={props.props.sort} className="dropdown" onChange={(event) => {console.log(event.target.value); filter(event.target.value);}}>
            <option value="newest">Newest</option>   
            <option value="helpful">Helpful</option>
            <option value="relevant">Relevant</option>
          </select>
        </label> &nbsp;&nbsp;
      </form>
    </div>
  );
};

export default Sort;
