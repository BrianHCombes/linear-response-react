import React from 'react';
import './common-css.css';
import { Outlet, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import {lr} from '../../lr/lr-single.js';



const LRww = () => {
  
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
              Example<br /><br />lr.ww(args)
            </th>
          </tr>
          <tr>
            <td style={{width:'16%', padding:'1%', fontSize:'1.5em', fontFamily:'monospace'}}>
              lr.ww(args)
            </td>
            <td style={{padding:'1%', verticalAlign:'middle', fontFamily:'monospace', fontSize:'1.25em', textAlign:'left'}}>
              lr.ww(args) uses the reported <span className='hlt_01'>&nbsp;window width&nbsp;</span> to establish the proper CSS return. 
              For this example assume the reported window width (screen.availWidth) is 1536px. Furthermore, assume the URP (Upper
              Range Point) is the default of 1920px which will correlate to the 180% in the LR expression and the LRP (Lower Range Point) 
              is the default of 360px which will correlate to the 90% in the LR expression.<br /><br /> 
              Note: <span className='hlt_01'>&nbsp;viewport width and window width&nbsp;</span> will often be the same value. They will
              only differ if the viewport width is assigned a value other than the window width. When they differ, lr.w(args) always 
              uses the reported viewport width and lr.ww(args) always uses the window width.<br />
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
                    1536px
                  </td>
                  <td style={{borderColor:'lime'}}>
                    360px
                  </td>
                </tr>
                <tr>
                  <td colSpan='3' style={{textAlign:'center'}}>
                    Example LR expression is:<br />
                    <span style={{fontSize:'1.25em', 
                                  padding:'0.5% 0', 
                                  lineHeight:'160%', 
                                  backgroundColor:'#004400', 
                                  borderRadius:'0.3em'}}>
                      &nbsp;lr.w('line-height:%',180,90)&nbsp;
                    </span>
                  </td>
                </tr>
                <tr>
                  <td colSpan='3' style={{textAlign:'center'}}>
                    Return Value is:<br />
                    <span style={{fontSize:'1.1em', padding:'0.5% 0', lineHeight:'160%', backgroundColor:'#004400', borderRadius:'0.3em'}}>&nbsp;line-height:157.84%&nbsp;</span>
                  </td>
                </tr>
                <tr>
                  <td colSpan='3' style={{textAlign:'left', padding:'0.5em'}}>
                    To explain: <br /> The return value of 157.84% is based on the lineation value at the reported width of 1536px. 
                    The lineation itself is calculated by using the upper and lower range points of 1920px and 360px respectively.
                    Consequently, at 1920px the return is 180% and at 360px the return is 90%. Thus, at a reported width of 1536px 
                    the return value will be 157.84%.<br />
                  </td>
                </tr>
              </table><br />
              
              This example can have other expression formats:<br />
              let a = lr.w('line-height:%',180,90);<br />
              let b = lr.w('%',180,90);<br /> 
              let c = lr.w('',180,90);<br /><br />
              returns:<br />
              a = 'line-height:157.84%'&nbsp;(is string)<br />
              b = '157.84%'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(is string)<br />
              c = &nbsp;157.84&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(is num)<br /><br />

              <table style={{border:'none', width:'100%'}} >
                <tr>
                  <td style={{border:'none', width:'7%', verticalAlign:'top'}} >Note:</td>
                  <td style={{border:'none'}} >Upper and Lower range points are assumed to be 1920px and 360px respectively.</td>
                </tr>
                <tr>
                  <td style={{border:'none', width:'7%', verticalAlign:'top'}} >Note:</td>
                  <td style={{border:'none'}} >Property and units can be any CSS format<br />(for example: lr.w('margin-top:px',20,10).</td>
                </tr>
                <tr>
                  <td style={{border:'none', width:'7%', verticalAlign:'top'}} >Note:</td>
                  <td style={{border:'none'}} >Answer c can be mathematically operated on.<br />(for example: let d = c + 12).</td>
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

export default LRww;