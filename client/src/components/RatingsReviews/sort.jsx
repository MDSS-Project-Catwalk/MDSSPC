import React, { useState, useContext } from 'react';
import axios from 'axios';
import ReviewListContext from './context.jsx';

const Sort = () => {
  // const dropdownRef = useRef(null);
  const [sort, setSort] = useState('newest');

  const reviewList = useContext(ReviewListContext);
  // upon clicking sort, it should open up the list
  // then each item has a click event where if you click, it'll render a new list based on helpful, newest, or relvant
  // set state using
  const helpful = () => {
    axios.get('/reviews', {
      params: {
        product_id: 25167,
        sort: 'helpful',
      },
    })
      .then((data) => {
        reviewList.setList(data.data.results);
      })
      .catch((error) => {
        console.log('error', error);
      });
  };

  const newest = () => {
    axios.get('/reviews', {
      params: {
        product_id: 25167,
        sort: 'newest',
      },
    })
      .then((data) => {
        reviewList.setList(data.data.results);
      })
      .catch((error) => {
        console.log('error', error);
      });
  };

  const relevance = () => {
    axios.get('/reviews', {
      params: {
        product_id: 25167,
        sort: 'relevance',
      },
    })
      .then((data) => {
        reviewList.setList(data.data.results);
      })
      .catch((error) => {
        console.log('error', error);
      });
  };

  return (
    <div className="link">
      <form onSubmit={(event) => {
        event.preventDefault();
        if (sort === 'newest') {
          newest();
        } else if (sort === 'helpful') {
          helpful();
        } else if (sort === 'relevant') {
          relevance();
        }
      }}
      >
        <label>

          <select onChange={(event) => { setSort(event.target.value); }}>
            <option value="newest">Newest</option>
            <option value="helpful">Helpful</option>
            <option value="relevant">Relevant</option>
          </select>
        </label>
        <input type="submit" value="Submit" className="rr-submit btn" />
      </form>
    </div>
  );
};

export default Sort;
