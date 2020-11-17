import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import { initLocalization } from './i18next/init';
import './index.css';

initLocalization();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
