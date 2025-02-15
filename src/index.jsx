import React from 'react';
import ReactDOM from 'react-dom/client';
import MainComponent from './components/MainComponent/MainComponent';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainComponent />
  </React.StrictMode>
);

reportWebVitals();
