import React from 'react';
import './common-css.css';
import { Outlet, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import {lr} from '../../lr/lr-single.js';
import graph_09 from '../../images/graph_09.jpg';



const LRwh = () => {
  
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
      <div id='lrw' style={{position:'relative', margin:'0 auto'}}>  
        <table  className='exampTable' style={{position:'relative', margin:'0 auto'}}>
        <button className="toTop" onClick={() => window.scrollTo(0,0)} style={{position:'absolute', left:'0.5%', top:'1%'}}><b>To Top</b></button>
          <tr>
            <th colspan="2" style={{fontSize:'2em', padding:'1%'}} >
              Example<br /><br />lr.wh(args)
            </th>
          </tr>
          <tr>
            
            <td style={{width: lr.w('%',16,22), padding:'1%', fontSize: lr.w('em',1.5,1.25), fontFamily:'monospace', display: lr.wcss('table-cell',850,'none')}}>
              lr.wh(args)
            </td>
  
            <td style={{padding:'1%', verticalAlign:'middle', fontFamily:'monospace', fontSize:'1.25em', textAlign:'left'}}>
              lr.wh(args) uses the reported <span className='hlt_01'>&nbsp;window height&nbsp;</span> to establish the proper CSS return. 
              For this example assume the reported window height (screen.innerHeight) is 915px. Furthermore, assume 
              the <span title='Upper Range Point' style={{color:'yellow'}}><i>URP</i></span> is the default of 1280px which will correlate
              to the 75px in the LR expression and the <span title='Lower Range Point' style={{color:'yellow'}}><i>LRP</i></span> is 
              the default of 800px which will correlate to the 25px in the LR expression.<br /><br /> 
              Note: <span className='hlt_01'>&nbsp;viewport height and window height&nbsp;</span> will often be the same value. They will
              only differ if the viewport height is assigned a value other than the window height. When they differ, lr.h(args) always 
              uses the reported viewport height and lr.wh(args) always uses the window width.<br />
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
                  <td colSpan='3' style={{textAlign:'center', padding:'0.75% 0'}}>
                    Example LR expression is:<br /><br />
                    <span className='expression'>
                      &nbsp;lr.w('height:%',75,25)&nbsp;
                    </span><br /><br />
                  </td>
                </tr>
                <tr>
                  <td colSpan='3' style={{textAlign:'center', padding:'0.75% 0'}}>
                    Return Value is:<br /><br />
                    <span className='expressionValue'>
                      &nbsp;height:36.98px&nbsp;
                    </span><br /><br />
                  </td>
                </tr>
                <tr>
                  <td colSpan='3' style={{}}>
                  <div><button className="toTop" onClick={showHideGraph_01} style={{}}><b>Show/Hide Graph</b></button></div>
                    <div id='showHide_01' style={{display:'none'}}>
                      <img src={graph_09} alt='is graph_09.jpg' style={{border:'2px solid black', width:'94%'}}></img>
                      <div style={{textAlign:'left', padding:'0 3%'}}>The device here has a reported window height of 915px (green). 
                                                                      The return value is 36.98px. 
                      </div>
                    </div>  
                  </td>
                </tr>
                <tr>
                  <td colSpan='3' style={{textAlign:'left', padding:'0.5em'}}>
                    To explain: <br /> The return value of 36.98px is based on the lineation value at the reported height of 915px. 
                    The lineation itself is calculated by using the <span title='Upper Range Point' style={{color:'yellow'}}><i>URP</i></span> and 
                    <span title='Lower Range Point' style={{color:'yellow'}}><i>&nbsp;LRP</i></span> of 1280px and 800px respectively.
                    Consequently, at 1280px the return is 'height:75px' and at 360px the return is 'height:25px. Thus, at a reported height of 915px 
                    the return value will be 36.98px.<br />
                  </td>
                </tr>
              </table><br />
              
              This example can have other expression formats:<br />
              let a = lr.w('height:px',75,25);<br />
              let b = lr.w('px',75,25);<br /> 
              let c = lr.w('',75,25);<br /><br />
              returns:<br />
              a = 'height:36.98px'&nbsp;(is string)<br />
              b = '36.98px'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(is string)<br />
              c = &nbsp;36.98&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(is num)<br /><br />

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
          </tr><br /><br />       
        </table>
        <button className="toTop" onClick={() => window.scrollTo(0,0)} style={{position:'absolute', left:'3.3%', bottom:'1%'}}><b>To Top</b></button>
      </div>
    </React.StrictMode>  
  );    
};

export default LRwh;