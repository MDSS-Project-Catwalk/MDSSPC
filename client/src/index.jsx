import React from 'react';
import ReactDOM from 'react-dom';
import QA from './components/QA/QA';
import OV from './components/OV/OV';
import RelatedItemsComponent from './components/RelatedItems/RelatedItemsComponent';
import "core-js/stable";
import "regenerator-runtime/runtime";
import Reviews from './components/RatingsReviews/ReviewApp.jsx';

// ReactDOM.render(<OV />, document.getElementById('ov'));
ReactDOM.render(<RelatedItemsComponent />, document.getElementById('ri'));
ReactDOM.render(<QA />, document.getElementById('qa'));
ReactDOM.render(<Reviews />, document.getElementById('re'));
