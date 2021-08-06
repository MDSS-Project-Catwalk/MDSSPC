import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { openQuestionModalHandler } from './QOnClickHandlers';
import QuestionsList from './QuestionsList';
import QuestionSearch from './QSearch';

export const DataContext = React.createContext();

const questionAnswers = () => {
  const [data, setData] = useState({ product_id: null, results: [] });
  const [count, setCount] = useState(4);
  const tempData = useRef({ product_id: null, results: [] });
  let seeMoreAnswers;

  useEffect(() => {
    axios.get('qa/questions/', {
      params: {
        product_id: 25165,
        count: 10000,
      },
    })
      .then((result) => {
        setData(() => (result.data));
        tempData.current = result.data;
      });
  }, []);

  const moreAnswersHandler = () => {
    setCount((currentState) => (currentState + 2));
  };

  if (data.results.length > count) {
    seeMoreAnswers = <button type="button" onClick={moreAnswersHandler}> More Answered Questions </button>
  }

  return (
    <div className="QA_list">
      <DataContext.Provider value={{ data, tempData, count, setData }}>
        <QuestionSearch />
        <QuestionsList />
      </DataContext.Provider>
      <div id="question-modal" />
      <div className="question-footer">
        {seeMoreAnswers}
        <button type="button" onClick={() => (openQuestionModalHandler(data.product_id))}>
          Add a Question
        </button>
      </div>
    </div>
  );
};

export default questionAnswers;
