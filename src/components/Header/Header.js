import React from 'react';
import Headshot from '../../utils/img/jeremy_headshot.jpg';
import "../Header/style.css";

export const Header = () =>{

    return(
<div className="jumbotron jumbotron-fluid">
  
    <div className="container" id='headerContainer'>
        <img className='headerElements' alt='headshot' src={Headshot}/>
         <div className='headerElements'> 
            <h1 className="text "id='name'>Jeremy Carlos</h1>
            <p className="text " id='title'>Full Stack Developer</p>  
         </div>
         <button type="button" className="btn btn-primary btn-lg headerElements" id='contactBtn'>Contact Me</button>
    </div>
</div>

    )


   
    
}