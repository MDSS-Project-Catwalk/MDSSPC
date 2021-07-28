import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AnswersListEntry from './AnswersListEntry';
import markQuestionHelpful from './OnClickHandlers';

const QuestionsListEntry = (props) => {
  const { question } = props;
  const { question_body, question_id, answers, question_helpfulness} = question;

  const [allAnswers, setAllAnswers] = useState({ product_id: null, results: [] });
  const [allAnswersCount, setAllAnswersCount] = useState(Object.keys(answers).length);
  const [answersLoad, setAnswersLoad] = useState({ count: 2, button: 'more' });
  const [questionHelpfulness, setQuestionHelpfullness] = useState(question_helpfulness);

  const loadAnswers = () => {
    setAnswersLoad(() => ({
      count: allAnswersCount,
      button: 'less',
    }));
  };

  const collapseAnswers = () => {
    setAnswersLoad(() => ({
      count: 2,
      button: 'more',
    }));
  };

  useEffect(() => {
    // get request for answers given question ID.
    axios.get(`/qa/questions/${question_id}/answers`,
      {
        params: {
          count: answersLoad.count,
        },
      })
      .then((results) => {
        setAllAnswers(() => (results.data));
      });
  }, [answersLoad.count]);

  return (
    <div className="question_list">
      <div className="question_body">
        <p className="question">
          Q:
          {question_body}
        </p>
        <div className="question_links">
          <p className="helpful">Helpful?</p>
          <p className="yes_link">
            <button type="submit" className="yes_btn" onClick={() => markQuestionHelpful(question_id, setQuestionHelpfullness)}>
              Yes
            </button>
            (
            {questionHelpfulness}
            )
          </p>
          <p className="add_answer_link">| Add Answer</p>
        </div>
      </div>
      <div className="answer_list" id="answer_list">
        {allAnswers.results.map((answer) => (
          <AnswersListEntry answer={answer} key={answer.answer_id} />
        ))}
      </div>
      { answersLoad.button === 'more'
        ? <button type="submit" onClick={loadAnswers}>See More Answers</button>
        : <button type="submit" onClick={collapseAnswers}>Collapse Answers</button> }
    </div>
  );
};

export default QuestionsListEntry;
