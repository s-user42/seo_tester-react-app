import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './18n';

const defaultState = {
  loading: false,
  language: "en",
  isMobile: false
}


const reducer = (state = defaultState, action) => {
    switch(action.type) {
      case "isLoading":
        return {...state, loading: true}
      case "isNotLoading":
        return {...state, loading: false}
      case "language":
        return {...state, language: action.payload}
      case "isMobile":
        return {...state, isMobile: true}
      case "isNotMobile": 
        return {...state, isMobile: false} 
      default: 
        return state;
    }
}

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Suspense fallback={<div>Loading...</div>}>
    <Provider store={store}>
      <App />
    </Provider>
    </Suspense>
);
