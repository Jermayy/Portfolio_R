import React from 'react';
import {LinkedinLink } from '../CircleLink/LinkedinLink';
import { GithubLink } from '../CircleLink/GithubLink';
import { PortfolioLink } from '../CircleLink/PortfolioLink';
import "../Footer/style.css";


export const Footer = () =>{

    return(
<div className="footer">
 <div className='linkGroup'> 
  <LinkedinLink></LinkedinLink>
  <GithubLink></GithubLink>
  <PortfolioLink></PortfolioLink>
  
  </div>
</div>

    )


   
    
}