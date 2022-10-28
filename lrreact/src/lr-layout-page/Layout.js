import React from 'react';
import { useState } from "react";
import { Outlet, Link } from 'react-router-dom';

import titleBanner01 from '../images/lr-title-banner_01.jpg';
import titleBanner02 from '../images/lr-title-banner_02.jpg';
import {lr} from '../lr/lr-single.js';
import './Layout.css';


// Component Layout
function Layout(){

 
 // Highlight selected page
 let noHighlightCSS = {};
 let highlightCSS = { backgroundColor:'yellow', padding:'0.2%', borderRadius:'0.3em' };
 
 const [pageHighlight, setHighlight] = useState({
    welcomeHighlight: "true",
    methodsHighlight: "false",
    explainedHighlight: "false",
    aboutHighlight: "false",
    defaultHighlight: "false",
    startingHighlight: "false"
  });
  
  let highlightValues = {};
  function getURL(){
    window.setTimeout(URLfunc,1);
    
    function URLfunc(){
      setHighlight(() => {
        
        let url = window.location.href;
        let lastSlash = url.lastIndexOf("/");
        let page = url.substring(lastSlash+1);
        if(page === "") page = "welcome";
        
        highlightValues = { 
                            welcomeHighlight:  "false", methodsHighlight: "false", 
                            explainedHighlight:"false", aboutHighlight:   "false", 
                            defaultHighlight:  "false", startingHighlight:"false"
                          };
        
        switch(page){
          case "welcome":   highlightValues.welcomeHighlight   = "true";   break;
          case "methods":   highlightValues.methodsHighlight   = "true";   break;
          case "explained": highlightValues.explainedHighlight = "true";   break;
          case "about":     highlightValues.aboutHighlight     = "true";   break;
          case "default":   highlightValues.defaultHighlight   = "true";   break;
          case "starting":  highlightValues.startingHighlight  = "true";   break;  
          default:
        }
        
        return { ...highlightValues };
      });
    }  
  };
  
  
  let methodStyle = { backgroundColor:'yellow', padding:'0.2%', borderRadius:'0.3em' };  
  //let methodStyle = {};  

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
        <Link to="/"><button className="btnHover" onClick={getURL} style={{backgroundColor:'yellow', padding:'0.2%', borderRadius:'0.3em'}}>Welcome</button></Link>
          &nbsp;&nbsp;&nbsp;
          <Link to="/methods" onClick={getURL}><button>Methods</button></Link>
                                                    
          &nbsp;&nbsp;&nbsp;
          <Link to="/explained" onClick={getURL}><button style={methodStyle}>Explained</button></Link>
          &nbsp;&nbsp;&nbsp;
          <Link to="/about" onClick={getURL}><button>About</button></Link>
          &nbsp;&nbsp;&nbsp;
          <Link to="/default" onClick={getURL}><button>Default</button></Link> 
          &nbsp;&nbsp;&nbsp;
          <Link to="/starting" onClick={getURL}><button>Starting</button></Link>
        </div>
      </div>
      <Outlet />
    </div>
);
  
};

export default Layout;