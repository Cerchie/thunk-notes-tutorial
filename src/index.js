import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux'
import App from './App';
import notesReducer from './notesReducer'
import reportWebVitals from './reportWebVitals';
import thunk from 'redux-thunk'

const store = createStore(
  notesReducer,
  applyMiddleware(thunk)
  );

ReactDOM.render(
  <React.StrictMode>
       <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
