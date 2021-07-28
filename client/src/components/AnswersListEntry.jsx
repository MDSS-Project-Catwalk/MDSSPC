import React from 'react';
import PhotoEntry from './PhotoEntry';

const AnswersListEntry = (props) => {
  const { answer } = props;
  return (
    <div className="answer_body">
      A:
      { answer.body }
      <div className="answer_footer">
        By {answer.answerer_name} , {answer.date}
        <div className="answers_links">
          <p className="helpful_answers">| Helpful?</p>
          <p className="yes_link_answers">Yes ({answer.helpfulness})</p>
          <p className="report_link">| Report</p>
        </div>
        {answer.photos.length > 0 &&
          answer.photos.map((photo) => (
            <PhotoEntry photo={photo} key={photo.id} />
          ))}
      </div>
    </div>
  );
};

export default AnswersListEntry;
