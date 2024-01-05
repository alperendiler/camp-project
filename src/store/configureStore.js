import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';
import logger from 'redux-logger';

export function configureStore() {
  const middleware = [logger];

  const composeEnhancers =
    process.env.NODE_ENV === 'development'
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
      : compose;

  const enhancer = composeEnhancers(applyMiddleware(...middleware));

  const store = createStore(rootReducer, enhancer);

  return store;
}