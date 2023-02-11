import React from 'react';
import './common-css.css';
import { Outlet, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import {lr} from '../../lr/lr-single.js';
import graph_11 from '../../images/graph_11.jpg';



const LRwr = () => {
  
  let onOff_01 = 0;
  function showHideGraph_01(){
    if(onOff_01 === 0){ document.getElementById('showHide_01').style.display = "inline"; onOff_01 = 1;} else
    { document.getElementById('showHide_01').style.display = "none"; onOff_01 = 0;} 
  }  
  
  let onOff_02 = 0;
  function showHideGraph_02(){
    if(onOff_02 === 0){ document.getElementById('showHide_02').style.display = "inline"; onOff_02 = 1;} else
    { document.getElementById('showHide_02').style.display = "none"; onOff_02 = 0;} 
  } 
  
  return (
    <React.StrictMode>
    {/*comment to eliminate error flags elsewhere;*/}<span style={{}}></span>
      
    {/* lr.w(args) example  ********************************************************************************************************/}      
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
              <td colSpan='3' style={{textAlign:'center', padding:'0.75% 0'}}>
                Example LR expression is:<br /><br />
                <span className='expression'>
                  &nbsp;lr.wr('width:%',60,23)&nbsp;
                </span><br /><br />
              </td>
            </tr>
            <tr>
              <td colSpan='3' style={{textAlign:'center', padding:'0.75% 0'}}>
                Return Value is:<br /><br />
                <span className='expressionValue'>
                  &nbsp;width:10.34%&nbsp;
                </span><br /><br />
              </td>
            </tr>
            <tr>
              <td colSpan='3' style={{}}>
              <div><button className="toTop" onClick={showHideGraph_01} style={{}}><b>Show/Hide Graph</b></button></div>
                <div id='showHide_01' style={{display:'none'}}>
                  <img src={graph_11} alt='is graph_11.jpg' style={{border:'2px solid black', width:'94%'}}></img>
                  <div style={{textAlign:'left', padding:'0 3%'}}>The device here has a reported height/width ratio of 1.333 (green). 
                                                                  The return value is 'width:28.32%'. 
                  </div>
                </div>  
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
        </tr><br /><br />      
      </table> 
      <button className="toTop" onClick={() => window.scrollTo(0,0)} style={{position:'absolute', left:'3.3%', bottom:'1%'}}><b>To Top</b></button>
    </div>
    </React.StrictMode>  
  );    
};

export default LRwr;