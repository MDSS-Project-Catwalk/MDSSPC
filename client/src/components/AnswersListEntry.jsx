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
      A:
      { body }
      <div className="answer_footer">
        By {answerer_name}, <Moment format="MMM D, YYYY">{date}</Moment>
        <div className="answers_links">
          <p className="helpful_answers">| Helpful?</p>
          <button type="button" className="yes_link_answers" onClick={() => (markAnswerHelpful(answer_id, setAnswerHelpfulness))}>
            Yes
            (
            {answerHelpfulness}
            )
          </button>
          {isAnswerReported
            ? (
              <p type="button" className="report_link">
                Reported
              </p>
            )
            : (
              <button type="button" className="report_link" onClick={() => markAnswerReported(answer_id, setIsAnswerReported)}>
                Report
              </button>
            )}
        </div>
        {photos.length > 0
        && photos.map((photo) => (
          <PhotoEntry photo={photo} key={photo.id} />
        ))}
      </div>
    </div>
  );
};

export default AnswersListEntry;
