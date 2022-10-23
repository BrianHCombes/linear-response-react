import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Car from './Car';
import Truck from './Truck';
import reportWebVitals from './reportWebVitals';

import Layout from './Layout';
import Welcome from './lr-pages/Welcome';


const root = ReactDOM.createRoot(document.getElementById('root1'));
root.render(
    <Car />
);

const root2 = ReactDOM.createRoot(document.getElementById('root2'));
root2.render(
    <Truck />
);

const root3 = ReactDOM.createRoot(document.getElementById('root3'));
root3.render(
    <Welcome />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
