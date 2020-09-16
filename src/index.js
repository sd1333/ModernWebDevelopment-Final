import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import bibleVerseReducer from './stores/biblereducer';
import authenticationReducer from './stores/authenticationReducer';
import shopReducer from './stores/shopReducer';
import makeAccountReducer from './stores/makeAccountReducer';
import adminReducer from './stores/adminReducer';

const logMiddleware = (store) => {
  return (next) => {
    return (action) => {
      return next(action);
    };
  };
};

const rootReducer = combineReducers({
  verses: bibleVerseReducer,
  auth: authenticationReducer,
  shop: shopReducer,
  mar: makeAccountReducer,
  admin: adminReducer,
});

const store = createStore(rootReducer, applyMiddleware(logMiddleware, thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
