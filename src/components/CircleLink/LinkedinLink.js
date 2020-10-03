import React from 'react';

import "./style.css";
import Linkedinlogo from '../../utils/img/linkedinlogo.png';
export const LinkedinLink = () =>{

    return(
<div className="circleLink">
<a href='https://www.linkedin.com/in/carlos-jeremy' target='blank'>
<img className='img' src={Linkedinlogo} alt='Link Logo'></img>
</a>
</div>

    )


   
    
}