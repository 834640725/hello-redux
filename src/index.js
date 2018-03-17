import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { Provider } from 'react-redux';

const logger = store => next => action => {
  console.log('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  return result;
};

const error = store => next => action => {
  try {
    next(action)
  } catch(e) {
    console.log('error ' + e);
  }
};

// const logger = function(store) {
//   return function(next) {
//     return function(action) {
//       console.log('dispatching', action);
//       let result = next(action);
//       console.log('next state', store.getState());
//       return result;
//     }
//   }
// }

const store = createStore(rootReducer, {}, applyMiddleware(logger, error));

// store.subscribe(() => console.log("State updated!", store.getState()));

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
