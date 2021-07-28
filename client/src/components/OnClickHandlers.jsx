import axios from 'axios';

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

const markQuestionHelpful = (questionID, questionHelpfulnessState) => {
  if (!isInStorage(questionID)) {
    axios.put(`/qa/questions/${questionID}/helpful`)
      .then(() => {
        addQuestionToStorage(questionID);
        questionHelpfulnessState((prevState) => prevState + 1);
      });
  }
};

export default markQuestionHelpful;
