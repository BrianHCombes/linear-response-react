import React from 'react';
import './Explained.css';
//import { Outlet, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'
import graph_02 from '../images/graph_02.jpg';
//import titleBanner02 from '../images/lr-title-banner_02.jpg';
import {lr} from '../lr/lr-single.js';


function Explained(){
  return (
          <div  className="" 
            id="pageTop" 
            style={{
                    width: lr.w("%",55,98), 
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
                  How LR Works
              </div>    
              <div style={{fontSize:'1.25em', textAlign:'left', padding:'0 6% 0 6%'}}>
                LR works by calculating a proportional lineation between two pre-defined points. This, for precise element sizing. 
                This calculation is based on the well known&nbsp; 
                <a  className="button"
                    href="https://www.almostfun.org/lessons/slope-intercept-form/" 
                    target="_blank"
                    rel="noreferrer"
                    style={{color:'red'}}>
                  &nbsp;slope y-intercept&nbsp;
                </a> 
                &nbsp;formula.
              </div>
              <ul style={{padding:'0 8% 0 8%', textAlign:'left'}}>
                <li style={{textAlign:'left'}}>
                  You define the points of lineation.
                </li>
                <li style={{textAlign:'left'}}>
                  You may also start with common defaults.
                </li>
                <li style={{textAlign:'left'}}>
                  Defaults are based on the most comon screen sizes.
                </li>
                
              </ul>
            </div>  
            <div style={{fontSize:'1.25em', color:'white', textAlign:'center', paddingBottom:'0.3%'}}>Let's explain this graph</div>
            <div style={{textAlign:'center'}}>
                      <img src={graph_02} alt="Slope_Y-intercept graph" style={{width:lr.w('%',80,95), border:'2px solid black', borderRadius:'0.5em'}}></img>
            </div> 
            <div style={{fontSize:'1.15em', color:'white', textAlign:'left', paddingBottom:'0.3%'}}>
              <ul style={{padding:'0 16% 0 16%', textAlign:'left'}}>
                <li style={{textAlign:'left'}}>
                  Notice the horizontal axis is view width and the vertical axis is font size.
                </li>
                <li style={{textAlign:'left'}}>
                  The upper and lower range points (red dots) are the defined lineation points.
                </li>
                <li style={{textAlign:'left'}}>
                  Each point has two coordinate numbers.
                </li>
                <li style={{textAlign:'left'}}>
                  The 1st coordinate represents the view width in pixels (in this example).
                </li>
                <li style={{textAlign:'left'}}>
                  The 2nd coordinate represents the CSS value in em units (in this example).
                </li>
                <li style={{textAlign:'left'}}>
                  The blue line is the path of lineation.
                </li>
              </ul>    
            
            <div style={{padding:'0 14% 0 14%', textAlign:'left', color:'#444444'}}>
              Taken together, as a function of view width, the return value is 1 at a view width of 360px and 3 at a view width of 1920px. 
              A view width of 1140 (green dot) which is 1/2 way between 360 and 1920 returns 2, which of course, 
              is half way between 1 and 3. Thus, any given view width will return the corresponding value.
            </div>
            </div>
            <br /><br />
            
            <div id="discussion" style={{ backgroundColor:'white', fontFamily:'monospace', fontSize:'1.5em', color:'black', 
                          margin:'0 2.5% 0 2.5%', padding:'1%', border:'2px solid black', borderRadius:'0.5em'}}>
              <span className="jsComment">Let's look at a practical bit of code for applying LR.</span><br />
              <span className="jsComment">This simple javascript snippet below is enough to put LR to work.</span><br /><br />
              let a = lr.w("em",3,1);<br />
              document.getElementById("someElement").style.fontSize = a;<br /><br />
              <span className="jsComment" >
                The lr.w("em",3,1) method has only three arguments. This is the simplist LR method form. 
                It only asked for the desired CSS unit: em (in this case), and the desired unit values: 3 and 1. The 3 is automatically 
                coordinated with 1920px and 1 is automatically coordinated with 360px.<br /><br />
                
                Thus, this expression returns 3.00em on a desktop screen width of 1920px and returns 1.00em on a mobile screen width of 360px  
                and returns the appropriate proportional value for any screen width above, below, or in between.<br /><br />
                
                The 1920px desktop screen width and the 360px mobile screen width are the most common so they serve as default reference points.
                However, all other screen width sizes will also display content with its appropriate sizing based on the reference values at
                1920px and 360px.<br /><br />
                
                Note: All default units are mutable. 
                <HashLink className="button" to="/default#">See Default Settings.</HashLink>
                
              </span><br />
            </div>
            
          </div>
          
          
  
 ); 
};

export default Explained;