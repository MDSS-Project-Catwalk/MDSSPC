import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuestionsList from './QuestionsList';

export const DataContext = React.createContext();

const questionAnswers = (props) => {
  const [data, setData] = useState({ product_id: null, results: [] });
  const [tempData, setTempData] = useState({ product_id: null, results: [] });
  const [count, setCount] = useState(4);
  let seeMoreAnswers;

  useEffect(() => {
    axios.get('qa/questions/', {
      params: {
        product_id: 25165,
        count: count,
      },
    })
      .then((result) => {
        setData(currentState => (result.data));
      });

    axios.get('qa/questions/', {
      params: {
        product_id: 25165,
        count: count + 2,
      },
    })
      .then((result) => {
        setTempData(currentState => (result.data));
      });
  }, [count]);

  const moreAnswersHandler = () => {
    setCount((currentState) => (currentState + 2));
  };

  if (data.results.length < tempData.results.length) {
    seeMoreAnswers = <button type="button" onClick={moreAnswersHandler}> More Answered Questions </button>
  }

  if (tempData.results.length !== 0 && data.results.length !== 0) {
    return (
      <div className="QA_list">
        <DataContext.Provider value={data}>
          <QuestionsList />
        </DataContext.Provider>
        <div className="question-footer">
          {seeMoreAnswers}
        </div>
      </div>
    );
  }
  return null;
};

export default questionAnswers;
