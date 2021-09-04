/* eslint-disable */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NewTube from './service/newtube';

const newtube = new NewTube(process.env.REACT_APP_YOUTUBE_API_KEY);
ReactDOM.render(
  <React.StrictMode>
    <App newtube={newtube} />
  </React.StrictMode>,
  document.getElementById('root')
);
