import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
         
    <div style={{textAlign:"center"}}> 
    
          <br /><br /><br /><br /><br /><br />
      
          <div>
          <Link to="/"><button>Welcome</button></Link>
          <br /><br />
          </div>
            
          
        
        
      <Outlet />
    </div>
  );
  
};

export default Layout;