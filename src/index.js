/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';

// Provider
import { Provider } from 'react-redux';

// Store
import store from './store/configureStore';

require('./favicon.ico');
import './styles/styles.scss';
require('rc-slider/assets/index.css');

// Components
import App from './components/App';
import HomePage from './containers/Home';

render (
  <Provider store={store}>
    <App>
      <HomePage />
    </App>
  </Provider>
  , document.getElementById('app')
);
