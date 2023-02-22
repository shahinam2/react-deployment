// 1. install react-reuter
import React from 'react';
import ReactDOM from 'react-dom/client';
// 2. import BrowserRouter
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 3. connect the App to the browser's URL
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
