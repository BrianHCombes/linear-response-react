import React from 'react';
import './Welcome.css';
import { Outlet, Link } from 'react-router-dom';
import titleBanner01 from '../images/lr-title-banner_01.jpg';
import titleBanner02 from '../images/lr-title-banner_02.jpg';
import {lr} from '../lr/lr-single.js';

function Welcome(){
  
  return ( 
          
    <React.StrictMode>      
      <div  className="" 
            id="titling" 
            style={{
                    width: lr.w("%",65,98), 
                    marginTop:'1%',
                    marginLeft:'auto', 
                    marginRight:'auto', 
                    backgroundColor:'#bbbbbb',
                    border:'2px solid white', 
                    borderRadius:'0.75em', 
                    fontFamily: 'Arial Rounded MT Bold'
                  }}>
        <div style={{textAlign:'center'}}>
          <div className="arialRnd" style={{fontSize: lr.w("em",3.5,1.5), lineHeight:'150%', padding:'1% 0 0 0', textAlign:'center'}}>
              Welcome to LR
          </div>    
          <div style={{fontSize:'1.25em', padding:'0 6% 0 6%'}}>
          LR is a supplemental tool for designing the responsive<br /> behavior of web pages across all screen sizes. 
          </div>
          <ul style={{padding:'0 8% 0 8%', textAlign:'left'}}>
            <li style={{textAlign:'left'}}>
              LR stands for Linear Response
            </li>
            <li style={{textAlign:'left', marginTop:"0.2em"}}>
              LR is an API for the responsive aspect of web design
            </li>
            <li style={{textAlign:'left', marginTop:"0.2em"}}>
              LR uses standard javascript
            </li>
            <li style={{textAlign:'left', marginTop:"0.2em"}}>
              LR works with all CSS and Javascript frameworks
            </li>
            <li style={{textAlign:'left', marginTop:"0.2em"}}>
              LR has powerful response tools
            </li>
            <li style={{textAlign:'left', marginTop:"0.2em"}}>
              LR is not a framework and won't interfere with your responsive design approach. 
              However, should traditional approaches falter, LR can be called upon.
            </li>
            <li style={{textAlign:'left', marginTop:"0.2em"}}>
              LR works by doing proportional lineation between two defined points. This provides pixel precision 
              sizing on any given screen allowing for optimum screen usage.
            </li>
            <li style={{textAlign:'left', marginTop:"0.2em"}}>
              LR can (technically) be used exclusively for all responsive behavior.
            </li>
            <li style={{textAlign:'left', marginTop:"0.2em"}}>
              LR is arguably easier to use than traditional methods with its relatively small API.
            </li>
          </ul>
      </div>  
        
      <div style={{ backgroundColor:'white', fontFamily:'monospace', fontSize:'1.5em', color:'black', 
                    margin:'0 2.5% 0 2.5%', padding:'1% 0 1% 1%', border:'2px solid black', borderRadius:'0.5em'}}>
        <span className="jsComment">&#47;&#47; A quick look</span><br /><br />
        let a = lr.w("em",3,1);<br />
        document.getElementById("someElement").style.fontSize = a;<br /><br />
        <span className="jsComment" style={{fontSize:'0.8em'}}>
          &#47;&#47; By default, returns 3.00em on a desktop screen width of 1920px and returns 1.00em on a mobile screen width of 360px  
          and returns the appropriate proportional value for any screen width above, below, or in between.
        </span><br />
      </div>
      
      <div style={{width:'95%', margin:'1% auto 0 auto'}}>    
        <div style={{color:'white', fontSize:'0.85em', fontFamily:'Arial Rounded MT Bold'}}>
          The above LR method will likely be your most used LR method. However, there are many options to refine your response return. 
          <a href="http://localhost:3000/examples" style={{textDecoration:'none', color:'blue'}}> Click here </a>to see all the ways you can tailor your return response.
        </div>
      </div><br /><br /> 
        
        
      </div>  
      
      
      
      
      
      
      
    </React.StrictMode>
    
    
  );
};

export default Welcome;