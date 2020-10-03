import React from 'react';

import "./style.css";
import Github from '../../utils/img/github-logo.png'
export const GithubLink = () =>{

    return(
<div className="circleLink">
<a href='https://github.com/Jermayy' target='blank'>
<img className='img' src={Github} alt='Link Logo'></img>
</a>
</div>


    )


   
    
}