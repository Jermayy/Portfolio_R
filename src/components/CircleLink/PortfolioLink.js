import React from 'react';
import {Link} from 'react-router-dom'
import "./style.css";
import Briefcase from '../../utils/img/briefcase.png';
export const PortfolioLink = () =>{
 
    return(
<div className="circleLink">
<Link to='/portfolio'><img className='img' src={Briefcase} alt='Link Logo'></img></Link>
</div>

    )


   
    
}