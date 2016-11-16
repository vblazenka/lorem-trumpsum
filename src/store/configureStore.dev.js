import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';

const middlewares = [
  thunkMiddleware
];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
const store = createStore(rootReducer, {}, composeEnhancers(
  applyMiddleware(...middlewares)
  )
);

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('../reducers', () => {
    const nextReducer = require('../reducers').default; // eslint-disable-line global-require
    store.replaceReducer(nextReducer);
  });
}

export default store;
