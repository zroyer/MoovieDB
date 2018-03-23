import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import './index.css'
import Header from './components/Header'
import MovieSearch from './containers/MovieSearch'
import MovieForm from './components/MovieForm'
import MovieList from './components/MovieList'
import NotFound from './components/NotFound'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route exact path="/search/" component={MovieSearch} />
        <Route exact path="/*" component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
 );
registerServiceWorker();
