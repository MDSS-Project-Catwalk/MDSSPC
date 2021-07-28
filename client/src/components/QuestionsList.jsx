import React, { useContext } from 'react';
import QuestionsListEntry from './QuestionsListEntry';
import { DataContext } from './QA';

const QuestionsList = () => {
  const { product_id, results } = useContext(DataContext);
  return (
    <>
      {results.map((question) => (
        <QuestionsListEntry question={question} key={question.question_id} />
      ))}
    </>
  );
};

export default QuestionsList;
