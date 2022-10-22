import React from 'react';
import ReactDOM from 'react-dom/client';
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';

import Truck from './Truck';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root1'));
root.render(
    <App />
);


const root2 = ReactDOM.createRoot(document.getElementById('root2'));
root2.render(
    <Truck />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
