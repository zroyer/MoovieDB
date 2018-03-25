import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './index.css'
import Header from './components/Header'
import MovieSearch from './containers/MovieSearch'
import MovieContainer from './containers/MovieContainer'
import MovieTable from './components/MovieTable'
import NotFound from './components/NotFound'
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
