import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';

import Layout from './lr-layout-page/Layout';
import Welcome from './lr-pages/Welcome';
import Methods from './lr-pages/Methods';
import Explained from './lr-pages/Explained';
import About from './lr-pages/About';
import Default from './lr-pages/Default';
import Starting from './lr-pages/Starting';

//const root = ReactDOM.createRoot(document.getElementById('root1'));
//root.render(
//    <Car />
//);

//const root2 = ReactDOM.createRoot(document.getElementById('root2'));
//root2.render(
//    <Truck />
//);


export default function PageRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Welcome />} />
            <Route path="/methods" element={<Methods />} />  
            <Route path="/explained" element={<Explained />} />   
            <Route path="/about" element={<About />} />
            <Route path="/default" element={<Default />} />
            <Route path="/starting" element={<Starting />} />        
            
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <PageRouter />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
