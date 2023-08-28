import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'
import { Provider } from 'react-redux';
import store, { persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
  