import React from 'react';
import './common-css.css';
import { Outlet, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import {lr} from '../../lr/lr-single.js';



const LRh = () => {
  
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
              Example<br /><br />lr.h(args)
            </th>
          </tr>
          <tr>
            <td style={{width: lr.w('%',16,22), padding:'1%', fontSize: lr.w('em',1.5,1.25), fontFamily:'monospace', display: lr.wcss('table-cell',850,'none')}}>
              lr.h(args)
            </td>
            <td style={{padding:'1%', verticalAlign:'middle', fontFamily:'monospace', fontSize:'1.25em', textAlign:'left'}}>
              lr.h(args) uses the reported <span className='hlt_01'>&nbsp;viewport height&nbsp;</span> to establish the proper CSS return. 
              For this example assume the reported viewport height (window.innerHeight) is 800px. Furthermore, assume the URP (Upper
              Range Point) is the default of 929px which will correlate to the 100px in the LR expression and the LRP (Lower Range Point) 
              is the default of 560px which will correlate to the 40px in the LR expression.<br />
              Here is the example with details:<br /><br />
              
              <table style={{width:'100%', border:'none', textAlign:'center'}}>
                <tr>
                <th title='Upper Range Point'>URP</th><th title='Reported height from a hypothetical device'>Reported Height</th><th title='Lower Range Point'>LRP</th>
                </tr>

                <tr>
                  <td style={{borderColor:'lime'}}>
                    929px 
                  </td>
                  <td style={{borderColor:'lime'}}>
                    800px
                  </td>
                  <td style={{borderColor:'lime'}}>
                    560px
                  </td>
                </tr>
                <tr>
                  <td colSpan='3' style={{textAlign:'center', padding:'0.75% 0'}}>
                    Example LR expression is:<br />
                    <span className='expression'>
                      &nbsp;lr.w('height:px',100,40)&nbsp;
                    </span>
                  </td>
                </tr>
                <tr>
                  <td colSpan='3' style={{textAlign:'center', padding:'0.75% 0'}}>
                    Return Value is:<br />
                    <span className='expressionValue'>
                      &nbsp;height:79.02px&nbsp;
                    </span>
                  </td>
                </tr>
                <tr>
                  <td colSpan='3' style={{textAlign:'left', padding:'0.5em'}}>
                    To explain: <br /> The return value of 79.02px is based on the lineation value at the reported height of 800px. 
                    The lineation itself is calculated by using the upper and lower range points of 929px and 560px respectively.
                    Consequently, at 929px the return is 100px and at 560px the return is 40px. Thus, at a reported height of 800px 
                    the return value will be 79.02px. Note: Your device will round it to 79px.<br />
                  </td>
                </tr>
              </table><br />
              
              This example can have other expression formats:<br />
              let a = lr.w('height:px',100,40);<br />
              let b = lr.w('px',100,40);<br /> 
              let c = lr.w('',100,40);<br /><br />
              returns:<br />
              a = 'height:79.02px'&nbsp;(is string)<br />
              b = '79.02px'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(is string)<br />
              c = &nbsp;79.02&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(is num)<br /><br />

              <table style={{border:'none', width:'100%'}} >
                <tr>
                  <td style={{border:'none', width:'7%', verticalAlign:'top'}} >Note:</td>
                  <td style={{border:'none'}} >Upper and Lower range points are assumed to be 929px and 560px respectively.</td>
                </tr>
                <tr>
                  <td style={{border:'none', width:'7%', verticalAlign:'top'}} >Note:</td>
                  <td style={{border:'none'}} >Property and units can be any CSS format<br />(for example: lr.w('height:%',60,95).</td>
                </tr>
                <tr>
                  <td style={{border:'none', width:'7%', verticalAlign:'top'}} >Note:</td>
                  <td style={{border:'none'}} >Answer c can be mathematically operated on.<br />(for example: let d = c*2 - 20).</td>
                </tr>
                <tr>
                  <td style={{border:'none', width:'7%', verticalAlign:'top'}} >Note:</td>
                  <td style={{border:'none'}} >
                      The reported viewport height can be the device height, window height or a height set by LR. LR can set the viewport height
                      to the device height or the window height as needed. window.innerHeight is considered default if LR has not been used to
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

export default LRh;