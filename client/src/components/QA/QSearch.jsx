import React, { useState, useContext } from 'react';
import { DataContext } from './QA';

const QuestionSearch = () => {
  const { data, setData, tempData } = useContext(DataContext);
  const { results } = data;

  const onChangeHandler = (e) => {
    const searchedFor = e.target.value;
    const dataHolder = [];
    if (searchedFor.length > 2) {
      for (let i = 0; i < results.length; i += 1) {
        const { question_body } = results[i];
        if ((question_body.toUpperCase()).includes(searchedFor.toUpperCase())) {
          dataHolder.push(results[i]);
        }
      }
      setData((currentState) => ({ product_id: currentState.product_id, results: dataHolder }));
    } else {
      setData((currentState) => (tempData.current));
    }
  };

  return (
    <div className="question-search">
      <input className="question-search-bar" onChange={onChangeHandler} placeholder="Have a question?" />
    </div>
  );
};

export default QuestionSearch;
