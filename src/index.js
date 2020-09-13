/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loadState, saveState } from './localStorage/localStorageMethods';
import reducer from './redux/reducer';
import App from './App';

const persistedState = loadState();
const store = createStore(
  reducer,
  persistedState,
  composeWithDevTools(),
);
store.subscribe(() => {
  saveState({
    allPayments: store.getState().allPayments,
  });
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
