import React from 'react';

import titleBanner01 from '../images/lr-title-banner_01.jpg';
import titleBanner02 from '../images/lr-title-banner_02.jpg';
import {lr} from '../lr/lr-single.js';

function Welcome(){
  
  return ( 
          
    <React.StrictMode>      
      <div style={{textAlign:'center'}}>
        <h1>This is the welcome page</h1>
      </div>      

      <div  className="" 
            id="titling" 
            style={{
                    width: lr.w("%",55,98), 
                    marginLeft:'auto', 
                    marginRight:'auto', 
                    backgroundColor:'#bbbbbb',
                    border:'2px solid white', 
                    borderRadius:'0.75em', 
                    fontFamily: 'Arial Rounded MT Bold'
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
    
    
  );
};

export default Welcome;