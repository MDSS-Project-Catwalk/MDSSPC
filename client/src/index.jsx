import React from 'react';
import ReactDOM from 'react-dom';
import QA from './components/QA';
import OV from './components/overview/OV';

ReactDOM.render(<OV />, document.getElementById('ov'));
ReactDOM.render(<QA />, document.getElementById('app'));
