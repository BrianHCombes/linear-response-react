import React from 'react';
import './Examples.css';
import { Outlet, Link } from 'react-router-dom';
import titleBanner01 from '../images/lr-title-banner_01.jpg';
import titleBanner02 from '../images/lr-title-banner_02.jpg';
import {lr} from '../lr/lr-single.js';


function Examples(){
  return (
  <React.StrictMode>      
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
              Examples
          </div>    
          <div style={{fontSize:'1.25em', padding:'0 6% 0 6%', textAlign:'left'}}>
          Here are various examples for using LR. They use basic javascript code for manipulating the DOM. 
          Although limited, any examples for use in various frameworks will be shown. Generally, it is advised
          to apply basic DOM manipulation form as catered to by various application frameworks. 
          </div>
      </div><br />  
        
      <div style={{ backgroundColor:'white', fontFamily:'monospace', fontSize:'1.5em', color:'black', 
                    margin:'0 2.5% 0 2.5%', padding:'1% 0 1% 1%', border:'2px solid black', borderRadius:'0.5em'}}>
        <span className="jsComment">&#47;&#47; Example 1:</span><br />
        <span className="jsComment">&#47;&#47; Assumptions: You are using the default width of 1920px for large screens (desktop)
                                               <br />&#47;&#47; and 360px for small screens (mobile)</span><br /><br />
        <span className="jsComment">&#47;&#47; Now, let's say you need a font size of 4em at 1920px and a font size<br />&#47;&#47; 
                                               of 2.5em at 360px. Here's the proper method expression to use.
                                              </span><br /><br />
        let a = lr.w("em",4,2.5);<br />
        <span className="jsComment">&#47;&#47; a will be 4.00em at width of 1920px and 2.5em at width of 360px.</span><br />
        <span className="jsComment">&#47;&#47; The 'w' in the method refers to using the reported viewport <span style={{color:'red'}}><b><u>w</u></b></span>idth.</span><br /> 
        <span className="jsComment">&#47;&#47; You can now apply the result as you see fit as in the expression below.</span><br /> 
        document.getElementById("someElement").style.fontSize = a;<br /><br />
        <span className="jsComment" style={{fontSize:'0.8em'}}>
          &#47;&#47; By default, returns 4.00em on a desktop screen width of 1920px and returns 2.50em on a mobile screen width of 360px  
          and returns the appropriate proportional value for any screen width above, below, or in between.
        </span><br />
      </div>
      
      <div style={{width:'95%', margin:'1% auto 0 auto'}}>    
        <div style={{color:'white', fontSize:'0.85em', fontFamily:'Arial Rounded MT Bold'}}>
          The above LR method will likely be your most used LR method. However, there are many options to refine your response return. 
          <Link href="#" style={{textDecoration:'none', color:'blue'}}> Click here </Link>to see all the ways you can tailor your return response.
        </div>
      </div><br /><br /> 
        
     
    
    <table style={{ border:'2px solid black', 
                    borderRadius:'.5em',
                    margin:'0 2.5% 0 2.5%',
                    width:'95%', 
                    lineHeight:'120%', 
                    backgroundColor:'#ccffcc', 
                    fontFamily:'Arial Rounded MT Bold',
                    padding:'0 0.5% 1.0% 0.5%'}}>
        <tr>
          <th colspan="2" style={{fontSize:'2em', padding:'1%'}} >
            LR methods returning CSS values
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
          <td colspan="2" style={{textAlign:'left', padding:'1%'}}>
            <span style={{color:'red', fontSize:'1.5em'}}><b>*</b></span>
            <Link to="#" style={{textDecoration:'none'}}>
              lr.w(args) will likely be your most used LR method.<br />
              Select this link for an in depth discussion and explanation about using these methods
            </Link>
          </td>
        </tr>
        <tr>
          <td colspan="2" style={{textAlign:'left', padding:'1%'}}>
            <sup style={{color:'red', fontSize:'1.5em'}}><b>**</b></sup><a href="#">About device, window, and viewport widths and their differences.</a>
          </td>
        </tr>
      </table>
      <br /><br />
      
      <table style={{ border:'2px solid black', 
                    borderRadius:'.5em',
                    margin:'0 2.5% 0 2.5%',
                    width:'95%', 
                    lineHeight:'120%', 
                    backgroundColor:'lightcyan', 
                    fontFamily:'Arial Rounded MT Bold',
                    padding:'0 0.5% 1.0% 0.5%'}}>
        <tr>
          <th colspan="2" style={{fontSize:'2em', padding:'1%'}}>
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
          <td style={{padding:'2% 1% 2% 1%', verticalAlign:'top', fontSize:'1.5em', fontFamily:'monospace'}}>
            <a href="#" style={{textDecoration:'none'}}><b>lr.wwhtml(args)<span style={{lineHeight:'150%'}}><br /></span>lr.wwcss(args)</b></a>
          </td>
          <td style={{padding:'1%', verticalAlign:'top'}}>
            Uses the reported window<sup style={{color:'red'}}><b>*</b></sup> width to establish the proper HTML or CSS snippet return
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
            <a href="#" style={{textDecoration:'none'}}><b>lr.whhtml(args)<span style={{lineHeight:'150%'}}><br /></span>lr.whcss(args)</b></a>
          </td>
          <td style={{padding:'2% 1% 2% 1%', verticalAlign:'top'}}>
            Uses the reported window<sup style={{color:'red'}}><b>*</b></sup> height to establish the proper HTML or CSS snippet return
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
          <td style={{width:'12%', padding:'1%', fontSize:'1.5em', fontFamily:'monospace'}}>
            <a href="#" style={{textDecoration:'none'}}><b>lr.wrhtml(args)<span style={{lineHeight:'150%'}}><br /></span>lr.wrcss(args)</b></a>
          </td>
          <td style={{padding:'2% 1% 2% 1%', verticalAlign:'top'}}>
            Uses the reported window<sup style={{color:'red'}}><b>*</b></sup> height/width ratio to establish the proper HTML or CSS snippet return
          </td>
        </tr>  
        <tr>
          <td colspan="2" style={{textAlign:'center'}}>
            <sup style={{color:'red', fontSize:'1.5em'}}><b>*</b></sup><a href="#">About device, window, and viewport widths</a>
          </td>
        </tr>
      </table>
    
    </div> 
    
      
    </React.StrictMode>          
          
);
};

export default Examples;