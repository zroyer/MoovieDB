import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Header from './components/Header'
import MovieContainer from './containers/MovieContainer'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <div>
    <Header />
    <MovieContainer />
  </div>,
  document.getElementById('root')
 );
registerServiceWorker();
