import React from 'react';
import './common-css.css';
import { Outlet, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import {lr} from '../../lr/lr-single.js';



const LRr = () => {
  
  console.log("Who Goes There?");
  
  return (
    <React.StrictMode>
    {/*comment to eliminate error flags elsewhere;*/}<span style={{}}></span>
      
    {/* lr.w(args) example  ********************************************************************************************************/}      
      <div id='lrw' style={{position:'relative', margin:'0 auto'}}>  
        <button className="toTop" onClick={() => window.scrollTo(0,0)} style={{position:'absolute', left:'3.3%', top:'1%'}}><b>To Top</b></button>
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
            is 1024px. By ratio, 1024px/768px is a ratio of 1.333. This ratio will be used to calculate the proper response.<br /><br />
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
                The lineation itself is calculated by using the upper and lower range point ratios of 0.484 and 1.555 respectively.
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
                    The reported viewport width or height can be the device height, window width or height or a width or height set by LR. 
                    LR can set the viewport width or height to the device width or height or the window width or height as needed.
                </td>
              </tr>
            </table>
          </td>
        </tr><br /><br />       
      </table>  
      <button className="toTop" onClick={() => window.scrollTo(0,0)} style={{position:'absolute', left:'3.3%', bottom:'1%'}}><b>To Top</b></button>
      </div>
    </React.StrictMode>  
  );    
};

export default LRr;