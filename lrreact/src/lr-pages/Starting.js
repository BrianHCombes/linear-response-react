import React from 'react';
import './Starting.css';
import { Outlet, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import titleBanner01 from '../images/lr-title-banner_01.jpg';
import titleBanner02 from '../images/lr-title-banner_02.jpg';
import {lr} from '../lr/lr-single.js';


function Starting(){
  
  
  function copy(){
    let copyHTML = document.getElementById("html").innerText;
    navigator.clipboard.writeText(copyHTML);
  }
  
  
  return (
  <React.StrictMode>  
  {/*comment to eliminate error flags elsewhere;*/}<span style={{}}></span>  
    <div  className="" 
          id="titling" 
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
              Getting Started
          </div>    
          <div style={{fontSize:'1.25em', padding:'0 6% 0 6%'}}>
          Setting up and using LR is easy.<br />
          We'll use a basic HTML document and basic JavaScript to apply LR.
          </div>
                   
          <ul style={{padding:'0 8% 0 8%', textAlign:'left'}}>
            <li style={{textAlign:'left'}}>
              From your editor create a simple HTML document. Or, copy and paste this one here
            </li>
          </ul>
          
          <div style={{position:'relative'}}>
            <button onClick={copy} style={{position:'absolute', right:'4%', top:'4%'}}>Copy HTML</button>
            <div id="html" style={{ backgroundColor:'white', fontFamily:'monospace', fontSize:'1.5em', color:'black', 
                          margin:'0 2.5% 0 2.5%', padding:'1% 0 1% 1%', border:'2px solid black', borderRadius:'0.5em', textAlign:'left'}}>
              &lt;html&gt;<br />
              &lt;head&gt;<br />
                  &nbsp;&nbsp;&lt;title&gt;LR example&lt;/title&gt;<br />
                  &nbsp;&nbsp;&lt;meta charset="UTF-8"&gt;<br />
                  &nbsp;&nbsp;&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;<br />
                  &nbsp;&nbsp;&lt;script src="https://www.tarptiedown.com/newLR/lr-single.js"&gt;&lt;/script&gt;<br />
              &lt;/head&gt;<br />
              &lt;body&gt;<br />
                  &nbsp;&nbsp;&lt;div id="lr"&gt;<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;Some Text<br />
                  &nbsp;&nbsp;&lt;/div&gt;<br />
                  &lt;script&gt;<br />
                  &nbsp;&nbsp;document.getElementById("lr").style = lr.w("font-size:em",3,1)<br />
                  &lt;/script&gt; <br />
              &lt;/body&gt;<br />
              &lt;/html&gt;<br />
            </div>
          </div>
          <div style={{color:'white', margin:'0 4%', textAlign:'left'}}>Once you get this HTML code to run. View it all full screen and then use your developer tool to view it at
           various screen sizes including mobile screen sizes. You will see the font size varies accordingly to. To further test, swap the 1 and 3
           in the lr expression and note the font size is now big at mobile screen size and small at desk top screen size.
          </div>
          
          
          
          <ul style={{padding:'0 8% 0 8%', textAlign:'left'}}>
            <li style={{textAlign:'left', marginTop:"0.2em"}}>
              Note the div element with <span className='hl_01'>&nbsp;id="lr"&nbsp;</span> 
              and the document property:<br /><span className='hl_01'>&nbsp;'document.getElementById("lr").style = lr.w("font-size:em",3,1)'&nbsp;</span>
            </li>
            <li style={{textAlign:'left', marginTop:"0.6em"}}>
            The LR expression: <span className='hl_01'>&nbsp;lr.w("font-size:em",3,1)&nbsp;</span> returns <span className='hl_01'>&nbsp;font-size:3em&nbsp;</span>&nbsp;
            on a desk top screen at 1920px wide and returns <span className='hl_01'>&nbsp;font-size:1em&nbsp;</span> on a mobile screen at 360px wide. 
            Of course, any screen sizes above, below, and in between will return the corresponding font size.
            </li>
            <li style={{textAlign:'left', marginTop:"0.6em"}}>
              Recall the 1920px and 360px are LR's default values. See
              <HashLink className="button" to="/default#">
                &nbsp;Defaults&nbsp;Explained.&nbsp;
              </HashLink>
            </li>
            
            <li style={{textAlign:'left', marginTop:"0.6em"}}>
              There is flexibility in LR expressions. For example, you can have LR return different value formats. 
              Consider the three document property assignments below.
            </li>
          </ul> 
            <div id="html" style={{ backgroundColor:'white', fontFamily:'monospace', fontSize:'1.5em', color:'black', 
                          margin:'0 2.5% 0 2.5%', padding:'1% 0 1% 1%', border:'2px solid black', borderRadius:'0.5em', textAlign:'left'}}>
             
                  &lt;script&gt;<br />
                  &nbsp;&nbsp;document.getElementById("lr").style = lr.w("font-size:em",3,1);<br />
                  &lt;/script&gt; <br />
                  <span className="jsComment">&#47;&#47; LR returns 'font-size:3em' at 1920px wide</span><br /><br />
             
            </div>  
            <br />
            <div id="html" style={{ backgroundColor:'white', fontFamily:'monospace', fontSize:'1.5em', color:'black', 
                          margin:'0 2.5% 0 2.5%', padding:'1% 0 1% 1%', border:'2px solid black', borderRadius:'0.5em', textAlign:'left'}}>
             
                  &lt;script&gt;<br />
                  &nbsp;&nbsp;document.getElementById("lr").style.fontSize = lr.w("em",3,1);<br />
                  &lt;/script&gt; <br />
                  <span className="jsComment">&#47;&#47; LR returns '3em' at 1920px wide</span><br /><br />
             
            </div>
            <br />
            <div id="html" style={{ backgroundColor:'white', fontFamily:'monospace', fontSize:'1.5em', color:'black', 
                          margin:'0 2.5% 0 2.5%', padding:'1% 0 1% 1%', border:'2px solid black', borderRadius:'0.5em', textAlign:'left'}}>
             
                  &lt;script&gt;<br />
                  &nbsp;&nbsp;document.getElementById("lr").style.fontSize = lr.w("",3,1) + "em";<br />
                  &lt;/script&gt; <br />
                  <span className="jsComment">&#47;&#47; LR returns 3 at 1920px wide. Is a num when returned in this configuration.</span><br /><br />
             
            </div>
          
            
          <ul>  
            <li style={{textAlign:'left', marginTop:"0.6em"}}>
              The method lr.w() as illustrated here will likely be your most commonly used method. Most response requirements 
              are based on a screen's width. Proper font and element sizing is essential for various screen widths to assure a 
              good user experience. Meanwhile, screen height generally is less relevant since scroll bars appear for easy scrolling. 
            </li>
            <li style={{textAlign:'left', marginTop:"0.2em"}}>
              Regardless, LR has full response capability based on screen width, screen height, and even the height to width ratio. 
              See all available&nbsp;  
              <HashLink className="button" to="/methods#">
                &nbsp;Response&nbsp;Methods.&nbsp;
              </HashLink>
            </li>
          </ul>
      </div>  
    </div>  
        
  </React.StrictMode>          
          
);
};

export default Starting;