import React from 'react';
import './Methods.css';
import { Outlet, Link } from 'react-router-dom';
import titleBanner01 from '../images/lr-title-banner_01.jpg';
import titleBanner02 from '../images/lr-title-banner_02.jpg';
import {lr} from '../lr/lr-single.js';


function Methods(){
  return (
  <React.StrictMode>
    {/*comment to eliminate error flags elsewhere;*/}<span style={{}}></span>
    <div  className="" 
          id="titling" 
          style={{
                  width: lr.w("%",55,98), 
                  marginTop:'1%',
                  marginLeft:'auto', 
                  marginRight:'auto', 
                  backgroundColor:'#bbbbbb',
                  border:'2px solid white', 
                  borderRadius:'0.75em', 
                  fontFamily: 'Arial Rounded MT Bold'
                }}>
        <div style={{textAlign:'center'}}>
          <div className="arialRnd" style={{fontSize: lr.w("em",3.5,1.5), lineHeight:'150%', padding:'1% 0 0 0', textAlign:'center'}}>
              LR Methods
          </div>    
          <div style={{fontSize:'1.25em', padding:'0 6% 0 6%'}}>
          These are the methods of LR. They also include getter and setter methods. 
          </div>
          <ul style={{padding:'0 8% 0 8%', textAlign:'left'}}>
            <li style={{textAlign:'left'}}>
              LR stands for Linear Response
            </li>
            <li style={{textAlign:'left', marginTop:"0.2em"}}>
              LR is an API for the responsive aspect of web design
            </li>
            <li style={{textAlign:'left', marginTop:"0.2em"}}>
              LR uses standard javascript
            </li>
            <li style={{textAlign:'left', marginTop:"0.2em"}}>
              LR works with all CSS and Javascript frameworks
            </li>
            <li style={{textAlign:'left', marginTop:"0.2em"}}>
              LR has powerful response tools
            </li>
            <li style={{textAlign:'left', marginTop:"0.2em"}}>
              LR is not a framework and won't interfere with your responsive design approach. 
              However, should traditional approaches falter, LR can be called upon.
            </li>
            <li style={{textAlign:'left', marginTop:"0.2em"}}>
              LR works by doing proportional lineation between two defined points. This provides pixel precision 
              sizing on any given screen allowing for optimum screen usage.
            </li>
            <li style={{textAlign:'left', marginTop:"0.2em"}}>
              LR can (technically) be used exclusively for all responsive behavior.
            </li>
            <li style={{textAlign:'left', marginTop:"0.2em"}}>
              LR is arguably easier to use than traditional methods with its relatively small API.
            </li>
          </ul>
      </div>  
        
      <div style={{ backgroundColor:'white', fontFamily:'monospace', fontSize:'1.5em', color:'black', 
                    margin:'0 2.5% 0 2.5%', padding:'1% 0 1% 1%', border:'2px solid black', borderRadius:'0.5em'}}>
        <span className="jsComment">&#47;&#47; A quick look</span><br /><br />
        let a = lr.w("em",3,1);<br />
        document.getElementById("someElement").style.fontSize = a;<br /><br />
        <span className="jsComment" style={{fontSize:'0.8em'}}>
          &#47;&#47; By default, returns 3.00em on a desktop screen width of 1920px and returns 1.00em on a mobile screen width of 360px  
          and returns the appropriate proportional value for any screen width above, below, or in between.
        </span><br />
      </div>
      
      <div style={{width:'95%', margin:'1% auto 0 auto'}}>    
        <div style={{color:'white', fontSize:'0.85em', fontFamily:'Arial Rounded MT Bold'}}>
          The above LR method will likely be your most used LR method. However, there are many options to refine your response return. 
          <Link href="#" style={{textDecoration:'none', color:'blue'}}> Click here </Link>to see all the ways you can tailor your return response.
        </div>
      </div><br /><br /> 
        
    
    <div style={{position:'relative'}}>
      <button className="toTop" onClick={() => window.scrollTo(0,0)} style={{position:'absolute', left:'3.3%', top:'1.5%'}}><b>To Top</b></button>  
      <table style={{ border:'2px solid black', 
                      borderRadius:'.5em',
                      margin:'0 2.5% 0 2.5%',
                      width:'95%', 
                      lineHeight:'120%', 
                      backgroundColor:'#ccffcc', 
                      fontFamily:'Arial Rounded MT Bold',
                      padding:'0 0.5% 1.0% 0.5%'}}>
          <tr>
            <th colSpan="2" style={{fontSize:'2em', padding:'1%'}} >
              LR short form methods returning CSS values
            </th>
          </tr>
          <tr>
            <td style={{width:'16%', padding:'1%', fontSize:'1.5em', fontFamily:'monospace'}}>
              <Link to='/examples' style={{textDecoration:'none'}}><b>lr.w(args)<sup style={{color:'red'}}><b>*</b></sup></b></Link>
            </td>
            <td style={{padding:'1%', verticalAlign:'top'}}>
              Uses the reported viewport<sup style={{color:'red'}}><b>**</b></sup> width to establish the proper CSS return.
            </td>
          </tr>  
          <tr>
            <td style={{padding:'1%', verticalAlign:'top', fontSize:'1.5em', fontFamily:'monospace'}}>
              <a href="#" style={{textDecoration:'none'}}><b>lr.ww(args)</b></a>
            </td>
            <td style={{padding:'1%', verticalAlign:'top'}}>
              Uses the reported window<sup style={{color:'red'}}><b>**</b></sup> width to establish the proper CSS return.
            </td>
          </tr> 
          <tr>
            <td style={{width:'12%', padding:'1%', fontSize:'1.5em', fontFamily:'monospace'}}>
              <a href="#" style={{textDecoration:'none'}}><b>lr.h(args)</b></a>
            </td>
            <td style={{padding:'1%', verticalAlign:'top'}}>
              Uses the reported viewport<sup style={{color:'red'}}><b>**</b></sup> height to establish the proper CSS return.
            </td>
          </tr>
          <tr>
            <td style={{width:'12%', padding:'1%', fontSize:'1.5em', fontFamily:'monospace'}}>
              <a href="#" style={{textDecoration:'none',}}><b>lr.wh(args)</b></a>
            </td>
            <td style={{padding:'1%', verticalAlign:'top'}}>
              Uses the reported window<sup style={{color:'red'}}><b>**</b></sup> height to establish the proper CSS return.
            </td>
          </tr> 
          <tr>
            <td style={{width:'12%', padding:'1%', fontSize:'1.5em', fontFamily:'monospace'}}>
              <a href="#" style={{textDecoration:'none'}}><b>lr.r(args)</b></a>
            </td>
            <td style={{padding:'1%', verticalAlign:'top'}}>
              Uses the reported viewport<sup style={{color:'red'}}><b>**</b></sup> height/width ratio to establish the proper CSS return.
            </td>
          </tr>
          <tr>
            <td style={{width:'12%', padding:'1%', fontSize:'1.5em', fontFamily:'monospace'}}>
              <a href="#" style={{textDecoration:'none'}}><b>lr.wr(args)</b></a>
            </td>
            <td style={{padding:'1%', verticalAlign:'top'}}>
              Uses the reported window<sup style={{color:'red'}}><b>**</b></sup> height/width ratio to establish the proper CSS return.
            </td>
          </tr>
          <tr>
            <td colSpan="2" style={{textAlign:'left', padding:'1%'}}>
              <span style={{color:'red', fontSize:'1.5em'}}><b>*</b></span>
              <Link to="#" style={{textDecoration:'none'}}>
                lr.w(args) will likely be your most used LR method.<br />
                Select this link for an in depth discussion and explanation about using these methods
              </Link>
            </td>
          </tr>
          <tr>
            <td colSpan="2" style={{textAlign:'left', padding:'1%'}}>
              <sup style={{color:'red', fontSize:'1.5em'}}><b>**</b></sup><a href="#">About device, window, and viewport widths and their differences.</a>
            </td>
          </tr>
        </table>
      </div>
      <br /><br />
      
      <div style={{position:'relative'}}>
      <button className="toTop" onClick={() => window.scrollTo(0,0)} style={{position:'absolute', left:'3.3%', top:'1.5%'}}><b>To Top</b></button>  
      <table style={{ border:'2px solid black', 
                      borderRadius:'.5em',
                      margin:'0 2.5% 0 2.5%',
                      width:'95%', 
                      lineHeight:'120%', 
                      backgroundColor:'#ccffcc', 
                      fontFamily:'Arial Rounded MT Bold',
                      padding:'0 0.5% 1.0% 0.5%'}}>
          <tr>
            <th colSpan="2" style={{fontSize:'2em', padding:'1%'}} >
              LR long form methods returning CSS values
            </th>
          </tr>
          <tr>
            <td style={{width:'20%', padding:'1%', fontSize:'1.5em', fontFamily:'monospace'}}>
              <Link to='/examples' style={{textDecoration:'none'}}><b>lr.wLF(args)<sup style={{color:'red'}}><b>*</b></sup></b></Link>
            </td>
            <td style={{padding:'1%', verticalAlign:'top'}}>
              Uses the reported viewport<sup style={{color:'red'}}><b>**</b></sup> width to establish the proper CSS return.
            </td>
          </tr>  
          <tr>
            <td style={{padding:'1%', verticalAlign:'top', fontSize:'1.5em', fontFamily:'monospace'}}>
              <a href="#" style={{textDecoration:'none'}}><b>lr.wwLF(args)</b></a>
            </td>
            <td style={{padding:'1%', verticalAlign:'top'}}>
              Uses the reported window<sup style={{color:'red'}}><b>**</b></sup> width to establish the proper CSS return.
            </td>
          </tr> 
          <tr>
            <td style={{width:'12%', padding:'1%', fontSize:'1.5em', fontFamily:'monospace'}}>
              <a href="#" style={{textDecoration:'none'}}><b>lr.hLF(args)</b></a>
            </td>
            <td style={{padding:'1%', verticalAlign:'top'}}>
              Uses the reported viewport<sup style={{color:'red'}}><b>**</b></sup> height to establish the proper CSS return.
            </td>
          </tr>
          <tr>
            <td style={{width:'12%', padding:'1%', fontSize:'1.5em', fontFamily:'monospace'}}>
              <a href="#" style={{textDecoration:'none',}}><b>lr.whLF(args)</b></a>
            </td>
            <td style={{padding:'1%', verticalAlign:'top'}}>
              Uses the reported window<sup style={{color:'red'}}><b>**</b></sup> height to establish the proper CSS return.
            </td>
          </tr> 
          <tr>
            <td style={{width:'12%', padding:'1%', fontSize:'1.5em', fontFamily:'monospace'}}>
              <a href="#" style={{textDecoration:'none'}}><b>lr.rLF(args)</b></a>
            </td>
            <td style={{padding:'1%', verticalAlign:'top'}}>
              Uses the reported viewport<sup style={{color:'red'}}><b>**</b></sup> height/width ratio to establish the proper CSS return.
            </td>
          </tr>
          <tr>
            <td style={{width:'12%', padding:'1%', fontSize:'1.5em', fontFamily:'monospace'}}>
              <a href="#" style={{textDecoration:'none'}}><b>lr.wrLF(args)</b></a>
            </td>
            <td style={{padding:'1%', verticalAlign:'top'}}>
              Uses the reported window<sup style={{color:'red'}}><b>**</b></sup> height/width ratio to establish the proper CSS return.
            </td>
          </tr>
          <tr>
            <td colSpan="2" style={{textAlign:'left', padding:'1%'}}>
              <span style={{color:'red', fontSize:'1.5em'}}><b>*</b></span>
              <Link to="#" style={{textDecoration:'none'}}>
                lr.w(args) will likely be your most used LR method.<br />
                Select this link for an in depth discussion and explanation about using these methods
              </Link>
            </td>
          </tr>
          <tr>
            <td colSpan="2" style={{textAlign:'left', padding:'1%'}}>
              <sup style={{color:'red', fontSize:'1.5em'}}><b>**</b></sup><a href="#">About device, window, and viewport widths and their differences.</a>
            </td>
          </tr>
        </table>
      </div>
      <br /><br />
      
      
      
      <div style={{position:'relative'}}>
      <button className="toTop" onClick={() => window.scrollTo(0,0)} style={{position:'absolute', left:'3.3%', top:'1.5%'}}><b>To Top</b></button>  
        <table style={{ border:'2px solid black', 
                      borderRadius:'.5em',
                      margin:'0 2.5% 0 2.5%',
                      width:'95%', 
                      lineHeight:'120%', 
                      backgroundColor:'lightcyan', 
                      fontFamily:'Arial Rounded MT Bold',
                      padding:'0 0.5% 1.0% 0.5%'}}>
          <tr>
            <th colSpan="2" style={{fontSize:'2em', padding:'1%'}}>
              <div style={{marginBottom:'1%'}}>LR Methods returning HTML or CSS snippets</div>
              <div style={{ display:'inline-block',
                            fontSize:'0.4em', 
                            color:'blue', 
                            backgroundColor:'#ffd480',
                            padding:'0.3% 1%',
                            border:'1px solid black',
                            borderRadius:'0.5em'}}>NOTE: The html and css methods are functionally the same. Two different names are for user clarity.</div>
            </th>
          </tr>
          <tr>
            <td style={{width:'24%', padding:'2% 1% 2% 1%', fontSize:'1.5em', fontFamily:'monospace'}}>
              <a href="#" style={{textDecoration:'none'}}><b>lr.whtml(args)<span style={{lineHeight:'150%'}}><br /></span>lr.wcss(args)</b></a>
            </td>
            <td style={{padding:'1%', verticalAlign:'top'}}>
              Uses the reported viewport<sup style={{color:'red'}}><b>*</b></sup> width to establish the proper HTML or CSS snippet return.
            </td>
          </tr> 
          <tr>
            <td style={{width:'12%', padding:'1%', fontSize:'1.5em', fontFamily:'monospace'}}>
              <a href="#" style={{textDecoration:'none'}}><b>lr.hhtml(args)<span style={{lineHeight:'150%'}}><br /></span>lr.wcss(args)</b></a>
            </td>
            <td style={{padding:'2% 1% 2% 1%', verticalAlign:'top'}}>
              Uses the reported viewport<sup style={{color:'red'}}><b>*</b></sup> height to establish the proper HTML or CSS snippet return
            </td>
          </tr>
          <tr>
            <td style={{width:'12%', padding:'1%', fontSize:'1.5em', fontFamily:'monospace'}}>
              <a href="#" style={{textDecoration:'none'}}><b>lr.rhtml(args)<span style={{lineHeight:'150%'}}><br /></span>lr.rcss(args)</b></a>
            </td>
            <td style={{padding:'2% 1% 2% 1%', verticalAlign:'top'}}>
              Uses the reported viewport<sup style={{color:'red'}}><b>*</b></sup> height/width ratio to establish the proper HTML or CSS snippet return
            </td>
          </tr>
          <tr>
            <td colSpan="2" style={{textAlign:'center'}}>
              <sup style={{color:'red', fontSize:'1.5em'}}><b>*</b></sup><a href="#">About device, window, and viewport widths</a>
            </td>
          </tr>
        </table>
      </div>  
      <br /><br />
      <div style={{position:'relative'}}>
      <button className="toTop" onClick={() => window.scrollTo(0,0)} style={{position:'absolute', left:'3.3%', top:'3%'}}><b>To Top</b></button>  
        <table style={{ border:'2px solid black', 
                      borderRadius:'.5em',
                      margin:'0 2.5% 0 2.5%',
                      width:'95%', 
                      lineHeight:'120%', 
                      backgroundColor:'lightcyan', 
                      fontFamily:'Arial Rounded MT Bold',
                      padding:'0 0.5% 1.0% 0.5%'}}>
          
          <tr>
            <th colSpan="2" style={{fontSize:'2em', padding:'1%'}}>
              <div style={{marginBottom:'1%'}}>Misc. LR Methods</div>
              <div style={{ display:'inline-block',
                            fontSize:'0.4em', 
                            color:'blue', 
                            backgroundColor:'#ffd480',
                            padding:'0.3% 1%',
                            border:'1px solid black',
                            borderRadius:'0.5em'}}>NOTE: The html and css methods are functionally the same. Two different names are for user clarity.</div>
            </th>
          </tr>
          <tr>
            <td style={{width:'24%', padding:'2% 1% 2% 1%', fontSize:'1.5em', fontFamily:'monospace'}}>
              <a href="#" style={{textDecoration:'none'}}><b>lr.eval(args)</b></a>
            </td>
            <td style={{padding:'1%', verticalAlign:'middle'}}>
              Uses the reported viewport<sup style={{color:'red'}}><b>*</b></sup> width to establish the proper HTML or CSS snippet return.
            </td>
          </tr> 
          
        </table>
      </div> 
      <br /><br />
      
    </div> 
    
      
    </React.StrictMode>          
          
);
};

export default Methods;