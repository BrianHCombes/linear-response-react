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
      
      <div style={{padding:'0 2% 0 3%'}}>
        LR is a supplemental tool for designing the responsive behavior of web pages across all screen sizes. 
        <ul style={{paddingLeft:'5%'}}>
          <li style={{textAlign:'left'}}>
            LR uses standard Javascript and works with all CSS and frontend frameworks.
          </li>
          <li style={{textAlign:'left'}}>
            LR is not a framework and won't interfere with your responsive design approach. 
            However, should traditional approaches falter, LR can be called upon.
          </li>
          <li>
            LR works by doing proportional lineation between two defined points. This provides pixel precision 
            sizing on any given screen allowing for optimum screen usage.
          </li>
          <li>
            LR can (technically) be used exclusively for all responsive behavior.
          </li>
          <li>
            LR is arguably easier to use than traditional methods with its relatively small API.
          </li>
        </ul>
      </div>  
      
      
      
      
      
    </React.StrictMode>
    
    
  );
};

export default Welcome;