import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import generatorReducer from './generator';

const rootReducer = combineReducers({
  generator: generatorReducer,
  routing: routerReducer
});

export default rootReducer;
