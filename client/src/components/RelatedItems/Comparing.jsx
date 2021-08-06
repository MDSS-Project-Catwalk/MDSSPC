import React, { useState } from 'react';
import '../../../dist/style.css';

function ComparisonModal(props) {

  let relatedItemChars = props.relatedItemCharacteristics;
  return (
    <div
    className="modal"
    onClick={() => {
      props.closeModal(false);
    }}>
      <div
      className="modal-content"
      onClick={e => e.stopPropagation()
      }>
        <div className="modal-header">
          <h4>Comparing...</h4>
        </div>
        <div className="modal-body">
          <div>
          <table>
            <thead>
              <tr>
                <th>Current Product Name</th>
                <th></th>
                <th>Compared Product Name</th>
              </tr>
              <tr>
              <th></th>
              <th></th>
              <th></th>
            </tr>
              <tr>
                <th></th>
                <th>Characteristics:</th>
                <th></th>
              </tr>
              {relatedItemChars.map((item, index) => {
                console.log(item.feature, item.value);
                return <tr>
                  <th></th>
                  <th>{item.feature}</th>
                  <th>{item.value}</th>
                </tr>
              })}
            </thead>
          </table>
          </div>
        </div>
        <div className="modal-footer">
        <button
          className="modal-btn"
          onClick={() => {
            props.closeModal(false);
          }}>Close
        </button>
      </div>
      </div>
    </div>
  )
}

export default ComparisonModal;