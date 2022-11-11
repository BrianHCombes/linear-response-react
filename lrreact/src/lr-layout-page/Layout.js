import React from 'react';
import { useState } from "react";
import { Outlet, Link } from 'react-router-dom';

import titleBanner01 from '../images/lr-title-banner_01.jpg';
import titleBanner02 from '../images/lr-title-banner_02.jpg';
import {lr} from '../lr/lr-single.js';
import './Layout.css';

// Component Layout
function Layout(){

  const [pageHighlight, setHighlight] = useState({
    welcomeHighlight:   "yesHighlight",
    methodsHighlight:   "noHighlight",
    explainedHighlight: "noHighlight",
    aboutHighlight:     "noHighlight",
    defaultHighlight:   "noHighlight",
    startingHighlight:  "noHighlight"
  });
  
        
  
  
  const changeHighlight = (selected) => {
      
        let highlightValues = {
                                welcomeHighlight:   "noHighlight",
                                methodsHighlight:   "noHighlight",
                                explainedHighlight: "noHighlight",
                                aboutHighlight:     "noHighlight",
                                defaultHighlight:   "noHighlight",
                                startingHighlight:  "noHighlight"
                              };
        
        switch(selected){
          case "welcome":   highlightValues.welcomeHighlight    = "yesHighlight";   break;
          case "methods":   highlightValues.methodsHighlight    = "yesHighlight";   break;
          case "explained": highlightValues.explainedHighlight  = "yesHighlight";   break;
          case "about":     highlightValues.aboutHighlight      = "yesHighlight";   break;
          case "default":   highlightValues.defaultHighlight    = "yesHighlight";   break;
          case "starting":  highlightValues.startingHighlight   = "yesHighlight";   break;  
          default: console.log("404");
        }
        
        
        
        setHighlight(highlightValues); 
      };
 

return (
    <div>     
        
      <div style={{textAlign:'center'}}>
        <img  src={lr.whtml(titleBanner01,1000,titleBanner02)} 
              alt="LR Graphic Here"
              style={{ width:'98%', marginTop:"1%", border:'2px solid white', borderRadius:lr.w("em",0.75,0.45)}}
        ></img>
      </div><br />    
        
      <div style={{textAlign:"center"}}> 
        <div>
          <Link to="/"><button className={'btnHover ' + pageHighlight.welcomeHighlight} onClick={() => changeHighlight("welcome")} style={{fontSize:'1.25em'}}>Welcome</button></Link>
          <Link to="/default"><button className={'btnHover ' + pageHighlight.defaultHighlight} onClick={() => changeHighlight("default")} style={{fontSize:'1.25em'}}>Default Settings</button></Link> 
          <Link to="/methods"><button className={'btnHover ' + pageHighlight.methodsHighlight} onClick={() => changeHighlight("methods")} style={{fontSize:'1.25em'}}>Methods</button></Link>
          <Link to="/explained"><button className={'btnHover ' + pageHighlight.explainedHighlight} onClick={() => changeHighlight("explained")} style={{fontSize:'1.25em'}}>How it Works</button></Link>
          <Link to="/starting"><button className={'btnHover ' + pageHighlight.startingHighlight} onClick={() => changeHighlight("starting")} style={{fontSize:'1.25em'}}>Getting Started</button></Link>
          <Link to="/about"><button className={'btnHover ' +  pageHighlight.aboutHighlight} onClick={() => changeHighlight("about")} style={{fontSize:'1.25em'}}>About</button></Link>        
        </div>
      </div>
      <Outlet />
    </div>
);
  
};

export default Layout;