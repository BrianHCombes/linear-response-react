import React from 'react';
import './common-css.css';
import { Outlet, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import {lr} from '../../lr/lr-single.js';
import graph_03 from '../../images/graph_03.jpg';
import graph_04 from '../../images/graph_04.jpg';


const LRw = () => {
  
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
          <button className="toTop" onClick={() => window.scrollTo(0,0)} style={{position:'absolute', left:'0.5%', top:'0.5%'}}><b>To Top</b></button>
          <tr>
            <th colspan="2" style={{fontSize:'2em', padding:'1%'}} >
              Example<br /><br />lr.w(args)<br /><br />(General Lineation)
            </th>
          </tr>
          <tr>
            <td style={{width: lr.w('%',16,22), padding:'1%', fontSize: lr.w('em',1.5,1.25), fontFamily:'monospace', display: lr.wcss('table-cell',850,'none')}}>
              lr.w(args)
            </td>
            <td className='descText'  style={{padding:'1%', textAlign:'left', fontSize:lr.w('em',1.25,1)}}>
              lr.w(args) uses the reported <span className='hlt_01'>&nbsp;viewport width&nbsp;</span> to establish the proper CSS return. 
              For this example assume the reported viewport width (screen.availWidth) is 1366px. Furthermore, assume 
              the <span title='Upper Range Point' style={{color:'yellow'}}><i>URP</i></span> is the default width of 1920px which will correlate 
              to the 30px in the LR expression and the <span title='Lower Range Point' style={{color:'yellow'}}><i>LRP</i></span> is 
              the default width of 360px which will correlate to the 12px in the LR expression.<br /><br />
              Here is the example with details:<br /><br />
              
              <table style={{width:'100%', border:'none', textAlign:'center'}}>
                <tr>
                <th title='Upper Range Point' style={{color:'yellow', textShadow:'0 0 3px black'}}>URP</th>
                <th title='Reported width from a hypothetical device' style={{color:'yellow', textShadow:'0 0 3px black'}}>Reported Width</th>
                <th title='Lower Range Point' style={{color:'yellow', textShadow:'0 0 3px black'}}>LRP</th>
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
                  <td colSpan='3' style={{textAlign:'center', padding:'1% 0 3% 0'}}>
                    Example LR expression is:<br /><br />
                    <span className='expression'>
                      &nbsp;lr.w('font-size:px',30,12)&nbsp;
                    </span>
                  </td>
                </tr>
                <tr>
                  <td colSpan='3' style={{textAlign:'center', padding:'1% 0 3% 0'}}>
                    Return Value is:<br /><br />
                    <span className='expressionValue'>
                      &nbsp;font-size:23.61px&nbsp;
                    </span>
                  </td>
                </tr>
{/*   ********************************************************************************************************/}               
                <tr>
                <td colSpan='3' style={{}}>
                <div><button className="toTop" onClick={showHideGraph_01} style={{}}><b>Show/Hide Graph</b></button></div>
                  <div id='showHide_01' style={{display:'none'}}>
                    <img src={graph_04} alt='is graph_03.jpg' style={{border:'2px solid black', width:'94%'}}></img>
                    <div style={{textAlign:'left', padding:'0 3%'}}>The device here has reported a viewport width of 1366px (green). 
                                                                    The return value is 23.61px. 
                    </div>
                  </div>  
                </td>
                </tr>
{/*   ********************************************************************************************************/}                
                <tr>
                  <td colSpan='3' style={{textAlign:'left', padding:'0.5em'}}>
                    To explain: <br /> The return value of 'font-size:23.61px' is based on the lineation value at the reported width of 1366px. 
                    The lineation itself is calculated by using the <span title='Upper Range Point' style={{color:'yellow'}}><i>URP</i></span> and 
                    <span title='Lower Range Point' style={{color:'yellow'}}><i>&nbsp;LRP</i></span> of 1920px and 360px respectively.
                    Consequently, at 1920px the return is 'font-size:30px' and at 360px the return is 'font-size:12px'. Thus, at a reported width of 1366px 
                    the return value will be 'font-size:23.61px'. Note: Your device will round it to 24px.<br />
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
                <button className="toTop" onClick={() => window.scrollTo(0,0)} style={{position:'absolute', left:'0.5%', bottom:'1%'}}><b>To Top</b></button> 
              </table>
            </td>
          </tr>  <br /><br /> 
        </table>   
        <br /><br />
        
        {/* Advanced lr.w(args) Example  ********************************************************************************************************/}
        <table  className='exampTable2' style={{position:'relative', }}>
          <button className="toTop" onClick={() => window.scrollTo(0,0)} style={{position:'absolute', left:'0.5%', top:'0.5%'}}><b>To Top</b></button>
          <tr>
            <th colspan="2" style={{fontSize:'2em', padding:'1%'}} >
              (Advanced) Example<br /><br />lr.w(args)<br /><br />(Segmented Lineation)
            </th>
          </tr>
          <tr>
            <td style={{ padding:'1%', lineHeight:'120%', fontFamily:'monospace', fontSize:lr.w('em',1.5,1.25), width:lr.w('%',16,22), display:lr.wcss('table-cell',850,'none')}}>
              (Advanced)<br />lr.w(args)
            </td>
            <td className='descText'  style={{padding:'1%', textAlign:'left',  lineHeight:'110%', fontSize:lr.w('em',1.25,1)}}>
              LR has the capability to lineate in segments as defined by the argument values you enter. LR.w(args) can accept 
              3 + 2n arguments so you can lineate from the <span title='Upper Range Point' style={{color:'yellow'}}><i>URP&nbsp;</i></span> 
              to a pre determined point and then optionally lineate to another predetermined point and/or down to the 
              <span title='Lower Range Point' style={{color:'yellow'}}><i>&nbsp;LRP</i></span>, and so on, all at a different rates. 
              This is an ideal capability of LR for those finicky response situations.<br /><br />
              For example, you may want to lineate down to a specific width or height and then stay flat the rest of the way 
              down to the <span title='Lower Range Point' style={{color:'yellow'}}><i>LRP</i></span>. Let's do this. Please see the 
              LR expression.<br /><br />
              
              <table style={{width:'100%', border:'none', textAlign:'center'}}>
                <tr>
                <th title='Upper Range Point' style={{color:'yellow', textShadow:'0 0 3px black'}}>URP</th>
                <th title='Reported width from a hypothetical device' style={{color:'yellow', textShadow:'0 0 3px black'}}>Reported Width</th>
                <th title='Lower Range Point' style={{color:'yellow', textShadow:'0 0 3px black'}}>LRP</th>
                </tr>

                <tr>
                  <td style={{borderColor:'lime'}}>
                    1920px 
                  </td>
                  <td style={{borderColor:'lime'}}>
                    780px
                  </td>
                  <td style={{borderColor:'lime'}}>
                    360px
                  </td>
                </tr>
                <tr>
                  <td colSpan='3' style={{textAlign:'center', padding:'1% 0 3% 0'}}>
                    Example LR expression is:<br /><br />
                    <span className='expression'>
                      &nbsp;lr.w('font-size:px',30,800,12,12)&nbsp;
                    </span>
                  </td>
                </tr>
                <tr>
                  <td colSpan='3' style={{textAlign:'center', padding:'1% 0 3% 0'}}>
                    Return Value is:<br /><br />
                    <span className='expressionValue'>
                      &nbsp;font-size:12px&nbsp;
                    </span>
                  </td>
                </tr>
                
                <tr>
                <td colSpan='3' style={{}}>
                <div><button className="toTop" onClick={showHideGraph_02} style={{}}><b>Show/Hide Graph</b></button></div>
                  <div id='showHide_02' style={{display:'none'}}>
                    <img src={graph_03} alt='is graph_03.jpg' style={{border:'2px solid black', width:'94%'}}></img>
                    <div style={{textAlign:'left', padding:'0 3%'}}>The device here has reported a viewport width of 780px (green). 
                                                                    The return value is 12px since 780px falls on Segment 2. And of
                                                                    course, it's 12px on all viewport widths of 800px down (and) thru 
                                                                    the <span title='Lower Range Point' style={{color:'yellow'}}><i>LRP&nbsp;</i></span> 
                                                                    of 360px.</div>
                  </div>  
                </td>
                </tr>
                
                <tr>
                  <td colSpan='3' style={{textAlign:'left', padding:'0.5em'}}>
                    To explain: <br /> The return value of 'font-size:12px' is based on the lineation value at the reported width of 780px. 
                    The lineation itself is segmented in this case. The first segment is calculated by lineating from 
                    the <span title='Upper Range Point' style={{color:'yellow'}}><i>URP</i></span> of 1920px to the arg value of 800px 
                    (as shown in the expression). The second segment is from 800px down to (and beyond) the LRP of 360px. Thus the return value 
                    will be 'font-size:12px' at viewport width of 780px and stay at font-size:12dirpx all the way from 800px wide down 
                    to the <span title='Lower Range Point' style={{color:'yellow'}}><i>LRP</i></span> of 360px wide (See expression). 
                    Consequently, at 1920px <span title='Upper Range Point' style={{color:'yellow'}}><i>(URP)</i></span> wide the 
                    return is 'font-size:30px' down to 'font-size:12px' at 800px wide and stays flat at 'font-size:12px' from 800px wide 
                    down to 360px <span title='Lower Range Point' style={{color:'yellow'}}><i>(LRP)</i></span> wide where it is 
                    still 'font-size:12px'.<br />
                  </td>
                </tr>
              </table><br />
              
              This example can have other expression formats:<br />
              let a = lr.w('font-size:px',30,800,12,12);<br />
              let b = lr.w('px',30,800,12,12);<br /> 
              let c = lr.w('',30,800,12,12);<br /><br />
              returns:<br />
              a = 'font-size:12px'&nbsp;(is string)<br />
              b = '12px'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(is string)<br />
              c = &nbsp;12&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(is num)<br /><br />

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
        <button className="toTop" onClick={() => window.scrollTo(0,0)} style={{position:'absolute', left:'0.5%', bottom:'1%'}}><b>To Top</b></button>  
        </table>
        
      </div>
    </React.StrictMode>  
  );    
};

export default LRw;