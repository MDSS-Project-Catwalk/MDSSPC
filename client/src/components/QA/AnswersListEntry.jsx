import React, { useState } from 'react';
import Moment from 'react-moment';
import PhotoEntry from './PhotoEntry';
import { markAnswerHelpful, markAnswerReported } from './AOnClickHandlers';

const AnswersListEntry = (props) => {
  const { answer } = props;
  const {helpfulness, answer_id, body, answerer_name, date, photos} = answer;
  const [answerHelpfulness, setAnswerHelpfulness] = useState(helpfulness);
  const [isAnswerReported, setIsAnswerReported] = useState(false);

  return (
    <div className="answer_body">
      <div className="answer-text">
        A: &nbsp;
        { body }
      </div>
      <div className="thumbnails">
        {photos.length > 0
        && photos.map((photo) => (
          <PhotoEntry photo={photo} key={photo.id} />
        ))}
        </div>
      <div className="answer_footer">
        By &nbsp;{answerer_name}, &nbsp; <Moment format="MMM D, YYYY">{date}</Moment>
        <div className="answers_links">
          <p className="helpful_answers">| Helpful?</p>
          &nbsp; &nbsp;
          <button type="button" className="yes_link" onClick={() => (markAnswerHelpful(answer_id, setAnswerHelpfulness))}>
            Yes
          </button>
          &nbsp;
          (
          {answerHelpfulness}
          )
          |
          {isAnswerReported
            ? (
              <button type="button" className="report_link">
                Reported
              </button>
            )
            : (
              <button type="button" className="report_link" onClick={() => markAnswerReported(answer_id, setIsAnswerReported)}>
                Report
              </button>
            )}
        </div>
      </div>
    </div>
  );
};

export default AnswersListEntry;
