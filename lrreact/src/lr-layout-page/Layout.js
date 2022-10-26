import React from 'react';
import { useState } from "react";
import { Outlet, Link } from 'react-router-dom';

import titleBanner01 from '../images/lr-title-banner_01.jpg';
import titleBanner02 from '../images/lr-title-banner_02.jpg';
import {lr} from '../lr/lr-single.js';
import './Layout.css';


// Component Layout
function Layout(){

 const [page, setURL] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    url: "red",
    pageName: "welcome"
  });

  function getURL(){
    window.setTimeout(URLfunc,100);
    
    function URLfunc(){
      setURL(preState => {
        
        let url = window.location.href;
        let lastSlash = url.lastIndexOf("/");
        console.log("index of lastSlash is: " + lastSlash);
        
        let page = url.substring(lastSlash+1);
        if(page === "") page = "welcome";
        console.log("page is: " + page);
        
        
        
        return { ...preState, url:window.location.href, pageName:page };

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

      <div style={{color:'white'}}>{}</div>  
      <div style={{color:'white'}}>The loaded component url is: {page.url}</div>  
      <div style={{color:'white'}}>The page name is: {page.pageName}</div>    
        
        
      <div style={{textAlign:"center"}}> 
        <div>
        <Link to="/"><button className="btnHover" onClick={getURL} style={{backgroundColor:'yellow', padding:'0.2%', borderRadius:'0.3em'}}>Welcome</button></Link>
          &nbsp;&nbsp;&nbsp;
          <Link to="/methods" onClick={getURL}><button>Methods</button></Link>
                                                    
          &nbsp;&nbsp;&nbsp;
          <Link to="/explained" onClick={getURL}><button>Explained</button></Link>
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