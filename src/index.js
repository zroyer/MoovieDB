import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './index.css'
import MovieSearch from './containers/MovieSearch'
import MovieContainer from './containers/MovieContainer'
import NotFound from './containers/NotFound'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={MovieContainer} />
      <Route exact path="/search/" component={MovieSearch} />
      <Route exact path="/*" component={NotFound} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
 );
registerServiceWorker();
