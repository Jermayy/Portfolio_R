import React from 'react';
import img from '../../utils/img/jeremy_headshot.jpg'
import './PortfolioCard.css'



export const PortfolioCard = ({image, name, appLink, githubLink, description}) =>{

    return (
     
          <div className="card col-sm-10 mx-auto" id='portfolioCard'>
          
        <span className='row'> 
            <div className="card-body" id='cardBody'>
                <ul id='portLink'>
                    <li > <a href={appLink} target='blank' id='appName'>{name}</a></li>
                    <li><a href={githubLink} target='blank'>Github Repo</a></li>
                  </ul>
            <p>{description}</p>
          </div>
        </span>  
            <img alt={name} src= {image} id='thumbnail'/>
          </div>

        
    )
}