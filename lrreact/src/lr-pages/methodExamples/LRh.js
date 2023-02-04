import React from 'react';
import './common-css.css';
import { Outlet, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import {lr} from '../../lr/lr-single.js';
import graph_07 from '../../images/graph_07.jpg';
import graph_08 from '../../images/graph_08.jpg';


const LRh = () => {
  
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
              Example<br /><br />lr.h(args)
            </th>
          </tr>
          <tr>
            <td style={{width: lr.w('%',16,22), padding:'1%', fontSize: lr.w('em',1.5,1.25), fontFamily:'monospace', display: lr.wcss('table-cell',850,'none')}}>
              lr.h(args)
            </td>
            <td style={{padding:'1%', verticalAlign:'middle', fontFamily:'monospace', fontSize:'1.25em', textAlign:'left'}}>
              lr.h(args) uses the reported <span className='hlt_01'>&nbsp;viewport height&nbsp;</span> to establish the proper CSS return. 
              For this example assume the reported viewport height (window.innerHeight) is 800px. Furthermore, assume 
              the <span title='Upper Range Point' style={{color:'yellow'}}><i>URP</i></span> is the default of 929px which will correlate 
              to the font size of 3em in the LR expression and the <span title='Lower Range Point' style={{color:'yellow'}}><i>LRP</i></span> is 
              the default of 560px which will correlate to the 1.5em in the LR expression.<br />
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
                  <td colSpan='3' style={{textAlign:'center', padding:'1% 0 3% 0'}}>
                    Example LR expression is:<br /><br />
                    <span className='expression'>
                      &nbsp;lr.h('font-size:em',3,1.5)&nbsp;
                    </span>
                  </td>
                </tr>
                <tr>
                  <td colSpan='3' style={{textAlign:'center', padding:'1% 0 3% 0'}}>
                    Return Value is:<br /><br />
                    <span className='expressionValue'>
                      &nbsp;font-size:2.48em&nbsp;
                    </span>
                  </td>
                </tr>
                <tr>
                  <td colSpan='3' style={{}}>
                  <div><button className="toTop" onClick={showHideGraph_01} style={{}}><b>Show/Hide Graph</b></button></div>
                    <div id='showHide_01' style={{display:'none'}}>
                      <img src={graph_07} alt='is graph_07.jpg' style={{border:'2px solid black', width:'94%'}}></img>
                      <div style={{textAlign:'left', padding:'0 3%'}}>The device here has reported a viewport width of 1366px (green). 
                                                                      The return value is 23.61px. 
                      </div>
                    </div>  
                  </td>
                </tr>
                <tr>
                  <td colSpan='3' style={{textAlign:'left', padding:'0.5em'}}>
                    To explain: <br /> The return value of 'font-size:2.48em' is based on the lineation value at the reported height of 800px. 
                    The lineation itself is calculated by using the <span title='Upper Range Point' style={{color:'yellow'}}><i>URP</i></span> and 
                    the <span title='Lower Range Point' style={{color:'yellow'}}><i>LRP</i></span> of 929px and 560px respectively.
                    Consequently, at 929px the return value is 'font-size:3.00em' and at 560px the return is 'font-size:1.5em'. Thus, at 
                    a reported height of 800px the return value will be 'font-size:2.48em'.  Your device will round the value accordingly.<br />
                  </td>
                </tr>
              </table><br />
              
              This example can have other expression formats:<br />
              let a = lr.h('font-size:em',3,1.5);<br />
              let b = lr.h('em',3,1.5);<br /> 
              let c = lr.h('',3,1.5);<br /><br />
              returns:<br />
              a = 'font-size:2.48em'&nbsp;(is string)<br />
              b = '2.48em'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(is string)<br />
              c = &nbsp;2.48&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(is num)<br /><br />

              <table style={{border:'none', width:'100%'}} >
                <tr>
                  <td style={{border:'none', width:'7%', verticalAlign:'top'}} >Note:</td>
                  <td style={{border:'none'}} >Upper and Lower range points are assumed to be 929px and 560px respectively.</td>
                </tr>
                <tr>
                  <td style={{border:'none', width:'7%', verticalAlign:'top'}} >Note:</td>
                  <td style={{border:'none'}} >Property and units can be any CSS format<br />(for example: lr.h('height:%',60,95).</td>
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
              <button className="toTop" onClick={() => window.scrollTo(0,0)} style={{position:'absolute', left:'0.5%', bottom:'1%'}}><b>To Top</b></button>    
              </table>
            </td>
          </tr>  <br /><br /> 
        </table>
        
        <br /><br />
              
      {/* Advanced lr.h(args) Example  ********************************************************************************************************/}
        <table  className='exampTable2' style={{position:'relative', }}>
          <button className="toTop" onClick={() => window.scrollTo(0,0)} style={{position:'absolute', left:'0.5%', top:'0.5%'}}><b>To Top</b></button>
          <tr>
            <th colspan="2" style={{fontSize:'2em', padding:'1%'}} >
              Example<br /><br />lr.h(args)<br /><br />
            </th>
          </tr>
          <tr>
            <td style={{ padding:'1%', lineHeight:'120%', fontFamily:'monospace', fontSize:lr.w('em',1.5,1.25), width:lr.w('%',16,22), display:lr.wcss('table-cell',850,'none')}}>
              <br />lr.h(args)
            </td>
            <td className='descText'  style={{padding:'1%', textAlign:'left',  lineHeight:'110%', fontSize:lr.w('em',1.25,1)}}>
              LR has the capability to lineate in the opposite direction as defined by the argument values you enter. LR.h(args) can accept 
              arguments so you can lineate from a small value at the <span title='Upper Range Point' style={{color:'yellow'}}><i>URP&nbsp;</i></span> 
              to a big value at the <span title='Lower Range Point' style={{color:'yellow'}}><i>&nbsp;LRP</i></span>.<br /><br /> 
              
              This is nothing special and just illustrates the flexibility of LR in that you can return small values on a big screen and 
              big values on a small screen. In this example, the return value at the <span title='Upper Range Point' style={{color:'yellow'}}><i>URP&nbsp;</i></span>
              is 'font-size:1em' and at the <span title='Lower Range Point' style={{color:'yellow'}}><i>LRP</i></span> it is 'font-size:3em'. 
              It all boils down to how you enter your arguments. Let's do this. Please see the LR expression.<br /><br />
              
              <table style={{width:'100%', border:'none', textAlign:'center'}}>
                <tr>
                <th title='Upper Range Point' style={{color:'yellow', textShadow:'0 0 3px black'}}>URP</th>
                <th title='Reported width from a hypothetical device' style={{color:'yellow', textShadow:'0 0 3px black'}}>Reported Width</th>
                <th title='Lower Range Point' style={{color:'yellow', textShadow:'0 0 3px black'}}>LRP</th>
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
                  <td colSpan='3' style={{textAlign:'center', padding:'1% 0 3% 0'}}>
                    Example LR expression is:<br /><br />
                    <span className='expression'>
                      &nbsp;lr.h('font-size:em',1,3)&nbsp;
                    </span>
                  </td>
                </tr>
                <tr>
                  <td colSpan='3' style={{textAlign:'center', padding:'1% 0 3% 0'}}>
                    Return Value is:<br /><br />
                    <span className='expressionValue'>
                      &nbsp;font-size:1.70em&nbsp;
                    </span>
                  </td>
                </tr>
                
                <tr>
                <td colSpan='3' style={{}}>
                <div><button className="toTop" onClick={showHideGraph_02} style={{}}><b>Show/Hide Graph</b></button></div>
                  <div id='showHide_02' style={{display:'none'}}>
                    <img src={graph_08} alt='is graph_08.jpg' style={{border:'2px solid black', width:'94%'}}></img>
                    <div style={{textAlign:'left', padding:'0 3%'}}>The device here has reported a viewport height of 800px (green). 
                                                                    The return value is 'font-size:1.70em'. By inspection, the viewport
                                                                    height of 800px is a bit closer to 929px than 560px, so the return
                                                                    value will be correspondingly closer to 1em than 3em.
                    </div>
                  </div>  
                </td>
                </tr>
                
                <tr>
                  <td colSpan='3' style={{textAlign:'left', padding:'0.5em'}}>
                    <span className='toExplain'>&nbsp;To explain:&nbsp;</span> <br /> The return value of 'font-size:1.70em' is based on the 
                    lineation value at the reported height of 800px. The arguments in the expression are such that a smaller value is 
                    returned on a higher reported screen height and a larger value is returned on a smaller reported screen height.
                    This is opposite what a typical intended response would be but LR has the flexibility to do whatever you need done.
                  </td>
                </tr>
              </table><br />
              
              This example can have other expression formats:<br />
              let a = lr.h('font-size:em',1,3);<br />
              let b = lr.h('em',1,3);<br /> 
              let c = lr.h('',1,3);<br /><br />
              returns:<br />
              a = 'font-size:1.70em'&nbsp;(is string)<br />
              b = '1.70em'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(is string)<br />
              c = &nbsp;1.70&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(is num)<br /><br />

              <table style={{border:'none', width:'100%'}} >
                <tr>
                  <td style={{border:'none', width:'7%', verticalAlign:'top'}} >Note:</td>
                  <td style={{border:'none'}} >Upper and Lower range points are assumed to be 929px and 560px respectively.</td>
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

export default LRh;