import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import AddAnswerModal from './AddAnswerModal';
import AddQuestionModal from './AddQuestionModal';

// helper functions

const addQuestionToStorage = (questionID) => {
  const likedQuestionsStorage = window.localStorage.getItem('likedQuestions');

  if (likedQuestionsStorage) {
    const parsedStorage = JSON.parse(likedQuestionsStorage);
    parsedStorage.push(questionID);
    const parsedStorageToString = JSON.stringify(parsedStorage);
    window.localStorage.setItem('likedQuestions', parsedStorageToString);
  } else {
    const storage = [];
    storage.push(questionID);
    const storageToString = JSON.stringify(storage);
    window.localStorage.setItem('likedQuestions', storageToString);
  }
};

const isInStorage = (questionID) => {
  const likedQuestionsStorage = window.localStorage.getItem('likedQuestions');
  if (likedQuestionsStorage) {
    const parsedStorage = JSON.parse(likedQuestionsStorage);
    return parsedStorage.includes(questionID);
  }
  return false;
};

// on click handlers

export const markQuestionHelpful = (questionID, questionHelpfulnessState) => {
  if (!isInStorage(questionID)) {
    axios.put(`/qa/questions/${questionID}/helpful`)
      .then(() => {
        addQuestionToStorage(questionID);
        questionHelpfulnessState((prevState) => prevState + 1);
      });
  }
};

export const openAnswerModalHandler = (question) => {
  ReactDOM.render(<AddAnswerModal question={question} />, document.getElementById('answer-modal'));
  document.getElementById('add_answer_modal').style.display = 'block';
};

export const closeAnswerModalHandler = () => {
  document.getElementById('add_answer_modal').style.display = 'none';
};

export const openQuestionModalHandler = (productID) => {
  ReactDOM.render(<AddQuestionModal productID={productID} />, document.getElementById('question-modal'));
  document.getElementById('add_question_modal').style.display = 'block';
};

export const closeQuestionModalHandler = () => {
  document.getElementById('add_question_modal').style.display = 'none';
};
