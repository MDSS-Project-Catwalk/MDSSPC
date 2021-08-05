import React, { useState } from 'react';
import '../../dist/style.css';

function ComparisonModal({closeModal}) {
  return (
    <div
    className="modal"
    onClick={() => {
      closeModal(false);
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
                <th>Characteristics</th>
                <th></th>
              </tr>
            </thead>
          </table>
          </div>
        </div>
        <div className="modal-footer">
        <button
          className="modal-btn"
          onClick={() => {
            closeModal(false);
          }}>Close
        </button>
      </div>
      </div>
    </div>
  )
}

export default ComparisonModal;