import React from 'react';
import ReactDOM from 'react-dom';
import QA from './components/QA/QA';
import OV from './components/OV/OV';
import RelatedItemsComponent from './RelatedItems/RelatedItemsComponent.jsx';
import "core-js/stable";
import "regenerator-runtime/runtime";

ReactDOM.render(<OV />, document.getElementById('ov'));
ReactDOM.render(<QA />, document.getElementById('qa'));
ReactDOM.render(<RelatedItemsComponent />, document.getElementById('ri'));
