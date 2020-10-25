import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';

const initialState = [
  { id: 0, title: "naruto", category: "action" },
  { id: 1, title: "onepiece", category: "action" },
  { id: 2, title: "casa", category: "biography" },
  { id: 3, title: "doctor", category: "horor" },
  { id: 4, title: "league", category: "history" },
];

ReactDOM.render(
  <Provider store={initialState}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
