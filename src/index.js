import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, HashRouter, unstable_HistoryRouter, MemoryRouter } from 'react-router-dom';
import { Static } from 'react-router-dom/server';

// BrowserRouter -- 99% is used because it is used to change the domain name and it is used to routing

// HashRouter -- 99% is not used but when you didn,t want change the domain name and you want to use the routing then you can use the HashRouter
// http://localhost:3000/#/login

// unstable_HistoryRouter -- it is used to change the domain name , backward, forward history of the browser history to manipulate.
// object name duplicated on unstable_HistoryRouter -- not recommneded to use, 99% is not used

// MemoryRouter - url will not change but the component will change
// stored inside of memory of the web page , not stored elsewhere
// Really good for just testing purposes

// Static - Only used for server side rendering of the component, it is used to render the component on the server side. 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
