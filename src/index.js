import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SearchState from './context/SearchState';


ReactDOM.render(
  <React.StrictMode>
    <SearchState>
      
    <App />
    </SearchState>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
