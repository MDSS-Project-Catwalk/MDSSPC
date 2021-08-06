import React, { useContext } from 'react';
import QuestionsListEntry from './QuestionsListEntry';
import { DataContext } from './QA';

const QuestionsList = () => {
  const { data, count } = useContext(DataContext);
  const { product_id, results } = data;

  return (
    <>
      {results.map((question, index) => {
        if (index < count) {
          return <QuestionsListEntry question={question} key={question.question_id} />;
        }
        return null;
      })}
    </>
  );
};

export default QuestionsList;
