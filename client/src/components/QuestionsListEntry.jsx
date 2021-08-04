import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AnswersListEntry from './AnswersListEntry';
import { markQuestionHelpful, openAnswerModalHandler } from './QOnClickHandlers';

const QuestionsListEntry = (props) => {
  const { question } = props;
  const { question_body, question_id, answers, question_helpfulness} = question;
  const [allAnswers, setAllAnswers] = useState({ product_id: null, results: [] });
  const [allAnswersCount, setAllAnswersCount] = useState(Object.keys(answers).length);
  const [answersLoad, setAnswersLoad] = useState({ count: 2, button: 'more' });
  const [questionHelpfulness, setQuestionHelpfullness] = useState(question_helpfulness);
  let answersLoadButton;

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

  if (allAnswersCount > answersLoad.count) {
    if (answersLoad.button === 'more') {
      answersLoadButton = <button type="submit" onClick={loadAnswers}>See More Answers</button>;
    } else {
      answersLoadButton = <button type="submit" onClick={collapseAnswers}>Collapse Answers</button>;
    }
  }

  return (
    <div className="question_list">
      <div className="question_body">
        <p className="question">
          Q:
          {question_body}
        </p>
        <div className="question_links">
          <p className="helpful">Helpful?</p>
          <button type="submit" className="yes_link" onClick={() => markQuestionHelpful(question_id, setQuestionHelpfullness)}>
            Yes
          </button>
          (
          {questionHelpfulness}
          )
          <button type="submit" className="add_answer_link_btn" onClick={() => openAnswerModalHandler(question)}>
            | Add Answer
          </button>
          <div id="answer-modal" />
        </div>
      </div>
      <div className="answer_list" id="answer_list">
        {allAnswers.results.map((answer) => (
          <AnswersListEntry answer={answer} key={answer.answer_id} />
        ))}
      </div>
      { answersLoadButton }
    </div>
  );
};

export default QuestionsListEntry;
