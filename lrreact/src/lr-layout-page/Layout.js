import React from 'react';
import { useState } from "react";
import { Outlet, Link } from 'react-router-dom';

import titleBanner01 from '../images/lr-title-banner_01.jpg';
import titleBanner02 from '../images/lr-title-banner_02.jpg';
import {lr} from '../lr/lr-single.js';
import './Layout.css';

let noHighlightCSS = {};
let highlightCSS = { backgroundColor:'yellow', padding:'0.2%', borderRadius:'0.3em' };

// Component Layout
function Layout(){

 
 // Highlight selected page
 let highlightValues = {};
 //let yesHighlight = { backgroundColor:'yellow', padding:'0.2%', borderRadius:'0.3em' };  
 //let noHighlight = {backgroundColor:'transparent'};  
// let welcomeHighlightValue = {};
// let aboutHighlightValue = {};
// let hhValue = 0;
 
  const [pageHighlight, setHighlight] = useState({
    welcomeHighlight:   "yesHighlight",
    methodsHighlight:   "noHighlight",
    explainedHighlight: "noHighlight",
    aboutHighlight:     "noHighlight",
    defaultHighlight:   "noHighlight",
    startingHighlight:  "noHighlight"
  });
  
  
  
  function getURL(){
    window.setTimeout(URLfunc,1);
    
    function URLfunc(){
      setHighlight(() => {
        
        let url = window.location.href;
        let lastSlash = url.lastIndexOf("/");
        let page = url.substring(lastSlash+1);
        if(page === "") page = "welcome";
        
        highlightValues = { 
                            welcomeHighlight:  "noHighlight", methodsHighlight: "noHighlight", 
                            explainedHighlight:"noHighlight",  aboutHighlight:   "noHighlight", 
                            defaultHighlight:  "noHighlight",  startingHighlight:"noHighlight"
                          };
        
        switch(page){
          case "welcome":   highlightValues.welcomeHighlight   = "yesHighlight";   break;
          case "methods":   highlightValues.methodsHighlight   = "yesHighlight";   break;
          case "explained": highlightValues.explainedHighlight = "yesHighlight";   break;
          case "about":     highlightValues.aboutHighlight     = "yesHighlight";   break;
          case "default":   highlightValues.defaultHighlight   = "yesHighlight";   break;
          case "starting":  highlightValues.startingHighlight  = "yesHighlight";   break;  
          default:
        }
        
        return { ...highlightValues };
      });
    }  
  };
  
 

return (
    <div>     
        
      <div style={{textAlign:'center'}}>
        <img  src={lr.whtml(titleBanner01,1000,titleBanner02)} 
              alt="LR Graphic Here"
              style={{
                      width:'98%',  
                      marginTop:"1%",
                      border:'2px solid white', 
                      borderRadius:lr.w("em",0.75,0.45)
                    }}>
        </img>
      </div><br />    

      <div style={{color:'white'}}> welcomeHighlight is: {pageHighlight.welcomeHighlight}<br />
                                    methodsHighlight is: {pageHighlight.methodsHighlight}<br />
                                    explainedHighlight is: {pageHighlight.explainedHighlight}<br />
                                    aboutHighlight is: {pageHighlight.aboutHighlight}<br />
                                    defaultHighlight is: {pageHighlight.defaultHighlight}<br />
                                    startingHighlight is: {pageHighlight.startingHighlight}<br /><br />
                                    
      </div>  
        
      <div style={{textAlign:"center"}}> 
        <div>
        <Link to="/"><button className="btnHover {pageHighlight.welcomeHighlight}" onClick={getURL}>Welcome</button></Link>
          &nbsp;&nbsp;&nbsp;
          <Link to="/methods"><button className="btnHover {pageHighlight.methodsHighlight}" onClick={getURL}>Methods</button></Link>
          &nbsp;&nbsp;&nbsp;
          <Link to="/explained"><button className="btnHover {pageHighlight.explainedHighlight}" onClick={getURL}>Explained</button></Link>
          &nbsp;&nbsp;&nbsp;
          <Link to="/about"><button className="btnHover yesHighlight" onClick={getURL}>About {pageHighlight.aboutHighlight}</button></Link>
          &nbsp;&nbsp;&nbsp;
          <Link to="/default"><button className="btnHover {pageHighlight.defaultHighlight}" onClick={getURL}>Default</button></Link> 
          &nbsp;&nbsp;&nbsp;
          <Link to="/starting"><button className="btnHover {pageHighlight.startingHighlight}" onClick={getURL}>Starting</button></Link>
        </div>
      </div>
      <Outlet />
    </div>
);
  
};

export default Layout;