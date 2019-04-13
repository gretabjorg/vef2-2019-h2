import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.scss';
import App from './App';

import { User } from './context/currentUser'; // ?? :S

ReactDOM.render(
    <BrowserRouter>
      <User>
        <App />
      </User>
    </BrowserRouter>,
  document.getElementById('root'),
);
