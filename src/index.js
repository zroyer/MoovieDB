import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './index.css'
import Header from './components/Header'
import MovieSearch from './containers/MovieSearch'
import MovieTable from './components/MovieTable'
import NotFound from './components/NotFound'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import initialState from './reducers/movieReducer'
import thunkMiddleware from 'redux-thunk'
import { requestMovies, receiveMovies, fetchMovies } from './actions/actions'
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers/rootReducer';

// const store = configureStore()

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunkMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

store.dispatch(fetchMovies())

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={MovieTable} />
          <Route exact path="/search/" component={MovieSearch} />
          <Route exact path="/*" component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
 );

registerServiceWorker();
