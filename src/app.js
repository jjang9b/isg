import React, { Component } from 'react';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import MainApp from './containers/mainApp';

const middlewares = [];
if (process.env.NODE_ENV === 'development') {
  const { logger } = require('redux-logger');

  middlewares.push(logger);
}

const store = compose(applyMiddleware(...middlewares))(createStore)(rootReducer);

export default class App extends Component {
  render(){
    return(
      <Provider store={store}>
        <MainApp />
      </Provider>
    )
  }
}
