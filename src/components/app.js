import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducer from '../reducers';
import LoginOrChat from './login_or_chat';

const loggerMidleware = createLogger();
const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMidleware,
  ),
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <LoginOrChat />
      </Provider>
    );
  }
}

export default App;
