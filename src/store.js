import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import createPromiseMiddleware from './promiseMiddleware';
import loggerEnhancer from './loggerEnhancer';


const store = createStore(
  rootReducer,
  {},
  compose(
    applyMiddleware(createPromiseMiddleware()),
    loggerEnhancer(),
    composeWithDevTools()
  )
);

export default store;
