import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './containers/App.js'
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { requestRobots, searchRobots } from './reducers';



const logger = createLogger();
const rootReducers = combineReducers({ requestRobots, searchRobots });

const store = createStore(rootReducers, applyMiddleware(thunkMiddleware, logger));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
