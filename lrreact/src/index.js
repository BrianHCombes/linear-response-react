import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';

import Layout from './lr-layout-page/Layout';
import Welcome from './lr-pages/Welcome';
import Methods from './lr-pages/Methods';
import Examples from './lr-pages/Examples';
import Explained from './lr-pages/Explained';
import Help from './lr-pages/Help';
import Default from './lr-pages/Default';
import Starting from './lr-pages/Starting';

import NestTest from './lr-pages/NestTest';
import LRw from './lr-pages/methodExamples/LRw';
import LRww from './lr-pages/methodExamples/LRww';
import LRh from './lr-pages/methodExamples/LRh';


export default function PageRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Welcome />} />
            <Route path="/methods" element={<Methods />} />  
            <Route path="/explained" element={<Explained />} />   
            <Route path="/about" element={<Help />} />
            <Route path="/default" element={<Default />} />
            <Route path="/starting" element={<Starting />} /> 
            <Route path="/examples" element={<Examples />}>
                <Route path="lrw" element={<LRw />} />
                <Route path="lrww" element={<LRww />} />
                <Route path="lrh" element={<LRh />} />
            </Route>
            <Route path="/nestTest" element={<NestTest />}>
                <Route path="nestPage1" element={<LRw />} />
                <Route path="nestPage2" element={<LRww />} />
                <Route path="nestPage3" element={<LRh />} />
            </Route>                 
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
