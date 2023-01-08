import React from 'react';
import './LRw.css';
import { Outlet, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import {lr} from '../../lr/lr-single.js';



const LRw = () => {
  
  console.log("Who Goes There?");
  
  return (
    <React.StrictMode>
    {/*comment to eliminate error flags elsewhere;*/}<span style={{}}></span>
      
    {/* lr.w(args) example  ********************************************************************************************************/}      
      <div id='lrw' style={{position:'relative'}}>  
        <button className="toTop" onClick={() => window.scrollTo(0,0)} style={{position:'absolute', left:'3.3%', top:'2%'}}><b>To Top</b></button>
        <table  className='exampTable'>
          <tr>
            <th colspan="2" style={{fontSize:'2em', padding:'1%'}} >
              Example<br /><br />lr.w(args)
            </th>
          </tr>
          <tr>
            <td style={{width:'16%', padding:'1%', fontSize:'1.5em', fontFamily:'monospace'}}>
              lr.w(args)
            </td>
            <td style={{padding:'1%', verticalAlign:'middle', fontFamily:'monospace', fontSize:'1.25em', textAlign:'left'}}>
              lr.w(args) uses the reported <span className='hlt_01'>&nbsp;viewport width&nbsp;</span> to establish the proper CSS return. 
              For this example assume the reported viewport width (screen.availWidth) is 1366px. Furthermore, assume the URP (Upper
              Range Point) is the default of 1920px and the LRP (Lower Range Point) is the default of 360px.<br />
              Here is the example with details:<br /><br />
              
              <table style={{width:'100%', border:'none', textAlign:'center'}}>
                <tr>
                <th title='Upper Range Point'>URP</th><th>Reported Width</th><th title='Lower Range Point'>LRP</th>
                </tr>

                <tr>
                  <td style={{borderColor:'lime'}}>
                    1920px 
                  </td>
                  <td style={{borderColor:'lime'}}>
                    1366px
                  </td>
                  <td style={{borderColor:'lime'}}>
                    360px
                  </td>
                </tr>
                <tr>
                  <td colSpan='3' style={{textAlign:'center'}}>
                    Example LR expression is:<br />
                    <span style={{fontSize:'1.25em', lineHeight:'160%', backgroundColor:'#004400', borderRadius:'0.3em'}}>&nbsp;lr.w('font-size:px',30px,12px)&nbsp;</span>
                  </td>
                </tr>
                <tr>
                  <td colSpan='3' style={{textAlign:'center'}}>
                    Return Value is:<br />
                    <span style={{fontSize:'1.1em', lineHeight:'160%', backgroundColor:'#004400', borderRadius:'0.3em'}}>&nbsp;font-size:23.61px&nbsp;</span>
                  </td>
                </tr>
                <tr>
                  <td colSpan='3' style={{textAlign:'left', padding:'0.5em'}}>
                    To explain: <br /> The return value of 23.61px is based on the lineation value at the reported width of 1366px. 
                    The lineation itself is calculated by using the upper and lower range points of 1920px and 360px respectively.
                    Thus, at a width of 1366px the return value will be 23.61px. Note: Your device will round up to 24px.<br />
                  </td>
                </tr>
              </table><br />
              
              This example can other expressions:<br />
              let a = lr.w('font-size:px',30,12);<br />
              let b = lr.w('px',30,12);<br /> 
              let c = lr.w('',30,12);<br /><br />
              returns:<br />
              a = 'font-size:23.61px'&nbsp;(is string)<br />
              b = '23.61px'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(is string)<br />
              c = &nbsp;23.61&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(is num)<br /><br />

              <table style={{border:'none', width:'100%'}} >
                <tr>
                  <td style={{border:'none', width:'7%', verticalAlign:'top'}} >Note:</td>
                  <td style={{border:'none'}} >Upper and Lower range points are assumed to be 1920px and 360px respectively.</td>
                </tr>
                <tr>
                  <td style={{border:'none', width:'7%', verticalAlign:'top'}} >Note:</td>
                  <td style={{border:'none'}} >Property and units can be any CSS format<br />(for example: lr.w('width:%',60,95).</td>
                </tr>
                <tr>
                  <td style={{border:'none', width:'7%', verticalAlign:'top'}} >Note:</td>
                  <td style={{border:'none'}} >Answer c can be mathematically operated on.<br />(for example: let d = c*3 + 12).</td>
                </tr>
                <tr>
                  <td style={{border:'none', width:'7%', verticalAlign:'top'}} >Note:</td>
                  <td style={{border:'none'}} >
                      The reported viewport width can be the device width, window width or a width set by LR. LR can set the viewport width
                      to the device width or the window width as needed. screen.availWidth is considered default if LR has not been used to
                      assign a different value.
                  </td>
                </tr>
              </table>
            </td>
          </tr>      
        </table><br /><br />    
      </div>
    </React.StrictMode>  
  );    
};

export default LRw;