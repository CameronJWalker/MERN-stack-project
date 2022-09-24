import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'

//starting adding info from here
// import { Provider } from 'react-redux'
// import {createStore, applyMiddleware, compose} from 'redux'
// import thunk from 'redux-thunk';

// import reducers from './reducers'
// import App from '/.App'

// const store = createStore(reducers, compose(applyMiddleware(thunk)))

//end of Austi Adding Info

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>
);