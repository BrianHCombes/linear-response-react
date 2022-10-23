import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
         
    <div style={{textAlign:"center"}}> 
    
          <br /><br /><br /><br /><br /><br />
      
          <div>
          <Link to="/"><button>Welcome</button></Link>
          &nbsp;&nbsp;&nbsp;
          <Link to="/methods"><button>Methods</button></Link>
          &nbsp;&nbsp;&nbsp;
          <Link to="/explained"><button>Explained</button></Link>
          </div>
            
          
        
        
      <Outlet />
    </div>
  );
  
};

export default Layout;