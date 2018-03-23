import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Header />,
   document.getElementById('root')
 );
registerServiceWorker();
