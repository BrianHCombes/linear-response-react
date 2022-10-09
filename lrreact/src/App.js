// Importing 
// https://www.geeksforgeeks.org/reactjs-importing-exporting/



import React from 'react';
import logo from './logo.svg';
import './App.css';


import {lrTestFunc1, lrTestFunc2, lrTestObject} from './lr-test.js';
import lrBackground from './images/lr-background_05.png'



import { useState } from "react";
import ReactDOM from "react-dom/client";

function Car() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red",
    whodat1: lrTestFunc1(),
    whodat2: lrTestFunc2(),
    whodat3: lrTestObject.a
  });

  const updateColor = () => {
    setCar(preState => {
      return { ...preState, color: "blue", whodat3: lrTestFunc1(2),  };
    });
//    setCar(preState => {
//      return { ...preState}});
  };

  return (
    <React.StrictMode>
      
      
    <div style={{textAlign:'center'}}>
      <img  src={lrBackground} 
            alt="LR Graphic Here"
            style={{width:'99.5%',  border:'2px solid white', borderRadius:'0.75em'}}></img>
            
            
    </div>
      
      
      
      
      
      
      
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year} and is very {car.whodat1} and {car.whodat2} and lastly {car.whodat3}
      </p>
      <button
        type="button"
        onClick={updateColor}
      >Blue</button>
    </React.StrictMode>
  )
}


export default Car;
