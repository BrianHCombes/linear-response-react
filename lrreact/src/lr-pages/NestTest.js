import React from 'react';
//import './Welcome.css';
import { Outlet, Link } from 'react-router-dom';
//import titleBanner01 from '../images/lr-title-banner_01.jpg';
//import titleBanner02 from '../images/lr-title-banner_02.jpg';
import {lr} from '../lr/lr-single.js';

function NestTest(){
  
  return ( 
          
    <React.StrictMode>      
      <div  className="" 
            id="titling" 
            style={{
                    width: lr.w("%",65,98), 
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
              Welcome to NestTest
          </div>    
         
        </div>  
        
        
        
        
        
        
      </div>  
      <div style={{textAlign:'center'}}><br /><br />
          <Link to="/nestTest/nestPage1"><button>Method Example lr.w</button></Link>&nbsp;&nbsp;&nbsp;
          
            
          <Link to="/nestTest/nestPage2"><button>Method Example Page 2</button></Link>&nbsp;&nbsp;&nbsp;
          
            
          <Link to="/nestTest/nestPage3"><button>Method Example Page 3</button></Link>
          
          <div style={{color:"blue"}}><Outlet /></div>
      </div>    
      
     
      
      
      
    </React.StrictMode>
    
    
  );
};

export default NestTest;