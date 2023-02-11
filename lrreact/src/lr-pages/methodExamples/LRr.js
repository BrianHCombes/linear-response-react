import React from 'react';
import './common-css.css';
import { Outlet, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import {lr} from '../../lr/lr-single.js';
import graph_10 from '../../images/graph_10.jpg';


const LRr = () => {
  
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
            Now assume the <span title='Upper Range Point' style={{color:'yellow'}}><i>URP</i></span> ratio is 0.484 (929px high / 1920px wide)
            and the <span title='Lower Range Point' style={{color:'yellow'}}><i>LRP</i></span> ratio is 1.555 (560px high / 360px wide).
            <br /><br />
            
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
              <td colSpan='3' style={{textAlign:'center', padding:'0.75% 0'}}>
                Example LR expression is:<br /><br />
                <span className='expression'>
                  &nbsp;lr.r('width:%',60,20)&nbsp;
                </span><br /><br />
              </td>
            </tr>
            <tr>
              <td colSpan='3' style={{textAlign:'center', padding:'0.75% 0'}}>
                Return Value is:<br /><br />
                <span className='expressionValue'>
                  &nbsp;width:28.32%&nbsp;
                </span><br /><br />
              </td>
            </tr>
            <tr>
              <td colSpan='3' style={{}}>
              <div><button className="toTop" onClick={showHideGraph_01} style={{}}><b>Show/Hide Graph</b></button></div>
                <div id='showHide_01' style={{display:'none'}}>
                  <img src={graph_10} alt='is graph_10.jpg' style={{border:'2px solid black', width:'94%'}}></img>
                  <div style={{textAlign:'left', padding:'0 3%'}}>The device here has a reported height/width ratio of 1.333 (green). 
                                                                  The return value is 'width:28.32%'. 
                  </div>
                </div>  
              </td>
            </tr>
            <tr>
              <td colSpan='3' style={{textAlign:'left', padding:'0.5em'}}>
                To explain: <br /> The return value of 'width:28.32%' is based on the lineation value at the reported ratio of 1.333. 
                The lineation itself is calculated by using the <span title='Upper Range Point' style={{color:'yellow'}}><i>URP&nbsp;</i></span> 
                and <span title='Lower Range Point' style={{color:'yellow'}}><i>LRP</i></span> ratios of 0.484 and 1.555 respectively.
                <br /><br />Note: since the reported ratio is closer to the <span title='Lower Range Point' style={{color:'yellow'}}><i>LRP</i></span> the
                return value is closer to 20 (or what the response would be if the reported ratio had been at 
                the <span title='Lower Range Point' style={{color:'yellow'}}><i>LRP</i></span> of 1.555).<br />
              </td>
            </tr>
          </table>
            
            There are 3 ways to return a value. <br /><br />
            expressions:<br />
            let a = lr.r('width:%',60,20);<br />
            let b = lr.r('%',60,20);<br /> 
            let c = lr.r('',60,20);<br /><br />
            returns:<br />
            a = 'width:28.32%'&nbsp;(is string)<br />
            b = '28.32%'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(is string)<br />
            c = &nbsp;28.32&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(is num)<br /><br />
            
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