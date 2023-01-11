import React from 'react';
import './Examples.css';
import { Outlet, Link } from 'react-router-dom';
import titleBanner01 from '../images/lr-title-banner_01.jpg';
import titleBanner02 from '../images/lr-title-banner_02.jpg';
import { HashLink } from 'react-router-hash-link';
import {lr} from '../lr/lr-single.js';




function Examples(){
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
              Examples
          </div>    
          <div style={{fontSize:'1.25em', padding:'0 4% 0 4%', textAlign:'left'}}>
          Here are various examples for using LR. They use basic javascript code for manipulating the DOM. 
          Although limited, any examples for use in various frameworks will be shown. Generally, it is advised
          to apply basic DOM manipulation form as catered to by various application frameworks.<br /> <br />
          </div>
          <div>
            
            <table style={{width:'94%', margin:'0 auto'}}>   
              <tr>
                <td colSpan='6' style={{width:'100%', textAlign:'center', color:'blue'}}>
                  Choose Your Example
                </td>
              </tr>
              <tr>
                <td><Link className="button" to="/examples/lrw" title="This is the most popular method" >&nbsp;lr.w(args)&nbsp;</Link></td>
                <td><Link className="button" to="/examples/lrww" title="This is the window width method" >&nbsp;lr.ww(args)&nbsp;</Link></td>
                <td><HashLink className="button" to="/examples#lrh">&nbsp;lr.h(args)&nbsp;</HashLink></td>
                <td><HashLink className="button" to="/examples#lrwh">&nbsp;lr.wh(args)&nbsp;</HashLink></td>
                <td><HashLink className="button" to="/examples#lrr">&nbsp;lr.r(args)&nbsp;</HashLink></td>
                <td><HashLink className="button" to="/examples#lrwr">&nbsp;lr.wr(args)&nbsp;</HashLink></td>
              </tr>
              <tr>
                <td>lr.wLF(args)</td>
                <td>lr.wwLF(args)</td>
                <td>lr.hLF(args)</td>
                <td>lr.whLF(args)</td>
                <td>lr.rLF(args)</td>
                <td>lr.wrLF(args)</td>
              </tr>  
              <tr>
                <td>lr.whtml(args)</td>
                <td>lr.wcss(args)</td>
                <td>lr.hhtml(args)</td>
                <td>lr.hcss(args)</td>
                <td>lr.rhtml(args)</td>
                <td>lr.rcss(args)</td>
              </tr>
              <tr>
                <td colSpan='6'>lr.eval(args)</td>
              </tr>
            </table>
           
          </div>
         
          
      </div><br />  
      
      <div><Outlet /></div> 
      <div style={{backgroundColor:'yellow', textAlign:'center'}}>&#8679;&nbsp;&nbsp;Above this is routed in&nbsp;&nbsp;&#8679;</div><br />
      
      
     {/*    
      <div style={{ backgroundColor:'white', fontFamily:'monospace', fontSize:'1.5em', color:'black', 
                    margin:'0 2.5% 0 2.5%', padding:'1% 0 1% 1%', border:'2px solid black', borderRadius:'0.5em'}}>
        <span className="jsComment">&#47;&#47; Example 1:</span><br />
        <span className="jsComment">&#47;&#47; Assumptions: You are using the default width of 1920px for large screens (desktop)
                                               <br />&#47;&#47; and 360px for small screens (mobile)</span><br /><br />
        <span className="jsComment">&#47;&#47; Now, let's say you need a font size of 4em at 1920px and a font size<br />&#47;&#47; 
                                               of 2.5em at 360px. Here's the proper method expression to use.
                                              </span><br /><br />
        let a = lr.w("em",4,2.5);<br />
        <span className="jsComment">&#47;&#47; a will be 4.00em at width of 1920px and 2.5em at width of 360px.</span><br />
        <span className="jsComment">&#47;&#47; The 'w' in the method refers to using the reported viewport <span style={{color:'red'}}><b><u>w</u></b></span>idth.</span><br /> 
        <span className="jsComment">&#47;&#47; You can now apply the result as you see fit as in the expression below.</span><br /> 
        document.getElementById("someElement").style.fontSize = a;<br /><br />
        <span className="jsComment" style={{fontSize:'0.8em'}}>
          &#47;&#47; By default, returns 4.00em on a desktop screen width of 1920px and returns 2.50em on a mobile screen width of 360px  
          and returns the appropriate proportional value for any screen width above, below, or in between.
        </span><br />
      </div>
      
      <div style={{width:'95%', margin:'1% auto 0 auto'}}>    
        <div style={{color:'white', fontSize:'0.85em', fontFamily:'Arial Rounded MT Bold'}}>
          The above LR method will likely be your most used LR method. However, there are many options to refine your response return. 
          <Link href="#" style={{textDecoration:'none', color:'blue'}}> Click here </Link>to see all the ways you can tailor your return response.
        </div>
      </div><br /><br /> 
     */}     
  
  
  {/* lr.w(args) example  ********************************************************************************************************/}      
  {/* 
    <div id='lrw' style={{position:'relative'}}>  
      <button className="toTop" onClick={() => window.scrollTo(0,0)} style={{position:'absolute', left:'3.3%', top:'2%'}}><b>To Top</b></button>
      <table  className='exampTable'>
        <tr>
          <th colSpan="2" style={{fontSize:'2em', padding:'1%'}} >
            Example<br /><br />lr.w(args)
          </th>
        </tr>
        <tr>
          <td style={{width:'16%', padding:'1%', fontSize:'1.5em', fontFamily:'monospace'}}>
            lr.w(args)
          </td>
          <td style={{padding:'1%', verticalAlign:'middle', fontFamily:'monospace', fontSize:'1.25em'}}>
            lr.w(args) uses the reported <span className='hlt_01'>&nbsp;viewport width&nbsp;</span> to establish the proper CSS return. 
            For this example assume the reported viewport width is the desk top width of 1920px.<br />
            There are 3 ways to return a value.<br /><br />
            expressions:<br />
            let a = lr.w('font-size:em',3,1);<br />
            let b = lr.w('em',3,1);<br /> 
            let c = lr.w('',3,1);<br /><br />
            returns:<br />
            a = 'font-size:3em'&nbsp;(is string)<br />
            b = '3em'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(is string)<br />
            c = 3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(is num)<br /><br />
            
            <table style={{border:'none', width:'100%'}} >
              <tr>
                <td style={{border:'none', width:'7%', verticalAlign:'top'}} >Note:</td>
                <td style={{border:'none'}} >Upper and Lower range points are assumed to be 1920px and 360px respectively.</td>
              </tr>
              <tr>
                <td style={{border:'none', width:'7%', verticalAlign:'top'}} >Note:</td>
                <td style={{border:'none'}} >Property and units can be any CSS format<br />(for example: lr.w('width:px',600,200).</td>
              </tr>
              <tr>
                <td style={{border:'none', width:'7%', verticalAlign:'top'}} >Note:</td>
                <td style={{border:'none'}} >Answer c can be mathematically operated on.<br />(for example: let d = c*3 + 12).</td>
              </tr>
              <tr>
                <td style={{border:'none', width:'7%', verticalAlign:'top'}} >Note:</td>
                <td style={{border:'none'}} >
                    The reported viewport width can be the device width, window width or a width set by LR. LR can set the viewport width
                    to the device width or the window width as needed.
                </td>
              </tr>
            </table>
          </td>
        </tr>      
      </table><br /><br />    
    </div>    
  */}
  {/* lr.ww(args) example  ********************************************************************************************************/} 
    <div id='lrww' style={{position:'relative'}}>  
      <button className="toTop" onClick={() => window.scrollTo(0,0)} style={{position:'absolute', left:'3.3%', top:'2%'}}><b>To Top</b></button>
      <table  className='exampTable'>
        <tr>
          <th colSpan="2" style={{fontSize:'2em', padding:'1%'}} >
            Example<br /><br />lr.ww(args)
          </th>
        </tr>
        <tr>
          <td style={{width:'16%', padding:'1%', fontSize:'1.5em', fontFamily:'monospace'}}>
            lr.ww(args)
          </td>
          <td style={{padding:'1%', verticalAlign:'middle', fontFamily:'monospace', fontSize:'1.25em'}}>
            lr.ww(args) uses the reported <span className='hlt_01'>&nbsp;window width&nbsp;</span> to establish the proper CSS return. 
            For this example assume the viewport width is the mobile default 
            width <span className='hlt_01'>&nbsp;(screen.availWidth)&nbsp;</span> of 360px.<br />There are 3 ways to return a value. <br /><br />
            expressions:<br />
            let a = lr.ww('line-height:%',180,90);<br />
            let b = lr.ww('%',180,90);<br /> 
            let c = lr.ww('',180,90);<br /><br />
            returns:<br />
            a = 'font-size:90%'&nbsp;(is string)<br />
            b = '90%'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(is string)<br />
            c = 90&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(is num)<br /><br />
            
            <table style={{border:'none', width:'100%'}} >
              <tr>
                <td style={{border:'none', width:'7%', verticalAlign:'top'}} >Note:</td>
                <td style={{border:'none'}} >Property and units can be any CSS format<br />(for example: lr.w('width:px',600,200).</td>
              </tr>
              <tr>
                <td style={{border:'none', width:'7%', verticalAlign:'top'}} >Note:</td>
                <td style={{border:'none'}} >Answer c can be mathematically operated on.<br />(for example: let d = c + 25).</td>
              </tr>
              <tr>
                <td style={{border:'none', width:'7%', verticalAlign:'top'}} >Note:</td>
                <td style={{border:'none'}} >
                    The reported viewport width can be the device width, window width or a width set by LR. LR can set the viewport width
                    to the device width or the window width as needed.
                </td>
              </tr>
            </table>
          </td>
        </tr>      
      </table><br /><br />    
    </div> 
  {/* lr.h(args) example  ********************************************************************************************************/}  
    <div id='lrh' style={{position:'relative'}}>  
      <button className="toTop" onClick={() => window.scrollTo(0,0)} style={{position:'absolute', left:'3.3%', top:'2%'}}><b>To Top</b></button>
      <table  className='exampTable'>
        <tr>
          <th colSpan="2" style={{fontSize:'2em', padding:'1%'}} >
            Example<br /><br />lr.h(args)
          </th>
        </tr>
        <tr>
          <td style={{width:'16%', padding:'1%', fontSize:'1.5em', fontFamily:'monospace'}}>
            lr.h(args)
          </td>
          <td style={{padding:'1%', verticalAlign:'middle', fontFamily:'monospace', fontSize:'1.25em'}}>
            Uses the reported <span className='hlt_01'>&nbsp;viewport height&nbsp;</span> to establish the proper CSS return. 
            There are 3 ways to return a value. For this example assume the viewport height is the desk top default height 
            (window.innerHeight) of 929px. Recall, window.innerHeight is the content or webpage height. This is the screen 
            height minus the window taskbar and overhead browser bar.<br /><br />
            expressions:<br />
            let a = lr.w('height:px',100,60);<br />
            let b = lr.w('px',100,60);<br /> 
            let c = lr.w('',100,60);<br /><br />
            returns:<br />
            a = 'height:100px'&nbsp;(is string)<br />
            b = '100px'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(is string)<br />
            c = 100&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(is num)<br /><br />
            
            <table style={{border:'none', width:'100%'}} >
              <tr>
                <td style={{border:'none', width:'7%', verticalAlign:'top'}} >Note:</td>
                <td style={{border:'none'}} >Property and units can be any CSS format<br />(for example: lr.w('block-size:px',450,125).</td>
              </tr>
              <tr>
                <td style={{border:'none', width:'7%', verticalAlign:'top'}} >Note:</td>
                <td style={{border:'none'}} >Answer c can be mathematically operated on.<br />(for example: let d = c + 50).</td>
              </tr>
              <tr>
                <td style={{border:'none', width:'7%', verticalAlign:'top'}} >Note:</td>
                <td style={{border:'none'}} >
                    The reported viewport height can be the device height, window height or a height set by LR. LR can set the viewport height
                    to the device height or the window height as needed.
                </td>
              </tr>
            </table>
          </td>
        </tr>      
      </table><br /><br />    
    </div> 
  {/* lr.wh(args) example  ********************************************************************************************************/}   
    <div id='lrwh' style={{position:'relative'}}>  
      <button className="toTop" onClick={() => window.scrollTo(0,0)} style={{position:'absolute', left:'3.3%', top:'2%'}}><b>To Top</b></button>
      <table  className='exampTable'>
        <tr>
          <th colSpan="2" style={{fontSize:'2em', padding:'1%'}} >
            Example<br /><br />lr.wh(args)
          </th>
        </tr>
        <tr>
          <td style={{width:'16%', padding:'1%', fontSize:'1.5em', fontFamily:'monospace'}}>
            lr.wh(args)
          </td>
          <td style={{padding:'1%', verticalAlign:'middle', fontFamily:'monospace', fontSize:'1.25em'}}>
            Uses the reported <span className='hlt_01'>&nbsp;viewport height&nbsp;</span> to establish the proper CSS return. 
            For this example assume the reported viewport height (window.innerHeight) is 800px.  
            The reported height will be used to calculate the proper response.<br /><br />
            Assume the Upper Range Point height is 929px and the Lower Range Point height is 560px.
            The URP height is also defaulted to the established default window height (window.innerheight) and 
            not an LR assigned viewport height. It is 929px in this case and reflects the w (for window) in 
            the lr.wh(args) method. The wh stands for window height, (meaning use the window height). <br /><br />
            
            <table style={{width:'100%', border:'none', textAlign:'center'}}>
            <tr>
              <th title='Upper Range Point Height'>URP Height</th><th>Reported Height</th><th title='Lower Range Point Height'>LRP Height</th>
            </tr>
            <tr>
              <td style={{borderColor:'lime'}}>929px</td>
              <td style={{borderColor:'lime'}}>800px</td>
              <td style={{borderColor:'lime'}}>560px</td>
            </tr>
            <tr>
              <td colSpan='3' style={{textAlign:'center'}}>
                Example LR expression is:<br />
                <span style={{fontSize:'1.25em', lineHeight:'160%', backgroundColor:'#004400', borderRadius:'0.3em'}}>&nbsp;lr.wh('line-height:%',180,90)&nbsp;</span>
              </td>
            </tr>
            <tr>
              <td colSpan='3' style={{textAlign:'center'}}>
                Return Value is:<br />
                <span style={{fontSize:'1.1em', lineHeight:'160%', backgroundColor:'#004400', borderRadius:'0.3em'}}>&nbsp;font-size:13.53px&nbsp;</span>
              </td>
            </tr>
            <tr>
              <td colSpan='3' style={{textAlign:'left', padding:'0.5em'}}>
                To explain: <br /> The return value is based on the lineation value at the reported ratio of 1.600. 
                The lineation itself is calculated by using the upper and lower range points of 0.484 and 1.555 respectively.
                Note: since the reported ratio is closer (is actually past) the LRP the return value is closer to 15 (or what the response
                would be if the reported ratio had been at the LRP of 1.555).<br />
                
              </td>
            </tr>
            </table>
            expressions:<br />
            let a = lr.ww('line-height:%',180,90);<br />
            let b = lr.ww('%',180,90);<br /> 
            let c = lr.ww('',180,90);<br /><br />
            returns:<br />
            a = 'font-size:180%'&nbsp;(is string)<br />
            b = '180%'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(is string)<br />
            c = 180&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(is num)<br /><br />
            
            <table style={{border:'none', width:'100%'}} >
              <tr>
                <td style={{border:'none', width:'7%', verticalAlign:'top'}} >Note:</td>
                <td style={{border:'none'}} >Property and units can be any CSS format<br />(for example: lr.w('width:px',600,200).</td>
              </tr>
              <tr>
                <td style={{border:'none', width:'7%', verticalAlign:'top'}} >Note:</td>
                <td style={{border:'none'}} >Answer c can be mathematically operated on.<br />(for example: let d = c*3 + 12).</td>
              </tr>
              <tr>
                <td style={{border:'none', width:'7%', verticalAlign:'top'}} >Note:</td>
                <td style={{border:'none'}} >
                    The reported viewport width can be the device width, window width or a width set by LR. LR can set the viewport width
                    to the device width or the window width as needed.
                </td>
              </tr>
            </table>
          </td>
        </tr>      
      </table><br /><br />    
    </div>  
    {/* lr.r(args) example  ********************************************************************************************************/}  
    <div id='lrr' style={{position:'relative'}}>  
      <button className="toTop" onClick={() => window.scrollTo(0,0)} style={{position:'absolute', left:'3.3%', top:'2%'}}><b>To Top</b></button>
      <table  className='exampTable'>
        <tr>
          <th colSpan="2" style={{fontSize:'2em', padding:'1%'}} >
            Example<br /><br />lr.r(args)
          </th>
        </tr>
        <tr>
          <td style={{width:'16%', padding:'1%', fontSize:'1.5em', fontFamily:'monospace'}}>
            lr.r(args)
          </td>
          <td style={{padding:'1%', verticalAlign:'middle', fontFamily:'monospace', fontSize:'1.25em'}}>
            Uses the reported <span className='hlt_01'>&nbsp;viewport height/width ratio&nbsp;</span> to establish the proper CSS return. 
            For this example assume the reported viewport width (screen.availWidth) is 768px and the reported height (window.innerHeight)
            is 1024px. Note: The reported viewport width and height are also typical defaults, that is, screen.availWidth and window.innerHeight. 
            By ratio, 1024px/768px is a ratio of 1.333. This ratio will be used to calculate the proper response.<br /><br />
            Now assume the Upper Range Point (URP) width is 1920px and the Lower Range Point (LRP) width is 360px. Furthermore, assume the Upper Range
            Point height is 929px and the Lower Range Point height is 560px.<br /><br />
            
          <table style={{width:'100%', border:'none', textAlign:'center'}}>
            <tr>
            <th title='Upper Range Point Ratio'>URP Ratio</th><th>Reported Ratio</th><th title='Lower Range Point Ratio'>LRP Ratio</th>
            </tr>
            
            <tr>
              <td style={{borderColor:'lime'}}>
                929px/1920px = 0.484
              </td>
              <td style={{borderColor:'lime'}}>
                1024px/768px = 1.333
              </td>
              <td style={{borderColor:'lime'}}>
                560px/360px = 1.555
              </td>
            </tr>
            <tr>
              <td colSpan='3' style={{textAlign:'center'}}>
                Example LR expression is:<br />
                <span style={{fontSize:'1.25em', lineHeight:'160%', backgroundColor:'#004400', borderRadius:'0.3em'}}>&nbsp;lr.r('font-size:em',4,2)&nbsp;</span>
              </td>
            </tr>
            <tr>
              <td colSpan='3' style={{textAlign:'center'}}>
                Return Value is:<br />
                <span style={{fontSize:'1.1em', lineHeight:'160%', backgroundColor:'#004400', borderRadius:'0.3em'}}>&nbsp;font-size:2.41em&nbsp;</span>
              </td>
            </tr>
            <tr>
              <td colSpan='3' style={{textAlign:'left', padding:'0.5em'}}>
                To explain: <br /> The return value is based on the lineation value at the reported ratio of 1.333. 
                The lineation itself is calculated by using the upper and lower range points of 0.484 and 1.555 respectively.
                Note: since the reported ratio is closer to the LRP the return value is closer to 2 (or what the response
                would be if the reported ratio had been at the LRP of 1.555).<br />
              </td>
            </tr>
          </table>
            
            There are 3 ways to return a value. <br /><br />
            expressions:<br />
            let a = lr.w('font-size:em',4,2);<br />
            let b = lr.w('px',4,2);<br /> 
            let c = lr.w('',4,2);<br /><br />
            returns:<br />
            a = 'font-size:2.41em'&nbsp;(is string)<br />
            b = '2.41em'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(is string)<br />
            c = &nbsp;2.41&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(is num)<br /><br />
            
            <table style={{border:'none', width:'100%'}} >
              <tr>
                <td style={{border:'none', width:'7%', verticalAlign:'top'}} >Note:</td>
                <td style={{border:'none'}} >Property and units can be any CSS format<br />(for example: lr.w('block-size:px',450,125).</td>
              </tr>
              <tr>
                <td style={{border:'none', width:'7%', verticalAlign:'top'}} >Note:</td>
                <td style={{border:'none'}} >Answer c can be mathematically operated on.<br />(for example: let d = c + 50).</td>
              </tr>
              <tr>
                <td style={{border:'none', width:'7%', verticalAlign:'top'}} >Note:</td>
                <td style={{border:'none'}} >
                    The reported viewport height can be the device height, window height or a height set by LR. LR can set the viewport height
                    to the device height or the window height as needed.
                </td>
              </tr>
            </table>
          </td>
        </tr>      
      </table><br /><br />    
    </div>
    {/* lr.wr(args) example  ********************************************************************************************************/}  
    <div id='lrwr' style={{position:'relative'}}>  
      <button className="toTop" onClick={() => window.scrollTo(0,0)} style={{position:'absolute', left:'3.3%', top:'2%'}}><b>To Top</b></button>
      <table  className='exampTable'>
        <tr>
          <th colSpan="2" style={{fontSize:'2em', padding:'1%'}} >
            Example<br /><br />lr.wr(args)
          </th>
        </tr>
        <tr>
          <td style={{width:'16%', padding:'1%', fontSize:'1.5em', fontFamily:'monospace'}}>
            lr.wr(args)
          </td>
          <td style={{padding:'1%', verticalAlign:'middle', fontFamily:'monospace', fontSize:'1.25em'}}>
            Uses the reported <span className='hlt_01'>&nbsp;window height/width ratio&nbsp;</span> to establish the proper CSS return. 
            For this example assume the reported window width (screen.availWidth) is 601px and the reported height (window.innerHeight)
            is 962px. By ratio, 962px/601px is a ratio of 1.600. This ratio will be used to calculate the proper response.<br /><br />
            Now assume the Upper Range Point (URP) width is 1920px and the Lower Range Point (LRP) width is 360px. Furthermore, assume the Upper Range
            Point height is 929px and the Lower Range Point height is 560px.<br /><br />
            
          <table style={{width:'100%', border:'none', textAlign:'center'}}>
            <tr>
              <th title='Upper Range Point Ratio'>URP Ratio</th><th>Reported Ratio</th><th title='Lower Range Point Ratio'>LRP Ratio</th>
            </tr>
            <tr>
              <td style={{borderColor:'lime'}}>929px/1920px = 0.484</td>
              <td style={{borderColor:'lime'}}>962px/601px = 1.600</td>
              <td style={{borderColor:'lime'}}>560px/360px = 1.555</td>
            </tr>
            <tr>
              <td colSpan='3' style={{textAlign:'center'}}>
                Example LR expression is:<br />
                <span style={{fontSize:'1.25em', lineHeight:'160%', backgroundColor:'#004400', borderRadius:'0.3em'}}>&nbsp;lr.r('width:px',50,15)&nbsp;</span>
              </td>
            </tr>
            <tr>
              <td colSpan='3' style={{textAlign:'center'}}>
                Return Value is:<br />
                <span style={{fontSize:'1.1em', lineHeight:'160%', backgroundColor:'#004400', borderRadius:'0.3em'}}>&nbsp;font-size:13.53px&nbsp;</span>
              </td>
            </tr>
            <tr>
              <td colSpan='3' style={{textAlign:'left', padding:'0.5em'}}>
                To explain: <br /> The return value is based on the lineation value at the reported ratio of 1.600. 
                The lineation itself is calculated by using the upper and lower range points of 0.484 and 1.555 respectively.
                Note: since the reported ratio is closer (is actually past) the LRP the return value is closer to 15 (or what the response
                would be if the reported ratio had been at the LRP of 1.555).<br />
                
              </td>
            </tr>
            
          </table>
            
            There are 3 ways to return a value. <br /><br />
            expressions:<br />
            let a = lr.w('width:px',50,15);<br />
            let b = lr.w('px',50,15);<br /> 
            let c = lr.w('',50,15);<br /><br />
            returns:<br />
            a = 'width:13.53px'&nbsp;(is string)<br />
            b = '13.53px'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(is string)<br />
            c = &nbsp;13.53&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(is num)<br /><br />
            
            <table style={{border:'none', width:'100%'}} >
              <tr>
                <td style={{border:'none', width:'7%', verticalAlign:'top'}} >Note:</td>
                <td style={{border:'none'}} >Property and units can be any CSS format<br />(for example: lr.w('block-size:px',450,125).</td>
              </tr>
              <tr>
                <td style={{border:'none', width:'7%', verticalAlign:'top'}} >Note:</td>
                <td style={{border:'none'}} >Answer c can be mathematically operated on.<br />(for example: let d = c + 50).</td>
              </tr>
              <tr>
                <td style={{border:'none', width:'7%', verticalAlign:'top'}} >Note:</td>
                <td style={{border:'none'}} >
                    The reported viewport height can be the device height, window height or a height set by LR. LR can set the viewport height
                    to the device height or the window height as needed.
                </td>
              </tr>
            </table>
          </td>
        </tr>      
      </table><br /><br />    
    </div>
     
     
     
     
     
     
    
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
            LR short form method examples
          </th>
        </tr>
        <tr>
          <td style={{width:'16%', padding:'1%', fontSize:'1.5em', fontFamily:'monospace'}}>
            <Link to='/examples' style={{textDecoration:'none'}}><b>lr.w(args)<sup style={{color:'red'}}><b>*</b></sup></b></Link>
          </td>
          <td style={{padding:'1%', verticalAlign:'top'}}>
            Uses the reported viewport<sup style={{color:'red'}}><b>**</b></sup> width to establish the proper CSS return.
          </td>
        </tr>  
        <tr>
          <td style={{padding:'1%', verticalAlign:'top', fontSize:'1.5em', fontFamily:'monospace'}}>
            <a href="#" style={{textDecoration:'none'}}><b>lr.ww(args)</b></a>
          </td>
          <td style={{padding:'1%', verticalAlign:'top'}}>
            Uses the reported window<sup style={{color:'red'}}><b>**</b></sup> width to establish the proper CSS return.
          </td>
        </tr> 
        <tr>
          <td style={{width:'12%', padding:'1%', fontSize:'1.5em', fontFamily:'monospace'}}>
            <a href="#" style={{textDecoration:'none'}}><b>lr.h(args)</b></a>
          </td>
          <td style={{padding:'1%', verticalAlign:'top'}}>
            Uses the reported viewport<sup style={{color:'red'}}><b>**</b></sup> height to establish the proper CSS return.
          </td>
        </tr>
        <tr>
          <td style={{width:'12%', padding:'1%', fontSize:'1.5em', fontFamily:'monospace'}}>
            <a href="#" style={{textDecoration:'none',}}><b>lr.wh(args)</b></a>
          </td>
          <td style={{padding:'1%', verticalAlign:'top'}}>
            Uses the reported window<sup style={{color:'red'}}><b>**</b></sup> height to establish the proper CSS return.
          </td>
        </tr> 
        <tr>
          <td style={{width:'12%', padding:'1%', fontSize:'1.5em', fontFamily:'monospace'}}>
            <a href="#" style={{textDecoration:'none'}}><b>lr.r(args)</b></a>
          </td>
          <td style={{padding:'1%', verticalAlign:'top'}}>
            Uses the reported viewport<sup style={{color:'red'}}><b>**</b></sup> height/width ratio to establish the proper CSS return.
          </td>
        </tr>
        <tr>
          <td style={{width:'12%', padding:'1%', fontSize:'1.5em', fontFamily:'monospace'}}>
            <a href="#" style={{textDecoration:'none'}}><b>lr.wr(args)</b></a>
          </td>
          <td style={{padding:'1%', verticalAlign:'top'}}>
            Uses the reported window<sup style={{color:'red'}}><b>**</b></sup> height/width ratio to establish the proper CSS return.
          </td>
        </tr>
        <tr>
          <td colSpan="2" style={{textAlign:'left', padding:'1%'}}>
            <span style={{color:'red', fontSize:'1.5em'}}><b>*</b></span>
            <Link to="#" style={{textDecoration:'none'}}>
              lr.w(args) will likely be your most used LR method.<br />
              Select this link for an in depth discussion and explanation about using these methods
            </Link>
          </td>
        </tr>
        <tr>
          <td colSpan="2" style={{textAlign:'left', padding:'1%'}}>
            <sup style={{color:'red', fontSize:'1.5em'}}><b>**</b></sup><a href="#">About device, window, and viewport widths and their differences.</a>
          </td>
        </tr>
      </table>
      <br /><br />
      
      <table style={{ border:'2px solid black', 
                    borderRadius:'.5em',
                    margin:'0 2.5% 0 2.5%',
                    width:'95%', 
                    lineHeight:'120%', 
                    backgroundColor:'lightcyan', 
                    fontFamily:'Arial Rounded MT Bold',
                    padding:'0 0.5% 1.0% 0.5%'}}>
        <tr>
          <th colSpan="2" style={{fontSize:'2em', padding:'1%'}}>
            <div style={{marginBottom:'1%'}}>LR Methods returning HTML or CSS snippets</div>
            <div style={{ display:'inline-block',
                          fontSize:'0.4em', 
                          color:'blue', 
                          backgroundColor:'#ffd480',
                          padding:'0.3% 1%',
                          border:'1px solid black',
                          borderRadius:'0.5em'}}>NOTE: The html and css methods are functionally the same. Two different names are for user clarity.</div>
          </th>
        </tr>
        <tr>
          <td style={{width:'24%', padding:'2% 1% 2% 1%', fontSize:'1.5em', fontFamily:'monospace'}}>
            <a href="#" style={{textDecoration:'none'}}><b>lr.whtml(args)<span style={{lineHeight:'150%'}}><br /></span>lr.wcss(args)</b></a>
          </td>
          <td style={{padding:'1%', verticalAlign:'top'}}>
            Uses the reported viewport<sup style={{color:'red'}}><b>*</b></sup> width to establish the proper HTML or CSS snippet return.
          </td>
        </tr>  
        <tr>
          <td style={{padding:'2% 1% 2% 1%', verticalAlign:'top', fontSize:'1.5em', fontFamily:'monospace'}}>
            <a href="#" style={{textDecoration:'none'}}><b>lr.wwhtml(args)<span style={{lineHeight:'150%'}}><br /></span>lr.wwcss(args)</b></a>
          </td>
          <td style={{padding:'1%', verticalAlign:'top'}}>
            Uses the reported window<sup style={{color:'red'}}><b>*</b></sup> width to establish the proper HTML or CSS snippet return
          </td>
        </tr> 
        <tr>
          <td style={{width:'12%', padding:'1%', fontSize:'1.5em', fontFamily:'monospace'}}>
            <a href="#" style={{textDecoration:'none'}}><b>lr.hhtml(args)<span style={{lineHeight:'150%'}}><br /></span>lr.wcss(args)</b></a>
          </td>
          <td style={{padding:'2% 1% 2% 1%', verticalAlign:'top'}}>
            Uses the reported viewport<sup style={{color:'red'}}><b>*</b></sup> height to establish the proper HTML or CSS snippet return
          </td>
        </tr>
        <tr>
          <td style={{width:'12%', padding:'1%', fontSize:'1.5em', fontFamily:'monospace'}}>
            <a href="#" style={{textDecoration:'none'}}><b>lr.whhtml(args)<span style={{lineHeight:'150%'}}><br /></span>lr.whcss(args)</b></a>
          </td>
          <td style={{padding:'2% 1% 2% 1%', verticalAlign:'top'}}>
            Uses the reported window<sup style={{color:'red'}}><b>*</b></sup> height to establish the proper HTML or CSS snippet return
          </td>
        </tr> 
        <tr>
          <td style={{width:'12%', padding:'1%', fontSize:'1.5em', fontFamily:'monospace'}}>
            <a href="#" style={{textDecoration:'none'}}><b>lr.rhtml(args)<span style={{lineHeight:'150%'}}><br /></span>lr.rcss(args)</b></a>
          </td>
          <td style={{padding:'2% 1% 2% 1%', verticalAlign:'top'}}>
            Uses the reported viewport<sup style={{color:'red'}}><b>*</b></sup> height/width ratio to establish the proper HTML or CSS snippet return
          </td>
        </tr>
        <tr>
          <td style={{width:'12%', padding:'1%', fontSize:'1.5em', fontFamily:'monospace'}}>
            <a href="#" style={{textDecoration:'none'}}><b>lr.wrhtml(args)<span style={{lineHeight:'150%'}}><br /></span>lr.wrcss(args)</b></a>
          </td>
          <td style={{padding:'2% 1% 2% 1%', verticalAlign:'top'}}>
            Uses the reported window<sup style={{color:'red'}}><b>*</b></sup> height/width ratio to establish the proper HTML or CSS snippet return
          </td>
        </tr>  
        <tr>
          <td colSpan="2" style={{textAlign:'center'}}>
            <sup style={{color:'red', fontSize:'1.5em'}}><b>*</b></sup><a href="#">About device, window, and viewport widths</a>
          </td>
        </tr>
      </table>
    
    </div> 
    
      
    </React.StrictMode>          
          
);
};

export default Examples;