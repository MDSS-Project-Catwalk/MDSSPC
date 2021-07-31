/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import axios from 'axios';
import { closeAnswerModalHandler } from './QOnClickHandlers';
import AnswerImageUploadHandler from './AnswerImageUploadHandler';

const AddAnswerModal = ({question}) => {
  const [uploadError, setUploadError] = useState('');
  const [selectedFiles, setSelectedFiles] = useState([[]]);
  const [uploadClicked, setUploadClicked] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [imageUrlData, setImageUrlData] = useState([]);
  let UploadButton;
  let SubmitButton;

  const onImageAddHandler = (e) => {
    setSelectedFiles([e.target.files]);
  };

  const onUploadClickHandler = (e) => {
    e.preventDefault();
    if (selectedFiles === null || selectedFiles[0].length === 0) {
      setUploadError('No file were selected for upload.');
    } else {
      setUploadError('');
      // files selected and upload clicked...commence the upload
      setUploadClicked(true);
      // it is uploading, disable the buttons.
      setUploading(true);
    }
  };

  const extractDataFromUploads = (error, urls) => {
    // check if there is an error, if there is, display it by setting it to error state
    if (Object.keys(error).length > 0) {
      setUploadError(error[0]);
    } else {
      // else set extracted url to the imageUrlData
      // set uploading to false to show that its done uploading and enable the submit button again.
      setImageUrlData(urls);
      setUploading(false);
    }
  };

  if (uploading) {
    UploadButton = <button type="button" disabled onClick={onUploadClickHandler}>Upload</button>;
    SubmitButton = <button type="submit" disabled> Submit </button>;
  } else {
    UploadButton = <button type="button" onClick={onUploadClickHandler}>Upload</button>;
    SubmitButton = <button type="submit"> Submit </button>;
  }

  const onAnswerModalSubmitHandler = (formData) => {
    formData.preventDefault();
    setUploading(true);
    const data = {
      body: formData.target.answer.value,
      name: formData.target.nickname.value,
      email: formData.target.email.value,
      photos: imageUrlData,
    };

    if (imageUrlData.length > 5) {
      setUploadError('You can only upload a maximum of 5 files');
    } else {
      axios.post(`/qa/questions/${question.question_id}/answers`, data)
        .then((result) => {
          setUploading(false);
          setSelectedFiles([]);
          setImageUrlData([]);
          setUploadClicked(false);
          document.getElementById('add_answer_modal').style.display = 'none';
          document.getElementById('answer').value = '';
          document.getElementById('nickname').value = '';
          document.getElementById('email').value = '';
        })
        .catch((err) => {
          setUploadError('Your Answer was not submitted due to an Error.');
        });
    }
  };

  return (
    <div id="add_answer_modal" className="add_answer_modal">
      <div className="add_answer_modal_content">
        <div className="modal_head">
          <span className="modal_title">Submit Your Answer</span>
          <span className="modal_subtitle"> {question.question_body} - 1234123</span>
          <button className="close" onClick={closeAnswerModalHandler} type="button" tabIndex={0}>
            &times;
          </button>
        </div>
        <div className="modal_body">
          <form className="add-answer-form" onSubmit={(e) => onAnswerModalSubmitHandler(e, question.question_id)}>
            <label>Your Answer</label>
            <input type="text" id="answer" placeholder="Your Answer" required />
            <label>Your Nickname</label>
            <input type="text" id="nickname" placeholder="Example: jack543" required />
            <label>Your Email</label>
            <input type="email" id="email" placeholder="jack@email.com" required />
            <span>For authentication reasons, you will not be emailed.</span>
            {imageUrlData.length < 5 && (
            <input
              type="file"
              multiple
              id="uploads"
              accept="image/png, image/jpeg"
              onChange={onImageAddHandler}
            />
            )}
            <span>
              { uploadError }
            </span>
            {uploadClicked && (
            <AnswerImageUploadHandler
              files={selectedFiles[0]}
              extract={extractDataFromUploads}
              imageUrlData={imageUrlData}
            />
            )}
            {imageUrlData.length < 5 && UploadButton}
            {SubmitButton}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAnswerModal;
