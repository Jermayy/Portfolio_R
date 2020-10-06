import React from 'react';

import "./style.css";
import Briefcase from '../../utils/img/briefcase.png';
export const PortfolioLink = () =>{
 
    return(
<div className="circleLink">
<a href='/portfolio'><img className='img' src={Briefcase} alt='Link Logo'></img></a>
</div>

    )


   
    
}