import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
// import AppState from './state/AppState';
import AppTodo from './todo/AppTodo';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppTodo/>
  </React.StrictMode>
);
