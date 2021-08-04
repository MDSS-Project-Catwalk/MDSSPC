import React, { useState } from 'react';
import axios from 'axios';
// helper functions

const addAnswerToStorage = (answerID) => {
  const likedAnswerStorage = window.localStorage.getItem('likedAnswer');

  if (likedAnswerStorage) {
    const parsedStorage = JSON.parse(likedAnswerStorage);
    parsedStorage.push(answerID);
    const parsedStorageToString = JSON.stringify(parsedStorage);
    window.localStorage.setItem('likedAnswer', parsedStorageToString);
  } else {
    const storage = [];
    storage.push(answerID);
    const storageToString = JSON.stringify(storage);
    window.localStorage.setItem('likedAnswer', storageToString);
  }
};

const isInStorage = (answerID) => {
  const likedAnswerStorage = window.localStorage.getItem('likedAnswer');
  if (likedAnswerStorage) {
    const parsedStorage = JSON.parse(likedAnswerStorage);
    return parsedStorage.includes(answerID);
  }
  return false;
};

// on click handlers

export const markAnswerHelpful = (answerID, answerHelpfulnessState) => {
  if (!isInStorage(answerID)) {
    axios.put(`/qa/answers/${answerID}/helpful`)
      .then(() => {
        addAnswerToStorage(answerID);
        answerHelpfulnessState((prevState) => prevState + 1);
      });
  }
};

export const markAnswerReported = (answerID, answerReportedState) => {
  axios.put(`/qa/answers/${answerID}/report`)
    .then(() => {
      answerReportedState(true);
    });
};
