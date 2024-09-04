import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers';


//STORE -> Globalized State

//ACTION -> Increment
const increment = () => {
  return {
    type: 'INCREMENT'
  }
};

const decrement = () => {
  return {
    type: 'DECREMENT'
  }
};


const store = configureStore(rootReducer);

store.subscribe(() => console.log(store.getState()));

//DISPATCH
store.dispatch(increment());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
