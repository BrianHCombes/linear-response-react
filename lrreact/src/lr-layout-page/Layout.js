import React from 'react';
import { useState } from "react";
import { Outlet, Link } from 'react-router-dom';

import titleBanner01 from '../images/lr-title-banner_01.jpg';
import titleBanner02 from '../images/lr-title-banner_02.jpg';
import {lr} from '../lr/lr-single.js';
import './Layout.css';



function update(){
    window.setTimeout(getURL,1000);
    
    //let URL;
    
    function getURL(){ 
                                  //URL = window.location.href;
                                  console.log("window.location.href is: " + window.location.href);
                                 };
    //console.log("URL is: " + URL);  
    
    
    }



const Layout = () => {
  
//  let test1 = lr.whtml(titleBanner01,1000,titleBanner02);
//  console.log("test is: " + test1);
  
  
 
  
  
  
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

      
      <div style={{color:'white'}}>{}</div>  
        
        
        
      <div style={{textAlign:"center"}}> 
        <div>
        <Link to="/"><button className="btnHover" style={{backgroundColor:'yellow', padding:'0.2%', borderRadius:'0.3em'}}>Welcome</button></Link>
          &nbsp;&nbsp;&nbsp;
          <Link to="/methods" onClick={() => update()}><button>Methods</button></Link>
                                                    
                                                    
                                                    
          &nbsp;&nbsp;&nbsp;
          <Link to="/explained"><button>Explained</button></Link>
          &nbsp;&nbsp;&nbsp;
          <Link to="/about"><button>About</button></Link>
          &nbsp;&nbsp;&nbsp;
          <Link to="/default"><button>Default</button></Link> 
          &nbsp;&nbsp;&nbsp;
          <Link to="/starting"><button>Starting</button></Link>
        </div>
      </div>
      <div style={{color:'white'}}>{window.location.href}</div>
      <Outlet />
    </div>
  );
  
};

export default Layout;