import React from 'react';
import { CircleLink } from '../CircleLink/CircleLink';
import "../Footer/style.css";

export const Footer = () =>{

    return(
<div className="footer">
 <div className='linkGroup'> 
  <CircleLink className='link'></CircleLink>
  <CircleLink className='link'></CircleLink>
  <CircleLink className='link'></CircleLink>
  </div>
</div>

    )


   
    
}