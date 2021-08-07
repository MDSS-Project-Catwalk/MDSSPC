import React, { useState, useEffect, useRef, useContext } from 'react';
import ProductContext from '../../productContext';
import axios from 'axios';
import { openQuestionModalHandler } from './QOnClickHandlers';
import QuestionsList from './QuestionsList';
import QuestionSearch from './QSearch';

export const DataContext = React.createContext();

const questionAnswers = () => {
  const { productId } = useContext(ProductContext);
  const [data, setData] = useState({ product_id: null, results: [] });
  const [count, setCount] = useState(4);
  const tempData = useRef({ product_id: null, results: [] });
  let seeMoreQuestions;

  useEffect(() => {
    axios.get('qa/questions/', {
      params: {
        product_id: productId,
        count: 10000,
      },
    })
      .then((result) => {
        setData(() => (result.data));
        tempData.current = result.data;
      });
  }, [productId]);

  const moreQuestionsHandler = () => {
    setCount((currentState) => (currentState + 2));
  };

  if (data.results.length > count) {
    seeMoreQuestions = <button type="button" className="btn" onClick={moreQuestionsHandler}> More Answered Questions </button>
  }

  return (
    <div className="QA_list">
      <DataContext.Provider value={{ data, tempData, count, setData }}>
        <QuestionSearch />
        <QuestionsList />
      </DataContext.Provider>
      <div id="question-modal" />
      <div className="question-footer">
        {seeMoreQuestions}
        <button type="button" className="btn" onClick={() => (openQuestionModalHandler(data.product_id))}>
          Add a Question
        </button>
      </div>
    </div>
  );
};

export default questionAnswers;
