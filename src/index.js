import React from 'react';
import ReactDOM from 'react-dom/client';
import AppState from './state/AppState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppState/>
  </React.StrictMode>
);
