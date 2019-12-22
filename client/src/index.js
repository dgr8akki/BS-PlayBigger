import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Pages from './pages';
import 'antd/dist/antd.css';
import './assets/styles/custom.css';
import Reducers from './reducers';

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line
  const { logger } = require(`redux-logger`);

  middlewares.push(logger);
}

// Create redux store.
const store = createStore(Reducers, applyMiddleware(...middlewares));

ReactDOM.render(
  <Provider store={store}>
    <Pages />
  </Provider>, document.getElementById('root'),
);
