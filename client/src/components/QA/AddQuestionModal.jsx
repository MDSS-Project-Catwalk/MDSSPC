import React, { useState } from 'react';
import axios from 'axios';
import { closeQuestionModalHandler } from './QOnClickHandlers';

const AddQuestionModal = ({ productID }) => {
  const [submitError, setSubmitError] = useState('');
  const onQuestionModalSubmitHandler = (formData) => {
    formData.preventDefault();
    const data = {
      body: formData.target.question.value,
      name: formData.target.nickname.value,
      email: formData.target.email.value,
      product_id: Number(productID),
    };

    axios.post('qa/questions', data)
      .then((result) => {
        document.getElementById('add_question_modal').style.display = 'none';
        setSubmitError('');
      })
      .catch((err) => {
        setSubmitError('Failed to Submit Question.');
      });
  };
  return (
    <div id="add_question_modal" className="add_answer_modal">
      <div className="add_answer_modal_content">
        <div className="modal_head">
          <span className="modal_title">Ask Your Question</span>
          <span className="modal_subtitle">About the [Product Name Here]</span>
          <button className="close" type="button" tabIndex={0} onClick={closeQuestionModalHandler}>
            &times;
          </button>
        </div>
        <div className="modal_body">
          <form className="add-question-form" onSubmit={onQuestionModalSubmitHandler}>
            <label>Your Question</label>
            <textarea type="text" maxLength="1000" rows="5" className="answer-box" id="question" placeholder="Your Question" required />
            <label>What is your nickname?</label>
            <input type="text" className="input-box" id="nickname" placeholder="Example: jackson11!" required />
            <label>Your Email</label>
            <input type="email" className="input-box" id="email" placeholder="jack@email.com" required />
            <span>For authentication reasons, you will not be emailed.</span>
            {submitError}
            <button type="submit" className="submit-btn btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddQuestionModal;
