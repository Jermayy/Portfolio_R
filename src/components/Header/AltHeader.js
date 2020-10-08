import React from 'react';
import './style.css'
import {Link} from 'react-router-dom'
export const AltHeader = () =>{

return(
<div>
<nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <Link className="navbar-brand" to="/" id='nameLink'>Jeremy Carlos</Link>
    </div>
    
    
  </div>
</nav>
</div>
)

}
