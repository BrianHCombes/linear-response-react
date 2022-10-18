// Importing 
// https://www.geeksforgeeks.org/reactjs-importing-exporting/



import React from 'react';
import logo from './logo.svg';
import './App.css';


import {lrTestFunc1, lrTestFunc2, lrTestObject} from './lr-test.js';
import titleBanner01 from './images/lr-title-banner_01.jpg';
import titleBanner02 from './images/lr-title-banner_02.jpg';
import titleBanner03 from './images/lr-title-banner_03.jpg';
import {lr} from './lr/lr-single.js';

//import './fonts/ARLRDBD_0.TTF';




import { useState } from "react";
import ReactDOM from "react-dom/client";

//let lrResponse = lr.w("width:%",60,20);
//console.log("lrResponse is: " + lrResponse);
//let lrResponse = lr.URPw;



function Car() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red",
    whodat1: lrTestFunc1(),
    whodat2: lrTestFunc2(),
    whodat3: lrTestObject.a,
    whodat4: lrTestObject.a
  });

  const updateColor = () => {
    setCar(preState => {
      return { ...preState, color: "blue", whodat3: lrTestFunc1(2),  };
    });
//    setCar(preState => {
//      return { ...preState}});
  };


  let func1 = function(){
    return "this is func 1";
  };
  let func2 = function(){
    return "this is func 2";
  };
  let func3 = function(){
    return "this is func 3";
  };
  
  let returnFunc = lr.whtml(func1,1500,func2,1000,func3);
  console.log("func returned is: " + returnFunc());
  

  let test1 = lr.whtml(titleBanner01,1000,titleBanner02);
  console.log("test is: " + test1);
  
  //let test2 = titleBanner01;
  // lr.whtml(titleBanner01,1000,titleBanner02)
  return (
    <React.StrictMode>
      <div style={{textAlign:'center'}}>
        <img  src={test1} 
              alt="LR Graphic Here"
              style={{width:'99.5%',  
                      border:'2px solid white', 
                      borderRadius:'0.75em'
                      
                      
                    }}
        ></img>
      </div>
      
      
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year} and is very {car.whodat1} and {car.whodat2} and lastly {car.whodat3} but there's more: {car.whodat4}
      </p>
      <button
        type="button"
        onClick={updateColor}
      >Blue</button>
              
    <div  className="" 
          id="titling" 
          style={{
                  width: lr.w("%",55,98), 
                  marginLeft:'auto', 
                  marginRight:'auto', 
                  backgroundColor:'#bbbbbb',
                  border:'2px solid white', 
                  borderRadius:'0.75em', 
                  fontFamily: 'Arial Rounded MT Bold',
                  /*fontFamily:'Tahoma'*/
                }}>
      <div style={{textAlign:'center'}}>
        <div className="arialRnd" style={{fontSize: lr.w("em",3.5,1.5), lineHeight:'150%', padding:'1% 0 0 0', textAlign:'center'}}>
            Welcome to LR
        </div>    
        <ul style={{paddingLeft:'8%', textAlign:'left'}}>
          <li style={{textAlign:'left'}}>
            LR stands for Linear Response
          </li>
          <li style={{textAlign:'left'}}>
            LR is an API for the responsive aspect of web design
          </li>
          <li style={{textAlign:'left'}}>
            LR uses standard javascript
          </li>
          <li style={{textAlign:'left'}}>
            LR works with all CSS and Javascript frameworks
          </li>
          <li style={{textAlign:'left'}}>
            LR has powerful response tools
          </li>
        </ul>
      </div>  
    </div>  
    </React.StrictMode>
  )
}
//document.getElementById("titling").style.width = lr.w("%",55,100);
//document.getElementById("titling").style.fontSize = lr.w("em",1.35,0.9);    

export default Car;
