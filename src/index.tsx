import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import Root from './components/root/root';

import { Provider } from 'react-redux';
import store from './redux/store';
import initializeApp from 'api/AppInitializer';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Root />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

initializeApp(store);