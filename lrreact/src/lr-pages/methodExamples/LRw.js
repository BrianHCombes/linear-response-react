import React from 'react';
import './common-css.css';
import { Outlet, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import {lr} from '../../lr/lr-single.js';



const LRw = () => {
  
  console.log("Who Goes There?");
  
  return (
    <React.StrictMode>
    {/*comment to eliminate error flags elsewhere;*/}<span style={{}}></span>
      
    {/* lr.w(args) example  ********************************************************************************************************/}      
      <div id='lrw' style={{position:'relative', margin:'0 auto'}}>  
        <button className="toTop" onClick={() => window.scrollTo(0,0)} style={{position:'absolute', left:'3.3%', top:'1%'}}><b>To Top</b></button>
        <table  className='exampTable'>
          <tr>
            <th colspan="2" style={{fontSize:'2em', padding:'1%'}} >
              Example<br /><br />lr.w(args)
            </th>
          </tr>
          <tr>
            <td style={{width: lr.w('%',16,22), padding:'1%', fontSize: lr.w('em',1.5,1.25), fontFamily:'monospace', display: lr.wcss('table-cell',850,'none')}}>
              lr.w(args)
            </td>
            <td className='descText'  style={{padding:'1%', textAlign:'left', fontSize:lr.w('em',1.25,1)}}>
              lr.w(args) uses the reported <span className='hlt_01'>&nbsp;viewport width&nbsp;</span> to establish the proper CSS return. 
              For this example assume the reported viewport width (screen.availWidth) is 1366px. Furthermore, assume the URP (Upper
              Range Point) is the default of 1920px which will correlate to the 30px in the LR expression and the LRP (Lower Range Point) 
              is the default of 360px which will correlate to the 12px in the LR expression.<br />
              Here is the example with details:<br /><br />
              
              <table style={{width:'100%', border:'none', textAlign:'center'}}>
                <tr>
                <th title='Upper Range Point'>URP</th><th title='Reported width from a hypothetical device'>Reported Width</th><th title='Lower Range Point'>LRP</th>
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
                  <td colSpan='3' style={{textAlign:'center', padding:'0.75% 0'}}>
                    Example LR expression is:<br />
                    <span className='expression'>
                      &nbsp;lr.w('font-size:px',30,12)&nbsp;
                    </span>
                  </td>
                </tr>
                <tr>
                  <td colSpan='3' style={{textAlign:'center', padding:'0.75% 0'}}>
                    Return Value is:<br />
                    <span className='expressionValue'>
                      &nbsp;font-size:23.61px&nbsp;
                    </span>
                  </td>
                </tr>
                <tr>
                  <td colSpan='3' style={{textAlign:'left', padding:'0.5em'}}>
                    To explain: <br /> The return value of 23.61px is based on the lineation value at the reported width of 1366px. 
                    The lineation itself is calculated by using the upper and lower range points of 1920px and 360px respectively.
                    Consequently, at 1920px the return is 30px and at 360px the return is 12px. Thus, at a reported width of 1366px 
                    the return value will be 23.61px. Note: Your device will round it up to 24px.<br />
                  </td>
                </tr>
              </table><br />
              
              This example can have other expression formats:<br />
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
          </tr>  <br /><br />       
        </table>   
      <button className="toTop" onClick={() => window.scrollTo(0,0)} style={{position:'absolute', left:'3.3%', bottom:'1%'}}><b>To Top</b></button>
      </div>
    </React.StrictMode>  
  );    
};

export default LRw;