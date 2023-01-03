import React from 'react';
import './Help.css';
import { Outlet, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import {lr} from '../lr/lr-single.js';


function Help(){
  
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
  
  
      <h1 style={{color:'white', textAlign:'center'}} >Table of Contents</h1> 
      <div style={{padding:'0 10%', textAlign:'center', color:'white', fontSize:'1.5em'}}>
         Select the links below to find what you are looking for.
      </div><br />

      <div style={{marginLeft:'2%'}} > 
      <span style={{color:'black', fontSize:'1.25em'}}>Defaults, Setters, Getters</span><br />
          LR comes with default settings that by in large will be all you need. It also allows you to set your own values for more advanced uses. 
          Select among the response values for more information.
          <ul>
            <li style={{margin:'0.75% 0'}}>
              <HashLink className="button" to="/default#" style={{padding:'0.25% 0'}}>&nbsp;Default response values&nbsp;</HashLink>
            </li>
            <li style={{margin:'0.75% 0'}}>
              <HashLink className="button" to="/default#lrSetters" style={{padding:'0.25% 0'}}>&nbsp;Setting LR response values&nbsp;</HashLink>
            </li>
            <li style={{margin:'0.75% 0'}}>
              <HashLink className="button" to="/default#lrWindowSetters" style={{padding:'0.25% 0'}}>&nbsp;Setting LR window values&nbsp;</HashLink>
            </li>
            <li style={{margin:'0.75% 0'}}>
              <HashLink className="button" to="/default#lrPropertyGetters" style={{padding:'0.25% 0'}}>&nbsp;Getting LR property values&nbsp;</HashLink>
              
            </li>
          </ul>
      </div><br />
      <div style={{marginLeft:'2%'}} > 
          <span style={{color:'black', fontSize:'1.25em'}}>Methods</span><br />
          <ul>
            <li style={{margin:'0.75% 0'}}>
              <HashLink className="button" to="/default#" style={{padding:'0.25% 0'}}>&nbsp;Returning CSS response values&nbsp;</HashLink>
            </li>
            <li style={{margin:'0.75% 0'}}>
              <HashLink className="button" to="/default#" style={{padding:'0.25% 0'}}>&nbsp;Returning HTML Snippets&nbsp;</HashLink>
            </li>
            <li style={{margin:'0.75% 0'}}>
              <HashLink className="button" to="/default#" style={{padding:'0.25% 0'}}>&nbsp;Getting CSS Snippets&nbsp;</HashLink>
              
            </li>
          </ul>
      </div>
      <div style={{marginLeft:'2%'}} > 
          Examples 
          <ul>
            <li style={{margin:'0.75% 0'}}>
              <HashLink className="button" to="/default#" style={{padding:'0.25% 0'}}>&nbsp;Response value examples&nbsp;</HashLink>
            </li>
            <li style={{margin:'0.75% 0'}}>
              <HashLink className="button" to="/default#" style={{padding:'0.25% 0'}}>&nbsp;HTML Snippet examples&nbsp;</HashLink>
            </li>
            <li style={{margin:'0.75% 0'}}>
              <HashLink className="button" to="/default#" style={{padding:'0.25% 0'}}>&nbsp;CSS Snippets examples&nbsp;</HashLink>
              
            </li>
          </ul>
      </div>
      <div style={{marginLeft:'2%'}} > 
          How LR Works 
          <ul>
            <li style={{margin:'0.75% 0'}}>
              <HashLink className="button" to="/default#" style={{padding:'0.25% 0'}}>&nbsp;Slope Y-intercept equation&nbsp;</HashLink>
            </li>
            <li style={{margin:'0.75% 0'}}>
              <HashLink className="button" to="/default#" style={{padding:'0.25% 0'}}>&nbsp;Detailed example&nbsp;</HashLink>
            </li>
          </ul>
      </div>
      <div style={{marginLeft:'2%'}} > 
          Getting Started 
          <ul>
            <li style={{margin:'0.75% 0'}}>
              <HashLink className="button" to="/default#" style={{padding:'0.25% 0'}}>&nbsp;Slope Y-intercept equation&nbsp;</HashLink>
            </li>
            <li style={{margin:'0.75% 0'}}>
              <HashLink className="button" to="/default#" style={{padding:'0.25% 0'}}>&nbsp;Detailed example&nbsp;</HashLink>
            </li>
          </ul>
      </div>
      
      <div> Help </div>
      
      
      
      
      <ul>
          <li>
            item

          </li>
      </ul>

  
  </div>
  </React.StrictMode> 
  );};

export default Help;