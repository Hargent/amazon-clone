import './index.css';

import reducer, {initialState} from './Reducers/reducer'

import App from './App/App';
import React from 'react';
import ReactDOM from 'react-dom';
import {StateProvider} from './Reducers/StateProvider'

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);