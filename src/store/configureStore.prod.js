import { createStore, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';

const middlewares = [
  thunkMiddleware
];

const store = createStore(rootReducer, {}, compose(
   (...middlewares)
  )
);

/*
 store.getState();
 store.dispatch();
 store.subscribe();
 store.replaceReducer();
*/

export default store;
