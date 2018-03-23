import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import './index.css'
import Header from './components/Header'
import MovieSearch from './containers/MovieSearch'
import MovieForm from './components/MovieForm'
import MovieList from './components/MovieList'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route exact path="/search/" component={MovieSearch} />
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
 );
registerServiceWorker();
