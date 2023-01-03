import React from 'react';
import './Default.css';
import { Outlet, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
//import titleBanner01 from '../images/lr-title-banner_01.jpg';
//import titleBanner02 from '../images/lr-title-banner_02.jpg';
import {lr} from '../lr/lr-single.js';

function Default(){
  
  return ( 
          
    <React.StrictMode>  
      {/*comment to eliminate error flags elsewhere;*/}<span style={{}}></span>  
      <div  className="" 
            id="pageTopExplained" 
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
        <div style={{position:'relative', textAlign:'center'}}>
          <div className="arialRnd" style={{fontSize: lr.w("em",3.5,1.5), lineHeight:'150%', padding:'1% 0 0 0', textAlign:'center'}}>
            Defaults, Setters and Getters
          </div>    
          <div style={{fontSize:'1.25em', padding:'0 6% 0 6%'}}>
            LR comes with numerous default settings. Most default settings<br />are mutable and can be changed (set) to suit your responsive needs.<br />
            There are also getters to get a snap shot of LR's current settings.
          </div>
          <ul style={{padding:'0 8% 0 8%', textAlign:'left'}}>
            <li style={{textAlign:'left'}}>
              Generally, you won't need to change any of the default settings.
            </li>
            <li style={{textAlign:'left', marginTop:"0.4em"}}>
              However, more advanced response techniques may warrant changing the settings.
            </li>
            <li style={{textAlign:'left', marginTop:"0.4em"}}>
              Currently, viewport defaults are based on the most common desktop and mobile screen sizes.<br />
              See <a  className="button" 
                      href='https://gs.statcounter.com/screen-resolution-stats' 
                      target="_blank">
                    &nbsp;Global Stats&nbsp;
                  </a> for the most common screen sizes.
            </li>
            <li style={{textAlign:'left', marginTop:"0.4em"}}>
              As of this specification, the most common desktop screen size is 1920x1080 and the most common mobile phone screen size is 360x800.
            </li>
            <li style={{textAlign:'left', marginTop:"0.4em"}}>
            LR has found the best default window properties for width and height are <span style={{color:'blue'}}>window.screen.availWidth</span> (for width)
            and <span style={{color:'blue'}}>window.innerHeight</span> (for height). These are mutable and can be changed so LR can utilize 
              different window properties as desired. See LR setters. 
            </li>
          </ul>
      </div>  
        
      <div style={{ backgroundColor:'white', fontFamily:'monospace', fontSize:'1.5em', color:'black', 
                    margin:'0 2.5% 0 2.5%', padding:'1% 0 1% 1%', border:'2px solid black', borderRadius:'0.5em'}}>
        <span className="jsComment">&#47;&#47; Changing settings:</span><br />
        <span className="jsComment">&#47;&#47; Let say you want to base your LR expressions on specific</span><br />
        <span className="jsComment">&#47;&#47; viewport widths and not the default device widths.</span><br />
        <span className="jsComment">&#47;&#47; Consider the following expressions:</span><br /><br />
        lr.setUVPw(1170);<br />
        lr.setLVPw(400);<br /><br />
        <span className="jsComment" style={{fontSize:'1.0em'}}>
          &#47;&#47; This sets LR's upper viewport width to 1170px and<br />
          &#47;&#47; LR's lower viewport width to 400px.<br />
          &#47;&#47; These are now LR's range points as well.<br /> 
          &#47;&#47; The function names are structured as acronyms.<br />
          &#47;&#47; The first expression reads as:&nbsp;
          <span style={{color:'red'}}><b>set</b></span>&nbsp; 
          <span style={{color:'red'}}><b>U</b></span>pper&nbsp;
          <span style={{color:'red'}}><b>V</b></span>iew 
          <span style={{color:'red'}}><b>P</b></span>ort&nbsp; 
          <span style={{color:'red'}}><b>w</b></span>idth.
        </span><br />
      </div>
      
      <div style={{width:'95%', margin:'1% auto 0 auto'}}>    
        <div style={{color:'white', fontSize:'1.00em', fontFamily:'Arial Rounded MT Bold'}}>
          The above LR settings (setters) tells LR to use 1170px as its custom upper viewport width (which is also LR's upper range point for width) 
          and 400px as its custom lower viewport width (which is also LR's lower range point for width). These settings are internal to LR so 
          only LR is mindful of these settings.
          For a refresher on range points see&nbsp;
          <HashLink className="button" to="/explained#pageTop">
            &nbsp;How&nbsp;LR&nbsp;Works.&nbsp;
          </HashLink><br /><br />
                   
        <span style={{color:'blue'}}>For example:</span> After the above settings are done, the 3 arg expression <span style={{color:'blue'}}>lr.w("font-size:px",30,12) </span> 
          will now return 'font-size:30px' when the reported viewport width is 1170px rather than the original default width of 1920px. 
          And correspondingly, it will now return 'font-size:12px' when the reported viewport width is 400px. And of course, any reported
          viewport width above, below, or in-between will return the corresponding font size.<br /><br />
          
          <span style={{color:'blue'}}>Note:</span> The device screen may in fact still be 1920px wide but your defined LR view width (for example) might be so it fits in a container 
          you've designed that's 1170px as a maximum width.<br /><br />
          
        </div>
      </div><br /><br /> 
      
      {/* LR Range Point setters ***********************************************************************************************************************/}
      <div id='lrSetters' style={{position:'relative'}}>
         <button className="toTop" onClick={() => window.scrollTo(0,0)} style={{position:'absolute', left:'3.3%', top:'2%'}}><b>To Top</b></button>
        <table style={{ border:'2px solid black', 
                      borderRadius:'.5em',
                      margin:'0 2.5% 0 2.5%',
                      width:'95%', 
                      lineHeight:'120%', 
                      backgroundColor:'#ccffcc', 
                      fontFamily:'Arial Rounded MT Bold',
                      padding:'0 0.5% 1.0% 0.5%'}}>
          <tr>
            <th colSpan="2" style={{fontSize:'2em', padding:'1%'}} >
              LR Setters<br />
              <span style={{fontSize:'0.5em'}}>(click each for example)</span>
            </th>
          </tr>
          <tr>
            <td style={{width:'20%', padding:'1%', fontSize:'1.5em', fontFamily:'monospace', backgroundColor:'#ccddcc'}}>
              <HashLink to='/explained#discussion' style={{textDecoration:'none'}}><b>lr.default()</b></HashLink>
            </td>
            <td style={{padding:'1%', verticalAlign:'middle', backgroundColor:'#ccddcc'}}>
              Sets all LR settings to default status.
            </td>
          </tr><br />  
          <tr>
            <td style={{width:'20%', padding:'1%', fontSize:'1.5em', fontFamily:'monospace', backgroundColor:'#ccddcc'}}>
              <Link to='/examples' style={{color:'red', textDecoration:'none'}}><b>lr.setUVPw(arg)</b></Link>
            </td>
            <td style={{padding:'1%', verticalAlign:'middle', backgroundColor:'#ccddcc'}}>
            Sets LR's recognized <span style={{color:'red'}}><b>upper</b></span> viewport width 
            &nbsp;(arg is in pixels, number or variable only) to establish LR's <span style={{color:'red'}}>upper range point for width.</span>
            </td>
          </tr>  
          <tr>
            <td style={{width:'20%', padding:'1%', fontSize:'1.5em', fontFamily:'monospace', backgroundColor:'#ccddcc'}}>
              <Link to='/examples' style={{color:'blue', textDecoration:'none'}}><b>lr.setLVPw(arg)</b></Link>
            </td>
            <td style={{padding:'1%', verticalAlign:'middle', backgroundColor:'#ccddcc'}}>
              Sets LR's recognized <span style={{color:'blue'}}><b>lower</b></span> viewport width
              &nbsp;(arg is in pixels, number or variable only) to establish LR's <span style={{color:'blue'}}>lower range point for width.</span>
            </td>
          </tr>
          <br />
          <tr>
            <td style={{width:'20%', padding:'1%', fontSize:'1.5em', fontFamily:'monospace', backgroundColor:'#ccddcc'}}>
              <Link to='/examples' style={{color:'red', textDecoration:'none'}}><b>lr.setUVPh(arg)</b></Link>
            </td>
            <td style={{padding:'1%', verticalAlign:'middle', backgroundColor:'#ccddcc'}}>
              Sets LR's recognized <span style={{color:'red'}}><b>upper</b></span> viewport height 
              &nbsp;(arg is in pixels, number or variable only) to establish LR's <span style={{color:'red'}}>upper range point for height.</span>
            </td>
          </tr>
          <tr>
            <td style={{width:'20%', padding:'1%', fontSize:'1.5em', fontFamily:'monospace', backgroundColor:'#ccddcc'}}>
              <Link to='/examples' style={{color:'blue', textDecoration:'none'}}><b>lr.setLVPh(arg)</b></Link>
            </td>
            <td style={{padding:'1%', verticalAlign:'middle', backgroundColor:'#ccddcc'}}>
              Sets LR's recognized <span style={{color:'blue'}}><b>lower</b></span> viewport height 
              &nbsp;(arg is in pixels, number or variable only) to establish LR's <span style={{color:'blue'}}>lower range point for height.</span>
            </td>
          </tr>
          <br />
        </table>
      </div>  
      <br /><br />
      
      
      {/* LR window property setters ***********************************************************************************************************************/}
      <div id='lrWindowSetters' style={{position:'relative'}}>
        <button className="toTop" onClick={() => window.scrollTo(0,0)} style={{position:'absolute', left:'3.3%', top:'1.5%'}}><b>To Top</b></button>
        <table style={{ border:'2px solid black', 
                        borderRadius:'.5em',
                        margin:'0 2.5% 0 2.5%',
                        width:'95%', 
                        lineHeight:'120%', 
                        backgroundColor:'lightcyan', 
                        fontFamily:'Arial Rounded MT Bold',
                        padding:'0.5% 0.5% 1.0% 0.5%'}}>
          <tr>
            <th colSpan="2" style={{fontSize:'2em', padding:'1%'}}>
              <div style={{marginBottom:'1%'}}>LR window property setters</div>
            </th>
          </tr>
          <tr>
            <td style={{width:'45%', padding:'2% 1% 2% 1%', fontSize:'1.5em', fontFamily:'monospace', backgroundColor:'#ccddcc'}}>
              <a href="#" style={{textDecoration:'none', color:'red'}}><b>lr.setVPp(window.outerWidth)</b></a>
            </td>
            <td style={{padding:'1%', verticalAlign:'middle', backgroundColor:'#ccddcc'}}>
            Tells LR to use the <span style={{color:'red'}}>width</span> of the browser window, including toolbars/scrollbars to calculate the proper response.
            </td>
          </tr> 
          <tr>
            <td style={{padding:'2% 1% 2% 1%', verticalAlign:'middle', fontSize:'1.5em', fontFamily:'monospace', backgroundColor:'#ccddcc'}}>
              <a href="#" style={{textDecoration:'none', color:'blue'}}><b>lr.setVPp(window.outerHeight)</b></a>
            </td>
            <td style={{padding:'1%', verticalAlign:'middle', backgroundColor:'#ccddcc'}}>
              Tells LR to use the <span style={{color:'blue'}}>height</span> of the browser window, including toolbars/scrollbars to calculate the proper response.
            </td>
          </tr> 
          <br />
          <tr>
            <td style={{padding:'1%', fontSize:'1.5em', fontFamily:'monospace', backgroundColor:'#ccddcc'}}>
              <a href="#" style={{textDecoration:'none', color:'red'}}><b>lr.setVPp(window.innerWidth)</b></a>
            </td>
            <td style={{padding:'1%', verticalAlign:'middle', backgroundColor:'#ccddcc'}}>
              Tells LR to use the <span style={{color:'red'}}>width</span> of a window's content area (viewport) including scrollbars to calculate the proper response.
            </td>
          </tr>
          <tr>
            <td style={{padding:'1%', fontSize:'1.5em', fontFamily:'monospace', backgroundColor:'#ccddcc'}}>
              <a href="#" style={{textDecoration:'none', color:'blue'}}><b>lr.setVPp(window.innerHeight)</b></a>
            </td>
            <td style={{padding:'1%', verticalAlign:'middle', backgroundColor:'#ccddcc'}}>
              Tells LR to use the <span style={{color:'blue'}}>height</span> of the window's content area (viewport) including scrollbars to calculate the proper response.
            </td>
          </tr> 
          <br />
          <tr>
            <td style={{padding:'1%', fontSize:'1.5em', fontFamily:'monospace', backgroundColor:'#ccddcc'}}>
              <a href="#" style={{textDecoration:'none', color:'red'}}><b>lr.setVPp(window.screen.width)</b></a>
            </td>
            <td style={{padding:'1%', verticalAlign:'middle', backgroundColor:'#ccddcc'}}>
              Tells LR to use the total <span style={{color:'red'}}>width</span> of the screen to calculate the proper response.
            </td>
          </tr>
          <tr>
            <td style={{padding:'1%', fontSize:'1.5em', fontFamily:'monospace', backgroundColor:'#ccddcc'}}>
              <a href="#" style={{textDecoration:'none', color:'blue'}}><b>lr.setVPp(window.screen.height)</b></a>
            </td>
            <td style={{padding:'1%', verticalAlign:'middle', backgroundColor:'#ccddcc'}}>
              Tells LR to use the total <span style={{color:'blue'}}>height</span> of the screen to calculate the proper response.
            </td>
          </tr>
          <br />
          <tr>
            <td style={{padding:'1%', fontSize:'1.5em', fontFamily:'monospace', backgroundColor:'#ccddcc'}}>
              <a href="#" style={{textDecoration:'none', color:'red'}}><b>lr.setVPp(window.screen.availWidth)</b></a>
            </td>
            <td style={{padding:'1%', verticalAlign:'middle', backgroundColor:'#ccddcc'}}>
              Tells LR to use the <span style={{color:'red'}}>width</span> of the screen (excluding interface features like the Windows Taskbar) to calculate the proper response.
            </td>
          </tr> 
          <tr>
            <td style={{padding:'1%', fontSize:'1.5em', fontFamily:'monospace', backgroundColor:'#ccddcc'}}>
              <a href="#" style={{textDecoration:'none', color:'blue'}}><b>lr.setVPp(window.screen.availHeight)</b></a>
            </td>
            <td style={{padding:'1%', verticalAlign:'middle', backgroundColor:'#ccddcc'}}>
              Tells LR to use the <span style={{color:'blue'}}>height</span> of the screen (excluding interface features like the Windows Taskbar) to calculate the proper response.
            </td>
          </tr> 
          <br />
        </table>
        </div>  
      <br /><br />
      
      {/*  LR Property Getters *******************************************************************************************************************************/}
    <div id='lrPropertyGetters' style={{position:'relative'}}>
        <button className="toTop" onClick={() => window.scrollTo(0,0)} style={{position:'absolute', left:'3.3%', top:'1%'}}><b>To Top</b></button>  
        <table style={{ border:'2px solid black', 
                        borderRadius:'.5em',
                        margin:'0 2.5% 0 2.5%',
                        width:'95%', 
                        lineHeight:'120%', 
                        backgroundColor:'#94b8b8', 
                        fontFamily:'Arial Rounded MT Bold',
                        padding:'0.5% 0.5% 1.0% 0.5%'}}>
          <tr>
            <th colSpan="2" style={{fontSize:'2em', padding:'1%'}}>
              <div style={{marginBottom:'1%', textShadow:'0 0 3px white, 0 0 3px white, 0 0 3px white, 0 0 3px white'}}>LR property getters</div>
            </th>
          </tr>
          <tr>
            <td style={{width:'50%', padding:'2% 1% 2% 1%', fontSize:'1.5em', fontFamily:'monospace', backgroundColor:'#ccddcc'}}>
              <a href="#" style={{textDecoration:'none', color:'red'}}><b>lr.toConsole("title")</b></a>
            </td>
            <td style={{padding:'1%', verticalAlign:'middle', backgroundColor:'#ccddcc'}}>
            Sends a full property settings report to the console of all getter properties below. Enter a title as needed.
            </td>
          </tr> 
          <br />
          <tr>
            <td style={{padding:'1%', fontSize:'1.5em', fontFamily:'monospace', backgroundColor:'#ccddcc'}}>
              <a href="#" style={{textDecoration:'none', color:'red'}}><b>lr.getLRp().lrScreenWidth</b></a>
            </td>
            <td style={{padding:'1%', verticalAlign:'middle', backgroundColor:'#ccddcc'}}>
              Returns the device width in pixels.
            </td>
          </tr>
          <tr>
            <td style={{padding:'1%', fontSize:'1.5em', fontFamily:'monospace', backgroundColor:'#ccddcc'}}>
              <a href="#" style={{textDecoration:'none', color:'blue'}}><b>lr.getLRp().lrScreenWidthPropertyApplied</b></a>
            </td>
            <td style={{padding:'1%', verticalAlign:'middle', backgroundColor:'#ccddcc'}}>
              Returns the device width window property applied.
            </td>
          </tr> 
          <tr>
            <td style={{padding:'1%', fontSize:'1.5em', fontFamily:'monospace', backgroundColor:'#ccddcc'}}>
              <a href="#" style={{textDecoration:'none', color:'red'}}><b>lr.getLRp().lrScreenHeight</b></a>
            </td>
            <td style={{padding:'1%', verticalAlign:'middle', backgroundColor:'#ccddcc'}}>
              Returns the device height in pixels.
            </td>
          </tr>
          <tr>
            <td style={{padding:'1%', fontSize:'1.5em', fontFamily:'monospace', backgroundColor:'#ccddcc'}}>
              <a href="#" style={{textDecoration:'none', color:'blue'}}><b>lr.getLRp().lrScreenHeightPropertyApplied</b></a>
            </td>
            <td style={{padding:'1%', verticalAlign:'middle', backgroundColor:'#ccddcc'}}>
              Returns the device height window property applied.
            </td>
          </tr>
          <tr>
            <td style={{padding:'1%', fontSize:'1.5em', fontFamily:'monospace', backgroundColor:'#ccddcc'}}>
              <a href="#" style={{textDecoration:'none', color:'red'}}><b>lr.getLRp().lrScreenDeviceRatio</b></a>
            </td>
            <td style={{padding:'1%', verticalAlign:'middle', backgroundColor:'#ccddcc'}}>
              Returns the device's screen ratio (height/width).
            </td>
          </tr>
          <br />
           <tr>
            <td style={{padding:'1%', fontSize:'1.5em', fontFamily:'monospace', backgroundColor:'#ccddcc'}}>
              <a href="#" style={{textDecoration:'none', color:'red'}}><b>lr.getLRp().windowWidth</b></a>
            </td>
            <td style={{padding:'1%', verticalAlign:'middle', backgroundColor:'#ccddcc'}}>
              Returns the browser window width in pixels.
            </td>
          </tr> 
          <tr>
            <td style={{padding:'1%', fontSize:'1.5em', fontFamily:'monospace', backgroundColor:'#ccddcc'}}>
              <a href="#" style={{textDecoration:'none', color:'blue'}}><b>lr.getLRp().windowWidthPropertyApplied</b></a>
            </td>
            <td style={{padding:'1%', verticalAlign:'middle', backgroundColor:'#ccddcc'}}>
              Returns the browser window width property applied.
            </td>
          </tr> 
          <tr>
            <td style={{padding:'1%', fontSize:'1.5em', fontFamily:'monospace', backgroundColor:'#ccddcc'}}>
              <a href="#" style={{textDecoration:'none', color:'red'}}><b>lr.getLRp().windowHeight</b></a>
            </td>
            <td style={{padding:'1%', verticalAlign:'middle', backgroundColor:'#ccddcc'}}>
              Returns the browser window height in pixels.
            </td>
          </tr> 
          <tr>
            <td style={{padding:'1%', fontSize:'1.5em', fontFamily:'monospace', backgroundColor:'#ccddcc'}}>
              <a href="#" style={{textDecoration:'none', color:'blue'}}><b>lr.getLRp().windowHeightPropertyApplied</b></a>
            </td>
            <td style={{padding:'1%', verticalAlign:'middle', backgroundColor:'#ccddcc'}}>
              Returns the browser window height property applied.
            </td>
          </tr> 
          <tr>
            <td style={{padding:'1%', fontSize:'1.5em', fontFamily:'monospace', backgroundColor:'#ccddcc'}}>
              <a href="#" style={{textDecoration:'none', color:'red'}}><b>lr.getLRp().windowRatio</b></a>
            </td>
            <td style={{padding:'1%', verticalAlign:'middle', backgroundColor:'#ccddcc'}}>
              Returns the browser window ratio (height/width).
            </td>
          </tr> 
          <br />
          <tr>
            <td style={{padding:'1%', fontSize:'1.5em', fontFamily:'monospace', backgroundColor:'#ccddcc'}}>
              <a href="#" style={{textDecoration:'none', color:'red'}}><b>lr.getLRp().UVPw</b></a>
            </td>
            <td style={{padding:'1%', verticalAlign:'middle', backgroundColor:'#ccddcc'}}>
              Returns the specified <span style={{color:'red'}}>upper viewport width</span> 
              &nbsp;set by default or by LR setter which also corresponds to LR's upper width range point.
            </td>
          </tr> 
          <tr>
            <td style={{padding:'1%', fontSize:'1.5em', fontFamily:'monospace', backgroundColor:'#ccddcc'}}>
              <a href="#" style={{textDecoration:'none', color:'blue'}}><b>lr.getLRp().LVPw</b></a>
            </td>
            <td style={{padding:'1%', verticalAlign:'middle', backgroundColor:'#ccddcc'}}>
              Returns the specified <span style={{color:'blue'}}>lower viewport width</span> 
              &nbsp;set by default or by LR setter which also corresponds to LR's lower width range point.
            </td>
          </tr> 
          <tr>
            <td style={{padding:'1%', fontSize:'1.5em', fontFamily:'monospace', backgroundColor:'#ccddcc'}}>
              <a href="#" style={{textDecoration:'none', color:'red'}}><b>lr.getLRp().UVPh</b></a>
            </td>
            <td style={{padding:'1%', verticalAlign:'middle', backgroundColor:'#ccddcc'}}>
             Returns the specified <span style={{color:'red'}}>upper viewport height</span> 
             &nbsp;set by default or by LR setter which also corresponds to LR's upper height range point.
            </td>
          </tr> 
          <tr>
            <td style={{padding:'1%', fontSize:'1.5em', fontFamily:'monospace', backgroundColor:'#ccddcc'}}>
              <a href="#" style={{textDecoration:'none', color:'blue'}}><b>lr.getLRp().LVPh</b></a>
            </td>
            <td style={{padding:'1%', verticalAlign:'middle', backgroundColor:'#ccddcc'}}>
              Returns the specified <span style={{color:'blue'}}>lower viewport height</span> 
              &nbsp;set by default or by LR setter which also corresponds to LR's lower height range point.
            </td>
          </tr> 
          <tr>
            <td style={{padding:'1%', fontSize:'1.5em', fontFamily:'monospace', backgroundColor:'#ccddcc'}}>
              <a href="#" style={{textDecoration:'none', color:'red'}}><b>lr.getLRp().VPr</b></a>
            </td>
            <td style={{padding:'1%', verticalAlign:'middle', backgroundColor:'#ccddcc'}}>
              Returns the viewport (height/width) ratio.
            </td>
          </tr> 
          <br />
        </table>
      </div>
        
    </div>  
  </React.StrictMode>
  );}  
  
  export default Default;
    
    
